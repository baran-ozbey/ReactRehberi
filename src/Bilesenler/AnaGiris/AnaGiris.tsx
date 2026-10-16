import { useEffect, useRef, useState } from 'react';
import './AnaGiris.css';

const kelimeler = ['React', 'TypeScript', 'Hooks', 'Props', 'State Yönetimi'];

const AnaGiris: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  const [mevcutMetin, setMevcutMetin] = useState('');
  const [kelimeIndeksi, setKelimeIndeksi] = useState(0);
  const [siliniyorMu, setSiliniyorMu] = useState(false);

  useEffect(() => {
    const daktiloHizi = siliniyorMu ? 50 : 100;
    const mevcutKelime = kelimeler[kelimeIndeksi];

    const zamanlayici = setTimeout(() => {
      if (!siliniyorMu && mevcutMetin === mevcutKelime) {
        setTimeout(() => setSiliniyorMu(true), 1500);
      } else if (siliniyorMu && mevcutMetin === '') {
        setSiliniyorMu(false);
        setKelimeIndeksi((onceki) => (onceki + 1) % kelimeler.length);
      } else {
        const siradakiMetin = siliniyorMu
          ? mevcutKelime.substring(0, mevcutMetin.length - 1)
          : mevcutKelime.substring(0, mevcutMetin.length + 1);
        setMevcutMetin(siradakiMetin);
      }
    }, daktiloHizi);

    return () => clearTimeout(zamanlayici);
  }, [mevcutMetin, siliniyorMu, kelimeIndeksi]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animasyonId: number;
    let parcaciklar: Parcacik[] = [];

    const yenidenBoyutlandir = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      baslat();
    };

    class Parcacik {
      x: number;
      y: number;
      yaricap: number;
      hizX: number;
      hizY: number;

      constructor(w: number, h: number) {
        this.x = Math.random() * w;
        this.y = Math.random() * h;
        this.yaricap = Math.random() * 2 + 1;
        this.hizX = (Math.random() - 0.5) * 0.5;
        this.hizY = (Math.random() - 0.5) * 0.5;
      }

      guncelle(w: number, h: number) {
        this.x += this.hizX;
        this.y += this.hizY;

        if (this.x < 0 || this.x > w) this.hizX = -this.hizX;
        if (this.y < 0 || this.y > h) this.hizY = -this.hizY;
      }

      ciz(context: CanvasRenderingContext2D) {
        context.beginPath();
        context.arc(this.x, this.y, this.yaricap, 0, Math.PI * 2);
        context.fillStyle = 'rgba(97, 218, 251, 0.5)';
        context.fill();
      }
    }

    const baslat = () => {
      parcaciklar = [];
      const miktar = Math.floor((canvas.width * canvas.height) / 15000);
      for (let i = 0; i < miktar; i++) {
        parcaciklar.push(new Parcacik(canvas.width, canvas.height));
      }
    };

    const cizimYap = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < parcaciklar.length; i++) {
        parcaciklar[i].guncelle(canvas.width, canvas.height);
        parcaciklar[i].ciz(ctx);

        for (let j = i; j < parcaciklar.length; j++) {
          const dx = parcaciklar[i].x - parcaciklar[j].x;
          const dy = parcaciklar[i].y - parcaciklar[j].y;
          const mesafe = Math.sqrt(dx * dx + dy * dy);

          if (mesafe < 150) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(97, 218, 251, ${0.2 - mesafe / 750})`;
            ctx.lineWidth = 1;
            ctx.moveTo(parcaciklar[i].x, parcaciklar[i].y);
            ctx.lineTo(parcaciklar[j].x, parcaciklar[j].y);
            ctx.stroke();
          }
        }
      }
      animasyonId = requestAnimationFrame(cizimYap);
    };

    window.addEventListener('resize', yenidenBoyutlandir);
    yenidenBoyutlandir();
    cizimYap();

    return () => {
      window.removeEventListener('resize', yenidenBoyutlandir);
      cancelAnimationFrame(animasyonId);
    };
  }, []);

  return (
    <section className="ana-giris">
      <canvas ref={canvasRef} className="ana-giris__arkaplan" />

      <div className="ana-giris__icerik">
        <div className="ana-giris__etiket">
          <span className="ana-giris__etiket-ikon">⚛️</span> İnteraktif React Eğitimi
        </div>

        <h1 className="ana-giris__baslik">
          Modern Web
          <span className="ana-giris__baslik-ve">&</span>
          <span className="gradient-text daktilo-metin" style={{backgroundImage: 'linear-gradient(45deg, #61dafb, #3178c6)'}}>{mevcutMetin}<span className="imlec">|</span></span>
        </h1>

        <p className="ana-giris__aciklama">
          Bileşen mimarisinden Hook'lara, state ve props yönetiminden TypeScript entegrasyonuna 
          kadar modern React'in temellerini interaktif bir şekilde keşfedin.
        </p>

        <div className="ana-giris__butonlar">
          <a href="#konu-anlatimi" className="buton buton--birincil" style={{textDecoration: 'none', display: 'inline-block'}}>
            Keşfetmeye Başla →
          </a>
          <a href="#etkilesim" className="buton buton--ikincil" style={{textDecoration: 'none', display: 'inline-block'}}>
            Quiz'e Atla
          </a>
        </div>

        <div className="ana-giris__istatistikler">
          <div className="istatistik">
            <span className="istatistik__deger">6</span>
            <span className="istatistik__etiket">ANA KONU</span>
          </div>
          <div className="istatistik">
            <span className="istatistik__deger">3</span>
            <span className="istatistik__etiket">KOD ÖRNEĞİ</span>
          </div>
          <div className="istatistik">
            <span className="istatistik__deger">5</span>
            <span className="istatistik__etiket">QUİZ SORUSU</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnaGiris;
