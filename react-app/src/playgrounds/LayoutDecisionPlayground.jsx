import { useMemo, useState } from "react";
import CodeBlock from "../components/ui/CodeBlock";

const SCENARIOS = [
  {
    value: "toolbar",
    label: "Toolbar / меню",
    choice: "Flexbox",
    reason: "Одна ось и простое выравнивание элементов.",
    code: `.toolbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}`,
  },
  {
    value: "cards",
    label: "Сетка карточек",
    choice: "Grid",
    reason: "Нужен контроль колонок/строк и адаптивная сетка.",
    code: `.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 16px;
}`,
  },
  {
    value: "app",
    label: "App shell (header/main/footer)",
    choice: "Grid + Flexbox",
    reason: "Grid задает зоны экрана, Flex выравнивает контент внутри зон.",
    code: `.app {
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;
}`,
  },
];

export default function LayoutDecisionPlayground() {
  const [scenario, setScenario] = useState("toolbar");
  const selected = useMemo(
    () => SCENARIOS.find((item) => item.value === scenario) ?? SCENARIOS[0],
    [scenario]
  );

  return (
    <div className="content-flow">
      <h3 className="playground-title">Playground: выбор инструмента</h3>

      <label className="label" htmlFor="layout-scenario">
        Сценарий интерфейса
      </label>
      <select
        id="layout-scenario"
        className="select"
        value={scenario}
        onChange={(event) => setScenario(event.target.value)}
      >
        {SCENARIOS.map((item) => (
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
            <strong>Рекомендуется:</strong> {selected.choice}
          </p>
          <p style={{ margin: 0 }}>{selected.reason}</p>
        </div>
      </div>

      <CodeBlock>{selected.code}</CodeBlock>
    </div>
  );
}
