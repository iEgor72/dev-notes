import { useMemo, useState } from "react";
import CodeBlock from "../components/ui/CodeBlock";

const OPERATIONS = [
  { value: "map", label: "map x2" },
  { value: "filter", label: "filter >= 10" },
  { value: "sort-asc", label: "sort asc" },
  { value: "sort-desc", label: "sort desc" },
  { value: "sum", label: "reduce sum" },
];

function parseNumbers(input) {
  return input
    .split(",")
    .map((item) => Number(item.trim()))
    .filter((item) => Number.isFinite(item));
}

export default function JsArrayPlayground() {
  const [raw, setRaw] = useState("2, 5, 10, 12, 7");
  const [operation, setOperation] = useState("map");

  const numbers = useMemo(() => parseNumbers(raw), [raw]);

  const result = useMemo(() => {
    if (operation === "map") return numbers.map((n) => n * 2);
    if (operation === "filter") return numbers.filter((n) => n >= 10);
    if (operation === "sort-asc") return [...numbers].sort((a, b) => a - b);
    if (operation === "sort-desc") return [...numbers].sort((a, b) => b - a);
    return numbers.reduce((acc, n) => acc + n, 0);
  }, [numbers, operation]);

  const code = useMemo(() => {
    const base = `const numbers = [${numbers.join(", ")}];`;
    if (operation === "map") return `${base}\nconst result = numbers.map((n) => n * 2);`;
    if (operation === "filter") return `${base}\nconst result = numbers.filter((n) => n >= 10);`;
    if (operation === "sort-asc") return `${base}\nconst result = [...numbers].sort((a, b) => a - b);`;
    if (operation === "sort-desc") return `${base}\nconst result = [...numbers].sort((a, b) => b - a);`;
    return `${base}\nconst result = numbers.reduce((acc, n) => acc + n, 0);`;
  }, [numbers, operation]);

  return (
    <div className="content-flow">
      <h3 className="playground-title">Playground: методы массивов</h3>

      <label className="label" htmlFor="js-array-input">
        Числа через запятую
      </label>
      <input
        id="js-array-input"
        className="input"
        value={raw}
        onChange={(event) => setRaw(event.target.value)}
      />

      <label className="label" htmlFor="js-array-op">
        Операция
      </label>
      <select
        id="js-array-op"
        className="select"
        value={operation}
        onChange={(event) => setOperation(event.target.value)}
      >
        {OPERATIONS.map((item) => (
          <option key={item.value} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>

      <div className="card playground-preview-card">
        <div
          className="playground-stage"
          style={{
            minHeight: "120px",
            overflow: "hidden",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            flexDirection: "column",
            gap: "8px",
          }}
        >
          <p style={{ margin: 0 }}>
            <strong>Вход:</strong> [{numbers.join(", ")}]
          </p>
          <p style={{ margin: 0 }}>
            <strong>Результат:</strong>{" "}
            {Array.isArray(result) ? `[${result.join(", ")}]` : result}
          </p>
        </div>
      </div>

      <CodeBlock>{code}</CodeBlock>
    </div>
  );
}
