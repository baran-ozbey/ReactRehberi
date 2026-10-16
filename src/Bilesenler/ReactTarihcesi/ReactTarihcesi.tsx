import { useRef } from 'react';
import { tarihOlaylari } from '../../veriler/icerik';
import ScrollAnimasyonu from '../ScrollAnimasyonu/ScrollAnimasyonu';
import './ReactTarihcesi.css';

const ReactTarihcesi: React.FC = () => {
  const seritRef = useRef<HTMLDivElement>(null);

  const kaydir = (yon: 'sol' | 'sag') => {
    if (seritRef.current) {
      seritRef.current.scrollBy({ left: yon === 'sag' ? 420 : -420, behavior: 'smooth' });
    }
  };

  return (
    <section className="tarihce section">
      <div className="container">
        <ScrollAnimasyonu>
          <h2 className="section-title">React'in Tarihsel Gelişimi</h2>
          <p className="section-subtitle">
            2011'de bir Facebook deneyi olarak başlayan React'in, bugün dünyanın en
            yaygın UI kütüphanesi haline gelişinin kronolojisi.
          </p>
          <div className="neon-divider" />
        </ScrollAnimasyonu>
      </div>

      <div className="tarihce__dis-konteyner">
        <button
          className="tarihce__ok tarihce__ok--sol"
          onClick={() => kaydir('sol')}
          aria-label="Sola kaydır"
        >
          ←
        </button>

        <div className="tarihce__serit" ref={seritRef}>
          <div className="tarihce__orta-cizgi" />

          {tarihOlaylari.map((olay, i) => (
            <div
              key={olay.yil}
              className={`tarihce__olay ${i % 2 === 0 ? 'tarihce__olay--ust' : 'tarihce__olay--alt'}`}
            >
              <div className="tarihce__kart glass-card">
                <div className="tarihce__kart-baslik">
                  <span className="tarihce__ikon">{olay.ikon}</span>
                  <span className="tarihce__yil-etiketi">{olay.yil}</span>
                </div>
                <h3 className="tarihce__baslik">{olay.baslik}</h3>
                <p className="tarihce__aciklama">{olay.aciklama}</p>
              </div>
              <div className="tarihce__nokta" />
            </div>
          ))}
        </div>

        <button
          className="tarihce__ok tarihce__ok--sag"
          onClick={() => kaydir('sag')}
          aria-label="Sağa kaydır"
        >
          →
        </button>
      </div>
    </section>
  );
};

export default ReactTarihcesi;
