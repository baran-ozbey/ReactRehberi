export interface SinirKatmani {
  isim: string;
  dugumSayisi: number;
  aciklama: string;
  renk: string;
}

export interface SekmeIcerigi {
  aciklama: string;
  anahtarTerimler: string[];
  kullanimAlanlari: string[];
}

export interface SekmeOgesi {
  id: string;
  baslik: string;
  ikon: string;
  icerik: SekmeIcerigi;
}

export interface KodOrnegi {
  kod: string;
  dil: string;
  baslik: string;
  aciklama: string;
}

export interface TarihOlayi {
  yil: number;
  baslik: string;
  aciklama: string;
  ikon: string;
}

export interface TestSorusu {
  id?: number;
  soru: string;
  secenekler: string[];
  dogruSecenekIndeksi: number;
  aciklama: string;
}

export interface AkordeonOgesi {
  soru: string;
  cevap: string;
}

export interface NavBaglantisi {
  id: string;
  etiket: string;
  yol: string;
}

export interface VakaOgesi {
  id: string;
  sektor: string;
  ikon: string;
  baslik: string;
  onYuzOzeti: string;
  arkaYuzDetay: string;
  istatistik: string;
}

export interface HookKarti {
  isim: string;
  ikon: string;
  renk: string;
  ozet: string;
  ornek: string;
  notlar: string;
}
