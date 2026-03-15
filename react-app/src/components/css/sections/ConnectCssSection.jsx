import SectionCard from "../../ui/SectionCard";
import CodeBlock from "../../ui/CodeBlock";
import Note from "../../ui/Note";

function ConnectCssSection() {
  return (
    <SectionCard
      id="connect-css"
      title="Как подключить CSS"
      titleId="connect-css-title"
    >
      <p>
        CSS можно подключить внешним файлом, через тег <code>style</code> или
        inline-атрибутом. В реальных проектах почти всегда используют внешний
        файл: его проще поддерживать и переиспользовать.
      </p>

      <CodeBlock>
        {`<!-- основной и рекомендуемый способ -->
<link rel="stylesheet" href="/styles/main.css" />

<!-- допустимо для небольших демо -->
<style>
  .title {
    color: #1f2937;
  }
</style>

<!-- только для точечных случаев -->
<p style="color: #dc2626;">Текст</p>`}
      </CodeBlock>

      <Note>⚠️ Inline-стили усложняют поддержку и почти не переиспользуются.</Note>
    </SectionCard>
  );
}

export default ConnectCssSection;