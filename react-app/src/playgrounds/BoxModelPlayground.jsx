import { useMemo, useState } from "react";
import CodeBlock from "../components/ui/CodeBlock";

export default function BoxModelPlayground() {
  const [padding, setPadding] = useState(16);
  const [border, setBorder] = useState(2);
  const [margin, setMargin] = useState(12);
  const [radius, setRadius] = useState(12);

  const boxStyle = useMemo(
    () => ({
      padding: `${padding}px`,
      border: `${border}px solid rgba(196, 181, 253, 0.8)`,
      margin: `${margin}px`,
      borderRadius: `${radius}px`,
      background: "rgba(139, 92, 246, 0.12)",
      color: "#f8fafc",
      textAlign: "center",
      fontWeight: 700,
    }),
    [padding, border, margin, radius]
  );

  const cssCode = `.box {
  padding: ${padding}px;
  border: ${border}px solid #c4b5fd;
  margin: ${margin}px;
  border-radius: ${radius}px;
}`;

  return (
    <div className="content-flow">
      <h3 className="playground-title">Playground: Box model</h3>

      <div className="grid grid-2">
        <div className="card playground-controls">
          <div>
            <label className="label">padding: {padding}px</label>
            <input className="range" type="range" min="0" max="36" value={padding} onChange={(e) => setPadding(Number(e.target.value))} />
          </div>
          <div>
            <label className="label">border: {border}px</label>
            <input className="range" type="range" min="0" max="10" value={border} onChange={(e) => setBorder(Number(e.target.value))} />
          </div>
          <div>
            <label className="label">margin: {margin}px</label>
            <input className="range" type="range" min="0" max="32" value={margin} onChange={(e) => setMargin(Number(e.target.value))} />
          </div>
          <div>
            <label className="label">radius: {radius}px</label>
            <input className="range" type="range" min="0" max="24" value={radius} onChange={(e) => setRadius(Number(e.target.value))} />
          </div>
        </div>

        <div className="card playground-preview-card">
          <div className="playground-stage" style={{ minHeight: "180px", overflow: "hidden" }}>
            <div
              style={{
                border: "1px dashed rgba(148, 163, 184, 0.35)",
                borderRadius: "14px",
                width: "100%",
              }}
            >
              <div style={boxStyle}>Content</div>
            </div>
          </div>
        </div>
      </div>

      <CodeBlock>{cssCode}</CodeBlock>
    </div>
  );
}
