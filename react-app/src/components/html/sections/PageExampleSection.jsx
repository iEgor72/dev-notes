import SectionCard from "../../ui/SectionCard";
import CodeBlock from "../../ui/CodeBlock";

function PageExampleSection() {
  return (
    <SectionCard
      id="page-example"
      title="Мини-пример готовой HTML-страницы"
      titleId="page-example-title"
    >
      <CodeBlock>
        {`<body>
  <a href="#main-content" class="skip-link">Перейти к содержимому</a>

  <header>
    <h1>Мой сайт</h1>
    <nav aria-label="Основная навигация">
      <a href="#about">Обо мне</a>
      <a href="#contacts">Контакты</a>
    </nav>
  </header>

  <main id="main-content">
    <section id="about">
      <h2>Обо мне</h2>
      <p>Я начинающий frontend-разработчик.</p>
    </section>

    <section id="contacts">
      <h2>Контакты</h2>
      <a href="mailto:test@mail.com">test@mail.com</a>
    </section>
  </main>

  <footer>
    <p>2026 © Мой сайт</p>
  </footer>
</body>`}
      </CodeBlock>
    </SectionCard>
  );
}

export default PageExampleSection;