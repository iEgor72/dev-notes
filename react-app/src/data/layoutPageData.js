const layoutPageData = {
  badge: "Layout",
  title: "Layout и построение интерфейсов",
  subtitle:
    "Простыми словами о том, как собирать экран: когда брать Flexbox, когда Grid, и как делать удобный адаптивный layout.",
  toc: [
    { id: "layout-intro", label: "Роль Layout в проекте" },
    { id: "flex-vs-grid", label: "Когда Flexbox, когда Grid" },
    { id: "app-shell", label: "Базовый app shell" },
    { id: "sidebar-content", label: "Sidebar + Content" },
    { id: "cards-grid", label: "Адаптивная сетка карточек" },
    { id: "dashboard-layout", label: "Dashboard layout" },
    { id: "alignment-recipes", label: "Готовые рецепты выравнивания" },
    { id: "responsive-strategy", label: "Стратегия адаптивности" },
    { id: "layout-checklist", label: "Чеклист перед релизом" },
    { id: "layout-mistakes", label: "Частые ошибки" },
    { id: "layout-remember", label: "Что важно запомнить" },
  ],
  sections: [
    {
      id: "layout-intro",
      title: "Роль Layout в проекте",
      blocks: [
        {
          type: "text",
          content:
            "Layout — это схема экрана: где шапка, контент, меню и как всё это ведет себя на разных устройствах.",
        },
        {
          type: "text",
          content:
            "Хороший layout делает интерфейс понятным: пользователь быстро видит, где что находится и куда нажимать.",
        },
        {
          type: "note",
          content:
            "На странице CSS разобраны отдельные свойства. Здесь фокус на композиции: как собирать целые экраны из этих инструментов.",
        },
      ],
    },
    {
      id: "flex-vs-grid",
      title: "Когда Flexbox, когда Grid",
      blocks: [
        {
          type: "text",
          content:
            "Выбор инструмента зависит от задачи: Flexbox лучше для одной оси, Grid — для полноценной сетки из строк и колонок.",
        },
        {
          type: "code",
          content: `.toolbar {
  display: flex;
  justify-content: space-between;
}

.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
}`,
        },
        {
          type: "note",
          content:
            "💡 Комбинировать Grid и Flexbox нормально: Grid для зон, Flex для внутреннего выравнивания.",
        },
        {
          type: "table",
          caption: "Что выбрать в реальной задаче",
          columns: ["Сценарий", "Лучше использовать", "Почему"],
          rows: [
            [
              "Кнопки в строку, меню, тулбар",
              "<code>Flexbox</code>",
              "Одна ось и простое выравнивание",
            ],
            [
              "Карточки в несколько колонок",
              "<code>Grid</code>",
              "Контроль колонок и строк одновременно",
            ],
            [
              "Сайдбар + основной контент",
              "<code>Grid</code> + <code>Flexbox</code>",
              "Grid для зон, Flex для внутреннего выравнивания",
            ],
            [
              "Горизонтальные списки с переносом",
              "<code>Flexbox</code> + <code>wrap</code>",
              "Естественное поведение в одну ось",
            ],
          ],
        },
        {
          type: "layout-decision-playground",
        },
      ],
    },
    {
      id: "app-shell",
      title: "Базовый app shell",
      blocks: [
        {
          type: "text",
          content:
            "App shell — это базовый каркас сайта: шапка, основная часть и подвал.",
        },
        {
          type: "code",
          content: `.app {
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;
}

.main {
  width: min(1180px, 100%);
  margin: 0 auto;
  padding: 24px 16px;
}`,
        },
        {
          type: "note",
          content:
            "⚠️ Не фиксируй высоту main-контента вручную: используй <code>1fr</code>, чтобы блок растягивался естественно.",
        },
      ],
    },
    {
      id: "sidebar-content",
      title: "Sidebar + Content",
      blocks: [
        {
          type: "text",
          content:
            "Частый вариант: слева меню, справа контент. Удобно для документации и личных кабинетов.",
        },
        {
          type: "code",
          content: `.docs-layout {
  display: grid;
  grid-template-columns: 260px 1fr;
  gap: 24px;
}

@media (max-width: 900px) {
  .docs-layout {
    grid-template-columns: 1fr;
  }
}`,
        },
        {
          type: "list",
          items: [
            "На desktop: фиксированная ширина sidebar + гибкий контент",
            "На mobile: переход в одну колонку",
            "Sticky-sidebar включай только если это реально помогает, а не мешает",
          ],
        },
      ],
    },
    {
      id: "cards-grid",
      title: "Адаптивная сетка карточек",
      blocks: [
        {
          type: "text",
          content:
            "Для сеток карточек лучше использовать auto-fit/minmax: так layout сам подстраивается под доступную ширину.",
        },
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
            "💡 С <code>auto-fit + minmax</code> сетка адаптируется без большого количества media queries.",
        },
      ],
    },
    {
      id: "dashboard-layout",
      title: "Dashboard layout",
      blocks: [
        {
          type: "text",
          content:
            "Для dashboard удобно использовать Grid: блоки легко переставлять без ломки всей страницы.",
        },
        {
          type: "code",
          content: `.dashboard {
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  grid-template-areas:
    "stats stats stats stats stats stats activity activity activity activity activity activity"
    "sales sales sales sales sales sales feed feed feed feed feed feed";
}

.stats { grid-area: stats; }
.activity { grid-area: activity; }
.sales { grid-area: sales; }
.feed { grid-area: feed; }`,
        },
        {
          type: "note",
          content:
            "⚠️ Для мобильной версии лучше задать отдельный шаблон областей, иначе блоки могут стать нечитаемыми.",
        },
      ],
    },
    {
      id: "alignment-recipes",
      title: "Готовые рецепты выравнивания",
      blocks: [
        {
          type: "text",
          content:
            "Эти шаблоны помогают быстро решить частые задачи выравнивания без лишней ручной настройки.",
        },
        {
          type: "code",
          content: `.center {
  display: grid;
  place-items: center;
}`,
        },
        {
          type: "note",
          content:
            "💡 Если видишь много однотипных margin-хаки, скорее всего задачу лучше решить через layout-контейнер.",
        },
        {
          type: "table",
          caption: "Полезные layout-рецепты на каждый день",
          columns: ["Задача", "Решение"],
          rows: [
            [
              "Центрировать элемент по обеим осям",
              "<code>display: grid; place-items: center;</code>",
            ],
            [
              "Разнести элементы по краям",
              "<code>display: flex; justify-content: space-between;</code>",
            ],
            [
              "Одинаковые карточки в ряд",
              "<code>grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));</code>",
            ],
            [
              "Вертикальный стек с одинаковыми отступами",
              "<code>display: grid; gap: 16px;</code>",
            ],
          ],
        },
      ],
    },
    {
      id: "responsive-strategy",
      title: "Стратегия адаптивности",
      blocks: [
        {
          type: "text",
          content:
            "Адаптивная стратегия начинается с мобильного сценария и расширяется только по фактическим точкам перелома интерфейса.",
        },
        {
          type: "code",
          content: `@media (max-width: 900px) {
  .docs-layout {
    grid-template-columns: 1fr;
  }
}`,
        },
        {
          type: "list",
          items: [
            "Сначала делай читаемо на мобильном, потом расширяй для больших экранов",
            "Используй гибкие размеры: %, fr, minmax, clamp",
            "Media query добавляй только там, где реально всё ломается",
            "Проверяй не только ширину, но и высоту экрана",
          ],
        },
        {
          type: "note",
          content:
            "Адаптив — это не про «ужать всё», а про то, чтобы на любом экране было удобно читать и нажимать.",
        },
        {
          type: "responsive-playground",
        },
      ],
    },
    {
      id: "layout-checklist",
      title: "Чеклист перед релизом",
      blocks: [
        {
          type: "text",
          content:
            "Этот чеклист сокращает количество «сюрпризов» после релиза и помогает стабилизировать экран на всех устройствах.",
        },
        {
          type: "code",
          content: `.content {
  min-width: 0;
  overflow-wrap: anywhere;
}`,
        },
        {
          type: "note",
          content:
            "⚠️ Всегда проверяй длинные строки и пустые данные: они ломают layout чаще всего.",
        },
        {
          type: "list",
          items: [
            "Проверены ключевые брейкпоинты: mobile, tablet, desktop",
            "Нет горизонтального скролла на типовых экранах",
            "Интерактивные элементы не выходят за контейнеры",
            "Длинные заголовки и текст не ломают сетку",
            "Секции выглядят цельно при пустых/длинных данных",
          ],
        },
      ],
    },
    {
      id: "layout-mistakes",
      title: "Частые ошибки",
      blocks: [
        {
          type: "text",
          content:
            "Ошибки layout обычно проявляются не на идеальном мокапе, а на нестандартных данных и маленьких экранах.",
        },
        {
          type: "code",
          content: `.card-title {
  overflow-wrap: anywhere;
}`,
        },
        {
          type: "note",
          content:
            "💡 Включай проверку layout в definition of done, а не оставляй на финальный QA.",
        },
        {
          type: "table",
          caption: "Типичные ошибки при построении layout",
          columns: ["Ошибка", "Почему плохо", "Как лучше"],
          rows: [
            [
              "Жёстко фиксировать ширины блоков",
              "Layout ломается на других экранах",
              "Использовать гибкие размеры и ограничения через min/max",
            ],
            [
              "Смешивать layout и визуальные стили без структуры",
              "Сложнее поддерживать и расширять",
              "Сначала описывать зоны layout, потом стилизовать их",
            ],
            [
              "Использовать margin вместо системного spacing",
              "Неровные интервалы и каскадные баги",
              "Для групп элементов чаще использовать gap",
            ],
            [
              "Проверять только desktop",
              "Критичные ошибки обнаруживаются слишком поздно",
              "Проверять реальные сценарии на mobile/tablet с начала разработки",
            ],
          ],
        },
      ],
    },
    {
      id: "layout-remember",
      title: "Что важно запомнить",
      blocks: [
        {
          type: "text",
          content:
            "Если держать эти принципы в голове, layout становится предсказуемым и проще в поддержке.",
        },
        {
          type: "code",
          content: `.page {
  display: grid;
  gap: 16px;
}`,
        },
        {
          type: "note",
          content:
            "⚠️ Сначала схема экрана, потом косметика. Иначе придется переделывать структуру позже.",
        },
        {
          type: "list",
          items: [
            "Сначала продумай схему экрана, потом пиши стили",
            "Flexbox — когда одна ось, Grid — когда нужна сетка",
            "Для карточек часто самый простой путь: auto-fit + minmax",
            "Адаптив лучше закладывать сразу, а не в конце",
            "Главный критерий: удобно ли пользователю",
          ],
        },
      ],
    },
  ],
};

export default layoutPageData;