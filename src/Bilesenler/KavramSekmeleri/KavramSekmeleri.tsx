import { useState } from 'react';
import { sekmeler } from '../../veriler/icerik';
import TiltKarti from '../TiltKarti/TiltKarti';
import ScrollAnimasyonu from '../ScrollAnimasyonu/ScrollAnimasyonu';
import './KavramSekmeleri.css';

const KavramSekmeleri: React.FC = () => {
  const [aktifSekme, setAktifSekme] = useState(sekmeler[0].id);

  const aktifIcerik = sekmeler.find((sekme) => sekme.id === aktifSekme)?.icerik;

  return (
    <section className="kavramlar section">
      <div className="container">
        <ScrollAnimasyonu>
          <h2 className="section-title">React & TypeScript Kavramları</h2>
          <p className="section-subtitle">
            Bileşen mimarisinden Hook'lara, Context API'den TypeScript entegrasyonuna kadar
            React'in temel yapı taşlarını sekmeler halinde keşfedin.
          </p>
          <div className="neon-divider" />
        </ScrollAnimasyonu>

        <ScrollAnimasyonu gecikme={150} animasyonTuru="fade-up">
          <div className="kavramlar__sekmeler">
            {sekmeler.map((sekme) => (
              <button
                key={sekme.id}
                className={`kavramlar__sekme-buton ${aktifSekme === sekme.id ? 'kavramlar__sekme-buton--aktif' : ''}`}
                onClick={() => setAktifSekme(sekme.id)}
              >
                <span className="kavramlar__sekme-ikon">{sekme.ikon}</span>
                {sekme.baslik}
              </button>
            ))}
          </div>
        </ScrollAnimasyonu>

        <ScrollAnimasyonu gecikme={300} animasyonTuru="zoom-in">
          <TiltKarti maksimumAcilar={5}>
            <div className="kavramlar__icerik glass-card">
              <div key={aktifSekme} className="kavramlar__icerik-animasyon">
                <p className="kavramlar__aciklama">{aktifIcerik?.aciklama}</p>

                <div className="kavramlar__grid">
                  <div className="kavramlar__kolon">
                    <h3 className="kavramlar__kolon-baslik">Anahtar Terimler</h3>
                    <ul className="kavramlar__liste">
                      {aktifIcerik?.anahtarTerimler.map((terim: string, i: number) => (
                        <li key={i}>{terim}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="kavramlar__kolon">
                    <h3 className="kavramlar__kolon-baslik">Kullanım Alanları</h3>
                    <ul className="kavramlar__liste kavramlar__liste--ikincil">
                      {aktifIcerik?.kullanimAlanlari.map((alan: string, i: number) => (
                        <li key={i}>{alan}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </TiltKarti>
        </ScrollAnimasyonu>
      </div>
    </section>
  );
};

export default KavramSekmeleri;
