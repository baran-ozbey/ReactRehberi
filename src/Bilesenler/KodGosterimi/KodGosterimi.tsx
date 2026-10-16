import { useState } from 'react';
import { kodOrnekleri } from '../../veriler/icerik';
import CanliSayac from './CanliOrnekler/CanliSayac';
import CanliAPI from './CanliOrnekler/CanliAPI';
import CanliTema from './CanliOrnekler/CanliTema';
import './KodGosterimi.css';

const ANAHTAR_KELIMELER = new Set(['from', 'import', 'as', 'def', 'class', 'return', 'for', 'in', 'if', 'else', 'elif', 'while', 'with', 'try', 'except', 'raise', 'pass', 'break', 'continue', 'and', 'or', 'not', 'is', 'None', 'True', 'False', 'lambda', 'yield', 'global', 'nonlocal', 'assert', 'del']);
const YERLESIK_ISLEVLER = new Set(['print', 'range', 'len', 'sum', 'int', 'float', 'str', 'list', 'dict', 'tuple', 'set', 'type', 'super', 'self']);

const htmlKacir = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

const yorumBaslangiciniBul = (satir: string): number => {
  let stringIci: string | null = null;
  for (let i = 0; i < satir.length; i++) {
    const karakter = satir[i];
    if (stringIci) {
      if (karakter === stringIci && satir[i - 1] !== '\\') stringIci = null;
    } else {
      if (karakter === '"' || karakter === "'") stringIci = karakter;
      else if (karakter === '#') return i;
    }
  }
  return -1;
};

const tokenlereAyir = (kod: string): string[] => {
  const tokenler: string[] = [];
  let i = 0;
  while (i < kod.length) {
    const karakter = kod[i];

    if (/\\s/.test(karakter)) {
      let j = i;
      while (j < kod.length && /\\s/.test(kod[j])) j++;
      tokenler.push(kod.slice(i, j));
      i = j;
      continue;
    }

    if (karakter === '"' || karakter === "'" || (karakter === 'f' && (kod[i + 1] === '"' || kod[i + 1] === "'"))) {
      const baslangic = i;
      if (karakter === 'f') i++;
      const tirnak = kod[i];
      i++;
      while (i < kod.length && kod[i] !== tirnak) {
        if (kod[i] === '\\\\') i++;
        i++;
      }
      if (i < kod.length) i++;
      tokenler.push(kod.slice(baslangic, i));
      continue;
    }

    if (/[\\w]/.test(karakter)) {
      let j = i;
      while (j < kod.length && /[\\w.]/.test(kod[j])) j++;
      tokenler.push(kod.slice(i, j));
      i = j;
      continue;
    }

    tokenler.push(karakter);
    i++;
  }
  return tokenler;
};

const satiriVurgula = (satir: string): string => {
  const yorumIndeksi = yorumBaslangiciniBul(satir);
  const kodKismi = yorumIndeksi === -1 ? satir : satir.slice(0, yorumIndeksi);
  const yorumKismi = yorumIndeksi === -1 ? '' : satir.slice(yorumIndeksi);

  const tokenler = tokenlereAyir(kodKismi);
  let html = '';

  for (let i = 0; i < tokenler.length; i++) {
    const t = tokenler[i];
    const kacirilmis = htmlKacir(t);

    if (/^(f?["'])/.test(t) && t.length > 1) {
      html += `<span class="kod-string">${kacirilmis}</span>`;
    } else if (/^\\d/.test(t)) {
      html += `<span class="kod-sayi">${kacirilmis}</span>`;
    } else if (ANAHTAR_KELIMELER.has(t)) {
      const defVeyaClassMi = t === 'def' || t === 'class';
      html += `<span class="kod-anahtar">${kacirilmis}</span>`;
      
      if (defVeyaClassMi) {
        const sonraki = tokenler[i + 1];
        const ondanSonraki = tokenler[i + 2];
        if (sonraki && /^\\s+$/.test(sonraki) && ondanSonraki && /^\\w/.test(ondanSonraki)) {
          html += htmlKacir(sonraki);
          html += `<span class="kod-fonksiyon">${htmlKacir(ondanSonraki)}</span>`;
          i += 2;
        }
      }
    } else if (YERLESIK_ISLEVLER.has(t)) {
      const sonraki = tokenler[i + 1];
      if (sonraki && sonraki.startsWith('(')) {
        html += `<span class="kod-yerlesik">${kacirilmis}</span>`;
      } else {
        html += kacirilmis;
      }
    } else {
      html += kacirilmis;
    }
  }

  if (yorumKismi) {
    html += `<span class="kod-yorum">${htmlKacir(yorumKismi)}</span>`;
  }

  return html;
};

const pythonVurgula = (kod: string): string => {
  return kod.split('\\n').map(satiriVurgula).join('\\n');
};

const KodGosterimi: React.FC = () => {
  const [aktifOrnek, setAktifOrnek] = useState(0);
  const [kopyalandi, setKopyalandi] = useState(false);

  const kopyalamaIslemi = async () => {
    try {
      await navigator.clipboard.writeText(kodOrnekleri[aktifOrnek].kod);
      setKopyalandi(true);
      setTimeout(() => setKopyalandi(false), 2000);
    } catch {
      const textarea = document.createElement('textarea');
      textarea.value = kodOrnekleri[aktifOrnek].kod;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setKopyalandi(true);
      setTimeout(() => setKopyalandi(false), 2000);
    }
  };

  const kodSatirlari = kodOrnekleri[aktifOrnek].kod.split('\n');
  const CanliBilesenler = [CanliSayac, CanliAPI, CanliTema];
  const AktifCanliBilesen = CanliBilesenler[aktifOrnek] || CanliSayac;

  return (
    <section className="kod-gosterimi section">
      <div className="container">
        <h2 className="section-title">Kod Örnekleri</h2>
        <p className="section-subtitle">
          Gerçek React + TypeScript kodlarıyla kavramları somutlaştırın. Kopyala butonuyla
          kodları alıp kendi projenizde deneyebilirsiniz.
        </p>
        <div className="neon-divider" />

        <div className="kod-gosterimi__secici">
          {kodOrnekleri.map((ornek, idx) => (
            <button
              key={idx}
              className={`kod-gosterimi__sekme ${aktifOrnek === idx ? 'kod-gosterimi__sekme--aktif' : ''}`}
              onClick={() => { setAktifOrnek(idx); setKopyalandi(false); }}
            >
              {ornek.baslik}
            </button>
          ))}
        </div>

        <div className="kod-gosterimi__ikili-grid">
          <div className="kod-gosterimi__kart glass-card">
            <div className="kod-gosterimi__baslik-kismi">
              <div className="kod-gosterimi__noktalar">
                <span className="kod-gosterimi__nokta kod-gosterimi__nokta--kirmizi" />
                <span className="kod-gosterimi__nokta kod-gosterimi__nokta--sari" />
                <span className="kod-gosterimi__nokta kod-gosterimi__nokta--yesil" />
              </div>
              <span className="kod-gosterimi__dosya-adi">
                {kodOrnekleri[aktifOrnek].dil === 'tsx' ? '⌨️ ' : '📄 '}
                {kodOrnekleri[aktifOrnek].baslik}
              </span>
              <button
                className={`kod-gosterimi__kopyala ${kopyalandi ? 'kod-gosterimi__kopyala--basarili' : ''}`}
                onClick={kopyalamaIslemi}
              >
                {kopyalandi ? '✅ Kopyalandı!' : '📋 Kopyala'}
              </button>
            </div>

            <div className="kod-gosterimi__aciklama">
              {kodOrnekleri[aktifOrnek].aciklama}
            </div>

            <div className="kod-gosterimi__govde">
              <div className="kod-gosterimi__satir-numaralari">
                {kodSatirlari.map((_, i) => (
                  <span key={i} className="kod-gosterimi__satir-no">
                    {i + 1}
                  </span>
                ))}
              </div>
              <pre className="kod-gosterimi__onformat">
                <code
                  dangerouslySetInnerHTML={{
                    __html: pythonVurgula(kodOrnekleri[aktifOrnek].kod),
                  }}
                />
              </pre>
            </div>
          </div>

          <div className="kod-gosterimi__canli-onizleme glass-card">
            <div className="kod-gosterimi__baslik-kismi" style={{ background: 'rgba(97, 218, 251, 0.1)', borderBottom: '1px solid rgba(97, 218, 251, 0.2)' }}>
              <span className="kod-gosterimi__dosya-adi" style={{ color: '#61dafb', fontWeight: 'bold' }}>
                ✨ Canlı Önizleme
              </span>
            </div>
            <div className="kod-gosterimi__onizleme-govde">
              <AktifCanliBilesen />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KodGosterimi;
