import DocsPageRenderer from "../components/docs/DocsPageRenderer";
import htmlPageData from "../data/htmlPageData";

function HtmlPage() {
  return <DocsPageRenderer page={htmlPageData} />;
}

export default HtmlPage;