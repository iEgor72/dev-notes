import { useMemo, useState } from "react";
import CodeBlock from "../components/ui/CodeBlock";

const TAGS = ["h1", "h2", "h3", "p"];

const INITIAL_TEXT = {
  h1: "Developer Notes",
  h2: "HTML",
  h3: "Ссылки",
  p: "Это обычный абзац текста.",
};

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

export default function TypographyPlayground() {
  const [activeTag, setActiveTag] = useState("h1");
  const [texts, setTexts] = useState(INITIAL_TEXT);

  const activeText = texts[activeTag];
  const PreviewTag = activeTag;

  const htmlCode = useMemo(() => {
    return `<${activeTag}>${escapeHtml(activeText)}</${activeTag}>`;
  }, [activeTag, activeText]);

  return (
    <div className="content-flow">
      <h3 className="playground-title">Playground: Заголовки и текст</h3>

      <div className="typography-tabs">
        {TAGS.map((tag) => (
          <button
            key={tag}
            type="button"
            className={`button button--secondary ${activeTag === tag ? "is-active" : ""}`}
            onClick={() => setActiveTag(tag)}
          >
            {tag.toUpperCase()}
          </button>
        ))}
      </div>

      <label className="label" htmlFor="typography-text">
        Текст для {activeTag.toUpperCase()}
      </label>
      <input
        id="typography-text"
        className="input"
        value={activeText}
        onChange={(e) =>
          setTexts((prev) => ({ ...prev, [activeTag]: e.target.value }))
        }
      />

      <div className="card playground-preview-card">
        <div className="playground-stage">
          <PreviewTag>{activeText}</PreviewTag>
        </div>
      </div>

      <CodeBlock>{htmlCode}</CodeBlock>
    </div>
  );
}