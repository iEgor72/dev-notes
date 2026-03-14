import HtmlHero from "../components/html/HtmlHero";
import HtmlContent from "../components/html/HtmlContent";

function HtmlPage() {
  return (
    <div className="page-stack">
      <HtmlHero />
      <HtmlContent />
    </div>
  );
}

export default HtmlPage;