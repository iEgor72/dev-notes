import SectionCard from "../../ui/SectionCard";
import CodeBlock from "../../ui/CodeBlock";
import Note from "../../ui/Note";

function HtmlElementStructureSection() {
  return (
    <SectionCard
      id="html-element-structure"
      title="Как устроены HTML-элементы"
      titleId="html-element-structure-title"
    >
      <p>Большинство HTML-элементов состоит из трёх частей:</p>

      <ul>
        <li>открывающий тег</li>
        <li>содержимое</li>
        <li>закрывающий тег</li>
      </ul>

      <CodeBlock>
        {`<p>Это текст внутри абзаца</p>`}
      </CodeBlock>

      <p>
        У элементов могут быть <strong>атрибуты</strong> — это
        дополнительные настройки, которые уточняют поведение элемента.
      </p>

      <CodeBlock>
        {`<a href="https://example.com">Ссылка</a>`}
      </CodeBlock>

      <Note>
        В примере выше <code>href</code> — это атрибут, а его значение —
        адрес ссылки.
      </Note>

      <Note>
        Не все элементы имеют закрывающий тег. Например,
        <code> &lt;img&gt;</code>, <code> &lt;br&gt;</code> и
        <code> &lt;hr&gt;</code> — пустые элементы.
      </Note>
    </SectionCard>
  );
}

export default HtmlElementStructureSection;