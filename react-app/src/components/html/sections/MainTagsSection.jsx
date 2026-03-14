import SectionCard from "../../ui/SectionCard";
import TableWrap from "../../ui/TableWrap";

function MainTagsSection() {
  return (
    <SectionCard
      id="main-tags"
      title="Основные HTML-теги"
      titleId="main-tags-title"
    >
      <TableWrap>
        <table className="table">
          <caption>Часто используемые HTML-теги</caption>

          <thead>
            <tr>
              <th scope="col">Тег</th>
              <th scope="col">Что делает</th>
              <th scope="col">Когда использовать</th>
              <th scope="col">Пример</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td><code>&lt;h1&gt; – &lt;h6&gt;</code></td>
              <td>Заголовки</td>
              <td>Для названия страницы и разделов</td>
              <td><code>&lt;h1&gt;Мой сайт&lt;/h1&gt;</code></td>
            </tr>

            <tr>
              <td><code>&lt;p&gt;</code></td>
              <td>Абзац</td>
              <td>Для обычного текста</td>
              <td><code>&lt;p&gt;Это абзац текста.&lt;/p&gt;</code></td>
            </tr>

            <tr>
              <td><code>&lt;a&gt;</code></td>
              <td>Ссылка</td>
              <td>Для переходов на другие страницы и сайты</td>
              <td><code>&lt;a href="https://example.com"&gt;Сайт&lt;/a&gt;</code></td>
            </tr>

            <tr>
              <td><code>&lt;img&gt;</code></td>
              <td>Изображение</td>
              <td>Для картинок и иллюстраций</td>
              <td><code>&lt;img src="cat.jpg" alt="Кот" /&gt;</code></td>
            </tr>
          </tbody>
        </table>
      </TableWrap>
    </SectionCard>
  );
}

export default MainTagsSection;