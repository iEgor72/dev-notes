import { useMemo, useState } from "react";
import CodeBlock from "../components/ui/CodeBlock";

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

export default function ListsPlayground() {
  const [listType, setListType] = useState("ul");
  const [rawItems, setRawItems] = useState("HTML\nCSS\nJavaScript");

  const items = useMemo(() => {
    return rawItems
      .split("\n")
      .map((item) => item.trim())
      .filter(Boolean);
  }, [rawItems]);

  const htmlCode = useMemo(() => {
    const liLines = items
      .map((item) => `  <li>${escapeHtml(item)}</li>`)
      .join("\n");
    return `<${listType}>\n${liLines}\n</${listType}>`;
  }, [items, listType]);

  const ListTag = listType;

  return (
    <div className="content-flow">
      <h3 className="playground-title">Playground: Списки</h3>

      <div className="typography-tabs">
        <button
          type="button"
          className={`button button--secondary ${listType === "ul" ? "is-active" : ""}`}
          onClick={() => setListType("ul")}
        >
          UL (маркированный)
        </button>

        <button
          type="button"
          className={`button button--secondary ${listType === "ol" ? "is-active" : ""}`}
          onClick={() => setListType("ol")}
        >
          OL (нумерованный)
        </button>
      </div>

      <label className="label" htmlFor="list-items-input">
        Пункты списка (каждый с новой строки)
      </label>

      <textarea
        id="list-items-input"
        className="textarea"
        rows={3}
        value={rawItems}
        onChange={(e) => setRawItems(e.target.value)}
      />

      <div className="card playground-preview-card">
        <div
          className="playground-stage"
          style={{
            minHeight: "120px",
            padding: "12px 16px",
            alignItems: "flex-start",
            justifyContent: "flex-start",
          }}
        >
          <ListTag>
            {items.map((item, index) => (
              <li key={`${item}-${index}`}>{item}</li>
            ))}
          </ListTag>
        </div>
      </div>

      <CodeBlock>{htmlCode}</CodeBlock>
    </div>
  );
}
