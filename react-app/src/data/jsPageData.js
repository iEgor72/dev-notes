const jsPageData = {
  badge: "JavaScript",
  title: "Шпаргалка по JavaScript",
  subtitle:
    "JavaScript простым языком: переменные, функции, массивы, объекты, события и асинхронный код без лишней теории.",
  toc: [
    { id: "what-is-js", label: "Что такое JavaScript" },
    { id: "variables", label: "Переменные" },
    { id: "data-types", label: "Типы данных" },
    { id: "conditions", label: "Условия" },
    { id: "loops", label: "Циклы" },
    { id: "functions", label: "Функции" },
    { id: "scope-closures", label: "Scope и замыкания" },
    { id: "arrays", label: "Массивы" },
    { id: "objects", label: "Объекты" },
    { id: "dom", label: "DOM" },
    { id: "events", label: "События" },
    { id: "async-await", label: "Async / Await" },
    { id: "js-mistakes", label: "Частые ошибки" },
    { id: "js-remember", label: "Что важно запомнить" },
  ],
  sections: [
    {
      id: "what-is-js",
      title: "Что такое JavaScript",
      blocks: [
        {
          type: "text",
          content:
            "JavaScript делает страницу «живой»: кнопки нажимаются, данные меняются, блоки появляются и исчезают.",
        },
        {
          type: "text",
          content:
            "HTML отвечает за структуру, CSS — за внешний вид, а JavaScript — за логику и реакцию на действия пользователя.",
        },
        {
          type: "note",
          content:
            "JavaScript используется не только в браузере, но и на сервере, например через Node.js.",
        },
      ],
    },
    {
      id: "variables",
      title: "Переменные",
      blocks: [
        {
          type: "text",
          content:
            "Переменные хранят данные. В современном коде почти всегда используют const и let.",
        },
        {
          type: "code",
          content: `const siteName = "Developer Notes";
let currentSection = "JavaScript";

currentSection = "React";`,
        },
        {
          type: "list",
          items: [
            "const — когда значение не будет переназначаться",
            "let — когда значение может измениться",
            "var — старый способ, обычно лучше избегать",
          ],
        },
      ],
    },
    {
      id: "data-types",
      title: "Типы данных",
      blocks: [
        {
          type: "text",
          content:
            "Тип данных определяет, какие операции безопасно выполнять со значением и как оно ведет себя в вычислениях.",
        },
        {
          type: "table",
          caption: "Основные типы данных в JavaScript",
          columns: ["Тип", "Пример", "Описание"],
          rows: [
            ["<code>string</code>", '<code>"hello"</code>', "Строка"],
            ["<code>number</code>", "<code>42</code>", "Число"],
            ["<code>boolean</code>", "<code>true</code>", "Логическое значение"],
            ["<code>null</code>", "<code>null</code>", "Специальное пустое значение"],
            ["<code>undefined</code>", "<code>undefined</code>", "Значение не задано"],
            ["<code>object</code>", "<code>{ name: 'Alex' }</code>", "Объект"],
            ["<code>array</code>", "<code>[1, 2, 3]</code>", "Массив"],
          ],
        },
        {
          type: "code",
          content: `const userName = "Alex";
const age = 25;
const isAdmin = false;`,
        },
        {
          type: "note",
          content:
            "⚠️ Массивы в JS технически имеют тип <code>object</code>, поэтому проверяй их через <code>Array.isArray()</code>.",
        },
      ],
    },
    {
      id: "conditions",
      title: "Условия",
      blocks: [
        {
          type: "text",
          content:
            "Условия позволяют выполнять разный код в зависимости от значения.",
        },
        {
          type: "code",
          content: `const age = 20;

if (age >= 18) {
  console.log("Доступ разрешён");
} else {
  console.log("Доступ запрещён");
}`,
        },
        {
          type: "code",
          content: `const theme = "dark";

switch (theme) {
  case "dark":
    console.log("Тёмная тема");
    break;
  case "light":
    console.log("Светлая тема");
    break;
  default:
    console.log("Тема не выбрана");
}`,
        },
        {
          type: "note",
          content:
            "💡 Для простых проверок лучше использовать <code>if/else</code>, а <code>switch</code> оставлять для нескольких четких вариантов.",
        },
      ],
    },
    {
      id: "loops",
      title: "Циклы",
      blocks: [
        {
          type: "text",
          content:
            "Циклы нужны, когда одну и ту же операцию нужно выполнить для набора значений.",
        },
        {
          type: "code",
          content: `for (let i = 0; i < 5; i++) {
  console.log(i);
}`,
        },
        {
          type: "code",
          content: `const technologies = ["HTML", "CSS", "JavaScript"];

for (const tech of technologies) {
  console.log(tech);
}`,
        },
        {
          type: "note",
          content:
            "Во фронтенде часто удобнее не классические циклы, а методы массивов: map, filter, forEach.",
        },
      ],
    },
    {
      id: "functions",
      title: "Функции",
      blocks: [
        {
          type: "text",
          content:
            "Функции позволяют переиспользовать логику и делать код более структурированным.",
        },
        {
          type: "code",
          content: `function greet(name) {
  return "Привет, " + name;
}

console.log(greet("Alex"));`,
        },
        {
          type: "code",
          content: `const sum = (a, b) => {
  return a + b;
};

console.log(sum(2, 3));`,
        },
        {
          type: "note",
          content:
            "⚠️ Чем меньше скрытых побочных эффектов в функции, тем легче ее тестировать и переиспользовать.",
        },
      ],
    },
    {
      id: "scope-closures",
      title: "Scope и замыкания",
      blocks: [
        {
          type: "text",
          content:
            "Scope показывает, где доступна переменная. Замыкание — когда функция «помнит» внешние данные даже после выхода из родительской функции.",
        },
        {
          type: "code",
          content: `function createCounter() {
  let count = 0;

  return function () {
    count += 1;
    return count;
  };
}

const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2`,
        },
        {
          type: "list",
          items: [
            "let и const имеют блочную область видимости",
            "var имеет функциональную область видимости",
            "замыкания часто используют в фабриках функций и обработчиках событий",
          ],
        },
      ],
    },
    {
      id: "arrays",
      title: "Массивы",
      blocks: [
        {
          type: "text",
          content:
            "Массивы хранят набор значений и часто используются для списков данных.",
        },
        {
          type: "code",
          content: `const skills = ["HTML", "CSS", "JavaScript"];

console.log(skills[0]);
console.log(skills.length);`,
        },
        {
          type: "code",
          content: `const numbers = [1, 2, 3, 4];

const doubled = numbers.map((number) => number * 2);

console.log(doubled);`,
        },
        {
          type: "list",
          items: ["push", "pop", "map", "filter", "find", "forEach"],
        },
        {
          type: "js-array-playground",
        },
      ],
    },
    {
      id: "objects",
      title: "Объекты",
      blocks: [
        {
          type: "text",
          content:
            "Объекты позволяют хранить связанные данные в формате ключ-значение.",
        },
        {
          type: "code",
          content: `const user = {
  name: "Alex",
  age: 25,
  isAdmin: false,
};

console.log(user.name);`,
        },
        {
          type: "note",
          content:
            "💡 Для копирования объекта используй spread: <code>{'{ ...user }'}</code>, а не прямое присваивание по ссылке.",
        },
      ],
    },
    {
      id: "dom",
      title: "DOM",
      blocks: [
        {
          type: "text",
          content:
            "DOM — это объектная модель документа. Через JavaScript можно находить элементы и изменять страницу.",
        },
        {
          type: "code",
          content: `const title = document.querySelector(".title");

title.textContent = "Новый заголовок";`,
        },
        {
          type: "note",
          content:
            "В React напрямую с DOM работают реже, потому что интерфейс обычно управляется состоянием компонентов.",
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
            "События позволяют реагировать на действия пользователя: клик, ввод текста, прокрутку и так далее.",
        },
        {
          type: "code",
          content: `const button = document.querySelector("button");

button.addEventListener("click", () => {
  console.log("Кнопка нажата");
});`,
        },
        {
          type: "note",
          content:
            "⚠️ Не забывай про всплытие событий и при необходимости используй <code>event.stopPropagation()</code>.",
        },
        {
          type: "js-events-playground",
        },
      ],
    },
    {
      id: "async-await",
      title: "Async / Await",
      blocks: [
        {
          type: "text",
          content:
            "Async/await помогает писать асинхронный код так, будто он обычный пошаговый.",
        },
        {
          type: "code",
          content: `async function loadUsers() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();

  console.log(users);
}

loadUsers();`,
        },
        {
          type: "code",
          content: `async function loadProfile() {
  try {
    const [user, posts] = await Promise.all([
      fetch("/api/user").then((res) => res.json()),
      fetch("/api/posts").then((res) => res.json()),
    ]);

    console.log(user, posts);
  } catch (error) {
    console.error("Ошибка загрузки:", error);
  }
}`,
        },
      ],
    },
    {
      id: "js-mistakes",
      title: "Частые ошибки",
      blocks: [
        {
          type: "text",
          content:
            "Типичные JS-ошибки связаны с неявным поведением языка и отсутствием обработки краевых случаев.",
        },
        {
          type: "code",
          content: `// плохо
if (value == 0) {
  // ...
}

// лучше
if (value === 0) {
  // ...
}`,
        },
        {
          type: "note",
          content:
            "💡 Жестко придерживайся <code>===</code> и ранней обработки ошибок, особенно в async-коде.",
        },
        {
          type: "table",
          caption: "Типичные ошибки в JavaScript",
          columns: ["Ошибка", "Почему плохо", "Как лучше"],
          rows: [
            [
              "Использовать <code>var</code>",
              "Может вести себя непредсказуемо",
              "Предпочитать <code>const</code> и <code>let</code>",
            ],
            [
              "Забывать про <code>===</code>",
              "Неявное приведение типов путает логику",
              "Чаще использовать строгое сравнение",
            ],
            [
              "Много ручной работы с DOM",
              "Код становится громоздким",
              "Использовать компоненты и состояние там, где это возможно",
            ],
            [
              "Не обрабатывать ошибки async-кода",
              "Приложение может ломаться молча",
              "Добавлять <code>try/catch</code>",
            ],
          ],
        },
      ],
    },
    {
      id: "js-remember",
      title: "Что важно запомнить",
      blocks: [
        {
          type: "text",
          content:
            "Эти принципы помогают писать предсказуемый JS-код и быстрее находить ошибки.",
        },
        {
          type: "code",
          content: `const isReady = status === "ready";
if (!isReady) return;`,
        },
        {
          type: "note",
          content:
            "⚠️ Понятный код важнее «умных» сокращений: через месяц ты сам себе скажешь спасибо.",
        },
        {
          type: "list",
          items: [
            "JavaScript отвечает за поведение интерфейса",
            "Используй const/let вместо var",
            "Функции и массивы — базовые инструменты на каждый день",
            "Ошибки async-кода лучше ловить через try/catch",
            "Замыкания встречаются в реальных задачах чаще, чем кажется",
          ],
        },
      ],
    },
  ],
};

export default jsPageData;