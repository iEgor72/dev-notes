import SectionCard from "../../ui/SectionCard";
import CodeBlock from "../../ui/CodeBlock";
import TableWrap from "../../ui/TableWrap";
import Note from "../../ui/Note";

function ImagesSection() {
  return (
    <SectionCard
      id="images"
      title="Изображения"
      titleId="images-title"
    >
      <p>
        Тег <code>&lt;img&gt;</code> вставляет изображение на страницу.
      </p>

      <CodeBlock>
        {`<img src="images/photo.jpg" alt="Описание изображения" width="300" height="200" />`}
      </CodeBlock>

      <TableWrap>
        <table className="table">
          <caption>Частые атрибуты изображения</caption>

          <thead>
            <tr>
              <th scope="col">Атрибут</th>
              <th scope="col">Назначение</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td><code>src</code></td>
              <td>Путь к изображению</td>
            </tr>
            <tr>
              <td><code>alt</code></td>
              <td>
                Альтернативный текст: важен для доступности, экранных
                читалок и случаев, когда картинка не загрузилась
              </td>
            </tr>
            <tr>
              <td><code>width</code> / <code>height</code></td>
              <td>
                Ширина и высота изображения; помогают браузеру заранее
                выделить место под картинку
              </td>
            </tr>
          </tbody>
        </table>
      </TableWrap>

      <p>Атрибут <code>alt</code> особенно важен. Он помогает:</p>

      <ul>
        <li>если изображение не загрузилось;</li>
        <li>пользователям экранных читалок;</li>
        <li>лучше понимать содержимое изображения.</li>
      </ul>

      <Note>
        Если изображение декоративное и не несёт смысла, обычно используют
        пустой <code>alt=""</code>.
      </Note>
    </SectionCard>
  );
}

export default ImagesSection;