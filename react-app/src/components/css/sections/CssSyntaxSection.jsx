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
      <p>CSS можно подключить к HTML несколькими способами.</p>

      <h3>Внешний файл</h3>

      <CodeBlock>
        {`<link rel="stylesheet" href="style.css" />`}
      </CodeBlock>

      <h3>Внутри тега style</h3>

      <CodeBlock>
        {`<style>
  body {
    background: #111;
    color: white;
  }
</style>`}
      </CodeBlock>

      <h3>Inline-стили</h3>

      <CodeBlock>
        {`<p style="color: red;">Текст</p>`}
      </CodeBlock>

      <Note>
        Обычно лучше использовать внешний CSS-файл: так код чище и удобнее в поддержке.
      </Note>
    </SectionCard>
  );
}

export default ConnectCssSection;