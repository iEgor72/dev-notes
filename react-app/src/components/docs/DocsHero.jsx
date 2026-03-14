function DocsHero({ badge, title, subtitle }) {
  return (
    <section className="hero card" aria-labelledby="docs-page-title">
      <span className="badge">{badge}</span>

      <div>
        <h1 className="title" id="docs-page-title">
          {title}
        </h1>

        <p className="subtitle">{subtitle}</p>
      </div>
    </section>
  );
}

export default DocsHero;