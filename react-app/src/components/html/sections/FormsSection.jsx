import SectionCard from "../../ui/SectionCard";
import CodeBlock from "../../ui/CodeBlock";
import TableWrap from "../../ui/TableWrap";
import Note from "../../ui/Note";

function FormsSection() {
  return (
    <SectionCard
      id="forms"
      title="Формы и кнопки"
      titleId="forms-title"
    >
      <p>
        Формы нужны для отправки данных: логин, регистрация, поиск,
        обратная связь.
      </p>

      <CodeBlock>
        {`<form action="/submit" method="post">
  <label for="name">Имя</label>
  <input
    type="text"
    id="name"
    name="name"
    autocomplete="name"
    placeholder="Введите имя"
    required
  />

  <label for="email">Email</label>
  <input
    type="email"
    id="email"
    name="email"
    autocomplete="email"
    placeholder="Введите email"
    required
  />

  <label for="message">Сообщение</label>
  <textarea
    id="message"
    name="message"
    rows="4"
    placeholder="Введите сообщение"
  ></textarea>

  <button type="submit">Отправить</button>
</form>`}
      </CodeBlock>

      <TableWrap>
        <table className="table">
          <caption>Основные элементы формы</caption>

          <thead>
            <tr>
              <th scope="col">Тег</th>
              <th scope="col">Для чего нужен</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td><code>&lt;form&gt;</code></td>
              <td>Обёртка для полей формы</td>
            </tr>
            <tr>
              <td><code>&lt;input&gt;</code></td>
              <td>Поле ввода</td>
            </tr>
            <tr>
              <td><code>&lt;label&gt;</code></td>
              <td>Подпись к полю</td>
            </tr>
            <tr>
              <td><code>&lt;button&gt;</code></td>
              <td>Кнопка отправки или действия</td>
            </tr>
            <tr>
              <td><code>&lt;textarea&gt;</code></td>
              <td>Поле для большого текста</td>
            </tr>
            <tr>
              <td><code>&lt;select&gt;</code></td>
              <td>Выпадающий список</td>
            </tr>
          </tbody>
        </table>
      </TableWrap>

      <p>
        <strong>label</strong> — это название поля.<br />
        <strong>placeholder</strong> — это подсказка внутри поля.
      </p>

      <p>
        <code>placeholder</code> не должен заменять <code>label</code>.
        Поле должно быть понятно пользователю даже без текста-подсказки.
      </p>

      <Note>
        Атрибут <code>name</code> нужен для отправки данных формы на сервер.
      </Note>

      <Note>
        Для полей формы часто полезны атрибуты <code>autocomplete</code>,
        <code> required</code> и понятные тексты ошибок.
      </Note>
    </SectionCard>
  );
}

export default FormsSection;