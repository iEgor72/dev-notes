import { Routes, Route } from "react-router-dom";
import PageLayout from "./layouts/PageLayout";

import HomePage from "./pages/HomePage";
import HtmlPage from "./pages/HtmlPage";
import CssPage from "./pages/CssPage";
import LayoutPage from "./pages/LayoutPage";
import JsPage from "./pages/JsPage";
import TsPage from "./pages/TsPage";
import ReactPage from "./pages/ReactPage";
import GitPage from "./pages/GitPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <PageLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/html" element={<HtmlPage />} />
        <Route path="/css" element={<CssPage />} />
        <Route path="/layout" element={<LayoutPage />} />
        <Route path="/js" element={<JsPage />} />
        <Route path="/ts" element={<TsPage />} />
        <Route path="/react" element={<ReactPage />} />
        <Route path="/git" element={<GitPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </PageLayout>
  );
}

export default App;