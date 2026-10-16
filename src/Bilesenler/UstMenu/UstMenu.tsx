import { useState, useEffect } from 'react';
import { navBaglantilari } from '../../veriler/icerik';
import './UstMenu.css';

const UstMenu: React.FC = () => {
  const [kaydirildi, setKaydirildi] = useState(false);
  const [mobilMenuAcik, setMobilMenuAcik] = useState(false);

  useEffect(() => {
    const scrollIsleyici = () => {
      setKaydirildi(window.scrollY > 50);
    };
    window.addEventListener('scroll', scrollIsleyici);
    return () => window.removeEventListener('scroll', scrollIsleyici);
  }, []);

  return (
    <header className={`ust-menu ${kaydirildi ? 'ust-menu--kaydirildi' : ''}`}>
      <div className="ust-menu__konteyner container">
        <a href="#ana-sayfa" className="ust-menu__logo" onClick={() => setMobilMenuAcik(false)}>
          <span className="ust-menu__logo-ikon" style={{color: '#61dafb'}}>⚛️</span>
          React<span style={{color: 'var(--text-primary)'}}>Rehberi</span>
        </a>

        <button 
          className="ust-menu__mobil-buton" 
          onClick={() => setMobilMenuAcik(!mobilMenuAcik)}
        >
          {mobilMenuAcik ? '✕' : '☰'}
        </button>

        <nav className={`ust-menu__nav ${mobilMenuAcik ? 'ust-menu__nav--acik' : ''}`}>
          {navBaglantilari.map((baglanti) => (
            <a
              key={baglanti.id}
              href={baglanti.yol}
              className="ust-menu__baglanti"
              onClick={() => setMobilMenuAcik(false)}
            >
              {baglanti.etiket}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default UstMenu;
