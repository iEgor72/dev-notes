import SectionCard from "../../ui/SectionCard";
import CodeBlock from "../../ui/CodeBlock";
import Note from "../../ui/Note";
import ColorPlayground from "../../../playgrounds/ColorPlayground";

function ColorsSection() {
  return (
    <SectionCard
      id="colors"
      title="Цвета и фон"
      titleId="colors-title"
    >
      <p>
        В CSS можно задавать цвет текста, фон, прозрачность и градиенты.
      </p>

      <CodeBlock>
        {`body {
  color: white;
  background: #111;
}

.card {
  background: rgb(20, 25, 40);
  border-color: rgba(255, 255, 255, 0.1);
}

.hero {
  background: linear-gradient(180deg, #0b1124, #070b1a);
}`}
      </CodeBlock>

      <Note>
        На практике часто используют HEX, RGB/RGBA и CSS-переменные.
      </Note>

      <ColorPlayground />
    </SectionCard>
  );
}

export default ColorsSection;