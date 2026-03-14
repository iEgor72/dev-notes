import SectionCard from "../../ui/SectionCard";
import CodeBlock from "../../ui/CodeBlock";
import Note from "../../ui/Note";
import ResponsivePlayground from "../../../playgrounds/ResponsivePlayground";

function ResponsiveSection() {
  return (
    <SectionCard
      id="responsive"
      title="Адаптивность"
      titleId="responsive-title"
    >
      <p>
        Адаптивность позволяет интерфейсу хорошо выглядеть на разных экранах:
        телефонах, планшетах и десктопах.
      </p>

      <CodeBlock>
        {`@media (max-width: 768px) {
  .layout {
    grid-template-columns: 1fr;
  }

  .nav {
    flex-direction: column;
  }
}`}
      </CodeBlock>

      <Note>
        Сначала делай layout гибким, а потом точечно добавляй media queries.
      </Note>

      <ResponsivePlayground />
    </SectionCard>
  );
}

export default ResponsiveSection;