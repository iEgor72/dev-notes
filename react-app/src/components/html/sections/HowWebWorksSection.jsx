import SectionCard from "../../ui/SectionCard";

function HowWebWorksSection() {
  return (
    <SectionCard
      id="how-web-page-works"
      title="Как работает веб-страница"
      titleId="how-web-page-works-title"
    >
      <p>
        Современная веб-страница обычно состоит из трёх основных
        технологий:
      </p>

      <ul>
        <li><strong>HTML</strong> — структура и содержимое</li>
        <li><strong>CSS</strong> — внешний вид и оформление</li>
        <li><strong>JavaScript</strong> — поведение и интерактивность</li>
      </ul>

      <p>
        HTML описывает, <strong>что находится на странице</strong>. CSS
        определяет, <strong>как это выглядит</strong>. JavaScript
        добавляет <strong>логику и действия</strong>.
      </p>
    </SectionCard>
  );
}

export default HowWebWorksSection;