import { useState } from 'react';

const CanliSayac: React.FC = () => {
  const [deger, setDeger] = useState<number>(0);

  const arttir = () => setDeger(prev => prev + 1);
  const azalt = () => setDeger(prev => prev - 1);
  const sifirla = () => setDeger(0);

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h3 style={{ marginBottom: '1rem', color: 'var(--text-primary)' }}>Beğeni Sayısı</h3>
      <div style={{ fontSize: '3rem', fontWeight: 'bold', color: '#61dafb', marginBottom: '1.5rem' }}>
        {deger}
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
        <button 
          onClick={azalt} 
          style={{ padding: '8px 16px', borderRadius: '6px', border: 'none', background: 'rgba(255,255,255,0.1)', color: '#fff', cursor: 'pointer', fontSize: '1.2rem' }}
        >
          -
        </button>
        <button 
          onClick={sifirla} 
          style={{ padding: '8px 16px', borderRadius: '6px', border: 'none', background: 'rgba(255,255,255,0.1)', color: '#fff', cursor: 'pointer', fontSize: '1rem' }}
        >
          Sıfırla
        </button>
        <button 
          onClick={arttir} 
          style={{ padding: '8px 16px', borderRadius: '6px', border: 'none', background: '#61dafb', color: '#000', cursor: 'pointer', fontSize: '1.2rem', fontWeight: 'bold' }}
        >
          +
        </button>
      </div>
      {deger > 10 && (
        <p style={{ marginTop: '1rem', color: '#10b981', fontWeight: '500' }}>🔥 Harika! 10'u aştınız.</p>
      )}
    </div>
  );
};

export default CanliSayac;
