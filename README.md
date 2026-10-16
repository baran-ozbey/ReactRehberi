# ⚛️ ReactRehberi — React & TypeScript İnteraktif Eğitim Platformu

Bu proje, **Web Programlama** dersi "React + TypeScript Eğitim Sayfası Yapımı" final ödevi kapsamında **Baran Özbey** tarafından geliştirilmiştir.

---

## 🎯 Proje Hakkında

**ReactRehberi**, kullanıcıların React ve TypeScript kavramlarını modern, görsel açıdan zengin ve tamamen interaktif bir web arayüzü üzerinden öğrenmelerini amaçlayan tek sayfalık (SPA) bir eğitim platformudur.

Hazır UI kütüphaneleri (Bootstrap, Material UI vb.) **kullanılmamış**; "Koyu Tema / Neon" tasarım sistemi (Glassmorphism) ile canvas animasyonları sıfırdan CSS ve TSX ile kodlanmıştır.

---

## 🧩 Öne Çıkan Özellikler ve Bileşenler

| Bileşen | Açıklama |
|---|---|
| **`AnaGiris`** | Canvas tabanlı interaktif parçacık animasyonu (React Blue teması) + daktilo efekti |
| **`KavramSekmeleri`** | Sekme geçişli kavram anlatımı: Bileşen Mimarisi, State & Props, Hooks, Context API, JSX, TypeScript |
| **`SinirAgiGorsellestirme`** | Hover ile katman açıklamalarını gösteren interaktif SVG **Bileşen Ağacı** diyagramı |
| **`KodGosterimi`** | React/TS kodlarını özel tokenizer ile renklendirir; kopyala butonu içerir |
| **`PropsSimulasyonu`** | 🆕 **Özgün Bileşen** — Props değerlerini canlı olarak değiştirip anlık önizleme ve TSX kodu üretimi |
| **`BilgiTesti`** | Havuzdan rastgele 5 soru çeken, anlık geri bildirimli ve skor hesaplamalı React/TS quiz modülü |
| **`UstMenu`** | Scroll'a duyarlı (cam efektli) header + mobil hamburger menü |
| **`AltMenu`** | Resmi React/TS kaynakları ve öğrenme yolları içeren Footer |

---

## ⚙️ Teknik Altyapı

| Teknoloji | Kullanım |
|---|---|
| **React 19** | Fonksiyonel bileşenler, Hook'lar |
| **TypeScript** | Sıkı tip kontrolü, özel Interface tanımları |
| **Vite** | Geliştirme ve üretim derleyicisi |
| **Vanilla CSS** | CSS değişkenleri, Flexbox, Grid, Glassmorphism |
| **React Router DOM** | *Kaldırıldı* — Sayfa içi anchor (#id) navigasyonu tercih edildi |

### Kullanılan React Kavramları (Ödev Gereklilikleri)

- ✅ `useState`, `useEffect`, `useRef` Hook'ları
- ✅ Fonksiyonel bileşenler (`React.FC<Props>`)
- ✅ Props ve `interface` tanımları (örn. `KartProps`, `PropsSimulasyonu`)
- ✅ Bileşen tabanlı modüler dosya yapısı
- ✅ TypeScript Generics (`useState<T>`, `useRef<HTMLCanvasElement>`)
- ✅ Koşullu render (`&&`, ternary operatörü)
- ✅ Liste render (`Array.map()` + `key` prop)
- ✅ Event handler'lar (`onClick`, `onChange`, `onMouseEnter`)
- ✅ Responsive tasarım (CSS Grid + Media Query)

---

## 🚀 Kurulum ve Çalıştırma

**1. Bağımlılıkları yükleyin:**
```bash
npm install
```

**2. Geliştirme sunucusunu başlatın:**
```bash
npm run dev
```

**3. Tarayıcınızda açın:**
```
http://localhost:5173
```

> ⚠️ `index.html` dosyasına doğrudan çift tıklayarak açmayın — boş sayfa görürsünüz. Mutlaka `npm run dev` ile sunucu üzerinden açın.

---

## 📁 Dosya Yapısı

```
src/
├── Bilesenler/
│   ├── AnaGiris/           # Hero bölümü — Canvas animasyonu
│   ├── UstMenu/            # Header — Scroll-aware navbar
│   ├── KavramSekmeleri/    # Sekme bileşeni — 6 React kavramı
│   ├── SinirAgiGorsellestirme/  # SVG Bileşen Ağacı görselleştirmesi
│   ├── KodGosterimi/       # Syntax-highlighted kod örnekleri
│   ├── PropsSimulasyonu/   # 🆕 Canlı Props Simülatörü
│   ├── BilgiTesti/         # İnteraktif quiz
│   ├── TiltKarti/          # 3D tilt efekti HOC
│   ├── ScrollAnimasyonu/   # Intersection Observer animasyonu
│   └── AltMenu/            # Footer
├── tipler/
│   └── index.ts            # Tüm TypeScript interface tanımları
├── veriler/
│   └── icerik.ts           # Uygulama verisi (sekmeler, sorular, kod örnekleri)
├── App.tsx                 # Kök bileşen — tüm sayfa yapısı
└── main.tsx                # Uygulama giriş noktası
```

---

## 📱 Responsive Tasarım

Tüm bileşenler **CSS Grid** ve **Flexbox** kullanılarak şu breakpoint'lere uyumlu hale getirilmiştir:

- 📱 Mobil: `≤ 480px`
- 📟 Tablet: `≤ 768px`
- 🖥️ Masaüstü: `≥ 1024px`

---

© 2026 ReactRehberi — Baran Özbey tarafından React + TypeScript ile geliştirildi.
