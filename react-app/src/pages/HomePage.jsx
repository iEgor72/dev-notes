import { Link } from "react-router-dom";
import siteSections from "../data/siteSections";

function HomePage() {
  return (
    <div className="page-stack">
      <section className="home-hero card" aria-labelledby="home-title">
        <div className="home-hero__content">
          <span className="badge">Developer Notes</span>

          <h1 className="title home-hero__title" id="home-title">
            Frontend Cheatsheet на React
          </h1>

          <p className="subtitle home-hero__subtitle">
            Личная база заметок по frontend-разработке: HTML, CSS, Layout,
            JavaScript, TypeScript, React и Git.
          </p>

          <div className="home-hero__actions">
            <a href="#home-sections-title" className="button">
              Перейти к разделам
            </a>
          </div>
        </div>
      </section>

      <section className="card card--solid" aria-labelledby="home-sections-title">
        <div className="home-section-head">
          <div>
            <span className="badge">Разделы</span>
            <h2 className="section-title" id="home-sections-title">
              Основные темы
            </h2>
          </div>
        </div>

        <div className="home-grid">
          {siteSections.map((section) => (
            <Link
              key={section.path}
              to={section.path}
              className="home-card-v2"
            >
              <div className="home-card-v2__top">
                <span className="home-card-v2__badge">{section.badge}</span>
              </div>

              <h3 className="home-card-v2__title">{section.title}</h3>
              <p className="home-card-v2__text">{section.description}</p>
            </Link>
          ))}
        </div>
      </section>

    </div>
  );
}

export default HomePage;