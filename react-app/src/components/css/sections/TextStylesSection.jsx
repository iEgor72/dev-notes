import SectionCard from "../../ui/SectionCard";
import CodeBlock from "../../ui/CodeBlock";
import Note from "../../ui/Note";
import TableWrap from "../../ui/TableWrap";
import TextStylesPlayground from "../../../playgrounds/TextStylesPlayground";

function TextStylesSection() {
  return (
    <SectionCard
      id="text-styles"
      title="Текст и шрифты"
      titleId="text-styles-title"
    >
      <p>
        Типографика влияет на читаемость интерфейса: размер, межстрочный
        интервал и насыщенность должны работать вместе, а не по отдельности.
      </p>

      <CodeBlock>
        {`body {
  font-family: Arial, sans-serif;
  font-size: 16px;
  line-height: 1.6;
}

h1 {
  font-size: 48px;
  font-weight: 700;
}

p {
  text-align: left;
}`}
      </CodeBlock>

      <p>
        Для базового текста обычно достаточно 16px и <code>line-height</code>{" "}
        около 1.5-1.7. Заголовки лучше проверять на длинных строках.
      </p>

      <Note>💡 Не выравнивай длинные абзацы по ширине: это ухудшает чтение.</Note>

      <TableWrap>
        <table className="table">
          <caption>Частые свойства для текста</caption>

          <thead>
            <tr>
              <th scope="col">Свойство</th>
              <th scope="col">Что делает</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td><code>font-family</code></td>
              <td>Выбирает шрифт</td>
            </tr>
            <tr>
              <td><code>font-size</code></td>
              <td>Размер текста</td>
            </tr>
            <tr>
              <td><code>font-weight</code></td>
              <td>Толщина шрифта</td>
            </tr>
            <tr>
              <td><code>line-height</code></td>
              <td>Межстрочный интервал</td>
            </tr>
            <tr>
              <td><code>text-align</code></td>
              <td>Выравнивание текста</td>
            </tr>
          </tbody>
        </table>
      </TableWrap>

      <p>Попробуй менять параметры текста и сравнивать читаемость вживую.</p>

      <TextStylesPlayground />
    </SectionCard>
  );
}

export default TextStylesSection;