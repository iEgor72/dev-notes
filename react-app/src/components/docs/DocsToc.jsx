import useScrollSpy from "../../hooks/useScrollSpy";

function DocsToc({ items }) {
  const activeId = useScrollSpy(items.map((item) => item.id));

  return (
    <nav className="card card--solid toc">
      <h2 className="section-title">Содержание</h2>

      <ol>
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className={activeId === item.id ? "is-active" : ""}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}

export default DocsToc;