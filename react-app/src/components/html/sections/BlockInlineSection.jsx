import SectionCard from "../../ui/SectionCard";
import CodeBlock from "../../ui/CodeBlock";
import Note from "../../ui/Note";

function BlockInlineSection() {
  return (
    <SectionCard
      id="block-inline"
      title="Блочные и строчные элементы"
      titleId="block-inline-title"
    >
      <p>
        HTML-элементы часто делят на два основных типа: блочные и строчные.
      </p>

      <h3>Блочные элементы</h3>

      <p>
        Обычно занимают всю доступную ширину и начинаются с новой строки.
      </p>

      <CodeBlock>
        {`<h1>
<p>
<div>
<section>`}
      </CodeBlock>

      <h3>Строчные элементы</h3>

      <p>
        Располагаются внутри строки и занимают только нужную ширину.
      </p>

      <CodeBlock>
        {`<span>
<a>
<strong>
<em>`}
      </CodeBlock>

      <Note>
        Это упрощённая модель для старта. В CSS поведение элемента также
        зависит от свойства <code>display</code>.
      </Note>
    </SectionCard>
  );
}

export default BlockInlineSection;