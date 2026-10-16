import './AltMenu.css';

const AltMenu: React.FC = () => {
  const yukariCik = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="alt-menu">
      <div className="alt-menu__ust-cizgi" />
      <div className="container alt-menu__konteyner">
        <div className="alt-menu__marka">
          <a href="#ana-sayfa" className="alt-menu__logo">
            <span className="alt-menu__logo-ikon">⚛️</span>
            ReactRehberi
          </a>
          <p className="alt-menu__aciklama">
            React ve TypeScript kavramlarını interaktif kod örnekleri,
            görsel bileşen ağacı ve bilgi testiyle özgün bir deneyimle öğrenin.
          </p>
        </div>

        <div className="alt-menu__linkler">
          <h4 className="alt-menu__baslik">RESMİ KAYNAKLAR</h4>
          <ul>
            <li><a href="https://react.dev/" target="_blank" rel="noreferrer">React Resmi Docs</a></li>
            <li><a href="https://www.typescriptlang.org/docs/" target="_blank" rel="noreferrer">TypeScript Handbook</a></li>
            <li><a href="https://vitejs.dev/" target="_blank" rel="noreferrer">Vite Docs</a></li>
            <li><a href="https://react-typescript-cheatsheet.netlify.app/" target="_blank" rel="noreferrer">React + TS Cheatsheet</a></li>
          </ul>
        </div>

        <div className="alt-menu__linkler">
          <h4 className="alt-menu__baslik">ÖĞRENME YOLLARI</h4>
          <ul>
            <li><a href="https://www.theodinproject.com/paths/full-stack-javascript/courses/react" target="_blank" rel="noreferrer">The Odin Project</a></li>
            <li><a href="https://scrimba.com/learn-react-c0e" target="_blank" rel="noreferrer">Scrimba React Kursu</a></li>
            <li><a href="https://ui.dev/react" target="_blank" rel="noreferrer">ui.dev</a></li>
            <li><a href="https://github.com/enaqx/awesome-react" target="_blank" rel="noreferrer">Awesome React</a></li>
          </ul>
        </div>
      </div>

      <div className="alt-menu__alt-kisim container">
        <p className="alt-menu__telif">
          © {new Date().getFullYear()} ReactRehberi — Baran Özbey tarafından React + TypeScript ile geliştirildi.
        </p>
        <button className="alt-menu__yukari-buton" onClick={yukariCik}>
          ↑ Yukarı Çık
        </button>
      </div>
    </footer>
  );
};

export default AltMenu;
