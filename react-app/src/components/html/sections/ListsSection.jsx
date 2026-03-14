import SectionCard from "../../ui/SectionCard";
import CodeBlock from "../../ui/CodeBlock";
import ListsPlayground from "../../../playgrounds/ListsPlayground";

function ListsSection() {
  return (
    <SectionCard
      id="lists"
      title="Списки"
      titleId="lists-title"
    >
      <p>
        Списки бывают двух основных типов: маркированные и нумерованные.
      </p>

      <p>
        Элементы списка всегда записываются в теге <code>&lt;li&gt;</code>,
        который должен находиться внутри <code>&lt;ul&gt;</code> или{" "}
        <code>&lt;ol&gt;</code>.
      </p>

      <h3>Маркированный список</h3>

      <CodeBlock>
        {`<ul>
  <li>HTML</li>
  <li>CSS</li>
  <li>JavaScript</li>
</ul>`}
      </CodeBlock>

      <h3>Нумерованный список</h3>

      <CodeBlock>
        {`<ol>
  <li>Изучить HTML</li>
  <li>Изучить CSS</li>
  <li>Изучить JavaScript</li>
</ol>`}
      </CodeBlock>

      <ListsPlayground />
    </SectionCard>
  );
}

export default ListsSection;