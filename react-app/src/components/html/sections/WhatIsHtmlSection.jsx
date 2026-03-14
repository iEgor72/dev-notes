import SectionCard from "../../ui/SectionCard";
import Note from "../../ui/Note";

function WhatIsHtmlSection() {
  return (
    <SectionCard
      id="what-is-html"
      title="Что такое HTML"
      titleId="what-is-html-title"
    >
      <p>
        <strong>HTML</strong> — это язык разметки, который задаёт
        структуру страницы: заголовки, текст, изображения, ссылки,
        таблицы, формы и смысловые блоки.
      </p>

      <p>
        HTML отвечает за <strong>содержимое и структуру</strong>, CSS — за
        <strong> оформление</strong>, JavaScript — за
        <strong> поведение</strong> страницы.
      </p>

      <Note>
        HTML нужен не для того, чтобы сделать страницу красивой, а для
        того, чтобы правильно описать её структуру и смысл.
      </Note>
    </SectionCard>
  );
}

export default WhatIsHtmlSection;