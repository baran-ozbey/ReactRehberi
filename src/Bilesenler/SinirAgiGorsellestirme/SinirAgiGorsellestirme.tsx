import { useState } from 'react';
import { sinirKatmanlari } from '../../veriler/icerik';
import ScrollAnimasyonu from '../ScrollAnimasyonu/ScrollAnimasyonu';
import './SinirAgiGorsellestirme.css';

const SinirAgiGorsellestirme: React.FC = () => {
  const [aktifKatman, setAktifKatman] = useState<number | null>(null);

  const dugumPozisyonlariAl = (katmanIndeksi: number, dugumSayisi: number) => {
    const x = (katmanIndeksi + 1) * (100 / (sinirKatmanlari.length + 1));
    const dugumler = [];
    for (let i = 0; i < dugumSayisi; i++) {
      const y = (i + 1) * (100 / (dugumSayisi + 1));
      dugumler.push({ x, y });
    }
    return dugumler;
  };

  return (
    <section className="sinir-agi section">
      <div className="container">
        <ScrollAnimasyonu>
          <h2 className="section-title">React Bileşen Ağacı</h2>
          <p className="section-subtitle">
            Her React uygulaması iç içe geçmiş bileşenlerden oluşur. Aşağıdaki katmanların
            üzerinde gezdirerek her katmanın sorumluluğunu keşfedin.
          </p>
          <div className="neon-divider" />
        </ScrollAnimasyonu>

        <ScrollAnimasyonu gecikme={200} animasyonTuru="zoom-in">
          <div className="sinir-agi__konteyner glass-card">
          <svg className="sinir-agi__svg" viewBox="0 0 100 100" preserveAspectRatio="none">
            {sinirKatmanlari.map((katman, i) => {
              if (i === sinirKatmanlari.length - 1) return null;
              
              const mevcutDugumler = dugumPozisyonlariAl(i, katman.dugumSayisi);
              const sonrakiDugumler = dugumPozisyonlariAl(i + 1, sinirKatmanlari[i + 1].dugumSayisi);

              return mevcutDugumler.map((mevcut, mdIdx) =>
                sonrakiDugumler.map((sonraki, sdIdx) => {
                  const isAktif = aktifKatman === i || aktifKatman === i + 1;
                  return (
                    <line
                      key={`line-${i}-${mdIdx}-${sdIdx}`}
                      x1={`${mevcut.x}%`}
                      y1={`${mevcut.y}%`}
                      x2={`${sonraki.x}%`}
                      y2={`${sonraki.y}%`}
                      className={`sinir-agi__baglanti ${isAktif ? 'sinir-agi__baglanti--aktif' : ''}`}
                    />
                  );
                })
              );
            })}

            {sinirKatmanlari.map((katman, i) => {
              const dugumler = dugumPozisyonlariAl(i, katman.dugumSayisi);
              return dugumler.map((dugum, dIdx) => (
                <circle
                  key={`node-${i}-${dIdx}`}
                  cx={`${dugum.x}%`}
                  cy={`${dugum.y}%`}
                  r="1.5"
                  className={`sinir-agi__dugum ${aktifKatman === i ? 'sinir-agi__dugum--aktif' : ''}`}
                  fill={katman.renk}
                  onMouseEnter={() => setAktifKatman(i)}
                  onMouseLeave={() => setAktifKatman(null)}
                />
              ));
            })}
          </svg>

          <div className="sinir-agi__etiketler">
            {sinirKatmanlari.map((katman, i) => (
              <div
                key={i}
                className="sinir-agi__etiket-ogesi"
                style={{ left: `${(i + 1) * (100 / (sinirKatmanlari.length + 1))}%` }}
                onMouseEnter={() => setAktifKatman(i)}
                onMouseLeave={() => setAktifKatman(null)}
              >
                {katman.isim}
              </div>
            ))}
          </div>
        </div>

        <div className="sinir-agi__bilgi-paneli">
          {aktifKatman !== null ? (
            <div className="sinir-agi__katman-bilgisi" style={{ borderColor: sinirKatmanlari[aktifKatman].renk }}>
              <h3 style={{ color: sinirKatmanlari[aktifKatman].renk }}>
                {sinirKatmanlari[aktifKatman].isim}
              </h3>
              <p>{sinirKatmanlari[aktifKatman].aciklama}</p>
              <div className="sinir-agi__dugum-sayaci">
                Bileşen Sayısı: {sinirKatmanlari[aktifKatman].dugumSayisi}
              </div>
            </div>
          ) : (
            <div className="sinir-agi__katman-bilgisi sinir-agi__katman-bilgisi--bos">
              <p>Detaylı bilgi görmek için bileşen katmanlarından birinin üzerine gelin.</p>
            </div>
          )}
        </div>
        </ScrollAnimasyonu>
      </div>
    </section>
  );
};

export default SinirAgiGorsellestirme;
