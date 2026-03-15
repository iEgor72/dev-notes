import { useMemo, useState } from "react";

export default function HtmlTablesPlayground() {
  const [columns, setColumns] = useState(3);
  const [striped, setStriped] = useState(true);
  const [withCaption, setWithCaption] = useState(true);

  const rows = 3;

  const htmlCode = useMemo(
    () => `<table>
  ${withCaption ? "<caption>Продажи по неделям</caption>\n  " : ""}<thead>
    <tr>
      ${Array.from({ length: columns }, (_, index) => `<th scope="col">Колонка ${index + 1}</th>`).join(
        "\n      "
      )}
    </tr>
  </thead>
  <tbody>
    <tr>
      ${Array.from({ length: columns }, (_, index) => `<td>Ячейка ${index + 1}</td>`).join(
        "\n      "
      )}
    </tr>
  </tbody>
</table>`,
    [withCaption, columns]
  );

  return (
    <section className="card card--solid content-flow">
      <h3 className="playground-title">Playground: HTML-таблица</h3>

      <div className="card playground-controls playground-controls--compact">
        <div className="playground-control-item">
          <label className="label">Колонки: {columns}</label>
          <input
            className="range"
            type="range"
            min="2"
            max="5"
            value={columns}
            onChange={(event) => setColumns(Number(event.target.value))}
          />
        </div>

        <div className="playground-control-item playground-control-item--check">
          <label className="playground-control-check" htmlFor="table-caption-toggle">
            <input
              id="table-caption-toggle"
              type="checkbox"
              checked={withCaption}
              onChange={(event) => setWithCaption(event.target.checked)}
            />
            добавить caption
          </label>
        </div>

        <div className="playground-control-item playground-control-item--check">
          <label className="playground-control-check" htmlFor="table-striped-toggle">
            <input
              id="table-striped-toggle"
              type="checkbox"
              checked={striped}
              onChange={(event) => setStriped(event.target.checked)}
            />
            полосы у строк
          </label>
        </div>
      </div>

      <div className="card playground-preview-card">
        <div
          className="playground-stage"
          style={{
            minHeight: "220px",
            padding: "14px",
            justifyContent: "flex-start",
            alignItems: "stretch",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              width: "100%",
              overflowX: "auto",
            }}
          >
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "14px" }}>
              {withCaption ? (
                <caption style={{ textAlign: "left", marginBottom: "8px", color: "#93c5fd" }}>
                  Продажи по неделям
                </caption>
              ) : null}
              <thead>
                <tr>
                  {Array.from({ length: columns }, (_, index) => (
                    <th
                      key={`head-${index}`}
                      scope="col"
                      style={{
                        textAlign: "left",
                        padding: "8px",
                        borderBottom: "1px solid rgba(148, 163, 184, 0.35)",
                        color: "#bfdbfe",
                        whiteSpace: "nowrap",
                      }}
                    >
                      Колонка {index + 1}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {Array.from({ length: rows }, (_, rowIndex) => (
                  <tr
                    key={`row-${rowIndex}`}
                    style={
                      striped && rowIndex % 2 === 1
                        ? { background: "rgba(30, 41, 59, 0.45)" }
                        : undefined
                    }
                  >
                    {Array.from({ length: columns }, (_, colIndex) => (
                      <td
                        key={`cell-${rowIndex}-${colIndex}`}
                        style={{
                          padding: "8px",
                          borderBottom: "1px solid rgba(148, 163, 184, 0.22)",
                          color: "#e2e8f0",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {rowIndex + 1}.{colIndex + 1}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <pre className="code">
          <code>{htmlCode}</code>
        </pre>
      </div>
    </section>
  );
}
