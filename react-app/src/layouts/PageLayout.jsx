import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import BackToTop from "../components/ui/BackToTop";

function PageLayout({ children }) {
  return (
    <>
      <Header />

      <main className="container page-stack">
        {children}
      </main>

      <Footer />
      <BackToTop />
    </>
  );
}

export default PageLayout;