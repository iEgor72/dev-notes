import SectionCard from "../../ui/SectionCard";
import CodeBlock from "../../ui/CodeBlock";
import Note from "../../ui/Note";
import TableWrap from "../../ui/TableWrap";
import DisplayPlayground from "../../../playgrounds/DisplayPlayground";

function DisplaySection() {
  return (
    <SectionCard
      id="display"
      title="display"
      titleId="display-title"
    >
      <p>
        Свойство <code>display</code> управляет тем, как элемент ведёт себя в потоке.
      </p>

      <CodeBlock>
        {`.block {
  display: block;
}

.inline {
  display: inline;
}

.flex {
  display: flex;
}

.grid {
  display: grid;
}`}
      </CodeBlock>

      <TableWrap>
        <table className="table">
          <caption>Частые значения display</caption>

          <thead>
            <tr>
              <th scope="col">Значение</th>
              <th scope="col">Что делает</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td><code>block</code></td>
              <td>Элемент занимает всю строку</td>
            </tr>
            <tr>
              <td><code>inline</code></td>
              <td>Элемент остаётся внутри строки</td>
            </tr>
            <tr>
              <td><code>flex</code></td>
              <td>Включает flex-контейнер</td>
            </tr>
            <tr>
              <td><code>grid</code></td>
              <td>Включает grid-контейнер</td>
            </tr>
            <tr>
              <td><code>none</code></td>
              <td>Скрывает элемент</td>
            </tr>
          </tbody>
        </table>
      </TableWrap>

      <Note>
        ⚠️ <code>display: none</code> скрывает элемент полностью, включая
        доступность для скринридера.
      </Note>

      <DisplayPlayground />
    </SectionCard>
  );
}

export default DisplaySection;