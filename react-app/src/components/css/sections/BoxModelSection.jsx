import SectionCard from "../../ui/SectionCard";
import CodeBlock from "../../ui/CodeBlock";
import Note from "../../ui/Note";
import BoxModelPlayground from "../../../playgrounds/BoxModelPlayground";

function BoxModelSection() {
  return (
    <SectionCard
      id="box-model"
      title="Блочная модель"
      titleId="box-model-title"
    >
      <p>
        Каждый HTML-элемент можно представить как прямоугольный блок.
        Он состоит из content, padding, border и margin.
      </p>

      <CodeBlock>
        {`.card {
  width: 300px;
  padding: 20px;
  border: 1px solid #444;
  margin: 24px;
}`}
      </CodeBlock>

      <Note>
        Очень полезно глобально задавать <code>box-sizing: border-box</code>.
      </Note>

      <BoxModelPlayground />
    </SectionCard>
  );
}

export default BoxModelSection;