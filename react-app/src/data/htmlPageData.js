const htmlPageData = {
  badge: "HTML",
  title: "Шпаргалка по HTML",
  subtitle:
    "Только рабочий минимум по HTML: семантика, формы, доступность и типичные ошибки, которые чаще всего всплывают в проектах.",
  toc: [
    { id: "semantics", label: "Семантика без перегруза" },
    { id: "headings", label: "Заголовки и структура" },
    { id: "forms", label: "Формы, которые не ломаются" },
    { id: "tables", label: "Таблицы без боли" },
    { id: "links-buttons", label: "Ссылка vs кнопка" },
    { id: "media", label: "Изображения и медиа" },
    { id: "a11y", label: "Базовая доступность" },
    { id: "html-pitfalls", label: "Частые грабли" },
    { id: "html-checklist", label: "Проверка перед коммитом" },
  ],
  sections: [
    {
      id: "semantics",
      title: "Семантика без перегруза",
      blocks: [
        {
          type: "text",
          content:
            "Семантика нужна не ради красоты: она помогает навигации, доступности, SEO и поддержке кода в команде.",
        },
        {
          type: "code",
          content: `<header>...</header>
<main>
  <article>
    <h1>Заголовок материала</h1>
    <section>...</section>
  </article>
</main>
<footer>...</footer>`,
        },
        {
          type: "note",
          content:
            "Используй <code>div</code> как технический контейнер, а не как замену всем смысловым тегам.",
        },
      ],
    },
    {
      id: "headings",
      title: "Заголовки и структура",
      blocks: [
        {
          type: "text",
          content:
            "Заголовки строят иерархию документа. Они не про размер текста, а про смысл разделов.",
        },
        {
          type: "code",
          content: `<main>
  <h1>Документация проекта</h1>
  <section>
    <h2>Быстрый старт</h2>
    <h3>Установка зависимостей</h3>
  </section>
</main>`,
        },
        {
          type: "note",
          content:
            "⚠️ Не пропускай уровни заголовков без причины: это усложняет навигацию для скринридеров.",
        },
        {
          type: "table",
          caption: "Практические правила заголовков",
          columns: ["Ситуация", "Как лучше"],
          rows: [
            ["Главная тема страницы", "Один <code>h1</code> на страницу"],
            ["Подраздел в секции", "Использовать <code>h2</code>/<code>h3</code> по вложенности"],
            ["Нужен просто крупный текст", "Стилизовать через CSS, не ломая уровень заголовка"],
          ],
        },
      ],
    },
    {
      id: "forms",
      title: "Формы, которые не ломаются",
      blocks: [
        {
          type: "text",
          content:
            "Хорошая форма начинается с корректной HTML-разметки: связанные label, правильные type и явный submit.",
        },
        {
          type: "code",
          content: `<form>
  <label for="email">Email</label>
  <input id="email" name="email" type="email" autocomplete="email" required />

  <button type="submit">Отправить</button>
</form>`,
        },
        {
          type: "list",
          items: [
            "Всегда связывай <code>label</code> и <code>input</code> через <code>for/id</code>",
            "У <code>button</code> внутри формы явно ставь <code>type</code>",
            "Используй нативные типы (<code>email</code>, <code>tel</code>, <code>number</code>), чтобы получить встроенную валидацию",
          ],
        },
        {
          type: "note",
          content:
            "Без <code>type</code> кнопка в форме по умолчанию ведет себя как <code>submit</code> — это частый источник случайных отправок.",
        },
        {
          type: "html-forms-playground",
        },
      ],
    },
    {
      id: "tables",
      title: "Таблицы без боли",
      blocks: [
        {
          type: "text",
          content:
            "Таблицы полезны для данных с колонками. Для читаемости добавляй заголовки, caption и семантические теги <code>thead</code>/<code>tbody</code>.",
        },
        {
          type: "code",
          content: `<table>
  <caption>План спринта</caption>
  <thead>
    <tr>
      <th scope="col">Задача</th>
      <th scope="col">Статус</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Верстка формы</td>
      <td>In progress</td>
    </tr>
  </tbody>
</table>`,
        },
        {
          type: "note",
          content:
            "💡 Если таблица используется только для layout, лучше перейти на CSS Grid/Flex и оставить таблицы для данных.",
        },
        {
          type: "html-tables-playground",
        },
      ],
    },
    {
      id: "links-buttons",
      title: "Ссылка vs кнопка",
      blocks: [
        {
          type: "text",
          content:
            "Главное правило: ссылка ведет по URL, кнопка выполняет действие на текущей странице.",
        },
        {
          type: "table",
          caption: "Когда использовать правильный элемент",
          columns: ["Нужно сделать", "Элемент"],
          rows: [
            ["Перейти на другую страницу/URL", "<code>&lt;a href=...&gt;</code>"],
            ["Открыть модалку, таб, меню, отправить форму", "<code>&lt;button&gt;</code>"],
          ],
        },
        {
          type: "code",
          content: `<!-- правильно -->
<a href="/profile">Профиль</a>
<button type="button">Открыть фильтры</button>`,
        },
        {
          type: "note",
          content:
            "⚠️ Не вешай JavaScript-действия на <code>a href=\"#\"</code> — это ломает семантику и навигацию.",
        },
      ],
    },
    {
      id: "media",
      title: "Изображения и медиа",
      blocks: [
        {
          type: "text",
          content:
            "Для изображений важны не только размеры и оптимизация, но и смысловой <code>alt</code> для доступности.",
        },
        {
          type: "code",
          content: `<img
  src="/images/card.jpg"
  alt="Превью товара"
  width="640"
  height="360"
  loading="lazy"
/>`,
        },
        {
          type: "list",
          items: [
            "<code>alt</code> обязателен: описание смысла изображения, а не файла",
            "Указывай <code>width/height</code>, чтобы уменьшить layout shift",
            "<code>loading=\"lazy\"</code> полезен для контента ниже первого экрана",
          ],
        },
        {
          type: "note",
          content:
            "💡 Декоративным изображениям ставь <code>alt=\"\"</code>, чтобы скринридер пропускал их.",
        },
      ],
    },
    {
      id: "a11y",
      title: "Базовая доступность",
      blocks: [
        {
          type: "text",
          content:
            "Базовая доступность в HTML достигается выбором правильных элементов и корректных атрибутов.",
        },
        {
          type: "code",
          content: `<button type="button" aria-label="Закрыть диалог">
  <svg aria-hidden="true">...</svg>
</button>`,
        },
        {
          type: "list",
          items: [
            "Документ начинается с корректного <code>lang</code> на <code>html</code>",
            "Интерактив должен быть доступен с клавиатуры",
            "Не скрывай фокус-рамку без альтернативы",
            "Для иконок-кнопок добавляй понятное текстовое имя (например, <code>aria-label</code>)",
          ],
        },
        {
          type: "note",
          content:
            "Большинство проблем доступности решается выбором правильных HTML-элементов еще до написания CSS/JS.",
        },
      ],
    },
    {
      id: "html-pitfalls",
      title: "Частые грабли",
      blocks: [
        {
          type: "text",
          content:
            "Большая часть HTML-ошибок связана с потерей смысла: неправильные элементы, отсутствующие подписи и нарушенная иерархия.",
        },
        {
          type: "code",
          content: `<!-- плохо -->
<div onclick="submitForm()">Сохранить</div>

<!-- лучше -->
<button type="submit">Сохранить</button>`,
        },
        {
          type: "note",
          content:
            "⚠️ Семантическая разметка окупается сразу: меньше багов в UX, SEO и доступности.",
        },
        {
          type: "table",
          caption: "Ошибки, которые чаще всего мешают в работе",
          columns: ["Ошибка", "Почему больно", "Как лучше"],
          rows: [
            [
              "Везде использовать только <code>div</code>",
              "Падает читаемость и доступность",
              "Брать семантические теги по смыслу блока",
            ],
            [
              "Стилизовать ссылку как кнопку для действий",
              "Ломается семантика и поведение",
              "Для действий использовать <code>button</code>",
            ],
            [
              "Пропускать <code>alt</code> и <code>label</code>",
              "Падает UX и a11y",
              "Добавлять атрибуты сразу в разметке",
            ],
            [
              "Несколько <code>h1</code> без причины",
              "Путается структура документа",
              "Строить иерархию заголовков по разделам",
            ],
          ],
        },
      ],
    },
    {
      id: "html-checklist",
      title: "Проверка перед коммитом",
      blocks: [
        {
          type: "text",
          content:
            "Короткий чек перед коммитом помогает поймать ошибки разметки до ревью и тестирования.",
        },
        {
          type: "code",
          content: `<!-- минимальная основа страницы -->
<html lang="ru">
  <body>
    <main>...</main>
  </body>
</html>`,
        },
        {
          type: "note",
          content:
            "💡 Проверяй HTML в DevTools Lighthouse: базовые ошибки a11y видно сразу.",
        },
        {
          type: "list",
          items: [
            "Есть семантические зоны страницы: <code>header</code>, <code>main</code>, <code>footer</code>",
            "Заголовки идут логично по уровням",
            "Формы имеют <code>label</code>, корректные <code>type</code> и <code>name</code>",
            "У изображений есть <code>alt</code>, а у внешних ссылок с <code>target=\"_blank\"</code> есть <code>rel</code>",
            "Интерактивные элементы доступны с клавиатуры",
          ],
        },
      ],
    },
  ],
};

export default htmlPageData;
