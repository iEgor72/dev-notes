import SectionCard from "../../ui/SectionCard";
import CodeBlock from "../../ui/CodeBlock";
import Note from "../../ui/Note";
import PositionPlayground from "../../../playgrounds/PositionPlayground";

function PositionSection() {
  return (
    <SectionCard
      id="position"
      title="position"
      titleId="position-title"
    >
      <p>
        Свойство <code>position</code> управляет способом позиционирования элемента.
      </p>

      <CodeBlock>
        {`.box {
  position: relative;
}

.badge {
  position: absolute;
  top: 10px;
  right: 10px;
}

.header {
  position: sticky;
  top: 0;
}`}
      </CodeBlock>

      <ul>
        <li><code>static</code> — обычное поведение</li>
        <li><code>relative</code> — смещение относительно себя</li>
        <li><code>absolute</code> — позиционирование внутри ближайшего предка</li>
        <li><code>fixed</code> — привязка к окну браузера</li>
        <li><code>sticky</code> — прилипание при скролле</li>
      </ul>

      <Note>
        ⚠️ Для <code>absolute</code> заранее ставь <code>position: relative</code>{" "}
        родителю, иначе элемент может "уехать" к <code>body</code>.
      </Note>

      <PositionPlayground />
    </SectionCard>
  );
}

export default PositionSection;