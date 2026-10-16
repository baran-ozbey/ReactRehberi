import { useState, useEffect } from 'react';

interface Kullanici {
  id: number;
  name: string;
  email: string;
}

const CanliAPI: React.FC = () => {
  const [kullanicilar, setKullanicilar] = useState<Kullanici[]>([]);
  const [yukleniyor, setYukleniyor] = useState<boolean>(true);
  const [hata, setHata] = useState<string | null>(null);

  useEffect(() => {
    const veriCek = async () => {
      try {
        const yanit = await fetch('https://jsonplaceholder.typicode.com/users?_limit=3');
        const veri = await yanit.json();
        setKullanicilar(veri);
      } catch {
        setHata('Veri yüklenemedi.');
      } finally {
        setYukleniyor(false);
      }
    };
    veriCek();
  }, []);

  return (
    <div style={{ padding: '1.5rem', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <h3 style={{ marginBottom: '1rem', color: 'var(--text-primary)', textAlign: 'center' }}>Kullanıcı Listesi (API)</h3>
      
      {yukleniyor && <p style={{ textAlign: 'center', color: '#a855f7' }}>⏳ Veriler yükleniyor...</p>}
      {hata && <p style={{ textAlign: 'center', color: '#ef4444' }}>❌ {hata}</p>}
      
      {!yukleniyor && !hata && (
        <ul style={{ listStyleType: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {kullanicilar.map(kisi => (
            <li key={kisi.id} style={{ background: 'rgba(255,255,255,0.05)', padding: '12px 16px', borderRadius: '8px', borderLeft: '4px solid #a855f7' }}>
              <div style={{ fontWeight: '600', color: '#fff', marginBottom: '4px' }}>{kisi.name}</div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>{kisi.email}</div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CanliAPI;
