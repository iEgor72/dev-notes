import { useMemo, useState } from "react";
import CodeBlock from "../components/ui/CodeBlock";

const POSITION_VALUES = ["static", "relative", "absolute", "fixed", "sticky"];

export default function PositionPlayground() {
  const [position, setPosition] = useState("relative");
  const [top, setTop] = useState(12);
  const [left, setLeft] = useState(12);
  const previewPosition = position === "fixed" ? "absolute" : position;

  const badgeStyle = useMemo(
    () => ({
      position: previewPosition,
      top: `${top}px`,
      left: `${left}px`,
      padding: "6px 10px",
      borderRadius: "999px",
      background: "rgba(34, 197, 94, 0.2)",
      border: "1px solid rgba(34, 197, 94, 0.45)",
      color: "#e2fbe8",
      fontWeight: 700,
      display: "inline-flex",
    }),
    [previewPosition, top, left]
  );

  const cssCode = `.badge {
  position: ${position};
  top: ${top}px;
  left: ${left}px;
}`;

  return (
    <div className="content-flow">
      <h3 className="playground-title">Playground: position</h3>

      <div className="grid grid-2">
        <div className="card playground-controls">
          <div>
            <label className="label" htmlFor="position-value">position</label>
            <select
              id="position-value"
              className="select"
              value={position}
              onChange={(event) => setPosition(event.target.value)}
            >
              {POSITION_VALUES.map((value) => (
                <option key={value} value={value}>
                  {value}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="label">top: {top}px</label>
            <input className="range" type="range" min="-20" max="80" value={top} onChange={(e) => setTop(Number(e.target.value))} />
          </div>

          <div>
            <label className="label">left: {left}px</label>
            <input className="range" type="range" min="-20" max="140" value={left} onChange={(e) => setLeft(Number(e.target.value))} />
          </div>
        </div>

        <div className="card playground-preview-card">
          <div className="playground-stage" style={{ minHeight: "190px", overflow: "hidden" }}>
            <div
              style={{
                position: "relative",
                width: "100%",
                minHeight: "140px",
                borderRadius: "12px",
                border: "1px dashed rgba(148, 163, 184, 0.35)",
                padding: "12px",
                color: "#d6deea",
              }}
            >
              Контейнер
              <span style={badgeStyle}>badge</span>
            </div>
          </div>
        </div>
      </div>

      {position === "fixed" ? (
        <p className="muted">
          В превью <code>fixed</code> показан как <code>absolute</code>, чтобы
          элемент оставался в рабочей области.
        </p>
      ) : null}

      <CodeBlock>{cssCode}</CodeBlock>
    </div>
  );
}
