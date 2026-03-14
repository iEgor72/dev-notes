import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div className="page-stack">
      <section className="card card--solid not-found" aria-labelledby="not-found-title">
        <span className="badge">404</span>

        <h1 className="title" id="not-found-title">
          Страница не найдена
        </h1>

        <p className="subtitle">
          Такой страницы нет. Возможно, ссылка устарела или адрес введён с ошибкой.
        </p>

        <div className="not-found__actions">
          <Link to="/" className="button">
            На главную
          </Link>

          <Link to="/html" className="button button--secondary">
            Открыть HTML
          </Link>
        </div>
      </section>
    </div>
  );
}

export default NotFoundPage;