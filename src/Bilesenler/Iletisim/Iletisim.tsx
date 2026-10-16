import React, { useState } from 'react';
import ScrollAnimasyonu from '../ScrollAnimasyonu/ScrollAnimasyonu';
import './Iletisim.css';

const Iletisim: React.FC = () => {
  const [formVerisi, setFormVerisi] = useState({
    isim: '',
    eposta: '',
    mesaj: ''
  });
  const [gonderildi, setGonderildi] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormVerisi(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTimeout(() => {
      setGonderildi(true);
      setFormVerisi({ isim: '', eposta: '', mesaj: '' });
      
      setTimeout(() => setGonderildi(false), 3000);
    }, 500);
  };

  return (
    <section id="iletisim" className="iletisim section">
      <div className="container">
        <ScrollAnimasyonu>
          <h2 className="section-title">İletişim</h2>
          <p className="section-subtitle">
            Proje hakkında sorularınız veya önerileriniz için benimle iletişime geçebilirsiniz.
          </p>
          <div className="neon-divider" />
        </ScrollAnimasyonu>

        <div className="iletisim__icerik">
          <ScrollAnimasyonu animasyonTuru="fade-right">
            <div className="iletisim__bilgiler glass-card">
              <h3>Geliştirici Bilgileri</h3>
              <p>Bu proje, React ve TypeScript öğrenimini desteklemek amacıyla final ödevi olarak geliştirilmiştir.</p>
              
              <ul className="iletisim__liste">
                <li>
                  <span className="iletisim__ikon">👤</span>
                  <div>
                    <strong>İsim:</strong>
                    <span>Baran Özbey</span>
                  </div>
                </li>
                <li>
                  <span className="iletisim__ikon">📧</span>
                  <div>
                    <strong>E-posta:</strong>
                    <span>241478079@samsun.edu.tr</span>
                  </div>
                </li>
                <li>
                  <span className="iletisim__ikon">🏫</span>
                  <div>
                    <strong>Üniversite:</strong>
                    <span>Samsun Üniversitesi</span>
                  </div>
                </li>
              </ul>
            </div>
          </ScrollAnimasyonu>

          <ScrollAnimasyonu animasyonTuru="fade-left">
            <form className="iletisim__form glass-card" onSubmit={handleSubmit}>
              <h3>Bana Ulaşın</h3>
              
              {gonderildi && (
                <div className="iletisim__basari">
                  ✅ Mesajınız başarıyla gönderildi! (Simülasyon)
                </div>
              )}

              <div className="iletisim__form-grup">
                <label htmlFor="isim">Adınız</label>
                <input 
                  type="text" 
                  id="isim" 
                  name="isim" 
                  value={formVerisi.isim}
                  onChange={handleChange}
                  required 
                  placeholder="Adınızı giriniz"
                />
              </div>

              <div className="iletisim__form-grup">
                <label htmlFor="eposta">E-posta Adresiniz</label>
                <input 
                  type="email" 
                  id="eposta" 
                  name="eposta" 
                  value={formVerisi.eposta}
                  onChange={handleChange}
                  required 
                  placeholder="ornek@email.com"
                />
              </div>

              <div className="iletisim__form-grup">
                <label htmlFor="mesaj">Mesajınız</label>
                <textarea 
                  id="mesaj" 
                  name="mesaj" 
                  value={formVerisi.mesaj}
                  onChange={handleChange}
                  required 
                  placeholder="Mesajınızı buraya yazınız..."
                  rows={4}
                ></textarea>
              </div>

              <button type="submit" className="buton buton--birincil" style={{width: '100%'}}>
                Gönder
              </button>
            </form>
          </ScrollAnimasyonu>
        </div>
      </div>
    </section>
  );
};

export default Iletisim;
