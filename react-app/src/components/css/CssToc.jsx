import useScrollSpy from "../../hooks/useScrollSpy";
import cssToc from "../../data/cssToc";

function CssToc() {
  const activeId = useScrollSpy(cssToc.map((item) => item.id));

  return (
    <nav className="card card--solid toc" aria-labelledby="css-toc-title">
      <h2 className="section-title" id="css-toc-title">
        Содержание
      </h2>

      <ol>
        {cssToc.map((item) => (
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

export default CssToc;