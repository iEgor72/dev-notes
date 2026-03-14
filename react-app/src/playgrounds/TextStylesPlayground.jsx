import { useMemo, useState } from "react";
import CodeBlock from "../components/ui/CodeBlock";

export default function TextStylesPlayground() {
  const [fontSize, setFontSize] = useState(18);
  const [weight, setWeight] = useState(500);
  const [lineHeight, setLineHeight] = useState(1.6);
  const [align, setAlign] = useState("left");

  const textStyle = useMemo(
    () => ({
      fontSize: `${fontSize}px`,
      fontWeight: weight,
      lineHeight,
      textAlign: align,
      width: "100%",
      color: "#e2e8f0",
      transition: "all 0.2s ease",
    }),
    [fontSize, weight, lineHeight, align]
  );

  const cssCode = `.text {
  font-size: ${fontSize}px;
  font-weight: ${weight};
  line-height: ${lineHeight};
  text-align: ${align};
}`;

  return (
    <div className="content-flow">
      <h3 className="playground-title">Playground: Текст и шрифты</h3>

      <div className="grid grid-2">
        <div className="card playground-controls">
          <div>
            <label className="label">font-size: {fontSize}px</label>
            <input className="range" type="range" min="12" max="40" value={fontSize} onChange={(e) => setFontSize(Number(e.target.value))} />
          </div>

          <div>
            <label className="label">font-weight</label>
            <select className="select" value={weight} onChange={(e) => setWeight(Number(e.target.value))}>
              <option value={400}>400</option>
              <option value={500}>500</option>
              <option value={600}>600</option>
              <option value={700}>700</option>
            </select>
          </div>

          <div>
            <label className="label">line-height: {lineHeight}</label>
            <input className="range" type="range" min="1" max="2.2" step="0.1" value={lineHeight} onChange={(e) => setLineHeight(Number(e.target.value))} />
          </div>

          <div>
            <label className="label">text-align</label>
            <select className="select" value={align} onChange={(e) => setAlign(e.target.value)}>
              <option value="left">left</option>
              <option value="center">center</option>
              <option value="right">right</option>
              <option value="justify">justify</option>
            </select>
          </div>
        </div>

        <div className="card playground-preview-card">
          <div className="playground-stage" style={{ minHeight: "180px", overflow: "hidden" }}>
            <p style={textStyle}>
              CSS помогает управлять типографикой. Меняй свойства и смотри, как
              меняется читабельность текста прямо в превью.
            </p>
          </div>
        </div>
      </div>

      <CodeBlock>{cssCode}</CodeBlock>
    </div>
  );
}
