import { useMemo, useState } from "react";
import CodeBlock from "../components/ui/CodeBlock";

export default function GridPlayground() {
  const [columns, setColumns] = useState(3);
  const [gap, setGap] = useState(12);

  const gridStyle = useMemo(
    () => ({
      display: "grid",
      width: "100%",
      gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
      gap: `${gap}px`,
    }),
    [columns, gap]
  );

  const cssCode = `.grid-demo {
  display: grid;
  grid-template-columns: repeat(${columns}, minmax(0, 1fr));
  gap: ${gap}px;
}`;

  return (
    <div className="content-flow">
      <h3 className="playground-title">Playground: Grid</h3>

      <div className="grid grid-2">
        <div className="card playground-controls">
          <div>
            <label className="label">Колонки: {columns}</label>
            <input
              className="range"
              type="range"
              min="1"
              max="5"
              value={columns}
              onChange={(event) => setColumns(Number(event.target.value))}
            />
          </div>

          <div>
            <label className="label">gap: {gap}px</label>
            <input
              className="range"
              type="range"
              min="0"
              max="32"
              value={gap}
              onChange={(event) => setGap(Number(event.target.value))}
            />
          </div>
        </div>

        <div className="card playground-preview-card">
          <div className="playground-stage" style={{ minHeight: "180px", overflow: "hidden" }}>
            <div style={gridStyle}>
              {Array.from({ length: 6 }).map((_, index) => (
                <div
                  key={index}
                  style={{
                    minHeight: "52px",
                    borderRadius: "12px",
                    border: "1px solid rgba(148, 163, 184, 0.28)",
                    background: "rgba(59, 130, 246, 0.16)",
                    display: "grid",
                    placeItems: "center",
                    fontWeight: 700,
                  }}
                >
                  {index + 1}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <CodeBlock>{cssCode}</CodeBlock>
    </div>
  );
}
