import UstMenu from './Bilesenler/UstMenu/UstMenu';
import AltMenu from './Bilesenler/AltMenu/AltMenu';
import AnaGiris from './Bilesenler/AnaGiris/AnaGiris';
import KavramSekmeleri from './Bilesenler/KavramSekmeleri/KavramSekmeleri';
import SinirAgiGorsellestirme from './Bilesenler/SinirAgiGorsellestirme/SinirAgiGorsellestirme';
import KodGosterimi from './Bilesenler/KodGosterimi/KodGosterimi';
import HookKartlari from './Bilesenler/HookKartlari/HookKartlari';
import PropsSimulasyonu from './Bilesenler/PropsSimulasyonu/PropsSimulasyonu';
import ReactTarihcesi from './Bilesenler/ReactTarihcesi/ReactTarihcesi';
import SikcaSorulanSorular from './Bilesenler/SikcaSorulanSorular/SikcaSorulanSorular';
import BilgiTesti from './Bilesenler/BilgiTesti/BilgiTesti';
import Iletisim from './Bilesenler/Iletisim/Iletisim';
import './App.css';

function App() {
  return (
    <div className="uygulama">
      <UstMenu />

      <main className="uygulama-icerik">

        <section id="ana-sayfa">
          <AnaGiris />
        </section>

        <section id="konu-anlatimi">
          <KavramSekmeleri />
        </section>

        <section id="gorsel-ornek">
          <SinirAgiGorsellestirme />
        </section>

        <section id="hook-kartlari">
          <HookKartlari />
        </section>

        <section id="kod-ornekleri">
          <KodGosterimi />
        </section>

        <section id="props-sim">
          <PropsSimulasyonu />
        </section>

        <section id="tarihce">
          <ReactTarihcesi />
        </section>

        <section id="sss">
          <SikcaSorulanSorular />
        </section>

        <section id="etkilesim">
          <BilgiTesti />
        </section>

        <section id="iletisim">
          <Iletisim />
        </section>

      </main>

      <AltMenu />
    </div>
  );
}

export default App;
