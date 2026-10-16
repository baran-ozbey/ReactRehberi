import { useState } from 'react';
import { hookKartlari } from '../../veriler/icerik';
import ScrollAnimasyonu from '../ScrollAnimasyonu/ScrollAnimasyonu';
import './HookKartlari.css';

const HookKartlari: React.FC = () => {
  const [acikIsim, setAcikIsim] = useState<string | null>(null);

  const toggle = (isim: string) => {
    setAcikIsim(prev => (prev === isim ? null : isim));
  };

  return (
    <section className="hook-kartlari section">
      <div className="container">
        <ScrollAnimasyonu>
          <h2 className="section-title">Temel React Hook'ları</h2>
          <p className="section-subtitle">
            React'ın en sık kullanılan 6 Hook'unu karşılaştırın.
            Bir kartı tıklayarak kod örneğini ve önemli notları görün.
          </p>
          <div className="neon-divider" />
        </ScrollAnimasyonu>

        <div className="hook-kartlari__grid">
          {hookKartlari.map((kart, i) => {
            const donmusMu = acikIsim === kart.isim;
            return (
              <ScrollAnimasyonu key={kart.isim} gecikme={i * 80}>
                <div
                  className={`hook-kart ${donmusMu ? 'hook-kart--donmus' : ''}`}
                  onClick={() => toggle(kart.isim)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={e => e.key === 'Enter' && toggle(kart.isim)}
                  aria-pressed={donmusMu}
                >
                  <div className="hook-kart__ic">

                    <div className="hook-kart__on" style={{ borderColor: kart.renk }}>
                      <span className="hook-kart__ikon">{kart.ikon}</span>
                      <h3 className="hook-kart__isim" style={{ color: kart.renk }}>
                        {kart.isim}
                      </h3>
                      <p className="hook-kart__ozet">{kart.ozet}</p>
                      <span
                        className="hook-kart__ipucu"
                        style={{ color: kart.renk }}
                      >
                        ⌨️ Kod örneği için tıkla
                      </span>
                    </div>

                    <div className="hook-kart__arka" style={{ borderColor: kart.renk }}>
                      <h4 style={{ color: kart.renk, marginBottom: '10px' }}>
                        {kart.isim}() Kullanımı
                      </h4>
                      <pre className="hook-kart__kod">
                        <code>{kart.ornek}</code>
                      </pre>
                      <p className="hook-kart__notlar">{kart.notlar}</p>
                      <span className="hook-kart__ipucu" style={{ color: kart.renk }}>
                        ← Geri dönmek için tıkla
                      </span>
                    </div>

                  </div>
                </div>
              </ScrollAnimasyonu>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HookKartlari;
