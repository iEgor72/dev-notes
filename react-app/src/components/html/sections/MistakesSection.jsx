import SectionCard from "../../ui/SectionCard";
import CodeBlock from "../../ui/CodeBlock";
import TableWrap from "../../ui/TableWrap";

function MistakesSection() {
  return (
    <SectionCard
      id="mistakes"
      title="Частые ошибки новичков"
      titleId="mistakes-title"
    >
      <TableWrap>
        <table className="table">
          <caption>Типичные ошибки при работе с HTML</caption>

          <thead>
            <tr>
              <th scope="col">Ошибка</th>
              <th scope="col">Почему плохо</th>
              <th scope="col">Как правильно</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Использовать только <code>&lt;div&gt;</code> везде</td>
              <td>Страница теряет смысловую структуру</td>
              <td>
                Использовать <code>&lt;header&gt;</code>, <code>&lt;main&gt;</code>,{" "}
                <code>&lt;section&gt;</code>, <code>&lt;footer&gt;</code>
              </td>
            </tr>

            <tr>
              <td>Не указывать <code>alt</code> у картинки</td>
              <td>Плохо для доступности и понимания изображения</td>
              <td>Добавлять понятное описание изображения</td>
            </tr>

            <tr>
              <td>Пропускать <code>&lt;label&gt;</code> у формы</td>
              <td>Поля менее понятны пользователю</td>
              <td>
                Связывать <code>label</code> с <code>input</code> через{" "}
                <code>for</code> и <code>id</code>
              </td>
            </tr>

            <tr>
              <td>Ставить несколько <code>&lt;h1&gt;</code> без необходимости</td>
              <td>Путает структуру документа</td>
              <td>Делать логичную иерархию заголовков</td>
            </tr>

            <tr>
              <td>
                Открывать внешнюю ссылку в новой вкладке без{" "}
                <code>rel="noopener noreferrer"</code>
              </td>
              <td>Это менее безопасно</td>
              <td>Добавлять <code>rel="noopener noreferrer"</code></td>
            </tr>

            <tr>
              <td>Использовать <code>&lt;br&gt;</code> вместо абзацев</td>
              <td>Текст становится менее структурированным</td>
              <td>Для отдельных абзацев использовать <code>&lt;p&gt;</code></td>
            </tr>

            <tr>
              <td>Делать кнопку из <code>&lt;div&gt;</code></td>
              <td>Элемент теряет правильное поведение и смысл</td>
              <td>Использовать <code>&lt;button&gt;</code> для действий</td>
            </tr>

            <tr>
              <td>Не указывать <code>lang="ru"</code> у документа</td>
              <td>Это ухудшает доступность и понимание языка страницы</td>
              <td>Указывать язык в теге <code>&lt;html&gt;</code></td>
            </tr>
          </tbody>
        </table>
      </TableWrap>

      <div className="compare">
        <div className="card">
          <h3>Плохо</h3>
          <CodeBlock>{`<div>Отправить</div>`}</CodeBlock>
        </div>

        <div className="card">
          <h3>Лучше</h3>
          <CodeBlock>{`<button>Отправить</button>`}</CodeBlock>
        </div>
      </div>

      <div className="compare">
        <div className="card">
          <h3>Плохо</h3>
          <CodeBlock>
            {`Текст<br>
Текст<br>
Текст`}
          </CodeBlock>
        </div>

        <div className="card">
          <h3>Лучше</h3>
          <CodeBlock>
            {`<p>Текст</p>
<p>Текст</p>`}
          </CodeBlock>
        </div>
      </div>
    </SectionCard>
  );
}

export default MistakesSection;