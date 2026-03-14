import SectionCard from "../../ui/SectionCard";
import CodeBlock from "../../ui/CodeBlock";
import Note from "../../ui/Note";
import GridPlayground from "../../../playgrounds/GridPlayground";

function GridSection() {
  return (
    <SectionCard
      id="grid"
      title="Grid"
      titleId="grid-title"
    >
      <p>
        CSS Grid нужен для более сложных двумерных сеток: колонок и строк одновременно.
      </p>

      <CodeBlock>
        {`.layout {
  display: grid;
  grid-template-columns: 240px 1fr;
  gap: 24px;
}`}
      </CodeBlock>

      <Note>
        Grid особенно удобен для layout-страниц, панелей, dashboard-интерфейсов и галерей.
      </Note>

      <GridPlayground />
    </SectionCard>
  );
}

export default GridSection;