import SectionCard from "../../ui/SectionCard";
import CodeBlock from "../../ui/CodeBlock";

function SimpleContentSection() {
  return (
    <SectionCard
      id="simple-content"
      title="Пример простого контента"
      titleId="simple-content-title"
    >
      <CodeBlock>
        {`<h1>Добро пожаловать</h1>
<p>Это моя первая HTML-страница.</p>
<a href="https://developer.mozilla.org/" target="_blank" rel="noopener noreferrer">
  Изучать HTML на MDN
</a>`}
      </CodeBlock>
    </SectionCard>
  );
}

export default SimpleContentSection;