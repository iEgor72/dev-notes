const reactPageData = {
  badge: "React",
  title: "Шпаргалка по React",
  subtitle:
    "React простым языком: как собирать интерфейс из компонентов, управлять состоянием и не запутаться в логике.",
  toc: [
    { id: "what-is-react", label: "Что такое React" },
    { id: "jsx", label: "JSX" },
    { id: "components", label: "Компоненты" },
    { id: "props", label: "Props" },
    { id: "state", label: "State" },
    { id: "events", label: "События" },
    { id: "forms", label: "Формы (controlled components)" },
    { id: "conditional-rendering", label: "Условный рендеринг" },
    { id: "lists", label: "Списки и key" },
    { id: "use-effect", label: "useEffect" },
    { id: "hooks", label: "Hooks" },
    { id: "state-architecture", label: "Архитектура состояния" },
    { id: "react-routing", label: "Роутинг" },
    { id: "react-mistakes", label: "Частые ошибки" },
    { id: "react-remember", label: "Что важно запомнить" },
  ],
  sections: [
    {
      id: "what-is-react",
      title: "Что такое React",
      blocks: [
        {
          type: "text",
          content:
            "React — это способ собирать интерфейс из маленьких частей (компонентов).",
        },
        {
          type: "text",
          content:
            "Главная идея: разбить интерфейс на части и обновлять экран через состояние, а не руками через DOM.",
        },
        {
          type: "note",
          content:
            "React не заменяет HTML, CSS и JavaScript. Он помогает удобнее управлять интерфейсом.",
        },
      ],
    },
    {
      id: "jsx",
      title: "JSX",
      blocks: [
        {
          type: "text",
          content:
            "JSX — это синтаксис, похожий на HTML, который используется внутри JavaScript.",
        },
        {
          type: "code",
          content: `function App() {
  return (
    <div>
      <h1>Hello React</h1>
      <p>Это JSX</p>
    </div>
  );
}`,
        },
        {
          type: "list",
          items: [
            "class в JSX заменяется на className",
            "атрибуты пишутся в camelCase, например onClick",
            "внутри JSX JavaScript вставляется через { }",
          ],
        },
        {
          type: "note",
          content:
            "💡 JSX-подход помогает держать разметку и логику рядом, но вычисления лучше выносить из return-блока.",
        },
      ],
    },
    {
      id: "components",
      title: "Компоненты",
      blocks: [
        {
          type: "text",
          content:
            "Компонент — это функция, которая возвращает JSX.",
        },
        {
          type: "code",
          content: `function Welcome() {
  return <h1>Добро пожаловать</h1>;
}

export default Welcome;`,
        },
        {
          type: "note",
          content:
            "Компоненты в React пишутся с большой буквы.",
        },
      ],
    },
    {
      id: "props",
      title: "Props",
      blocks: [
        {
          type: "text",
          content:
            "Props — это входные параметры компонента. Так родитель передаёт данные ребенку.",
        },
        {
          type: "code",
          content: `function Button({ label }) {
  return <button>{label}</button>;
}

function App() {
  return <Button label="Сохранить" />;
}`,
        },
        {
          type: "note",
          content:
            "⚠️ Props нельзя менять внутри дочернего компонента: они приходят только для чтения.",
        },
      ],
    },
    {
      id: "state",
      title: "State",
      blocks: [
        {
          type: "text",
          content:
            "State — это данные внутри компонента, которые меняются во время работы.",
        },
        {
          type: "code",
          content: `import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      {count}
    </button>
  );
}`,
        },
        {
          type: "note",
          content:
            "Когда state меняется, React обновляет интерфейс автоматически.",
        },
        {
          type: "react-ui-playground",
        },
      ],
    },
    {
      id: "events",
      title: "События",
      blocks: [
        {
          type: "text",
          content:
            "В React события обрабатываются через props вроде onClick, onChange, onSubmit.",
        },
        {
          type: "code",
          content: `function App() {
  const handleClick = () => {
    console.log("Клик");
  };

  return <button onClick={handleClick}>Нажми</button>;
}`,
        },
        {
          type: "note",
          content:
            "💡 Передавай в обработчики функции, а не результат вызова: <code>onClick={handler}</code>, не <code>onClick={handler()}</code>.",
        },
      ],
    },
    {
      id: "forms",
      title: "Формы (controlled components)",
      blocks: [
        {
          type: "text",
          content:
            "В React формы обычно делают управляемыми: значение поля хранится в state, а input получает его через value.",
        },
        {
          type: "code",
          content: `import { useState } from "react";

function SearchForm() {
  const [query, setQuery] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Ищем:", query);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={query} onChange={(e) => setQuery(e.target.value)} />
      <button type="submit">Найти</button>
    </form>
  );
}`,
        },
        {
          type: "note",
          content:
            "⚠️ Controlled-компоненты проще валидировать и синхронизировать с UI-состоянием.",
        },
      ],
    },
    {
      id: "conditional-rendering",
      title: "Условный рендеринг",
      blocks: [
        {
          type: "text",
          content:
            "React позволяет показывать разные части интерфейса в зависимости от условий.",
        },
        {
          type: "code",
          content: `function Status({ isLoggedIn }) {
  return (
    <div>
      {isLoggedIn ? <p>Вы вошли</p> : <p>Гость</p>}
    </div>
  );
}`,
        },
        {
          type: "note",
          content:
            "💡 Для сложных условий используй ранний <code>return</code>, чтобы не перегружать JSX тернарниками.",
        },
      ],
    },
    {
      id: "lists",
      title: "Списки и key",
      blocks: [
        {
          type: "text",
          content:
            "Для вывода списка в React обычно используют map.",
        },
        {
          type: "code",
          content: `const items = ["HTML", "CSS", "React"];

function App() {
  return (
    <ul>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}`,
        },
        {
          type: "note",
          content:
            "key нужен React, чтобы правильно отслеживать элементы списка.",
        },
      ],
    },
    {
      id: "use-effect",
      title: "useEffect",
      blocks: [
        {
          type: "text",
          content:
            "useEffect используют для побочных эффектов: запросов, подписок, таймеров, работы с document и window.",
        },
        {
          type: "code",
          content: `import { useEffect } from "react";

function App() {
  useEffect(() => {
    document.title = "React page";
  }, []);

  return <div>Контент</div>;
}`,
        },
        {
          type: "note",
          content:
            "⚠️ Следи за массивом зависимостей: пропущенные зависимости дают устаревшие значения и баги.",
        },
      ],
    },
    {
      id: "hooks",
      title: "Hooks",
      blocks: [
        {
          type: "text",
          content:
            "Hooks — это специальные функции React, которые позволяют использовать state и другую логику в функциональных компонентах.",
        },
        {
          type: "list",
          items: [
            "useState — состояние",
            "useEffect — побочные эффекты",
            "useMemo — мемоизация вычислений",
            "useCallback — мемоизация функций",
            "useRef — ссылка на DOM или сохранение значения",
          ],
        },
        {
          type: "code",
          content: `function Counter() {
  const [count, setCount] = useState(0);
  const doubled = useMemo(() => count * 2, [count]);

  return <button onClick={() => setCount((v) => v + 1)}>{doubled}</button>;
}`,
        },
        {
          type: "note",
          content:
            "⚠️ Hooks вызываются только на верхнем уровне компонента, не внутри условий и циклов.",
        },
      ],
    },
    {
      id: "state-architecture",
      title: "Архитектура состояния",
      blocks: [
        {
          type: "text",
          content:
            "Чтобы не утонуть в проекте, держи state там, где он нужен: локальный — внутри компонента, общий — выше по дереву.",
        },
        {
          type: "list",
          items: [
            "Локальный UI-state: модалки, инпуты, раскрытия",
            "Общий state: данные, которые нужны нескольким компонентам",
            "Не дублируй одно и то же состояние в разных местах",
            "Производные значения лучше вычислять, а не хранить отдельно",
          ],
        },
        {
          type: "note",
          content:
            "Если state становится сложным, подумай о useReducer или вынесении логики в кастомный hook.",
        },
      ],
    },
    {
      id: "react-routing",
      title: "Роутинг",
      blocks: [
        {
          type: "text",
          content:
            "В React SPA-переходы между страницами обычно делают через react-router-dom.",
        },
        {
          type: "code",
          content: `import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/react" element={<ReactPage />} />
    </Routes>
  );
}`,
        },
        {
          type: "note",
          content:
            "💡 Для переходов внутри SPA используй <code>Link</code>, а не обычный <code>a</code>, чтобы не перезагружать страницу.",
        },
      ],
    },
    {
      id: "react-mistakes",
      title: "Частые ошибки",
      blocks: [
        {
          type: "text",
          content:
            "Ошибки в React чаще всего связаны с управлением состоянием и чрезмерной сложностью компонентов.",
        },
        {
          type: "code",
          content: `// плохо
state.items.push(newItem);

// лучше
setItems((prev) => [...prev, newItem]);`,
        },
        {
          type: "note",
          content:
            "⚠️ Избегай мутаций: React ожидает новые ссылки для корректного рендера.",
        },
        {
          type: "table",
          caption: "Типичные ошибки в React",
          columns: ["Ошибка", "Почему плохо", "Как лучше"],
          rows: [
            [
              "Мутировать state напрямую",
              "React может не увидеть изменение",
              "Использовать setState / setCount / новые объекты и массивы",
            ],
            [
              "Не добавлять <code>key</code> в списках",
              "Появляются проблемы с обновлением элементов",
              "Всегда задавать стабильный key",
            ],
            [
              "Складывать всё в один компонент",
              "Код становится тяжёлым для поддержки",
              "Разбивать интерфейс на маленькие компоненты",
            ],
            [
              "Делать слишком много логики прямо в JSX",
              "Падает читаемость",
              "Выносить вычисления в переменные или hooks",
            ],
          ],
        },
      ],
    },
    {
      id: "react-remember",
      title: "Что важно запомнить",
      blocks: [
        {
          type: "text",
          content:
            "Эти ориентиры помогают держать React-код чистым и масштабируемым по мере роста проекта.",
        },
        {
          type: "code",
          content: `const next = useMemo(() => items.filter(Boolean), [items]);`,
        },
        {
          type: "note",
          content:
            "💡 Если компонент сложно объяснить в двух фразах, возможно, его пора разбить на части.",
        },
        {
          type: "list",
          items: [
            "Думай компонентами, а не страницей целиком",
            "Props — вход, state — то, что меняется",
            "Сложную логику выноси из JSX",
            "Формы обычно удобнее делать controlled",
            "Чем чище структура, тем легче развивать проект",
          ],
        },
      ],
    },
  ],
};

export default reactPageData;