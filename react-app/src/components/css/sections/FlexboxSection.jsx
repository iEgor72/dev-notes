import SectionCard from "../../ui/SectionCard";
import CodeBlock from "../../ui/CodeBlock";
import Note from "../../ui/Note";
import FlexPlayground from "../../../playgrounds/FlexPlayground";

function FlexboxSection() {
  return (
    <SectionCard id="flexbox" title="Flexbox" titleId="flexbox-title">
      <p>
        Flexbox помогает выстраивать элементы в строку или колонку и удобно ими
        управлять.
      </p>

      <CodeBlock>
        {`.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
}`}
      </CodeBlock>

      <ul>
        <li><code>justify-content</code> — выравнивание по главной оси</li>
        <li><code>align-items</code> — выравнивание по поперечной оси</li>
        <li><code>gap</code> — расстояние между элементами</li>
        <li><code>flex-direction</code> — направление</li>
      </ul>

      <Note>
        Flexbox особенно удобен для меню, карточек и выравнивания элементов в
        одной оси.
      </Note>

      <FlexPlayground />
    </SectionCard>
  );
}

export default FlexboxSection;