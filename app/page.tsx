import Image from "next/image";
import AudioPlayer from "../components/AudioPlayer";
import EditionTicker from "../components/EditionTicker";
import ValueProps from "../components/ValueProps";
import ScreenshotShowcase from "../components/ScreenshotShowcase";
import StoreCTA from "../components/StoreCTA";

async function getEditionSlot(): Promise<string> {
  try {
    const response = await fetch("https://api.gezoist.com/hourly_summary.json", {
      next: { revalidate: 60 },
    });
    if (!response.ok) return "09:00";
    const data = await response.json();
    return data?.edition_slot ?? "09:00";
  } catch (error) {
    console.error("Zaman bilgisi çekilemedi:", error);
    return "09:00";
  }
}

export default async function Home() {
  const editionSlot = await getEditionSlot();

  return (
    <main className="min-h-screen flex justify-center p-6 lg:p-12 pb-32 lg:pb-16 relative overflow-hidden">
      
      {/* Container: 12 Sütunlu Grid Yapısı */}
      <div className="w-full max-w-[1280px] lg:grid lg:grid-cols-12 lg:gap-8 lg:items-center">
        
        {/* SOL KOLON: (Masaüstünde 5 Sütun) */}
        <div className="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left w-full">
          
          <div className="w-20 h-20 lg:w-24 lg:h-24 relative mb-6 rounded-3xl overflow-hidden shadow-lg shadow-white/5 border border-white/10">
            <Image src="/logo.png" alt="Gezoist Logo" fill priority className="object-cover" />
          </div>
          
          <span className="text-[#ffcc00] font-bold text-xs tracking-widest uppercase mb-4 block">
            Gezo Yapay Zeka
          </span>
          
          <h1 className="text-3xl lg:text-5xl font-extrabold text-white leading-tight mb-5">
            Tüm Gündem Tek Ekranda, <br className="hidden lg:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffcc00] to-[#ffaa00]">Yapay Zeka ile Dinle</span>
          </h1>
          
          <p className="text-sm lg:text-base text-white/60 mb-8 max-w-md leading-relaxed">
            Gündemi dinle, okumaya vakit bulunca oku. Onlarca gazete ve köşe yazarı, yapay zeka ile her gün üç kez özetleniyor.
          </p>

          <div className="flex items-center gap-2 mb-8 bg-white/5 px-4 py-2 rounded-full border border-white/10">
            <div className="flex text-[#ffcc00] text-sm">⭐⭐⭐⭐</div>
            <span className="text-xs text-white/80 font-medium">4.0 Puan • 100 B+ İndirme</span>
          </div>

          <EditionTicker activeSlot={editionSlot} />

          <div className="w-full max-w-md bg-[#1a1a24]/80 backdrop-blur-md border border-white/5 rounded-3xl p-6 shadow-2xl mb-8 mt-2">
            <AudioPlayer />
          </div>

          <div className="w-full max-w-md">
            <ValueProps />
          </div>

          {/* MASAÜSTÜ CTA (Sadece Desktop'ta Görünür) */}
          <div className="hidden lg:flex w-full max-w-md gap-4 mt-10">
            <a
              href="https://apps.apple.com/app/gezo-gundem/id6762355653"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 h-14 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 hover:bg-white/10 transition-colors"
            >
              <span className="text-base font-medium text-white">App Store</span>
            </a>
            <a
              href="https://gundem.gezoist.com/indir?ref=web_landing"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 h-14 bg-[#ffcc00] text-black rounded-2xl flex items-center justify-center border border-[#ffcc00] hover:bg-[#ffaa00] transition-colors font-bold shadow-lg shadow-[#ffcc00]/20"
            >
              <span className="text-base">Google Play'den Al</span>
            </a>
          </div>
          
        </div>

        {/* SAĞ KOLON: (Masaüstünde 7 Sütun) */}
        <div className="lg:col-span-7 mt-16 lg:mt-0 flex justify-center lg:justify-end w-full">
          <ScreenshotShowcase />
        </div>

      </div>

      {/* MOBİL CTA (Sadece Mobilde Görünür) */}
      <StoreCTA />
    </main>
  );
}