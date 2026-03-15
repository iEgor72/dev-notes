import SectionCard from "../../ui/SectionCard";
import CodeBlock from "../../ui/CodeBlock";
import Note from "../../ui/Note";

function WhatIsCssSection() {
  return (
    <SectionCard
      id="what-is-css"
      title="Что такое CSS"
      titleId="what-is-css-title"
    >
      <p>
        <strong>CSS</strong> — это язык стилей, который отвечает за
        внешний вид HTML-страницы: цвета, размеры, отступы, шрифты,
        расположение элементов и адаптивность.
      </p>

      <p>
        HTML задаёт <strong>структуру</strong>, а CSS управляет
        <strong> оформлением</strong>.
      </p>

      <CodeBlock>
        {`h1 {
  color: #2563eb;
  font-size: 32px;
}`}
      </CodeBlock>

      <Note>
        CSS не добавляет логику странице — он отвечает именно за внешний вид.
      </Note>
    </SectionCard>
  );
}

export default WhatIsCssSection;