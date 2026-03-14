import { useEffect, useMemo, useState } from "react";

function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const nextProgress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

      setIsVisible(scrollTop > 300);
      setProgress(Math.min(Math.max(nextProgress, 0), 100));
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const progressStyle = useMemo(
    () => ({
      background: `conic-gradient(var(--accent, #7c8cff) ${progress}%, rgba(255,255,255,0.08) ${progress}%)`,
    }),
    [progress]
  );

  return (
    <button
      className={`back-to-top ${isVisible ? "is-visible" : ""}`}
      type="button"
      aria-label="Наверх страницы"
      onClick={handleClick}
    >
      <span className="back-to-top__progress" style={progressStyle} />
      <span className="back-to-top__icon">↑</span>
    </button>
  );
}

export default BackToTop;