import type {
  NavBaglantisi,
  SinirKatmani,
  SekmeOgesi,
  KodOrnegi,
  TarihOlayi,
  TestSorusu,
  AkordeonOgesi,
  VakaOgesi,
  HookKarti
} from '../tipler';

export const navBaglantilari: NavBaglantisi[] = [
  { id: 'ana-sayfa',     etiket: 'Ana Sayfa',        yol: '#ana-sayfa' },
  { id: 'konu-anlatimi', etiket: 'Kavramlar',         yol: '#konu-anlatimi' },
  { id: 'gorsel-ornek',  etiket: 'Bileşen Ağacı',    yol: '#gorsel-ornek' },
  { id: 'hook-kartlari', etiket: "Hook'lar",          yol: '#hook-kartlari' },
  { id: 'kod-ornekleri', etiket: 'Kod Örnekleri',     yol: '#kod-ornekleri' },
  { id: 'props-sim',     etiket: 'Props Simülatörü',  yol: '#props-sim' },
  { id: 'tarihce',       etiket: 'Tarihçe',           yol: '#tarihce' },
  { id: 'sss',           etiket: 'SSS',               yol: '#sss' },
  { id: 'etkilesim',     etiket: 'Bilgi Testi',       yol: '#etkilesim' },
  { id: 'iletisim',      etiket: 'İletişim',          yol: '#iletisim' },
];

export const sinirKatmanlari: SinirKatmani[] = [
  {
    isim: 'App (Kök Bileşen)',
    dugumSayisi: 1,
    renk: '#61dafb',
    aciklama:
      'Tüm React uygulamasının başlangıç noktasıdır. Providers (Context, Router…) bu katmanda sarılır; diğer tüm bileşenleri kapsayan kök elemandır.',
  },
  {
    isim: 'Layout (Düzen)',
    dugumSayisi: 3,
    renk: '#a855f7',
    aciklama:
      'Header, Sidebar ve Footer gibi sayfanın genel iskeletini oluşturan yapısal bileşenlerdir. Sayfa geçişlerinden bağımsız olarak her zaman ekranda kalırlar.',
  },
  {
    isim: 'Page (Sayfa)',
    dugumSayisi: 4,
    renk: '#f97316',
    aciklama:
      'Router tarafından gösterilen birer sayfadır. Her rota (route) için ayrı bir Page bileşeni oluşturulur; state genellikle bu katmanda başlatılır.',
  },
  {
    isim: 'UI Bileşenleri',
    dugumSayisi: 6,
    renk: '#10b981',
    aciklama:
      'Buton, Input, Modal, Card gibi yeniden kullanılabilir atomik yapı taşlarıdır. Kendi iç mantıklarını Props aracılığıyla alır; mümkün olduğunca saf (pure) tutulurlar.',
  },
];

export const sekmeler: SekmeOgesi[] = [
  {
    id: 'bilesenler',
    baslik: 'Bileşen Mimarisi',
    ikon: '🧩',
    icerik: {
      aciklama:
        'React, kullanıcı arayüzünü bağımsız ve yeniden kullanılabilir parçalara — bileşenlere (component) — böler. Her bileşen kendi işini yapan küçük bir JavaScript fonksiyonudur; aldığı "props" ile yapılandırılır ve döndürdüğü JSX ile ekranda görünür.',
      anahtarTerimler: ['Fonksiyonel Bileşen (FC)', 'Props', 'JSX', 'Composition (Birleştirme)', 'Pure Component'],
      kullanimAlanlari: [
        'Buton, Kart, Modal gibi tekrar eden UI öğeleri',
        'Sayfa başlıkları ve gezinme çubukları',
        'Form grupları ve input öğeleri',
        'Veri listelerini render eden tablo satırları',
      ],
    },
  },
  {
    id: 'state-yonetimi',
    baslik: 'State & Props',
    ikon: '💾',
    icerik: {
      aciklama:
        '"State", bileşenin zamanla değişebilen iç hafızasıdır (örn. formdaki metin). "Props" ise üst bileşenden alttakine aktarılan salt-okunur veridir. State değişince React yalnızca etkilenen bileşeni yeniden çizer (re-render).',
      anahtarTerimler: ['useState Hook', 'setState', 'Lifting State Up', 'Tek Yönlü Veri Akışı', 'Immutability'],
      kullanimAlanlari: [
        'Açık/Kapalı durum tutan menü veya modal',
        'Sepete eklenen ürün sayısı',
        'Kullanıcının seçtiği tema (dark/light)',
        'API sonucunu tutan yükleme ve hata durumu',
      ],
    },
  },
  {
    id: 'hooklar',
    baslik: "React Hook'ları",
    ikon: '🪝',
    icerik: {
      aciklama:
        "Hook'lar, fonksiyonel bileşenlere state ve yaşam döngüsü (lifecycle) yetenekleri kazandıran özel fonksiyonlardır. Yalnızca bileşenin en üst düzeyinde çağrılırlar; döngü veya koşul içinde kullanılmazlar.",
      anahtarTerimler: ['useEffect', 'useRef', 'useMemo', 'useCallback', 'Custom Hook'],
      kullanimAlanlari: [
        'useEffect → API çağrısı & event listener',
        'useRef → DOM elemanına doğrudan erişim',
        'useMemo → Pahalı hesaplamaları önbellekleme',
        'Custom Hook → Tekrar kullanılabilir mantık',
      ],
    },
  },
  {
    id: 'context-api',
    baslik: 'Context API',
    ikon: '🌐',
    icerik: {
      aciklama:
        "Context API, 'prop drilling' sorununu çözer; veriyi bileşen ağacının herhangi bir derinliğindeki bileşene ara katmanlardan geçirmeden doğrudan iletmeyi sağlar. Küçük-orta ölçekli global state için idealdir.",
      anahtarTerimler: ['createContext', 'Provider', 'useContext', 'Prop Drilling', 'Global State'],
      kullanimAlanlari: [
        'Kullanıcı oturum bilgisi (Auth)',
        'Tema ve dil tercihi',
        'Alışveriş sepeti',
        'Bildirim/Alert sistemi',
      ],
    },
  },
  {
    id: 'jsx-syntax',
    baslik: 'JSX Sözdizimi',
    ikon: '📝',
    icerik: {
      aciklama:
        "JSX, JavaScript içinde HTML benzeri yapılar yazmamızı sağlayan bir sözdizimi genişletmesidir. Babel tarafından derlenerek React.createElement() çağrılarına dönüştürülür. Süslü parantezler {} ile JavaScript ifadeleri doğrudan JSX içine gömülür.",
      anahtarTerimler: ['className', 'Fragment <> </>', 'Koşullu Render (&&, ternary)', 'Array.map()', 'Olay Dinleyicileri (onClick)'],
      kullanimAlanlari: [
        'Koşullara göre farklı UI gösterme',
        'Listeler halinde veri render etme',
        'Kullanıcı tıklamalarını yakalama',
        'Form öğeleri ile çalışma',
      ],
    },
  },
  {
    id: 'typescript',
    baslik: 'TypeScript ile React',
    ikon: '🛡️',
    icerik: {
      aciklama:
        "TypeScript, React bileşenlerine statik tip güvenliği ekler. Props ve state tiplemeleri sayesinde hatalar kodlama aşamasında (compile-time) yakalanır; IDE otomatik tamamlaması gelişir; büyük projelerde bakım kolaylaşır.",
      anahtarTerimler: ['Interface', 'Type Alias', 'React.FC<Props>', 'Generics', 'Enum'],
      kullanimAlanlari: [
        'Props nesnesini interface ile tipleme',
        'useState<T> ile state tipini belirleme',
        'API yanıt modellerini type ile tanımlama',
        'Event tiplerini (MouseEvent, ChangeEvent) kullanma',
      ],
    },
  },
];

export const kodOrnekleri: KodOrnegi[] = [
  {
    dil: 'tsx',
    baslik: 'useState — Sayaç Bileşeni',
    aciklama:
      "useState Hook'u kullanılarak oluşturulan interaktif bir sayaç. setState fonksiyonu ile state immutable biçimde güncellenir, React yalnızca değişen kısımları yeniden çizer.",
    kod: `import React, { useState } from 'react';

interface SayacProps {
  baslik: string;
  baslangicDegeri?: number;
}

const Sayac: React.FC<SayacProps> = ({ baslik, baslangicDegeri = 0 }) => {
  const [deger, setDeger] = useState<number>(baslangicDegeri);

  const arttir = () => setDeger(prev => prev + 1);
  const azalt  = () => setDeger(prev => prev - 1);
  const sifirla = () => setDeger(baslangicDegeri);

  return (
    <div className="sayac">
      <h2>{baslik}</h2>
      <span className="sayac__deger">{deger}</span>

      <div className="sayac__butonlar">
        <button onClick={azalt}>−</button>
        <button onClick={sifirla}>Sıfırla</button>
        <button onClick={arttir}>+</button>
      </div>

      {deger > 10 && <p>🔥 Harika! 10'u aştınız.</p>}
    </div>
  );
};

export default Sayac;`,
  },
  {
    dil: 'tsx',
    baslik: 'useEffect — API Veri Çekme',
    aciklama:
      "useEffect, bileşen ekrana basıldığında (mount) ve bağımlılıkları değiştiğinde çalışır. Boş bağımlılık dizisi [] yalnızca bir kez çalıştırır. Burada bir dış API'den veri çekilmekte ve TypeScript ile tip güvenliği sağlanmaktadır.",
    kod: `import React, { useState, useEffect } from 'react';

interface Kullanici {
  id: number;
  name: string;
  email: string;
  company: { name: string };
}

const KullaniciListesi: React.FC = () => {
  const [kullanicilar, setKullanicilar] = useState<Kullanici[]>([]);
  const [yukleniyor, setYukleniyor] = useState<boolean>(true);
  const [hata, setHata] = useState<string | null>(null);

  useEffect(() => {
    const veriCek = async () => {
      try {
        const yanit = await fetch(
          'https://jsonplaceholder.typicode.com/users'
        );
        const veri: Kullanici[] = await yanit.json();
        setKullanicilar(veri);
      } catch {
        setHata('Veri yüklenemedi.');
      } finally {
        setYukleniyor(false);
      }
    };

    veriCek();
  }, []);

  if (yukleniyor) return <p>⏳ Yükleniyor...</p>;
  if (hata)       return <p>❌ {hata}</p>;

  return (
    <ul>
      {kullanicilar.map(kisi => (
        <li key={kisi.id}>
          <strong>{kisi.name}</strong> — {kisi.email}
        </li>
      ))}
    </ul>
  );
};

export default KullaniciListesi;`,
  },
  {
    dil: 'tsx',
    baslik: 'Context API — Tema Yönetimi',
    aciklama:
      "Context API ile prop drilling olmaksızın global state paylaşımı. ThemeContext adı verilmiş bir context oluşturulur, Provider ile sağlanır ve ihtiyaç duyan herhangi bir alt bileşen useContext Hook'u ile tüketir.",
    kod: `import React, { createContext, useContext, useState } from 'react';

interface TemaContextTipi {
  tema: 'light' | 'dark';
  temaToggle: () => void;
}

const TemaContext = createContext<TemaContextTipi | undefined>(undefined);

export const TemaProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [tema, setTema] = useState<'light' | 'dark'>('dark');

  const temaToggle = () =>
    setTema(mevcut => (mevcut === 'dark' ? 'light' : 'dark'));

  return (
    <TemaContext.Provider value={{ tema, temaToggle }}>
      {children}
    </TemaContext.Provider>
  );
};

export const useTema = (): TemaContextTipi => {
  const context = useContext(TemaContext);
  if (!context) throw new Error('useTema, TemaProvider içinde kullanılmalı!');
  return context;
};

const TemaButonu: React.FC = () => {
  const { tema, temaToggle } = useTema();

  return (
    <button onClick={temaToggle}>
      Aktif Tema: {tema === 'dark' ? '🌙 Koyu' : '☀️ Açık'}
    </button>
  );
};

export default TemaButonu;`,
  },
];

export const tumTestSorulari: TestSorusu[] = [
  {
    soru: "React'te bir bileşenin kendi iç değişken verisini tutmak için kullanılan temel Hook hangisidir?",
    secenekler: ['useEffect', 'useContext', 'useState', 'useRef'],
    dogruSecenekIndeksi: 2,
    aciklama:
      "useState Hook'u, bir bileşene 'hafıza' kazandırır. Döndürdüğü [deger, setDeger] çiftinin ilki anlık değer, ikincisi ise onu güncelleyen fonksiyondur.",
  },
  {
    soru: "JSX içinde JavaScript değişkeni veya ifadesi yazmak için hangi semboller kullanılır?",
    secenekler: ['( ) Parantezler', '[ ] Köşeli Parantezler', '{ } Süslü Parantezler', '/* */ Yorum Bloğu'],
    dogruSecenekIndeksi: 2,
    aciklama:
      'JSX içinde { } süslü parantezler açılarak değişkenler, fonksiyon çağrıları veya ternary gibi herhangi bir JavaScript ifadesi yazılabilir.',
  },
  {
    soru: "useEffect Hook'u yalnızca bileşen ilk ekrana basıldığında çalışsın isteniyorsa ikinci parametresi ne olmalıdır?",
    secenekler: ['Hiç yazılmamalı', 'null', '[ ] Boş dizi', '{ } Boş nesne'],
    dogruSecenekIndeksi: 2,
    aciklama:
      'Boş bağımlılık dizisi [] ile useEffect, bileşen mount olduğunda yalnızca bir kez tetiklenir ve sonrasında bir daha çalışmaz.',
  },
  {
    soru: "React'te bir listede her öğenin benzersiz olduğunu belirtmek için hangi prop kullanılır?",
    secenekler: ['id', 'index', 'key', 'ref'],
    dogruSecenekIndeksi: 2,
    aciklama:
      "React, Virtual DOM farkı hesaplarken hangi öğenin değiştiğini anlayabilmek için 'key' prop'una ihtiyaç duyar.",
  },
  {
    soru: "Üst bileşenden alt bileşene veri aktarımı için React'te hangi mekanizma kullanılır?",
    secenekler: ['State', 'Props', 'Context', 'Ref'],
    dogruSecenekIndeksi: 1,
    aciklama:
      "Props (properties), üst bileşenden alt bileşene tek yönlü olarak aktarılan veridir. Alt bileşen props'u değiştiremez, yalnızca okuyabilir.",
  },
  {
    soru: "TypeScript'te bir bileşenin alacağı props nesnesinin yapısını belirtmek için en yaygın kullanılan yapı hangisidir?",
    secenekler: ['Class', 'Enum', 'Interface veya Type', 'Namespace'],
    dogruSecenekIndeksi: 2,
    aciklama:
      'Interface veya Type ile props nesnesinin hangi alanları içereceği ve bunların tiplerinin ne olduğu derleme zamanında zorunlu kılınır.',
  },
  {
    soru: "'Prop Drilling' sorununun üstesinden gelmek için React'in yerleşik çözümü nedir?",
    secenekler: ['useEffect', 'Context API', 'useReducer', 'useRef'],
    dogruSecenekIndeksi: 1,
    aciklama:
      "Context API, veriyi bileşen ağacındaki ara katmanlara prop olarak geçirmek zorunda kalmadan doğrudan ihtiyaç duyan bileşene iletmek için kullanılır.",
  },
  {
    soru: "DOM elemanına doğrudan JavaScript ile erişmek (örn. bir input'a focus vermek) için hangi Hook kullanılır?",
    secenekler: ['useState', 'useEffect', 'useRef', 'useMemo'],
    dogruSecenekIndeksi: 2,
    aciklama:
      "useRef, render'lar arası değer tutan ve DOM elemanlarına doğrudan referans tutan bir 'kutu' oluşturur. ref.current ile elemana erişilir.",
  },
  {
    soru: "Pahalı hesaplamaların sonucunu önbelleğe alarak (cache) gereksiz yeniden hesaplamaları engelleyen Hook hangisidir?",
    secenekler: ['useState', 'useCallback', 'useMemo', 'useReducer'],
    dogruSecenekIndeksi: 2,
    aciklama:
      "useMemo, bağımlılıkları değişmediği sürece hesaplamanın sonucunu önbellekte tutar ve bileşen yeniden render olsa bile hesaplamayı tekrar çalıştırmaz.",
  },
  {
    soru: "React'te JSX içinde kullanılan 'className' neden 'class' değil?",
    secenekler: [
      "React'e özgü bir kural, tamamen rastgele seçildi",
      "'class' JavaScript'te rezerve bir anahtar kelime olduğu için",
      "HTML5 standardı bunu zorunlu kılıyor",
      "TypeScript derleyicisi 'class' kelimesini desteklemiyor",
    ],
    dogruSecenekIndeksi: 1,
    aciklama:
      "JavaScript'te 'class' zaten bir anahtar kelimedir (sınıf tanımlamak için kullanılır). Çakışmayı önlemek adına React JSX'te 'className' kullanılır.",
  },
];

export const soruHavuzundanSec = (soruSayisi: number = 5): TestSorusu[] => {
  const karistirilmis = [...tumTestSorulari].sort(() => 0.5 - Math.random());
  return karistirilmis.slice(0, soruSayisi);
};


export const tarihOlaylari: TarihOlayi[] = [
  {
    yil: 2011,
    ikon: '🌱',
    baslik: 'FaxJS — React\'in Atası',
    aciklama: 'Facebook mühendisi Jordan Walke, PHP şablon motoru XHP\'den ilham alarak "FaxJS" adlı deneysel bir UI kütüphanesi geliştirdi. Bu proje, ilerleyen yıllarda React\'e dönüşecek olan temel fikirleri (component tabanlı yapı, tek yönlü veri akışı) barındırıyordu.'
  },
  {
    yil: 2013,
    ikon: '🚀',
    baslik: 'React Açık Kaynak Oldu',
    aciklama: 'Facebook, React\'i JSConf US konferansında kamuoyuyla paylaştı. İlk tepkiler karışık oldu; "HTML\'yi JS\'e karıştırmak" fikri birçok geliştiriciye yabancı geldi. Ancak sanal DOM (Virtual DOM) kavramı, performans avantajıyla dikkat çekmeye başladı.'
  },
  {
    yil: 2014,
    ikon: '🗺️',
    baslik: 'Ekosistem Büyüyor: Flux & React Router',
    aciklama: 'Facebook, tek yönlü veri akışını standart hale getiren Flux mimari desenini tanıttı. Bağımsız topluluk geliştiriciler React Router\'ı geliştirerek SPA (Tek Sayfa Uygulaması) navigasyonunu React ile mümkün kıldı.'
  },
  {
    yil: 2015,
    ikon: '📱',
    baslik: 'React Native & Redux',
    aciklama: 'React Native\'in duyurulmasıyla React, mobil uygulama dünyasına açıldı — "Öğren bir kez, her yerde yaz" mottosuyla. Aynı yıl Dan Abramov, Flux\'un daha sade ve öngörülebilir bir yorumu olan Redux\'u geliştirdi; hızla endüstri standardı hale geldi.'
  },
  {
    yil: 2016,
    ikon: '⚡',
    baslik: 'React 15 — Olgunluk Dönemi',
    aciklama: 'React 15, SVG desteği ve önemli performans iyileştirmeleriyle yayınlandı. Bu sürümle birlikte React enterprise projelerinde de tercih edilmeye başlandı. Airbnb, Netflix ve Twitter gibi büyük şirketler React\'e geçişlerini tamamladı.'
  },
  {
    yil: 2017,
    ikon: '🔄',
    baslik: 'React 16 — Fiber Mimarisi',
    aciklama: 'React\'in iç render motoru tamamen yeniden yazıldı: Fiber. Bu mimari; render işlemini bölümlere ayırma, önceliklendirme ve animasyon akışını bozmama gibi temel sorunları çözdü. Error Boundaries (hata sınırları) ve Portals gibi yeni API\'lar eklendi.'
  },
  {
    yil: 2018,
    ikon: '🌐',
    baslik: 'React 16.3 — Yeni Context API',
    aciklama: 'Eski Context API\'si resmi olarak yeniden tasarlandı. createContext, Provider ve Consumer ile global state yönetimi artık resmi ve ergonomik bir yapıya kavuştu. createRef ve StrictMode da bu sürümle geldi.'
  },
  {
    yil: 2019,
    ikon: '🪝',
    baslik: 'React 16.8 — Hook\'lar Devrim Yarattı',
    aciklama: 'React tarihinin en büyük değişimi: Hook\'lar. useState, useEffect, useContext ve diğerleri, class bileşenler olmadan state ve yaşam döngüsü kullanımını mümkün kıldı. Fonksiyonel bileşenler artık tam güçlüydü; topluluk bu geçişi "Hooklar öncesi / sonrası" olarak nitelendiriyor.'
  },
  {
    yil: 2020,
    ikon: '🔗',
    baslik: 'React 17 — Kademeli Yükseltme',
    aciklama: 'React 17, tek bir yeni özellik sunmadı. Bunun yerine "kademeli yükseltme" altyapısına odaklandı: Farklı React sürümlerini aynı sayfada yan yana çalıştırabilme imkânı sağladı. Event delegation\'ın belge kökünden React ağaç köküne taşınması büyük bir mimari karardı.'
  },
  {
    yil: 2022,
    ikon: '🚦',
    baslik: 'React 18 — Eşzamanlı Özellikler',
    aciklama: 'Concurrent Mode (Eşzamanlı Mod) kararlı hale geldi. useTransition, useDeferredValue ve Suspense entegrasyonu ile arayüz güncellemeleri önceliklendirilebilir oldu. Otomatik batching (toplu güncelleme) ile performans önemli ölçüde arttı. createRoot API\'si zorunlu hale geldi.'
  },
  {
    yil: 2023,
    ikon: '🖥️',
    baslik: 'React Server Components',
    aciklama: 'Next.js 13\'ün "App Router" ile Server Components stabil hale geldi. Bu paradigma, bileşenlerin sunucu tarafında render edilerek istemciye sadece HTML gönderilmesini sağlar; JavaScript bundle boyutu küçülür, SEO güçlenir. "use client" ve "use server" direktifleri bu modelin temelini oluşturur.'
  },
  {
    yil: 2024,
    ikon: '✨',
    baslik: 'React 19 — Actions & use() Hook',
    aciklama: 'React 19 ile yeni "Actions" paradigması geldi: form submission ve async işlemler için useActionState, useFormStatus Hook\'ları eklendi. Evrensel use() Hook\'u, Promise ve Context\'i render aşamasında okumayı mümkün kıldı. ref artık doğrudan prop olarak geçirilebiliyor (forwardRef gerekmiyor).'
  },
  {
    yil: 2025,
    ikon: '🌍',
    baslik: 'Günümüzde React Ekosistemi',
    aciklama: 'React, dünya genelinde en çok kullanılan UI kütüphanesi konumunu koruyor. Next.js, Remix ve Astro gibi meta-framework\'ler üzerinde çalışıyor. Vite\'in yükselmesiyle create-react-app tarihe karışırken, React Compiler (Forget) ile otomatik memoization çalışmaları sürüyor.'
  }
];

export const sssSorulari: AkordeonOgesi[] = [
  {
    soru: 'React nedir ve neden kullanılır?',
    cevap: 'React, Meta (Facebook) tarafından geliştirilen açık kaynaklı bir JavaScript kullanıcı arayüzü (UI) kütüphanesidir. "Bileşen tabanlı" mimarisiyle arayüzü yeniden kullanılabilir küçük parçalara böler. Sanal DOM (Virtual DOM) sayesinde yalnızca değişen kısımları günceller; bu da büyük ve dinamik uygulamalarda ciddi performans avantajı sağlar. Büyük topluluk desteği, zengin ekosistemi ve iş dünyasındaki yaygın kullanımı tercih edilme nedenlerinin başında gelir.'
  },
  {
    soru: 'Virtual DOM (Sanal DOM) nedir, nasıl çalışır?',
    cevap: 'Virtual DOM, gerçek tarayıcı DOM\'unun hafif bir JavaScript kopyasıdır. State veya props değiştiğinde React önce bu sanal kopya üzerinde yeni bir ağaç oluşturur, ardından eski ve yeni ağaç arasındaki farkı bulur (Diffing algoritması). Yalnızca gerçekten değişen DOM düğümlerini günceller (Reconciliation). Bu süreç, her değişiklikte tüm DOM\'u yeniden çizmekten çok daha hızlıdır.'
  },
  {
    soru: 'Class Component ile Functional Component arasındaki fark nedir?',
    cevap: 'Class Component\'ler ES6 sınıf sözdizimini kullanır; this.state ve yaşam döngüsü metodları (componentDidMount vb.) içerir. Functional Component\'ler ise saf JavaScript fonksiyonlarıdır. React 16.8 ile birlikte Hook\'ların gelmesiyle functional component\'ler state ve yaşam döngüsü yetenekleri kazandı. Günümüzde functional component\'ler tercih edilir: daha az kod, daha okunabilir yapı, Hook\'larla tam uyum.'
  },
  {
    soru: 'Hook\'lar neden icat edildi?',
    cevap: 'Hook\'lardan önce üç büyük sorun vardı: (1) Durumlu mantığı bileşenler arasında paylaşmak için HOC veya render props gibi karmaşık kalıplar gerekiyordu. (2) Karmaşık bileşenler anlaşılmaz hale geliyordu çünkü yaşam döngüsü metodları birbirinden alakasız kodları barındırıyordu. (3) Class\'lar this bağlamı ve kod yeniden kullanımı açısından zorluklara yol açıyordu. Hook\'lar bu üç sorunu birden çözdü.'
  },
  {
    soru: 'State ile Props arasındaki fark nedir?',
    cevap: 'Props, üst bileşenden alt bileşene tek yönlü olarak aktarılan ve alt bileşen tarafından değiştirilemeyen (salt-okunur) verilerdir. State ise bir bileşenin kendi iç hafızasıdır; yalnızca o bileşen tarafından değiştirilebilir (setState veya useState). Basit kural: "Bu veri dışarıdan mı geliyor?" → Props. "Bu veri bileşenin içinde değişiyor mu?" → State.'
  },
  {
    soru: 'useEffect ne zaman ve nasıl kullanılır?',
    cevap: 'useEffect, bir bileşen render edildikten sonra çalıştırılması gereken "yan etkileri" (API çağrısı, event listener ekleme, zamanlayıcı vb.) yönetir. İkinci parametre olan bağımlılık dizisi davranışı belirler: [] (boş) → yalnızca mount\'ta çalışır; [degisken] → o değişken değişince çalışır; hiç verilmez → her render\'da çalışır. Temizleme için return içinde bir fonksiyon döndürülür.'
  },
  {
    soru: 'React\'te neden her liste öğesine key prop gereklidir?',
    cevap: 'React, bir listedeki öğeler güncellendiğinde hangisinin değiştiğini, eklendiğini veya silindiğini anlamak için key\'e ihtiyaç duyar. Benzersiz ve kararlı key\'ler sayesinde React yalnızca değişen öğeyi yeniden render eder; tüm listeyi sıfırlamaz. İdeal key: backend\'den gelen benzersiz ID. Kötü pratik: index kullanmak (öğe sırası değişirse hatalara yol açar).'
  },
  {
    soru: 'Context API ile Redux arasındaki fark nedir?',
    cevap: 'Context API, React\'in yerleşik çözümüdür; kurulum gerektirmez, tema veya kullanıcı oturumu gibi az değişen global veriler için idealdir. Redux ise bağımsız bir state yönetim kütüphanesidir; devtools, middleware (thunk/saga) ve zaman yolculuğu hata ayıklama gibi güçlü araçlar sunar. Küçük-orta projeler için Context API yeterli; büyük, karmaşık state geçmişi olan projeler için Redux veya Zustand/Jotai gibi alternatifler düşünülebilir.'
  },
  {
    soru: 'React\'te re-render ne zaman tetiklenir?',
    cevap: 'Bir bileşen şu durumlarda yeniden render edilir: (1) setState / useState set fonksiyonu çağrıldığında, (2) Alınan props değiştiğinde, (3) Üst bileşen render edildiğinde (alt bileşenler de otomatik render edilir). Gereksiz render\'ları önlemek için React.memo (bileşeni memoize eder), useMemo (hesaplamayı önbellekler) ve useCallback (fonksiyonu memoize eder) kullanılabilir.'
  },
  {
    soru: 'React performansını nasıl artırabiliriz?',
    cevap: 'Temel teknikler: (1) React.memo ile bileşen memoizasyonu, (2) useMemo ile pahalı hesaplamaları önbellekleme, (3) useCallback ile gereksiz fonksiyon yeniden oluşturmayı engelleme, (4) Code Splitting ile lazy loading (React.lazy + Suspense), (5) Liste render\'larında sanallaştırma (react-window), (6) Büyük resimleri optimize etme ve WebP formatına çevirme, (7) Gereksiz useEffect bağımlılıklarından kaçınma.'
  },
  {
    soru: 'TypeScript neden React projelerinde tercih edilir?',
    cevap: 'TypeScript, derleme aşamasında tip hatalarını yakalar; yanlış prop gönderimi veya undefined erişimi gibi runtime hatalarının önüne geçer. IDE\'lerde otomatik tamamlama ve hata vurgulama çok daha güçlü çalışır. Büyük projelerde kod tabanını anlamak ve refactor yapmak kolaylaşır. interface ve type tanımları adeta canlı dokümantasyon görevi görür.'
  },
  {
    soru: 'Next.js nedir, React\'ten farkı nedir?',
    cevap: 'React bir UI kütüphanesidir; yalnızca arayüz katmanını yönetir. Next.js ise React üzerine inşa edilmiş bir "meta-framework"tür: Server-Side Rendering (SSR), Static Site Generation (SSG), dosya bazlı routing, API routes, Image optimizasyonu ve React Server Components gibi üretim seviyesi özellikler sunar. Basit bir SPA için React yeterli; SEO kritik veya büyük ölçekli projeler için Next.js ideal seçimdir.'
  },
  {
    soru: 'Prop Drilling nedir ve nasıl çözülür?',
    cevap: 'Prop Drilling, bir verinin bileşen ağacında derinlere ulaşması için aradaki tüm bileşenlere props olarak geçirilmesi durumudur. Bu, aradaki bileşenleri gereksiz yere "habersiz taşıyıcı" haline getirir. Çözümler: (1) Context API — yerleşik React çözümü, (2) Redux / Zustand / Jotai — harici state yönetimi kütüphaneleri, (3) Component Composition — bileşenleri daha akıllıca birleştirme.'
  },
  {
    soru: 'Custom Hook nedir ve ne zaman oluşturulur?',
    cevap: 'Custom Hook, adı "use" ile başlayan ve içinde diğer Hook\'ları çağırabilen normal bir JavaScript fonksiyonudur. Birden fazla bileşende aynı state/effect mantığını tekrarlıyorsak (örn. API çağrısı, local storage senkronizasyonu, pencere boyutu takibi), bu mantığı Custom Hook\'a taşımak kodun yeniden kullanılabilirliğini artırır ve bileşenleri sadeleştirir.'
  }
];

export const hookKartlari: HookKarti[] = [
  {
    isim: 'useState',
    ikon: '💾',
    renk: '#61dafb',
    ozet: 'Bileşene değişken bir hafıza (state) ekler. Değer değişince bileşen yeniden render edilir.',
    ornek: `const [sayi, setSayi] = useState<number>(0);
const [metin, setMetin] = useState<string>('');
const [liste, setListe] = useState<string[]>([]);

setSayi(prev => prev + 1);`,
    notlar: '⚠️ State\'i doğrudan mutasyona uğratmayın (sayi++ değil), her zaman set fonksiyonunu kullanın.'
  },
  {
    isim: 'useEffect',
    ikon: '⚡',
    renk: '#a855f7',
    ozet: 'Render sonrası yan etkileri yönetir: API çağrısı, event listener, zamanlayıcı, DOM manipülasyonu.',
    ornek: `useEffect(() => {
  const veriCek = async () => {
    const data = await fetch('/api/kullanici');
    setKullanici(await data.json());
  };
  veriCek();

  return () => controller.abort();
}, []);`,
    notlar: '⚠️ Bağımlılık dizisi eksik bırakılırsa sonsuz döngü oluşabilir. ESLint kuralını aktif tutun.'
  },
  {
    isim: 'useRef',
    ikon: '📌',
    renk: '#10b981',
    ozet: 'Render\'lar arası değer saklayan ve DOM elemanlarına doğrudan referans tutan bir "kutu" oluşturur.',
    ornek: `const inputRef = useRef<HTMLInputElement>(null);
inputRef.current?.focus();

const sayacRef = useRef<number>(0);
sayacRef.current += 1;`,
    notlar: '💡 ref.current değiştiğinde bileşen yeniden render EDİLMEZ; bu useState\'den temel farkıdır.'
  },
  {
    isim: 'useMemo',
    ikon: '🧠',
    renk: '#f97316',
    ozet: 'Pahalı hesaplamaların sonucunu önbellekler. Bağımlılıklar değişmediği sürece hesaplamayı tekrarlamaz.',
    ornek: `const siraliListe = useMemo(() => {
  return [...liste].sort((a, b) =>
    siralama === 'asc'
      ? a.localeCompare(b)
      : b.localeCompare(a)
  );
}, [liste, siralama]);`,
    notlar: '⚠️ Her hesaplama için useMemo kullanmayın; yalnızca gerçekten ağır işlemler için. Erken optimizasyon kaçının.'
  },
  {
    isim: 'useCallback',
    ikon: '🔗',
    renk: '#ec4899',
    ozet: 'Fonksiyonu memoize eder. Her render\'da yeni bir fonksiyon referansı oluşmasını önler.',
    ornek: `const handleTikla = useCallback((id: number) => {
  setSecili(id);
  onSecim(id);
}, [onSecim]);

<AltBilesen onClick={handleTikla} />`,
    notlar: '💡 React.memo ile birlikte kullanılmadığında etkisi olmaz. İkisi birbirini tamamlayan araçlardır.'
  },
  {
    isim: 'useContext',
    ikon: '🌐',
    renk: '#3178c6',
    ozet: 'Context\'i tüketir; prop drilling olmaksızın derinlerdeki bileşenlere global veri erişimi sağlar.',
    ornek: `const TemaContext = createContext<string>('dark');

<TemaContext.Provider value={tema}>
  <UygulamaBileseni />
</TemaContext.Provider>

const tema = useContext(TemaContext);`,
    notlar: '⚠️ Context değişince onu kullanan TÜM bileşenler render edilir. Sık değişen veriler için performansı izleyin.'
  }
];

export const vakaAnalizleri: VakaOgesi[] = [];

