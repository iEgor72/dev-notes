import SectionCard from "../../ui/SectionCard";
import CodeBlock from "../../ui/CodeBlock";
import TableWrap from "../../ui/TableWrap";

function BasicStructureSection() {
  return (
    <SectionCard
      id="basic-structure"
      title="Базовая структура HTML"
      titleId="basic-structure-title"
    >
      <CodeBlock>
        {`<!DOCTYPE html>
<html lang="ru">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Название страницы</title>
  </head>
  <body>
    Содержимое страницы
  </body>
</html>`}
      </CodeBlock>

      <TableWrap>
        <table className="table">
          <caption>Основные части HTML-документа</caption>

          <thead>
            <tr>
              <th scope="col">Часть</th>
              <th scope="col">Что делает</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td><code>&lt;!DOCTYPE html&gt;</code></td>
              <td>Сообщает браузеру, что это HTML5-документ</td>
            </tr>

            <tr>
              <td><code>&lt;html lang="ru"&gt;</code></td>
              <td>
                Корневой элемент страницы, атрибут <code>lang</code> задаёт
                язык документа
              </td>
            </tr>

            <tr>
              <td><code>&lt;head&gt;</code></td>
              <td>
                Содержит служебную информацию: кодировку, заголовок,
                метатеги, подключение стилей
              </td>
            </tr>

            <tr>
              <td><code>&lt;body&gt;</code></td>
              <td>Содержит всё, что видит пользователь на странице</td>
            </tr>
          </tbody>
        </table>
      </TableWrap>

      <p>
        <code>head</code> нужен для служебной информации, а основной
        видимый контент страницы размещается внутри <code>body</code>.
      </p>
    </SectionCard>
  );
}

export default BasicStructureSection;