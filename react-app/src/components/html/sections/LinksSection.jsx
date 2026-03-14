import SectionCard from "../../ui/SectionCard";
import CodeBlock from "../../ui/CodeBlock";
import TableWrap from "../../ui/TableWrap";
import Note from "../../ui/Note";

function LinksSection() {
  return (
    <SectionCard
      id="links"
      title="Ссылки"
      titleId="links-title"
    >
      <p>
        Тег <code>&lt;a&gt;</code> используется для переходов между
        страницами, сайтами, разделами страницы, а также для email-
        и телефонных ссылок.
      </p>

      <CodeBlock>
        {`<a href="https://google.com">Открыть Google</a>
<a href="./about.html">Перейти на страницу About</a>
<a href="#contacts">Перейти к контактам</a>
<a href="mailto:hello@example.com">Написать письмо</a>
<a href="tel:+41791234567">Позвонить</a>`}
      </CodeBlock>

      <TableWrap>
        <table className="table">
          <caption>Частые атрибуты ссылок</caption>

          <thead>
            <tr>
              <th scope="col">Атрибут</th>
              <th scope="col">Назначение</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td><code>href</code></td>
              <td>Адрес ссылки</td>
            </tr>
            <tr>
              <td><code>target="_blank"</code></td>
              <td>Открывает ссылку в новой вкладке</td>
            </tr>
            <tr>
              <td><code>rel="noopener noreferrer"</code></td>
              <td>
                Повышает безопасность внешних ссылок, открывающихся в новой вкладке
              </td>
            </tr>
            <tr>
              <td><code>title</code></td>
              <td>
                Подсказка при наведении; не должна быть единственным
                источником важной информации
              </td>
            </tr>
          </tbody>
        </table>
      </TableWrap>

      <Note>
        Для внешних ссылок, которые открываются в новой вкладке, желательно
        добавлять <code>rel="noopener noreferrer"</code>.
      </Note>

      <Note>
        Лучше писать понятный текст ссылки, например «Документация MDN»,
        а не просто «Нажми сюда».
      </Note>
    </SectionCard>
  );
}

export default LinksSection;