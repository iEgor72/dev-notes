import { useState } from "react";

export default function FlexPlayground() {
  const [justify, setJustify] = useState("center");
  const [align, setAlign] = useState("center");
  const [direction, setDirection] = useState("row");
  const [gap, setGap] = useState(16);
  const previewHeight = direction === "column" ? Math.max(220, 212 + gap * 2) : 220;

  const itemStyle =
    align === "stretch"
      ? direction === "row"
        ? { height: "auto", minHeight: "60px" }
        : { width: "auto", minWidth: "60px" }
      : undefined;

  const style = {
    display: "flex",
    justifyContent: justify,
    alignItems: align,
    flexDirection: direction,
    width: "100%",
    gap: `${gap}px`,
    height: `${previewHeight}px`,
    boxSizing: "border-box",
  };

  const cssCode = `.container {
  display: flex;
  flex-direction: ${direction};
  justify-content: ${justify};
  align-items: ${align};
  gap: ${gap}px;
}`;

  return (
    <section className="card card--solid content-flow">
      <h3 className="playground-title">Playground: Flexbox</h3>

      <div className="grid grid-2">

        <div className="card playground-controls">

          <div>
            <label className="label">flex-direction</label>
            <select
              className="select"
              value={direction}
              onChange={(e) => setDirection(e.target.value)}
            >
              <option value="row">row</option>
              <option value="column">column</option>
            </select>
          </div>

          <div>
            <label className="label">justify-content</label>
            <select
              className="select"
              value={justify}
              onChange={(e) => setJustify(e.target.value)}
            >
              <option value="flex-start">flex-start</option>
              <option value="center">center</option>
              <option value="flex-end">flex-end</option>
              <option value="space-between">space-between</option>
              <option value="space-around">space-around</option>
              <option value="space-evenly">space-evenly</option>
            </select>
          </div>

          <div>
            <label className="label">align-items</label>
            <select
              className="select"
              value={align}
              onChange={(e) => setAlign(e.target.value)}
            >
              <option value="flex-start">flex-start</option>
              <option value="center">center</option>
              <option value="flex-end">flex-end</option>
              <option value="stretch">stretch</option>
            </select>
          </div>

          <div>
            <label className="label">
              gap: {gap}px
            </label>

            <input
              className="range"
              type="range"
              min="0"
              max="40"
              value={gap}
              onChange={(e) => setGap(Number(e.target.value))}
            />
          </div>

        </div>

        <div className="card playground-preview-card">
          <div
            className="playground-stage"
            style={{
              minHeight: `${previewHeight}px`,
              padding: "16px",
              justifyContent: "flex-start",
              overflow: "hidden",
            }}
          >
            <div style={style}>
              <div className="flex-box" style={itemStyle}>1</div>
              <div className="flex-box" style={itemStyle}>2</div>
              <div className="flex-box" style={itemStyle}>3</div>
            </div>
          </div>

          <pre className="code">
            <code>{cssCode}</code>
          </pre>

        </div>

      </div>

    </section>
  );
}