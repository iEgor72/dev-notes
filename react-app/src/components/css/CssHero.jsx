function CssHero() {
  return (
    <section className="hero card" aria-labelledby="css-page-title">
      <span className="badge">CSS</span>

      <div>
        <h1 className="title" id="css-page-title">
          Шпаргалка по CSS
        </h1>

        <p className="subtitle">
          Селекторы, свойства, цвета, текст, блочная модель, display,
          position, flexbox, grid и адаптивная вёрстка — с простыми
          примерами и пояснениями.
        </p>
      </div>
    </section>
  );
}

export default CssHero;