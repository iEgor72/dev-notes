const cssPageData = {
  badge: "CSS",
  title: "Шпаргалка по CSS",
  subtitle:
    "Практический CSS без воды: поток документа, отступы, flex/grid, позиционирование и типичные баги, которые появляются в реальной верстке.",
  toc: [
    { id: "box-model", label: "Box model и размеры" },
    { id: "margin-collapse", label: "Схлопывание margin" },
    { id: "display-flow", label: "Поток и display" },
    { id: "position", label: "position и stacking" },
    { id: "flexbox", label: "Flex: родитель и дети" },
    { id: "grid", label: "Grid без магии" },
    { id: "responsive", label: "Адаптивность" },
    { id: "css-pitfalls", label: "Частые грабли" },
    { id: "css-checklist", label: "Проверка перед коммитом" },
  ],
  sections: [
    {
      id: "box-model",
      title: "Box model и размеры",
      blocks: [
        {
          type: "code",
          content: `*,
*::before,
*::after {
  box-sizing: border-box;
}

.card {
  width: 320px;
  padding: 16px;
  border: 1px solid #d1d5db;
}`,
        },
        {
          type: "note",
          content:
            "С <code>border-box</code> итоговая ширина элемента предсказуема: padding и border входят в заданный <code>width</code>.",
        },
      ],
    },
    {
      id: "margin-collapse",
      title: "Схлопывание margin",
      blocks: [
        {
          type: "text",
          content:
            "Вертикальные <code>margin</code> у соседних блоков и у первого/последнего ребенка могут схлопываться в один отступ.",
        },
        {
          type: "code",
          content: `.parent {
  /* один из способов отключить схлопывание */
  padding-top: 1px;
}

.child {
  margin-top: 24px;
}`,
        },
        {
          type: "table",
          caption: "Как избежать неожиданного схлопывания",
          columns: ["Прием", "Когда применять"],
          rows: [
            [
              "Добавить <code>padding</code> или <code>border</code> родителю",
              "Нужен визуальный внутренний отступ контейнера",
            ],
            [
              "Сделать родителю <code>display: flow-root</code>",
              "Нужно изолировать форматирование без лишних оберток",
            ],
            [
              "Использовать <code>display: flex</code>/<code>grid</code>",
              "Когда родитель уже является flex/grid контейнером",
            ],
          ],
        },
      ],
    },
    {
      id: "display-flow",
      title: "Поток и display",
      blocks: [
        {
          type: "list",
          items: [
            "<code>block</code> занимает всю доступную ширину",
            "<code>inline</code> не принимает <code>width/height</code>",
            "<code>inline-block</code> стоит в строке, но поддерживает размеры",
            "<code>none</code> полностью убирает элемент из потока",
          ],
        },
        {
          type: "note",
          content:
            "Перед переходом к <code>position</code>/<code>z-index</code> всегда проверь, как элемент участвует в обычном потоке.",
        },
      ],
    },
    {
      id: "position",
      title: "position и stacking",
      blocks: [
        {
          type: "code",
          content: `.modal {
  position: fixed;
  inset: 0;
  z-index: 1000;
}

.tooltip {
  position: absolute;
  z-index: 10;
}`,
        },
        {
          type: "list",
          items: [
            "<code>absolute</code> позиционируется относительно ближайшего positioned-родителя",
            "<code>fixed</code> привязан к viewport",
            "<code>z-index</code> работает предсказуемо только в контексте stacking context",
          ],
        },
      ],
    },
    {
      id: "flexbox",
      title: "Flex: родитель и дети",
      blocks: [
        {
          type: "subtitle",
          content: "Родитель (контейнер) управляет осью и распределением",
        },
        {
          type: "code",
          content: `.row {
  display: flex;
  gap: 16px;
  justify-content: space-between;
  align-items: center;
}`,
        },
        {
          type: "subtitle",
          content: "Дети (items) управляют своим ростом и сжатием",
        },
        {
          type: "code",
          content: `.sidebar {
  flex: 0 0 240px;
}

.content {
  flex: 1 1 auto;
  min-width: 0;
}`,
        },
        {
          type: "table",
          caption: "Практичные правила для flex",
          columns: ["Ситуация", "Что поставить"],
          rows: [
            [
              "Текст в колонке не сжимается и ломает layout",
              "Добавить <code>min-width: 0</code> flex-элементу",
            ],
            [
              "Нужны одинаковые карточки по ширине",
              "Использовать <code>flex: 1</code> у карточек",
            ],
            [
              "Нужно отступы между элементами",
              "Использовать <code>gap</code>, а не margin-хаки",
            ],
          ],
        },
      ],
    },
    {
      id: "grid",
      title: "Grid без магии",
      blocks: [
        {
          type: "code",
          content: `.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 16px;
}`,
        },
        {
          type: "note",
          content:
            "Grid хорош для двухмерных раскладок (и строки, и колонки). Flex обычно лучше для одноосевых задач.",
        },
      ],
    },
    {
      id: "responsive",
      title: "Адаптивность",
      blocks: [
        {
          type: "list",
          items: [
            "Строй макет от мобильного к десктопу (mobile-first)",
            "Размеры текста и отступов лучше задавать через <code>rem</code>",
            "Для ширины блоков чаще подходят <code>minmax</code>, <code>clamp</code>, <code>%</code>, <code>fr</code>",
            "Проверяй переполнение: длинные слова, таблицы, кнопки, инпуты",
          ],
        },
      ],
    },
    {
      id: "css-pitfalls",
      title: "Частые грабли",
      blocks: [
        {
          type: "table",
          caption: "Что чаще всего ломает поддержку CSS",
          columns: ["Ошибка", "Почему больно", "Как лучше"],
          rows: [
            [
              "Пытаться чинить всё через <code>!important</code>",
              "Растет хаос в каскаде и специфичности",
              "Упростить селекторы и порядок подключения стилей",
            ],
            [
              "Ставить фиксированные ширины/высоты везде",
              "Интерфейс ломается на других экранах",
              "Использовать гибкие единицы и ограничения <code>min/max</code>",
            ],
            [
              "Игнорировать схлопывание margin",
              "Отступы «живут своей жизнью»",
              "Изолировать контейнер или перейти на gap/flex/grid",
            ],
            [
              "Забывать про <code>min-width: 0</code> во flex",
              "Контент выталкивает соседние блоки",
              "Явно разрешить сжатие проблемному item",
            ],
          ],
        },
      ],
    },
    {
      id: "css-checklist",
      title: "Проверка перед коммитом",
      blocks: [
        {
          type: "list",
          items: [
            "Глобально включен <code>box-sizing: border-box</code>",
            "Отступы между соседями сделаны через <code>gap</code> там, где возможно",
            "Проверено поведение отступов по вертикали (margin collapse)",
            "Во flex-контейнерах критичным элементам выставлен <code>min-width: 0</code>",
            "Макет не ломается на узком экране и при длинном контенте",
          ],
        },
      ],
    },
  ],
};

export default cssPageData;
