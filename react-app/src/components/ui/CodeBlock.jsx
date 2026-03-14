import { useMemo, useState } from "react";

function detectLanguage(code) {
  const source = code.trim();

  if (!source) return "CODE";

  if (/^\s*</.test(source)) return "HTML";
  if (/^(git|npm|pnpm|yarn|npx)\b/m.test(source)) return "BASH";
  if (/@media\b|grid-template|display:\s|color:\s|\.?[a-zA-Z][\w-]*\s*\{/m.test(source)) return "CSS";
  if (/\binterface\s+\w+|\btype\s+\w+\s*=|:\s*(string|number|boolean)\b/.test(source)) return "TS";
  if (/\b(const|let|function|return|import)\b|=>/.test(source)) return "JS";

  return "CODE";
}

function CodeBlock({ children, language }) {
  const [copied, setCopied] = useState(false);
  const languageLabel = useMemo(
    () => (language ? String(language).toUpperCase() : detectLanguage(String(children))),
    [children, language]
  );

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(children);
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      console.error("Ошибка копирования:", error);
    }
  };

  return (
    <div className="code-block-react">
      <span className="code-block-react__language">{languageLabel}</span>

      <button
        className={`code-block-react__copy${copied ? " is-copied" : ""}`}
        type="button"
        onClick={handleCopy}
        aria-label={copied ? "Скопировано" : "Копировать код"}
        title={copied ? "Скопировано" : "Копировать код"}
      >
        {copied ? (
          <svg
            className="code-block-react__copy-icon"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M3 8.2L6.3 11.5L13 4.8"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ) : (
          <svg
            className="code-block-react__copy-icon"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            aria-hidden="true"
          >
            <rect
              x="5"
              y="3"
              width="8"
              height="10"
              rx="1.8"
              stroke="currentColor"
              strokeWidth="1.4"
            />
            <rect
              x="3"
              y="5"
              width="8"
              height="8"
              rx="1.8"
              stroke="currentColor"
              strokeWidth="1.4"
            />
          </svg>
        )}
      </button>

      <pre className="code-block-react__pre">
        <code className="code-block-react__content">{children}</code>
      </pre>
    </div>
  );
}

export default CodeBlock;