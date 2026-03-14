import SectionCard from "../../ui/SectionCard";
import CodeBlock from "../../ui/CodeBlock";
import TableWrap from "../../ui/TableWrap";

function CssSyntaxSection() {
  return (
    <SectionCard
      id="css-syntax"
      title="Синтаксис CSS"
      titleId="css-syntax-title"
    >
      <p>
        CSS-правило обычно состоит из <strong>селектора</strong> и блока
        свойств.
      </p>

      <CodeBlock>
        {`p {
  color: white;
  font-size: 18px;
}`}
      </CodeBlock>

      <TableWrap>
        <table className="table">
          <caption>Части CSS-правила</caption>

          <thead>
            <tr>
              <th scope="col">Часть</th>
              <th scope="col">Что делает</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td><code>p</code></td>
              <td>Селектор — указывает, к какому элементу применяются стили</td>
            </tr>
            <tr>
              <td><code>color</code></td>
              <td>Свойство — что именно меняем</td>
            </tr>
            <tr>
              <td><code>white</code></td>
              <td>Значение — каким будет результат</td>
            </tr>
          </tbody>
        </table>
      </TableWrap>
    </SectionCard>
  );
}

export default CssSyntaxSection;