import useScrollSpy from "../../hooks/useScrollSpy";
import htmlToc from "../../data/htmlToc";

function HtmlToc() {
  const activeId = useScrollSpy(htmlToc.map((item) => item.id));

  return (
    <nav className="card card--solid toc" aria-labelledby="toc-title">
      <h2 className="section-title" id="toc-title">
        Содержание
      </h2>

      <ol>
        {htmlToc.map((item) => (
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

export default HtmlToc;