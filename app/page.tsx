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
    <main className="min-h-screen flex flex-col items-center p-6 pb-28 relative overflow-hidden">
      <div className="mt-6 mb-6 flex flex-col items-center text-center">
        <div className="w-24 h-24 relative mb-4 rounded-3xl overflow-hidden shadow-lg shadow-white/5 border border-white/10">
          <Image src="/logo.png" alt="Gezoist Logo" fill priority className="object-cover" />
        </div>
        <h1 className="text-xl font-extrabold tracking-widest text-white/90 uppercase">
          Gezo Yapay Zeka
        </h1>
        <p className="text-sm text-white/60 mt-3 max-w-xs leading-relaxed">
          Gündemi dinle, okumaya vakit bulunca oku. Yapay zeka her gün üç kez özetliyor.
        </p>
      </div>

      <EditionTicker activeSlot={editionSlot} />

      <div className="w-full max-w-md bg-[#1a1a24]/80 backdrop-blur-md border border-white/5 rounded-3xl p-6 shadow-2xl mb-8">
        <AudioPlayer />
      </div>

      <ValueProps />
      <ScreenshotShowcase />
      <StoreCTA />
    </main>
  );
}