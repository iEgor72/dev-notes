import { mkdir, writeFile, access } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, "..");

function toWords(input) {
  return input
    .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
    .replace(/[-_]+/g, " ")
    .trim()
    .split(/\s+/)
    .filter(Boolean);
}

function toPascalCase(input) {
  return toWords(input)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join("");
}

function toCamelCase(input) {
  const pascal = toPascalCase(input);
  return pascal.charAt(0).toLowerCase() + pascal.slice(1);
}

function toKebabCase(input) {
  return toWords(input).map((word) => word.toLowerCase()).join("-");
}

function buildHeroComponent({ pascalName, title, subtitle, badge, routeSlug }) {
  return `function ${pascalName}Hero() {
  return (
    <section className="hero card" aria-labelledby="${routeSlug}-page-title">
      <span className="badge">${badge}</span>

      <div>
        <h1 className="title" id="${routeSlug}-page-title">
          ${title}
        </h1>

        <p className="subtitle">
          ${subtitle}
        </p>
      </div>
    </section>
  );
}

export default ${pascalName}Hero;
`;
}

function buildTocComponent({ pascalName, camelName, dataName }) {
  return `import useScrollSpy from "../../hooks/useScrollSpy";
import ${dataName} from "../../data/${camelName}Toc";

function ${pascalName}Toc() {
  const activeId = useScrollSpy(${dataName}.map((item) => item.id));

  return (
    <nav className="card card--solid toc" aria-labelledby="${camelName}-toc-title">
      <h2 className="section-title" id="${camelName}-toc-title">
        Содержание
      </h2>

      <ol>
        {${dataName}.map((item) => (
          <li key={item.id}>
            <a
              href={\`#\${item.id}\`}
              className={activeId === item.id ? "is-active" : ""}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}

export default ${pascalName}Toc;
`;
}

function buildContentComponent({ pascalName, sectionComponents }) {
  const importLines = sectionComponents
    .map(
      (section) =>
        `import ${section.componentName} from "./sections/${section.componentName}";`,
    )
    .join("\n");

  const sectionRender = sectionComponents
    .map((section) => `        <${section.componentName} />`)
    .join("\n");

  return `import ${pascalName}Toc from "./${pascalName}Toc";
${importLines}

function ${pascalName}Content() {
  return (
    <div className="docs-layout">
      <${pascalName}Toc />

      <div className="docs-content">
${sectionRender}
      </div>
    </div>
  );
}

export default ${pascalName}Content;
`;
}

function buildPageView({ pascalName }) {
  return `import ${pascalName}Hero from "./${pascalName}Hero";
import ${pascalName}Content from "./${pascalName}Content";

function ${pascalName}Page() {
  return (
    <div className="page-stack">
      <${pascalName}Hero />
      <${pascalName}Content />
    </div>
  );
}

export default ${pascalName}Page;
`;
}

function buildRoutePage({ pascalName, camelName }) {
  return `import ${pascalName}PageView from "../components/${camelName}/${pascalName}Page";

function ${pascalName}Page() {
  return <${pascalName}PageView />;
}

export default ${pascalName}Page;
`;
}

function buildTocData({ dataName, sections }) {
  const entries = sections
    .map((section) => `  { id: "${section.id}", label: "${section.label}" },`)
    .join("\n");

  return `const ${dataName} = [
${entries}
];

export default ${dataName};
`;
}

function buildSectionComponent({ componentName, id, title }) {
  return `import SectionCard from "../../ui/SectionCard";

function ${componentName}() {
  return (
    <SectionCard id="${id}" title="${title}">
      <p>Добавьте содержимое для раздела "${title}".</p>
    </SectionCard>
  );
}

export default ${componentName};
`;
}

function parseSections(rawValue) {
  if (!rawValue) {
    return [
      { id: "intro", label: "Введение" },
      { id: "examples", label: "Примеры" },
      { id: "remember", label: "Что важно запомнить" },
    ];
  }

  return rawValue.split(",").map((chunk) => {
    const [idRaw, labelRaw] = chunk.split(":");
    const id = toKebabCase(idRaw ?? "");
    const label = (labelRaw ?? "").trim();

    if (!id || !label) {
      throw new Error(
        `Некорректный раздел "${chunk}". Используйте формат id:Заголовок.`,
      );
    }

    return { id, label };
  });
}

function parseArgs() {
  const args = process.argv.slice(2);
  const values = {};

  for (let index = 0; index < args.length; index += 1) {
    const key = args[index];

    if (!key.startsWith("--")) {
      continue;
    }

    const normalizedKey = key.slice(2);
    const value = args[index + 1];
    values[normalizedKey] = value;
    index += 1;
  }

  return values;
}

async function ensureMissing(filePath) {
  try {
    await access(filePath);
    return false;
  } catch {
    return true;
  }
}

async function main() {
  const args = parseArgs();
  const topicArg = args.topic ?? args.name;

  if (!topicArg) {
    throw new Error(
      'Укажите тему: npm run create:topic -- --topic "Node JS" --route "/node-js"',
    );
  }

  const pascalName = toPascalCase(topicArg);
  const camelName = toCamelCase(topicArg);
  const routeSlug = toKebabCase(topicArg);
  const title = args.title?.trim() || `Шпаргалка по ${pascalName}`;
  const subtitle =
    args.subtitle?.trim() ||
    "Добавьте краткое описание темы для вводного блока.";
  const badge = args.badge?.trim() || pascalName;
  const route = args.route?.trim() || `/${routeSlug}`;
  const dataName = `${camelName}Toc`;
  const sections = parseSections(args.sections);
  const sectionComponents = sections.map((section) => ({
    ...section,
    componentName: `${toPascalCase(section.id)}Section`,
  }));

  const topicDirectory = path.join(projectRoot, "src", "components", camelName);
  const sectionsDirectory = path.join(topicDirectory, "sections");
  const dataFile = path.join(projectRoot, "src", "data", `${camelName}Toc.js`);
  const routePageFile = path.join(
    projectRoot,
    "src",
    "pages",
    `${pascalName}Page.jsx`,
  );
  const componentPageFile = path.join(topicDirectory, `${pascalName}Page.jsx`);
  const heroFile = path.join(topicDirectory, `${pascalName}Hero.jsx`);
  const tocFile = path.join(topicDirectory, `${pascalName}Toc.jsx`);
  const contentFile = path.join(topicDirectory, `${pascalName}Content.jsx`);

  await mkdir(sectionsDirectory, { recursive: true });

  const files = [
    {
      filePath: heroFile,
      content: buildHeroComponent({
        pascalName,
        title,
        subtitle,
        badge,
        routeSlug,
      }),
    },
    {
      filePath: tocFile,
      content: buildTocComponent({ pascalName, camelName, dataName }),
    },
    {
      filePath: contentFile,
      content: buildContentComponent({ pascalName, sectionComponents }),
    },
    {
      filePath: componentPageFile,
      content: buildPageView({ pascalName }),
    },
    {
      filePath: dataFile,
      content: buildTocData({ dataName, sections }),
    },
    {
      filePath: routePageFile,
      content: buildRoutePage({ pascalName, camelName }),
    },
    ...sectionComponents.map((section) => ({
      filePath: path.join(sectionsDirectory, `${section.componentName}.jsx`),
      content: buildSectionComponent({
        componentName: section.componentName,
        id: section.id,
        title: section.label,
      }),
    })),
  ];

  const created = [];
  const skipped = [];

  for (const file of files) {
    const isMissing = await ensureMissing(file.filePath);

    if (!isMissing) {
      skipped.push(path.relative(projectRoot, file.filePath));
      continue;
    }

    await writeFile(file.filePath, file.content, "utf8");
    created.push(path.relative(projectRoot, file.filePath));
  }

  console.log(`\nТема "${pascalName}" обработана.`);
  console.log(`Маршрут: ${route}`);
  console.log("Созданы файлы:");
  created.forEach((item) => console.log(`  + ${item}`));

  if (skipped.length > 0) {
    console.log("\nПропущены (уже существуют):");
    skipped.forEach((item) => console.log(`  - ${item}`));
  }

  console.log("\nДальше вручную:");
  console.log(`  1) Добавьте роут в src/App.jsx: <Route path="${route}" ... />`);
  console.log("  2) Добавьте ссылку в навигацию, если нужно.");
}

main().catch((error) => {
  console.error(`Ошибка: ${error.message}`);
  process.exit(1);
});
