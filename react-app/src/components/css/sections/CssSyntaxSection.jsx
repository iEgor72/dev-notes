import SectionCard from "../../ui/SectionCard";
import CodeBlock from "../../ui/CodeBlock";
import Note from "../../ui/Note";
import TableWrap from "../../ui/TableWrap";

function CssSyntaxSection() {
  return (
    <SectionCard
      id="css-syntax"
      title="Синтаксис CSS"
      titleId="css-syntax-title"
    >
      <p>
        Любое CSS-правило состоит из селектора и блока свойств. Так браузер
        понимает, к какому элементу применить стиль и какое значение поставить.
      </p>

      <CodeBlock>
        {`.card {
  color: #111827; /* свойство текста */
  background-color: #f8fafc; /* цвет фона */
  padding: 16px; /* внутренний отступ */
}`}
      </CodeBlock>

      <Note>
        ⚠️ Пропущенная точка с запятой или фигурная скобка ломает всё правило ниже
        по файлу.
      </Note>

      <TableWrap>
        <table className="table">
          <caption>Части CSS-правила</caption>
          <thead>
            <tr>
              <th scope="col">Часть</th>
              <th scope="col">Пример</th>
              <th scope="col">Зачем нужна</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Селектор</td>
              <td><code>.card</code></td>
              <td>Выбирает элемент на странице</td>
            </tr>
            <tr>
              <td>Свойство</td>
              <td><code>padding</code></td>
              <td>Определяет, что меняем</td>
            </tr>
            <tr>
              <td>Значение</td>
              <td><code>16px</code></td>
              <td>Определяет итоговый вид</td>
            </tr>
          </tbody>
        </table>
      </TableWrap>
    </SectionCard>
  );
}

export default CssSyntaxSection;