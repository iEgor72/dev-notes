import SectionCard from "../../ui/SectionCard";
import TableWrap from "../../ui/TableWrap";

function AttributesSection() {
  return (
    <SectionCard
      id="attributes"
      title="Полезные атрибуты"
      titleId="attributes-title"
    >
      <p>
        Атрибуты — это дополнительные настройки тега. Они пишутся в
        открывающем теге и уточняют поведение элемента.
      </p>

      <TableWrap>
        <table className="table">
          <caption>Часто используемые HTML-атрибуты</caption>

          <thead>
            <tr>
              <th scope="col">Атрибут</th>
              <th scope="col">Что делает</th>
              <th scope="col">Пример</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td><code>class</code></td>
              <td>Задаёт CSS-класс</td>
              <td><code>&lt;div class="card"&gt;&lt;/div&gt;</code></td>
            </tr>

            <tr>
              <td><code>id</code></td>
              <td>Уникальный идентификатор элемента</td>
              <td><code>&lt;section id="about"&gt;&lt;/section&gt;</code></td>
            </tr>

            <tr>
              <td><code>title</code></td>
              <td>Подсказка при наведении</td>
              <td><code>&lt;a title="Подробнее"&gt;...&lt;/a&gt;</code></td>
            </tr>

            <tr>
              <td><code>alt</code></td>
              <td>Альтернативный текст для изображений</td>
              <td><code>&lt;img alt="Логотип" /&gt;</code></td>
            </tr>

            <tr>
              <td><code>placeholder</code></td>
              <td>Подсказка внутри input</td>
              <td><code>&lt;input placeholder="Введите имя" /&gt;</code></td>
            </tr>

            <tr>
              <td><code>name</code></td>
              <td>Имя поля при отправке формы</td>
              <td><code>&lt;input name="email" /&gt;</code></td>
            </tr>

            <tr>
              <td><code>disabled</code></td>
              <td>Делает элемент неактивным</td>
              <td><code>&lt;button disabled&gt;Недоступно&lt;/button&gt;</code></td>
            </tr>

            <tr>
              <td><code>required</code></td>
              <td>Делает поле обязательным</td>
              <td><code>&lt;input required /&gt;</code></td>
            </tr>

            <tr>
              <td><code>autocomplete</code></td>
              <td>Помогает браузеру подставлять данные пользователя</td>
              <td><code>&lt;input autocomplete="email" /&gt;</code></td>
            </tr>

            <tr>
              <td><code>aria-label</code></td>
              <td>Добавляет доступное имя, когда обычного текста недостаточно</td>
              <td><code>&lt;nav aria-label="Основная навигация"&gt;&lt;/nav&gt;</code></td>
            </tr>
          </tbody>
        </table>
      </TableWrap>
    </SectionCard>
  );
}

export default AttributesSection;