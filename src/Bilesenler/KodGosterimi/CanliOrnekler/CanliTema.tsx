import { createContext, useContext, useState } from 'react';

interface TemaContextTipi {
  tema: 'light' | 'dark';
  temaToggle: () => void;
}

const TemaContext = createContext<TemaContextTipi | undefined>(undefined);

const TemaButonu: React.FC = () => {
  const context = useContext(TemaContext);
  if (!context) return null;
  
  const { tema, temaToggle } = context;
  
  return (
    <button 
      onClick={temaToggle}
      style={{
        padding: '12px 24px',
        borderRadius: '8px',
        border: 'none',
        cursor: 'pointer',
        fontSize: '1.1rem',
        fontWeight: 'bold',
        background: tema === 'dark' ? '#333' : '#fff',
        color: tema === 'dark' ? '#fff' : '#333',
        boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
        transition: 'all 0.3s ease'
      }}
    >
      {tema === 'dark' ? '🌙 Koyu Tema' : '☀️ Açık Tema'}
    </button>
  );
};

const CanliTema: React.FC = () => {
  const [tema, setTema] = useState<'light' | 'dark'>('dark');
  const temaToggle = () => setTema(mevcut => (mevcut === 'dark' ? 'light' : 'dark'));

  return (
    <TemaContext.Provider value={{ tema, temaToggle }}>
      <div style={{ 
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem', 
        background: tema === 'dark' ? '#1a1a2e' : '#f8fafc',
        color: tema === 'dark' ? '#fff' : '#0f172a',
        transition: 'all 0.5s ease',
        borderRadius: '0 0 12px 0'
      }}>
        <h3 style={{ marginBottom: '2rem' }}>Context API Kullanımı</h3>
        <TemaButonu />
        <p style={{ marginTop: '2rem', fontSize: '0.9rem', opacity: 0.7, textAlign: 'center', maxWidth: '80%' }}>
          Bu alanın arka planı ve yazı rengi, hiçbir prop aktarılmadan doğrudan Context üzerinden yönetilmektedir.
        </p>
      </div>
    </TemaContext.Provider>
  );
};

export default CanliTema;
