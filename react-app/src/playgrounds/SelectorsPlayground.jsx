import { useMemo, useState } from "react";

const TARGETS = [
  { value: "class", label: ".card-title (класс)" },
  { value: "descendant", label: ".card .card-title (потомок)" },
  { value: "hover", label: ".card:hover .card-title (состояние)" },
];

export default function SelectorsPlayground() {
  const [target, setTarget] = useState("class");
  const [accent, setAccent] = useState(215);
  const [isHover, setIsHover] = useState(false);

  const titleStyle = useMemo(() => {
    const color = `hsl(${accent} 80% 60%)`;

    if (target === "hover" && !isHover) {
      return { color: "#e2e8f0" };
    }

    return { color };
  }, [target, accent, isHover]);

  const cardStyle = useMemo(() => {
    const color = `hsl(${accent} 80% 60%)`;

    if (target === "descendant") {
      return { borderColor: color, boxShadow: `0 0 0 1px ${color} inset` };
    }

    if (target === "hover") {
      return isHover
        ? { borderColor: color, boxShadow: `0 0 0 1px ${color} inset` }
        : { borderColor: "rgba(148, 163, 184, 0.35)" };
    }

    return { borderColor: "rgba(148, 163, 184, 0.35)" };
  }, [target, accent, isHover]);

  const cssCode = useMemo(() => {
    if (target === "class") {
      return `.card-title {
  color: hsl(${accent} 80% 60%);
}`;
    }

    if (target === "descendant") {
      return `.card .card-title {
  color: hsl(${accent} 80% 60%);
}`;
    }

    return `.card:hover .card-title {
  color: hsl(${accent} 80% 60%);
}`;
  }, [target, accent]);

  return (
    <section className="card card--solid content-flow">
      <h3 className="playground-title">Playground: селекторы</h3>

      <div className="card playground-controls playground-controls--compact">
        <div className="playground-control-item">
          <label className="label" htmlFor="selector-target">
            Тип селектора
          </label>
          <select
            id="selector-target"
            className="select"
            value={target}
            onChange={(event) => setTarget(event.target.value)}
          >
            {TARGETS.map((item) => (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            ))}
          </select>
        </div>

        <div className="playground-control-item">
          <label className="label">Акцентный цвет: {accent}</label>
          <input
            className="range"
            type="range"
            min="170"
            max="320"
            value={accent}
            onChange={(event) => setAccent(Number(event.target.value))}
          />
        </div>
      </div>

      <div className="card playground-preview-card">
        <div
          className="playground-stage"
          style={{
            minHeight: "180px",
            padding: "16px",
            justifyContent: "flex-start",
            overflow: "hidden",
          }}
        >
          <div
            className="card"
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
            style={{
              width: "100%",
              border: "1px solid",
              borderRadius: "12px",
              padding: "12px",
              background: "rgba(15, 23, 42, 0.55)",
              ...cardStyle,
            }}
          >
            <p style={{ margin: "0 0 8px", color: "#94a3b8" }}>
              Карточка
            </p>
            <p style={{ margin: 0, fontWeight: 700, ...titleStyle }}>
              card-title
            </p>
          </div>
        </div>

        {target === "hover" ? (
          <p style={{ margin: 0 }}>
            Наведи курсор на карточку, чтобы активировать <code>:hover</code>.
          </p>
        ) : null}

        <pre className="code">
          <code>{cssCode}</code>
        </pre>
      </div>
    </section>
  );
}
