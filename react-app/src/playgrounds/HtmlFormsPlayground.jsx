import { useMemo, useState } from "react";

export default function HtmlFormsPlayground() {
  const [type, setType] = useState("email");
  const [required, setRequired] = useState(true);
  const [withLabel, setWithLabel] = useState(true);

  const inputPlaceholder = useMemo(() => {
    if (type === "email") return "name@example.com";
    if (type === "tel") return "+7 (999) 123-45-67";
    return "Введите значение";
  }, [type]);

  const htmlCode = useMemo(
    () => `<form>
  ${
    withLabel
      ? `<label for="field">Контакт</label>\n  `
      : "<!-- label отсутствует (не рекомендуется) -->\n  "
  }<input
    id="field"
    name="field"
    type="${type}"
    placeholder="${inputPlaceholder}"
    ${required ? "required" : ""}
  />
  <button type="submit">Отправить</button>
</form>`,
    [withLabel, type, inputPlaceholder, required]
  );

  return (
    <section className="card card--solid content-flow">
      <h3 className="playground-title">Playground: HTML-форма</h3>

      <div className="card playground-controls playground-controls--compact">
        <div className="playground-control-item">
          <label className="label" htmlFor="form-field-type">
            Тип поля
          </label>
          <select
            id="form-field-type"
            className="select"
            value={type}
            onChange={(event) => setType(event.target.value)}
          >
            <option value="text">text</option>
            <option value="email">email</option>
            <option value="tel">tel</option>
          </select>
        </div>

        <div className="playground-control-item playground-control-item--check">
          <label className="playground-control-check" htmlFor="form-required">
            <input
              id="form-required"
              type="checkbox"
              checked={required}
              onChange={(event) => setRequired(event.target.checked)}
            />
            required
          </label>
        </div>

        <div className="playground-control-item playground-control-item--check">
          <label className="playground-control-check" htmlFor="form-label-toggle">
            <input
              id="form-label-toggle"
              type="checkbox"
              checked={withLabel}
              onChange={(event) => setWithLabel(event.target.checked)}
            />
            label связан с input
          </label>
        </div>
      </div>

      <div className="card playground-preview-card">
        <div
          className="playground-stage"
          style={{
            minHeight: "200px",
            padding: "16px",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            overflow: "hidden",
          }}
        >
          <form
            onSubmit={(event) => event.preventDefault()}
            style={{
              width: "100%",
              maxWidth: "360px",
              display: "grid",
              gap: "10px",
            }}
          >
            {withLabel ? (
              <label className="label" htmlFor="preview-form-field">
                Контакт
              </label>
            ) : null}

            <input
              id="preview-form-field"
              type={type}
              required={required}
              placeholder={inputPlaceholder}
              style={{
                width: "100%",
                padding: "10px 12px",
                borderRadius: "8px",
                border: "1px solid rgba(148, 163, 184, 0.45)",
                background: "rgba(15, 23, 42, 0.7)",
                color: "#e2e8f0",
                boxSizing: "border-box",
              }}
            />

            <button
              type="submit"
              style={{
                justifySelf: "start",
                padding: "8px 12px",
                borderRadius: "8px",
                border: "1px solid rgba(56, 189, 248, 0.55)",
                background: "rgba(14, 116, 144, 0.35)",
                color: "#e0f2fe",
              }}
            >
              Отправить
            </button>
          </form>
        </div>

        <pre className="code">
          <code>{htmlCode}</code>
        </pre>
      </div>
    </section>
  );
}
