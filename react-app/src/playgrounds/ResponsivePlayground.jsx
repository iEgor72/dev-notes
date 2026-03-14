import { useMemo, useState } from "react";
import CodeBlock from "../components/ui/CodeBlock";

export default function ResponsivePlayground() {
  const [viewport, setViewport] = useState(960);
  const isMobile = viewport <= 768;

  const layoutStyle = useMemo(
    () => ({
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : "220px 1fr",
      gap: "10px",
      width: "100%",
      transition: "all 0.2s ease",
    }),
    [isMobile]
  );

  const cssCode = `@media (max-width: 768px) {
  .layout {
    grid-template-columns: 1fr;
  }
}

.layout {
  display: grid;
  grid-template-columns: ${isMobile ? "1fr" : "220px 1fr"};
  gap: 10px;
}`;

  return (
    <div className="content-flow">
      <h3 className="playground-title">Playground: Адаптивность</h3>

      <div className="card playground-controls">
        <label className="label">Ширина экрана: {viewport}px</label>
        <input
          className="range"
          type="range"
          min="320"
          max="1280"
          value={viewport}
          onChange={(event) => setViewport(Number(event.target.value))}
        />
      </div>

      <div className="card playground-preview-card">
        <div className="playground-stage" style={{ minHeight: "170px", overflow: "hidden" }}>
          <div style={layoutStyle}>
            <div
              style={{
                minHeight: "72px",
                borderRadius: "10px",
                border: "1px solid rgba(148, 163, 184, 0.28)",
                background: "rgba(99, 102, 241, 0.2)",
                display: "grid",
                placeItems: "center",
                fontWeight: 700,
              }}
            >
              Sidebar
            </div>
            <div
              style={{
                minHeight: "72px",
                borderRadius: "10px",
                border: "1px solid rgba(148, 163, 184, 0.28)",
                background: "rgba(59, 130, 246, 0.16)",
                display: "grid",
                placeItems: "center",
                fontWeight: 700,
              }}
            >
              Content
            </div>
          </div>
        </div>
      </div>

      <CodeBlock>{cssCode}</CodeBlock>
    </div>
  );
}
