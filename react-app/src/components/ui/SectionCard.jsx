function SectionCard({ id, title, titleId, children, className = "" }) {
  return (
    <section
      className={`card card--solid content-flow ${className}`.trim()}
      id={id}
      aria-labelledby={titleId}
    >
      <h2 className="section-title" id={titleId}>
        {title}
      </h2>

      {children}
    </section>
  );
}

export default SectionCard;