import { useMemo, useState } from "react";
import Control from "../components/Control";

const COLORS = [
  { label: "Фиолетовый", value: "#8b5cf6" },
  { label: "Синий", value: "#3b82f6" },
  { label: "Зелёный", value: "#22c55e" },
  { label: "Красный", value: "#ef4444" },
  { label: "Оранжевый", value: "#f59e0b" },
];

export default function ColorPlayground() {
  const [text, setText] = useState("Привет, React!");
  const [bgColor, setBgColor] = useState("#8b5cf6");
  const [radius, setRadius] = useState(18);
  const [padding, setPadding] = useState(24);
  const [width, setWidth] = useState(260);

  const previewStyle = useMemo(
    () => ({
      background: bgColor,
      borderRadius: `${radius}px`,
      padding: `${padding}px`,
      width: `${width}px`,
      color: "#fff",
      fontWeight: 700,
      lineHeight: 1.4,
      boxSizing: "border-box",
      transition: "all 0.25s ease",
      boxShadow: "0 18px 40px rgba(0, 0, 0, 0.18)",
      border: "1px solid rgba(255,255,255,0.12)",
    }),
    [bgColor, radius, padding, width]
  );

  const cssCode = `.demo-box {
  background: ${bgColor};
  border-radius: ${radius}px;
  padding: ${padding}px;
  width: ${width}px;
}`;

  return (
    <div className="content-flow">
      <h3 className="playground-title">Playground: Цвета и фон</h3>
      <p>Меняй свойства слева и смотри, как они влияют на блок справа.</p>

      <div className="grid grid-2 playground-layout">
        <div className="card playground-controls">
          <Control label="Текст">
            <input
              className="input"
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </Control>

          <Control label="Цвет фона">
            <select
              className="select"
              value={bgColor}
              onChange={(e) => setBgColor(e.target.value)}
            >
              {COLORS.map((color) => (
                <option key={color.value} value={color.value}>
                  {color.label}
                </option>
              ))}
            </select>
          </Control>

          <Control label={`Скругление: ${radius}px`}>
            <input
              className="range"
              type="range"
              min="0"
              max="40"
              value={radius}
              onChange={(e) => setRadius(Number(e.target.value))}
            />
          </Control>

          <Control label={`Внутренний отступ: ${padding}px`}>
            <input
              className="range"
              type="range"
              min="0"
              max="48"
              value={padding}
              onChange={(e) => setPadding(Number(e.target.value))}
            />
          </Control>

          <Control label={`Ширина блока: ${width}px`}>
            <input
              className="range"
              type="range"
              min="180"
              max="320"
              value={width}
              onChange={(e) => setWidth(Number(e.target.value))}
            />
          </Control>
        </div>

        <div className="card playground-preview-card">
          <div className="playground-stage" style={{ minHeight: "220px", overflow: "hidden" }}>
            <div style={previewStyle}>{text}</div>
          </div>

          <pre className="code">
            <code>{cssCode}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}