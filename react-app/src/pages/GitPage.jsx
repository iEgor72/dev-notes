import DocsPageRenderer from "../components/docs/DocsPageRenderer";
import gitPageData from "../data/gitPageData";

function GitPage() {
  return <DocsPageRenderer page={gitPageData} />;
}

export default GitPage;