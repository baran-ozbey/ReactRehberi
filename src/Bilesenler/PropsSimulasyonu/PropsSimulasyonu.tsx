import { useState } from 'react';
import './PropsSimulasyonu.css';

interface KartProps {
  isim: string;
  meslek: string;
  renk: string;
  takipci: number;
  aktifMi: boolean;
}

const ProfilKarti: React.FC<KartProps> = ({ isim, meslek, renk, takipci, aktifMi }) => (
  <div className="props-sim__kart" style={{ borderColor: renk, boxShadow: `0 0 20px ${renk}40` }}>
    <div className="props-sim__avatar" style={{ background: renk }}>
      {isim.charAt(0).toUpperCase()}
    </div>
    <div className="props-sim__kart-bilgi">
      <h3 className="props-sim__kart-isim" style={{ color: renk }}>{isim || '–'}</h3>
      <p className="props-sim__kart-meslek">{meslek || '–'}</p>
      <div className="props-sim__kart-alt">
        <span className="props-sim__takipci">👥 {takipci.toLocaleString('tr-TR')} Takipçi</span>
        <span className={`props-sim__durum ${aktifMi ? 'props-sim__durum--aktif' : 'props-sim__durum--pasif'}`}>
          {aktifMi ? '🟢 Çevrimiçi' : '🔴 Çevrimdışı'}
        </span>
      </div>
    </div>
  </div>
);

const KodOnizleme: React.FC<{ props: KartProps }> = ({ props: p }) => {
  const kod = `<ProfilKarti
  isim="${p.isim}"
  meslek="${p.meslek}"
  renk="${p.renk}"
  takipci={${p.takipci}}
  aktifMi={${p.aktifMi}}
/>`;
  return (
    <pre className="props-sim__kod">
      <code>{kod}</code>
    </pre>
  );
};

const PropsSimulasyonu: React.FC = () => {
  const [propsDurum, setPropsDurum] = useState<KartProps>({
    isim: 'Baran',
    meslek: 'Frontend Geliştirici',
    renk: '#61dafb',
    takipci: 1420,
    aktifMi: true,
  });

  const guncelle = <K extends keyof KartProps>(alan: K, deger: KartProps[K]) => {
    setPropsDurum(prev => ({ ...prev, [alan]: deger }));
  };

  const renkSecenekleri = [
    { etiket: 'React Mavisi',  deger: '#61dafb' },
    { etiket: 'TypeScript',    deger: '#3178c6' },
    { etiket: 'Vite Moru',     deger: '#a855f7' },
    { etiket: 'Yeşil',         deger: '#10b981' },
    { etiket: 'Turuncu',       deger: '#f97316' },
  ];

  return (
    <section className="props-sim section">
      <div className="container">
        <h2 className="section-title">⚡ Canlı Props Simülatörü</h2>
        <p className="section-subtitle">
          Aşağıdaki kontrolleri değiştirerek{' '}
          <strong style={{ color: '#61dafb' }}>ProfilKarti</strong> bileşenine
          aktarılan props'ları anlık olarak görün. Bu, React'ın tek yönlü veri
          akışını canlı olarak gösterir.
        </p>
        <div className="neon-divider" />

        <div className="props-sim__ana-icerik">
          <div className="props-sim__kontroller glass-card">
            <h3 className="props-sim__kontrol-baslik">🎛️ Props Değerleri</h3>

            <div className="props-sim__kontrol-grubu">
              <label>isim: <span className="props-sim__tip">string</span></label>
              <input
                type="text"
                value={propsDurum.isim}
                maxLength={16}
                onChange={e => guncelle('isim', e.target.value)}
                placeholder="İsim girin..."
              />
            </div>

            <div className="props-sim__kontrol-grubu">
              <label>meslek: <span className="props-sim__tip">string</span></label>
              <input
                type="text"
                value={propsDurum.meslek}
                maxLength={30}
                onChange={e => guncelle('meslek', e.target.value)}
                placeholder="Meslek girin..."
              />
            </div>

            <div className="props-sim__kontrol-grubu">
              <label>renk: <span className="props-sim__tip">string</span></label>
              <div className="props-sim__renk-secici">
                {renkSecenekleri.map(r => (
                  <button
                    key={r.deger}
                    title={r.etiket}
                    className={`props-sim__renk-buton ${propsDurum.renk === r.deger ? 'props-sim__renk-buton--aktif' : ''}`}
                    style={{ background: r.deger }}
                    onClick={() => guncelle('renk', r.deger)}
                  />
                ))}
              </div>
            </div>

            <div className="props-sim__kontrol-grubu">
              <label>
                takipci: <span className="props-sim__tip">number</span>
                <strong style={{ float: 'right', color: '#61dafb' }}>{propsDurum.takipci.toLocaleString('tr-TR')}</strong>
              </label>
              <input
                type="range"
                min={0}
                max={10000}
                step={50}
                value={propsDurum.takipci}
                onChange={e => guncelle('takipci', Number(e.target.value))}
              />
            </div>

            <div className="props-sim__kontrol-grubu">
              <label>aktifMi: <span className="props-sim__tip">boolean</span></label>
              <button
                className={`props-sim__toggle ${propsDurum.aktifMi ? 'props-sim__toggle--acik' : ''}`}
                onClick={() => guncelle('aktifMi', !propsDurum.aktifMi)}
              >
                <span className="props-sim__toggle-top" />
                {propsDurum.aktifMi ? 'true' : 'false'}
              </button>
            </div>
          </div>

          <div className="props-sim__onizleme">
            <h3 className="props-sim__kontrol-baslik">👁️ Bileşen Önizlemesi</h3>
            <ProfilKarti {...propsDurum} />

            <h3 className="props-sim__kontrol-baslik" style={{ marginTop: '24px' }}>
              📄 Oluşturulan TSX Kodu
            </h3>
            <KodOnizleme props={propsDurum} />

            <p className="props-sim__bilgi-notu">
              💡 <strong>Temel React kuralı:</strong> Props'lar <em>tek yönlü</em> akar
              (yukarıdan aşağıya). Alt bileşen aldığı props'ı değiştiremez; yalnızca okuyabilir.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropsSimulasyonu;
