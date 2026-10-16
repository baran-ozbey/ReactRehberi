import { useState, useEffect } from 'react';
import { soruHavuzundanSec } from '../../veriler/icerik';
import type { TestSorusu } from '../../tipler';
import './BilgiTesti.css';

const BilgiTesti: React.FC = () => {
  const [sorular, setSorular] = useState<TestSorusu[]>([]);
  const [mevcutSoru, setMevcutSoru] = useState(0);
  const [skor, setSkor] = useState(0);
  const [testBitti, setTestBitti] = useState(false);
  const [secilenCevap, setSecilenCevap] = useState<number | null>(null);
  const [cevapKontrolEdildi, setCevapKontrolEdildi] = useState(false);
  const [sallanmaEfekti, setSallanmaEfekti] = useState(false);

  useEffect(() => {
    testiBaslat();
  }, []);

  const testiBaslat = () => {
    setSorular(soruHavuzundanSec(5));
    setMevcutSoru(0);
    setSkor(0);
    setTestBitti(false);
    setSecilenCevap(null);
    setCevapKontrolEdildi(false);
  };

  const cevapSec = (indeks: number) => {
    if (cevapKontrolEdildi) return;
    setSecilenCevap(indeks);
  };

  const cevabiOnayla = () => {
    if (secilenCevap === null) {
      setSallanmaEfekti(true);
      setTimeout(() => setSallanmaEfekti(false), 500);
      return;
    }

    setCevapKontrolEdildi(true);

    if (secilenCevap === sorular[mevcutSoru].dogruSecenekIndeksi) {
      setSkor(skor + 1);
    }
  };

  const sonrakiSoru = () => {
    if (mevcutSoru + 1 < sorular.length) {
      setMevcutSoru(mevcutSoru + 1);
      setSecilenCevap(null);
      setCevapKontrolEdildi(false);
    } else {
      setTestBitti(true);
    }
  };

  const yildizDondur = () => {
    const basariYuzdesi = (skor / sorular.length) * 100;
    if (basariYuzdesi === 100) return '⭐⭐⭐ Mükemmel!';
    if (basariYuzdesi >= 60) return '⭐⭐ Harika!';
    if (basariYuzdesi > 0) return '⭐ İyi başlangıç!';
    return 'Daha çok çalışmalısın!';
  };

  if (sorular.length === 0) return null;

  if (testBitti) {
    return (
      <div className="bilgi-testi__sonuc glass-card">
        <div className="bilgi-testi__sonuc-ikon">🏆</div>
        <h3 className="bilgi-testi__sonuc-baslik">Test Tamamlandı!</h3>
        <div className="bilgi-testi__skor">
          {skor} / {sorular.length}
        </div>
        <div className="bilgi-testi__degerlendirme">{yildizDondur()}</div>
        <p className="bilgi-testi__sonuc-metin">
          React ve TypeScript konusundaki bilgini ölçtün! Kavramları iyice pekiştirmek için
          yukarıdaki Kod Örnekleri ve Kavramlar bölümlerini tekrar incele.
        </p>
        <button className="buton buton--birincil" onClick={testiBaslat}>
          Farklı Sorularla Tekrar Dene ↺
        </button>
      </div>
    );
  }

  const soru = sorular[mevcutSoru];
  const ilerleme = ((mevcutSoru) / sorular.length) * 100;

  return (
    <div className="bilgi-testi__konteyner">
      <div className="bilgi-testi__ilerleme-cubugu">
        <div className="bilgi-testi__ilerleme" style={{ width: `${ilerleme}%` }} />
      </div>
      <div className="bilgi-testi__ilerleme-metni">
        {mevcutSoru + 1} / {sorular.length} cevaplandı
      </div>

      <div className="bilgi-testi__numaralar">
        {sorular.map((_, i) => (
          <div
            key={i}
            className={`bilgi-testi__numara 
              ${i < mevcutSoru ? 'bilgi-testi__numara--gecmis' : ''}
              ${i === mevcutSoru ? 'bilgi-testi__numara--aktif' : ''}
            `}
          >
            {i + 1}
          </div>
        ))}
      </div>

      <div className={`bilgi-testi__kart glass-card ${sallanmaEfekti ? 'titreme-efekti' : ''}`}>
        <div className="bilgi-testi__kart-baslik">
          Soru {mevcutSoru + 1} <span style={{ opacity: 0.5, fontSize: '0.9em' }}>/ {sorular.length}</span>
        </div>
        
        <h3 className="bilgi-testi__soru-metni">{soru.soru}</h3>

        <div className="bilgi-testi__secenekler">
          {soru.secenekler.map((secenek: string, indeks: number) => {
            let durumSinifi = '';
            
            if (cevapKontrolEdildi) {
              if (indeks === soru.dogruSecenekIndeksi) durumSinifi = 'bilgi-testi__secenek--dogru';
              else if (indeks === secilenCevap) durumSinifi = 'bilgi-testi__secenek--yanlis';
              else durumSinifi = 'bilgi-testi__secenek--pasif';
            } else if (secilenCevap === indeks) {
              durumSinifi = 'bilgi-testi__secenek--secili';
            }

            return (
              <button
                key={indeks}
                className={`bilgi-testi__secenek ${durumSinifi}`}
                onClick={() => cevapSec(indeks)}
                disabled={cevapKontrolEdildi}
              >
                <div className="bilgi-testi__harf">
                  {['A', 'B', 'C', 'D'][indeks]}
                </div>
                <div className="bilgi-testi__secenek-metin">{secenek}</div>
                
                {cevapKontrolEdildi && indeks === soru.dogruSecenekIndeksi && (
                  <div className="bilgi-testi__ikon">✓</div>
                )}
                {cevapKontrolEdildi && secilenCevap === indeks && indeks !== soru.dogruSecenekIndeksi && (
                  <div className="bilgi-testi__ikon">✕</div>
                )}
              </button>
            );
          })}
        </div>

        {cevapKontrolEdildi ? (
          <div className="bilgi-testi__geri-bildirim">
            <div className={`bilgi-testi__aciklama-kutusu ${secilenCevap === soru.dogruSecenekIndeksi ? 'bilgi-testi__aciklama-kutusu--dogru' : 'bilgi-testi__aciklama-kutusu--yanlis'}`}>
              <strong>{secilenCevap === soru.dogruSecenekIndeksi ? '🎉 Doğru!' : '💡 İpucu:'}</strong> {soru.aciklama}
            </div>
            <button className="buton buton--birincil bilgi-testi__ileri-buton" onClick={sonrakiSoru}>
              {mevcutSoru + 1 === sorular.length ? 'Sonuçları Gör' : 'Sıradaki Soru →'}
            </button>
          </div>
        ) : (
          <button 
            className="buton buton--birincil bilgi-testi__onay-buton" 
            onClick={cevabiOnayla}
          >
            Cevabı Onayla
          </button>
        )}
      </div>
    </div>
  );
};

export default BilgiTesti;
