import { useMemo, useState } from "react";

export default function JsEventsPlayground() {
  const [eventType, setEventType] = useState("click");
  const [bubble, setBubble] = useState(true);
  const [count, setCount] = useState(0);

  const handleChild = (event) => {
    if (!bubble) {
      event.stopPropagation();
    }
    setCount((prev) => prev + 1);
  };

  const handleParent = () => {
    if (bubble) {
      setCount((prev) => prev + 1);
    }
  };

  const resetCount = () => setCount(0);

  const code = useMemo(
    () => `const child = document.querySelector(".child");
const parent = document.querySelector(".parent");

child.addEventListener("${eventType}", (event) => {
  ${bubble ? "// событие всплывает к parent" : "event.stopPropagation();"}
});

parent.addEventListener("${eventType}", () => {
  console.log("parent handler");
});`,
    [eventType, bubble]
  );

  return (
    <section className="card card--solid content-flow">
      <h3 className="playground-title">Playground: события и всплытие</h3>

      <div className="card playground-controls playground-controls--compact">
        <div className="playground-control-item">
          <label className="label" htmlFor="js-event-type">
            Тип события
          </label>
          <select
            id="js-event-type"
            className="select"
            value={eventType}
            onChange={(event) => setEventType(event.target.value)}
          >
            <option value="click">click</option>
            <option value="dblclick">dblclick</option>
          </select>
        </div>

        <div className="playground-control-item playground-control-item--check">
          <label className="playground-control-check" htmlFor="js-bubble-toggle">
            <input
              id="js-bubble-toggle"
              type="checkbox"
              checked={bubble}
              onChange={(event) => setBubble(event.target.checked)}
            />
            включить всплытие
          </label>
        </div>
      </div>

      <div className="card playground-preview-card">
        <div
          className="playground-stage"
          style={{
            minHeight: "200px",
            padding: "16px",
            justifyContent: "center",
            overflow: "hidden",
          }}
        >
          <div
            onClick={eventType === "click" ? handleParent : undefined}
            onDoubleClick={eventType === "dblclick" ? handleParent : undefined}
            style={{
              width: "100%",
              maxWidth: "320px",
              minHeight: "130px",
              border: "1px dashed rgba(56, 189, 248, 0.6)",
              borderRadius: "12px",
              display: "grid",
              placeItems: "center",
              padding: "12px",
            }}
          >
            <button
              type="button"
              onClick={eventType === "click" ? handleChild : undefined}
              onDoubleClick={eventType === "dblclick" ? handleChild : undefined}
              style={{
                padding: "10px 12px",
                borderRadius: "8px",
                border: "1px solid rgba(59, 130, 246, 0.55)",
                background: "rgba(37, 99, 235, 0.3)",
                color: "#dbeafe",
                cursor: "pointer",
              }}
            >
              child handler
            </button>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "12px",
          }}
        >
          <p style={{ margin: 0 }}>Сработало обработчиков: {count}</p>
          <button
            type="button"
            onClick={resetCount}
            style={{
              padding: "6px 10px",
              borderRadius: "8px",
              border: "1px solid rgba(148, 163, 184, 0.45)",
              background: "rgba(15, 23, 42, 0.7)",
              color: "#e2e8f0",
              cursor: "pointer",
            }}
          >
            Сбросить
          </button>
        </div>

        <pre className="code">
          <code>{code}</code>
        </pre>
      </div>
    </section>
  );
}
