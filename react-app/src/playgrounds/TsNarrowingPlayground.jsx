import { useMemo, useState } from "react";
import CodeBlock from "../components/ui/CodeBlock";

const VALUES = [
  { value: "string", label: "string" },
  { value: "number", label: "number" },
  { value: "array", label: "string[]" },
];

export default function TsNarrowingPlayground() {
  const [kind, setKind] = useState("string");

  const output = useMemo(() => {
    if (kind === "string") return 'value = "hello" -> branch: typeof value === "string"';
    if (kind === "number") return "value = 42 -> branch: number";
    return 'value = ["a", "b"] -> branch: Array.isArray(value)';
  }, [kind]);

  const code = useMemo(
    () => `function printValue(value: string | number | string[]) {
  if (typeof value === "string") {
    return value.toUpperCase();
  }

  if (Array.isArray(value)) {
    return value.join(", ");
  }

  return value.toFixed(2);
}

// demo: ${kind}`,
    [kind]
  );

  return (
    <div className="content-flow">
      <h3 className="playground-title">Playground: narrowing</h3>

      <label className="label" htmlFor="ts-narrowing-type">
        Тип входного значения
      </label>
      <select
        id="ts-narrowing-type"
        className="select"
        value={kind}
        onChange={(event) => setKind(event.target.value)}
      >
        {VALUES.map((item) => (
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
          }}
        >
          <p style={{ margin: 0 }}>
            <strong>Сработавшая ветка:</strong> {output}
          </p>
        </div>
      </div>

      <CodeBlock>{code}</CodeBlock>
    </div>
  );
}
