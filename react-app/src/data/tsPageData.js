const tsPageData = {
  badge: "TypeScript",
  title: "Шпаргалка по TypeScript",
  subtitle:
    "TypeScript без боли: типы, интерфейсы, union, generics и как писать более надежный код простыми шагами.",
  toc: [
    { id: "what-is-ts", label: "Что такое TypeScript" },
    { id: "basic-types", label: "Базовые типы" },
    { id: "typing-variables", label: "Типизация переменных" },
    { id: "functions", label: "Функции" },
    { id: "arrays-objects", label: "Массивы и объекты" },
    { id: "interfaces", label: "Интерфейсы" },
    { id: "type-aliases", label: "Type aliases" },
    { id: "union-types", label: "Union types" },
    { id: "narrowing", label: "Narrowing и type guards" },
    { id: "optional", label: "Optional и readonly" },
    { id: "generics", label: "Generics" },
    { id: "ts-react", label: "TypeScript в React" },
    { id: "ts-mistakes", label: "Частые ошибки" },
    { id: "ts-remember", label: "Что важно запомнить" },
  ],
  sections: [
    {
      id: "what-is-ts",
      title: "Что такое TypeScript",
      blocks: [
        {
          type: "text",
          content:
            "TypeScript — это JavaScript с типами.",
        },
        {
          type: "text",
          content:
            "Он помогает находить ошибки раньше и делает код понятнее, особенно когда проект растет.",
        },
        {
          type: "note",
          content:
            "TypeScript не заменяет JavaScript, а расширяет его возможностями типизации.",
        },
      ],
    },
    {
      id: "basic-types",
      title: "Базовые типы",
      blocks: [
        {
          type: "text",
          content:
            "Базовые типы помогают описать данные так, чтобы IDE и компилятор ловили ошибки до запуска приложения.",
        },
        {
          type: "code",
          content: `const title: string = "Шпаргалка";
const views: number = 120;
const isPublished: boolean = true;`,
        },
        {
          type: "note",
          content:
            "💡 Избегай <code>any</code> в новой логике: он отключает пользу типизации.",
        },
        {
          type: "table",
          caption: "Основные типы TypeScript",
          columns: ["Тип", "Пример", "Назначение"],
          rows: [
            ["<code>string</code>", '<code>"Alex"</code>', "Строка"],
            ["<code>number</code>", "<code>25</code>", "Число"],
            ["<code>boolean</code>", "<code>true</code>", "Логическое значение"],
            ["<code>null</code>", "<code>null</code>", "Пустое значение"],
            ["<code>undefined</code>", "<code>undefined</code>", "Значение не определено"],
            ["<code>object</code>", "<code>{}</code>", "Объект"],
            ["<code>any</code>", "<code>any</code>", "Любой тип"],
            ["<code>unknown</code>", "<code>unknown</code>", "Неизвестный тип"],
          ],
        },
      ],
    },
    {
      id: "typing-variables",
      title: "Типизация переменных",
      blocks: [
        {
          type: "text",
          content:
            "Тип можно писать вручную, но часто TypeScript сам его понимает.",
        },
        {
          type: "code",
          content: `let userName: string = "Alex";
let age: number = 25;
let isAdmin: boolean = false;`,
        },
        {
          type: "code",
          content: `const title = "Developer Notes";
// TypeScript сам понимает, что это string`,
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
            "В TypeScript можно типизировать параметры и возвращаемое значение функции.",
        },
        {
          type: "code",
          content: `function sum(a: number, b: number): number {
  return a + b;
}`,
        },
        {
          type: "code",
          content: `const greet = (name: string): string => {
  return "Привет, " + name;
};`,
        },
      ],
    },
    {
      id: "arrays-objects",
      title: "Массивы и объекты",
      blocks: [
        {
          type: "text",
          content:
            "Типизация коллекций и объектов делает автодополнение точнее и снижает риск ошибок при работе с полями.",
        },
        {
          type: "code",
          content: `const skills: string[] = ["HTML", "CSS", "TypeScript"];`,
        },
        {
          type: "code",
          content: `const user: { name: string; age: number } = {
  name: "Alex",
  age: 25,
};`,
        },
        {
          type: "note",
          content:
            "Для сложных объектов обычно лучше использовать interface или type.",
        },
      ],
    },
    {
      id: "interfaces",
      title: "Интерфейсы",
      blocks: [
        {
          type: "text",
          content:
            "Интерфейсы удобны для описания структуры объектов.",
        },
        {
          type: "code",
          content: `interface User {
  name: string;
  age: number;
  isAdmin: boolean;
}

const admin: User = {
  name: "Alex",
  age: 25,
  isAdmin: true,
};`,
        },
        {
          type: "note",
          content:
            "⚠️ Не дублируй одинаковые интерфейсы в разных файлах: выноси общие типы в отдельный модуль.",
        },
      ],
    },
    {
      id: "type-aliases",
      title: "Type aliases",
      blocks: [
        {
          type: "text",
          content:
            "Type alias позволяет создать собственное имя для типа.",
        },
        {
          type: "code",
          content: `type UserRole = "admin" | "editor" | "user";

let role: UserRole = "admin";`,
        },
        {
          type: "code",
          content: `type Product = {
  title: string;
  price: number;
};`,
        },
        {
          type: "note",
          content:
            "💡 Alias удобен для union и примитивов, а <code>interface</code> — для расширяемых объектных структур.",
        },
      ],
    },
    {
      id: "union-types",
      title: "Union types",
      blocks: [
        {
          type: "text",
          content:
            "Union type позволяет переменной или параметру принимать несколько возможных типов.",
        },
        {
          type: "code",
          content: `let id: string | number;

id = 10;
id = "user-10";`,
        },
        {
          type: "code",
          content: `function printId(id: string | number) {
  console.log(id);
}`,
        },
        {
          type: "note",
          content:
            "⚠️ Union почти всегда требует narrowing перед обращением к специфичным свойствам.",
        },
      ],
    },
    {
      id: "narrowing",
      title: "Narrowing и type guards",
      blocks: [
        {
          type: "text",
          content:
            "Если у переменной может быть несколько типов, TypeScript просит уточнить, с каким типом ты работаешь сейчас.",
        },
        {
          type: "code",
          content: `function printLength(value: string | string[]) {
  if (typeof value === "string") {
    console.log(value.length);
    return;
  }

  console.log(value.length);
}`,
        },
        {
          type: "code",
          content: `type Admin = { role: "admin"; accessLevel: number };
type User = { role: "user"; email: string };

function getInfo(account: Admin | User) {
  if (account.role === "admin") {
    return account.accessLevel;
  }

  return account.email;
}`,
        },
        {
          type: "ts-narrowing-playground",
        },
      ],
    },
    {
      id: "optional",
      title: "Optional и readonly",
      blocks: [
        {
          type: "text",
          content:
            "Optional-поля делают свойства необязательными, а readonly защищает критичные данные от случайного изменения.",
        },
        {
          type: "code",
          content: `interface User {
  name: string;
  age?: number;
  readonly id: number;
}`,
        },
        {
          type: "list",
          items: [
            "age? — необязательное свойство",
            "readonly id — нельзя изменить после создания",
          ],
        },
        {
          type: "note",
          content:
            "💡 Для readonly-объектов часто удобно использовать иммутабельные обновления через spread.",
        },
      ],
    },
    {
      id: "generics",
      title: "Generics",
      blocks: [
        {
          type: "text",
          content:
            "Generics позволяют писать гибкий код, который работает с разными типами.",
        },
        {
          type: "code",
          content: `function identity<T>(value: T): T {
  return value;
}

const a = identity<string>("hello");
const b = identity<number>(42);`,
        },
        {
          type: "note",
          content:
            "⚠️ Не усложняй generic-подписи заранее: начинай с простого ограничения и расширяй при необходимости.",
        },
      ],
    },
    {
      id: "ts-react",
      title: "TypeScript в React",
      blocks: [
        {
          type: "text",
          content:
            "В React TypeScript часто используют для типизации props, state и событий.",
        },
        {
          type: "code",
          content: `type ButtonProps = {
  label: string;
  onClick: () => void;
};

function Button({ label, onClick }: ButtonProps) {
  return <button onClick={onClick}>{label}</button>;
}`,
        },
        {
          type: "note",
          content:
            "TypeScript особенно полезен в React, когда приложение становится большим.",
        },
      ],
    },
    {
      id: "ts-mistakes",
      title: "Частые ошибки",
      blocks: [
        {
          type: "text",
          content:
            "Большинство ошибок TypeScript возникают, когда типизацию либо игнорируют, либо делают чрезмерно сложной.",
        },
        {
          type: "code",
          content: `// плохо
const value: any = getData();

// лучше
const value: unknown = getData();`,
        },
        {
          type: "note",
          content:
            "💡 Если типы читаются тяжело, это сигнал упростить модель данных или разбить ее на несколько частей.",
        },
        {
          type: "table",
          caption: "Типичные ошибки в TypeScript",
          columns: ["Ошибка", "Почему плохо", "Как лучше"],
          rows: [
            [
              "Часто использовать <code>any</code>",
              "Убивает пользу от типизации",
              "Предпочитать точные типы, <code>unknown</code> или generics",
            ],
            [
              "Дублировать одинаковые типы",
              "Код становится сложнее поддерживать",
              "Выносить типы в <code>interface</code> или <code>type</code>",
            ],
            [
              "Игнорировать ошибки компилятора",
              "Появляются реальные баги",
              "Исправлять типы, а не обходить их",
            ],
            [
              "Типизировать всё слишком тяжело",
              "Код становится перегруженным",
              "Держать баланс между строгостью и читаемостью",
            ],
          ],
        },
      ],
    },
    {
      id: "ts-remember",
      title: "Что важно запомнить",
      blocks: [
        {
          type: "text",
          content:
            "Эти принципы помогают использовать TypeScript как инструмент надежности, а не как лишнюю бюрократию.",
        },
        {
          type: "code",
          content: `function toUpper(value: string) {
  return value.toUpperCase();
}`,
        },
        {
          type: "note",
          content:
            "⚠️ Лучшая стратегия: типизируй границы данных (API, props, стейт), затем внутреннюю логику.",
        },
        {
          type: "list",
          items: [
            "TypeScript экономит время на отладке",
            "interface/type описывают форму данных",
            "any — крайний случай, а не норма",
            "union + narrowing часто нужны в обычных задачах",
            "generics помогают не дублировать код",
          ],
        },
      ],
    },
  ],
};

export default tsPageData;