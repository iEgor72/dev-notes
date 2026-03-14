import SectionCard from "../../ui/SectionCard";
import CodeBlock from "../../ui/CodeBlock";
import TableWrap from "../../ui/TableWrap";
import Note from "../../ui/Note";
import TypographyPlayground from "../../../playgrounds/TypographyPlayground";

function HeadingsTextSection() {
  return (
    <SectionCard
      id="headings-text"
      title="Заголовки и текст"
      titleId="headings-text-title"
    >
      <p>
        Заголовки создают структуру страницы. Они должны идти по порядку,
        как главы и подглавы в книге.
      </p>

      <TableWrap>
        <table className="table">
          <caption>Базовые теги для заголовков и текста</caption>

          <thead>
            <tr>
              <th scope="col">Тег</th>
              <th scope="col">Для чего нужен</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td><code>&lt;h1&gt;</code></td>
              <td>Главный заголовок страницы</td>
            </tr>

            <tr>
              <td><code>&lt;h2&gt;</code></td>
              <td>Заголовок раздела</td>
            </tr>

            <tr>
              <td><code>&lt;h3&gt;</code></td>
              <td>Заголовок подраздела</td>
            </tr>

            <tr>
              <td><code>&lt;p&gt;</code></td>
              <td>Обычный абзац текста</td>
            </tr>
          </tbody>
        </table>
      </TableWrap>

      <Note>
        Не выбирай заголовок по размеру текста. Размер меняют через CSS,
        а уровень заголовка нужен для правильной структуры документа.
      </Note>
      
      <CodeBlock>
  {`<h1>Developer Notes</h1>
<h2>HTML</h2>
<h3>Ссылки</h3>
<p>Это обычный абзац текста.</p>`}
</CodeBlock>

<TypographyPlayground />
      
    </SectionCard>
  );
}

export default HeadingsTextSection;