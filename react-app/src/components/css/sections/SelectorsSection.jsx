import SectionCard from "../../ui/SectionCard";
import CodeBlock from "../../ui/CodeBlock";
import Note from "../../ui/Note";
import TableWrap from "../../ui/TableWrap";
import SelectorsPlayground from "../../../playgrounds/SelectorsPlayground";

function SelectorsSection() {
  return (
    <SectionCard
      id="selectors"
      title="Селекторы"
      titleId="selectors-title"
    >
      <p>
        Селекторы определяют, к каким элементам применять стили. Чем точнее
        селектор, тем проще контролировать каскад и избегать конфликтов.
      </p>

      <CodeBlock>
        {`.card {
  border: 1px solid #d1d5db;
}

.card__title {
  font-weight: 700;
}

.card:hover .card__title {
  color: #2563eb;
}

input[type="email"] {
  border-color: #0ea5e9;
}`}
      </CodeBlock>

      <Note>
        ⚠️ Старайся не перегружать селекторы глубокой вложенностью, иначе
        переопределять стили станет сложно.
      </Note>

      <TableWrap>
        <table className="table">
          <caption>Частые типы селекторов</caption>

          <thead>
            <tr>
              <th scope="col">Тип</th>
              <th scope="col">Пример</th>
              <th scope="col">Когда использовать</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Класс</td>
              <td><code>.button</code></td>
              <td>Основной способ стилизации UI-компонентов</td>
            </tr>
            <tr>
              <td>Потомок</td>
              <td><code>.card .title</code></td>
              <td>Когда нужно стилизовать элемент внутри блока</td>
            </tr>
            <tr>
              <td>Псевдокласс</td>
              <td><code>a:hover</code></td>
              <td>Для интерактивных состояний</td>
            </tr>
            <tr>
              <td>Атрибут</td>
              <td><code>input[type="email"]</code></td>
              <td>Для таргетинга по атрибуту без лишних классов</td>
            </tr>
          </tbody>
        </table>
      </TableWrap>

      <SelectorsPlayground />
    </SectionCard>
  );
}

export default SelectorsSection;