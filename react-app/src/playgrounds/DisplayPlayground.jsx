import { useMemo, useState } from "react";
import CodeBlock from "../components/ui/CodeBlock";

const DISPLAY_OPTIONS = ["block", "inline", "inline-block", "none", "flex", "grid"];

export default function DisplayPlayground() {
  const [display, setDisplay] = useState("block");

  const isLayoutMode = display === "flex" || display === "grid";

  const code = useMemo(() => {
    if (display === "grid") {
      return `.demo {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 8px;
}`;
    }

    if (display === "flex") {
      return `.demo {
  display: flex;
  gap: 8px;
  align-items: center;
}`;
    }

    return `.demo {
  display: ${display};
}`;
  }, [display]);

  return (
    <div className="content-flow">
      <h3 className="playground-title">Playground: display</h3>

      <label className="label" htmlFor="display-select">
        display
      </label>

      <select
        id="display-select"
        className="select"
        value={display}
        onChange={(event) => setDisplay(event.target.value)}
      >
        {DISPLAY_OPTIONS.map((value) => (
          <option key={value} value={value}>
            {value}
          </option>
        ))}
      </select>

      <div className="card playground-preview-card">
        <div className="playground-stage" style={{ minHeight: "140px", overflow: "hidden", padding: "14px 16px" }}>
          {isLayoutMode ? (
            <div
              style={{
                display,
                width: display === "grid" ? "100%" : "fit-content",
                gap: "8px",
                alignItems: "center",
                justifyContent: display === "flex" ? "center" : undefined,
                gridTemplateColumns: display === "grid" ? "repeat(3, minmax(0, 1fr))" : undefined,
              }}
            >
              {["1", "2", "3"].map((item) => (
                <div
                  key={item}
                  style={{
                    minWidth: "44px",
                    minHeight: "44px",
                    padding: "0 10px",
                    borderRadius: "10px",
                    border: "1px solid rgba(148, 163, 184, 0.28)",
                    background: "rgba(139, 92, 246, 0.16)",
                    display: "grid",
                    placeItems: "center",
                    fontWeight: 700,
                    color: "#fff",
                  }}
                >
                  {item}
                </div>
              ))}
            </div>
          ) : (
            <div style={{ width: "100%", color: "#d6deea", lineHeight: 1.7 }}>
              Текст до
              <span
                style={{
                  display,
                  margin: "6px",
                  padding: "8px 10px",
                  borderRadius: "10px",
                  border: "1px solid rgba(148, 163, 184, 0.28)",
                  background: "rgba(59, 130, 246, 0.18)",
                  color: "#f8fafc",
                }}
              >
                demo
              </span>
              Текст после
            </div>
          )}
        </div>
      </div>

      <CodeBlock>{code}</CodeBlock>
    </div>
  );
}
