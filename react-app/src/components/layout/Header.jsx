import { NavLink } from "react-router-dom";
import siteSections from "../../data/siteSections";

function Header() {
  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <nav className="nav" aria-label="Основная навигация">
          <NavLink className="nav__brand" to="/">
            Developer Notes
          </NavLink>

          <ul className="nav__links">
            <li>
              <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")} end>
                Главная
              </NavLink>
            </li>

            {siteSections.map((section) => (
              <li key={section.path}>
                <NavLink
                  to={section.path}
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  {section.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;