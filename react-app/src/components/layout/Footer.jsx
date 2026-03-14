function Footer() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <div className="footer-grid">
          <div className="footer-col">
            <p className="footer-title">Developer Notes</p>

            <p className="footer-text">
              Личная база заметок по программированию и разработке.
              Короткие объяснения, синтаксис и примеры кода.
            </p>
          </div>

          <div className="footer-col">
            <p className="footer-title">Проект</p>

            <p className="footer-text">
              Проект постепенно дополняется новыми заметками
              по различным технологиям и инструментам разработки.
            </p>
          </div>

          <div className="footer-col">
            <p className="footer-title">Информация</p>

            <p className="footer-text">
              Компактная документация для быстрого повторения
              синтаксиса, концепций и практических примеров.
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 Developer Notes • Personal developer handbook</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;