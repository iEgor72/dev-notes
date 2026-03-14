import SectionCard from "../../ui/SectionCard";
import CodeBlock from "../../ui/CodeBlock";
import Note from "../../ui/Note";

function ContainersSection() {
  return (
    <SectionCard
      id="containers"
      title="Контейнеры div и span"
      titleId="containers-title"
    >
      <p>
        Теги <code>&lt;div&gt;</code> и <code>&lt;span&gt;</code> не имеют
        собственного смыслового значения. Они используются как контейнеры
        для группировки элементов и стилизации.
      </p>

      <p><code>div</code> — обычно блочный контейнер.</p>

      <CodeBlock>
        {`<div class="card">
  <h2>Заголовок</h2>
  <p>Описание карточки</p>
</div>`}
      </CodeBlock>

      <p><code>span</code> — обычно строчный контейнер.</p>

      <CodeBlock>
        {`<p>Это <span>важная часть</span> текста.</p>`}
      </CodeBlock>

      <Note>
        Если элемент имеет смысловое значение, лучше использовать
        семантический тег, а не просто <code>div</code>.
      </Note>
    </SectionCard>
  );
}

export default ContainersSection;