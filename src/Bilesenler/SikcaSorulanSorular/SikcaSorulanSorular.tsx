import { useState } from 'react';
import { sssSorulari } from '../../veriler/icerik';
import ScrollAnimasyonu from '../ScrollAnimasyonu/ScrollAnimasyonu';
import './SikcaSorulanSorular.css';

const SikcaSorulanSorular: React.FC = () => {
  const [acikIndeks, setAcikIndeks] = useState<number | null>(null);

  const togla = (i: number) => {
    setAcikIndeks(prev => (prev === i ? null : i));
  };

  return (
    <section className="sss section">
      <div className="container">
        <ScrollAnimasyonu>
          <h2 className="section-title">Sık Sorulan Sorular</h2>
          <p className="section-subtitle">
            React ve TypeScript geliştirmeye yeni başlayanların en çok merak ettiği
            sorular ve detaylı yanıtları.
          </p>
          <div className="neon-divider" />
        </ScrollAnimasyonu>

        <div className="sss__liste">
          {sssSorulari.map((oge, i) => {
            const acikMi = acikIndeks === i;
            return (
              <ScrollAnimasyonu key={i} gecikme={i * 40}>
                <div className={`sss__oge ${acikMi ? 'sss__oge--acik' : ''}`}>
                  <button
                    className="sss__soru-satiri"
                    onClick={() => togla(i)}
                    aria-expanded={acikMi}
                  >
                    <span className="sss__soru-no">Q{String(i + 1).padStart(2, '0')}</span>
                    <span className="sss__soru-metin">{oge.soru}</span>
                    <span className={`sss__chevron ${acikMi ? 'sss__chevron--acik' : ''}`}>›</span>
                  </button>

                  <div className={`sss__cevap-konteyner ${acikMi ? 'sss__cevap-konteyner--acik' : ''}`}>
                    <p className="sss__cevap">{oge.cevap}</p>
                  </div>
                </div>
              </ScrollAnimasyonu>
            );
          })}
        </div>

        <p className="sss__alt-not">
          💡 Burada yanıtını bulamadığın sorular için{' '}
          <a href="https://react.dev/" target="_blank" rel="noreferrer" style={{ color: '#61dafb' }}>
            react.dev
          </a>{' '}
          resmi dokümantasyonunu inceleyebilirsin.
        </p>
      </div>
    </section>
  );
};

export default SikcaSorulanSorular;
