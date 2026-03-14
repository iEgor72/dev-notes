import SectionCard from "../../ui/SectionCard";
import TableWrap from "../../ui/TableWrap";

function InputTypesSection() {
  return (
    <SectionCard
      id="input-types"
      title="Популярные типы input"
      titleId="input-types-title"
    >
      <TableWrap>
        <table className="table">
          <caption>Популярные типы поля input</caption>

          <thead>
            <tr>
              <th scope="col">Тип</th>
              <th scope="col">Для чего используется</th>
              <th scope="col">Пример</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td><code>text</code></td>
              <td>Обычное текстовое поле для ввода данных</td>
              <td><code>&lt;input type="text" placeholder="Введите имя"&gt;</code></td>
            </tr>

            <tr>
              <td><code>email</code></td>
              <td>Поле для email-адреса со встроенной проверкой формата</td>
              <td><code>&lt;input type="email" placeholder="example@mail.com"&gt;</code></td>
            </tr>

            <tr>
              <td><code>password</code></td>
              <td>Поле для пароля — символы скрываются</td>
              <td><code>&lt;input type="password" placeholder="Введите пароль"&gt;</code></td>
            </tr>

            <tr>
              <td><code>number</code></td>
              <td>Поле для ввода чисел</td>
              <td><code>&lt;input type="number" min="1" max="100"&gt;</code></td>
            </tr>

            <tr>
              <td><code>tel</code></td>
              <td>Поле для номера телефона</td>
              <td><code>&lt;input type="tel" placeholder="+41 79 123 45 67"&gt;</code></td>
            </tr>

            <tr>
              <td><code>url</code></td>
              <td>Поле для ввода ссылки</td>
              <td><code>&lt;input type="url" placeholder="https://example.com"&gt;</code></td>
            </tr>

            <tr>
              <td><code>date</code></td>
              <td>Выбор даты через встроенный календарь</td>
              <td><code>&lt;input type="date"&gt;</code></td>
            </tr>

            <tr>
              <td><code>range</code></td>
              <td>Ползунок для выбора значения из диапазона</td>
              <td><code>&lt;input type="range" min="0" max="100"&gt;</code></td>
            </tr>

            <tr>
              <td><code>color</code></td>
              <td>Выбор цвета через встроенный color picker</td>
              <td><code>&lt;input type="color"&gt;</code></td>
            </tr>

            <tr>
              <td><code>checkbox</code></td>
              <td>Флажок для выбора одного или нескольких вариантов</td>
              <td><code>&lt;label&gt;&lt;input type="checkbox"&gt; Я согласен&lt;/label&gt;</code></td>
            </tr>

            <tr>
              <td><code>radio</code></td>
              <td>Выбор одного варианта из группы</td>
              <td><code>&lt;label&gt;&lt;input type="radio" name="plan"&gt; Базовый&lt;/label&gt;</code></td>
            </tr>

            <tr>
              <td><code>file</code></td>
              <td>Загрузка файлов</td>
              <td><code>&lt;input type="file"&gt;</code></td>
            </tr>
          </tbody>
        </table>
      </TableWrap>
    </SectionCard>
  );
}

export default InputTypesSection;