function HtmlHero() {
  return (
    <section className="hero card" aria-labelledby="page-title">
      <span className="badge">HTML</span>

      <div>
        <h1 className="title" id="page-title">
          Шпаргалка по HTML
        </h1>

        <p className="subtitle">
          Базовая структура документа, элементы, атрибуты, ссылки,
          изображения, списки, формы и семантические теги — с простыми
          примерами и полезными пояснениями.
        </p>
      </div>
    </section>
  );
}

export default HtmlHero;