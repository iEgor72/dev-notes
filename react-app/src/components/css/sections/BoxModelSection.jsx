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
      <h3>Что важно запомнить</h3>
      <p>
        Любой блок в CSS состоит из четырех частей: контент, внутренний отступ,
        граница и внешний отступ.
      </p>
      <ul>
        <li>
          <code>content</code> - сам текст или картинка внутри элемента
        </li>
        <li>
          <code>padding</code> - отступ внутри блока, между контентом и границей
        </li>
        <li>
          <code>margin</code> - отступ снаружи блока, между соседними элементами
        </li>
      </ul>

      <h3>Минимальный рабочий пример</h3>
      <CodeBlock>
        {`.card {
  box-sizing: border-box;
  width: 280px;
  padding: 16px;
  border: 1px solid #444;
  margin: 16px;
}`}
      </CodeBlock>

      <Note>
        Для новичков лучшее правило: сначала настраивай <code>padding</code>, и
        только потом добавляй <code>margin</code> между блоками.
      </Note>

      <h3>Попробуй руками</h3>
      <p>
        Ниже интерактив для одного блока: покрути <code>padding</code>,{" "}
        <code>border</code> и <code>margin</code>, чтобы увидеть разницу
        визуально.
      </p>

      <BoxModelPlayground />
    </SectionCard>
  );
}

export default BoxModelSection;
