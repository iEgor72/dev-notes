import SectionCard from "../../ui/SectionCard";
import CodeBlock from "../../ui/CodeBlock";
import TableWrap from "../../ui/TableWrap";
import Note from "../../ui/Note";

function SemanticTagsSection() {
  return (
    <SectionCard
      id="semantic-tags"
      title="Семантические теги"
      titleId="semantic-tags-title"
    >
      <p>
        Семантические теги помогают браузеру, поисковикам и разработчикам
        понимать структуру страницы. Они предпочтительнее, чем множество
        безымянных <code>&lt;div&gt;</code>.
      </p>

      <TableWrap>
        <table className="table">
          <caption>Популярные семантические теги</caption>

          <thead>
            <tr>
              <th scope="col">Тег</th>
              <th scope="col">Назначение</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td><code>&lt;header&gt;</code></td>
              <td>Шапка сайта или секции</td>
            </tr>
            <tr>
              <td><code>&lt;nav&gt;</code></td>
              <td>Навигация</td>
            </tr>
            <tr>
              <td><code>&lt;main&gt;</code></td>
              <td>Основное содержимое страницы</td>
            </tr>
            <tr>
              <td><code>&lt;section&gt;</code></td>
              <td>Смысловой раздел страницы</td>
            </tr>
            <tr>
              <td><code>&lt;article&gt;</code></td>
              <td>Независимый блок контента: статья, пост, карточка</td>
            </tr>
            <tr>
              <td><code>&lt;aside&gt;</code></td>
              <td>Дополнительная или боковая информация</td>
            </tr>
            <tr>
              <td><code>&lt;footer&gt;</code></td>
              <td>Подвал сайта или секции</td>
            </tr>
          </tbody>
        </table>
      </TableWrap>

      <CodeBlock>
        {`<header>
  <nav>Меню сайта</nav>
</header>

<main>
  <section>
    <h2>Новости</h2>
    <article>
      <h3>Вышла новая статья</h3>
      <p>Краткое описание новости...</p>
    </article>
  </section>
</main>

<footer>Подвал сайта</footer>`}
      </CodeBlock>

      <Note>
        Хорошее правило: если элемент можно назвать по смыслу, лучше
        выбрать семантический тег, а не <code>div</code>.
      </Note>
    </SectionCard>
  );
}

export default SemanticTagsSection;