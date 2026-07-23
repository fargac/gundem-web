import Image from "next/image";
import AudioPlayer from "../components/AudioPlayer";

// Next.js'in sayfayı statik olarak önbelleğe almasını KESİNLİKLE engeller.
// Sayfa her ziyaret edildiğinde Cloudflare Edge üzerinde yeniden hesaplanır.
export const dynamic = 'force-dynamic';

async function getEditionTime() {
  try {
    const response = await fetch("https://api.gezoist.com/hourly_summary.json", {
      cache: "no-store", 
    });

    if (!response.ok) return "SON GÜNDEM ÖZETİ";

    const data = await response.json();

    if (data?.generated_at) {
      const dateObj = new Date(data.generated_at);
      
      const currentHour = parseInt(
        new Intl.DateTimeFormat("tr-TR", {
          timeZone: "Europe/Istanbul",
          hour: "2-digit",
        }).format(dateObj), 
        10
      );

      let edition = "21:00"; 
      
      if (currentHour >= 5 && currentHour < 13) {
        edition = "09:00"; 
      } else if (currentHour >= 13 && currentHour < 19) {
        edition = "14:00"; 
      } else {
        edition = "21:00"; 
      }

      return `${edition} GÜNDEM ÖZETİ`;
    }
  } catch (error) {
    console.error("Zaman bilgisi çekilemedi:", error);
    return "SON GÜNDEM ÖZETİ";
  }
  return "SON GÜNDEM ÖZETİ";
}

export default async function Home() {
  const timeText = await getEditionTime();

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6 relative overflow-hidden">
      <div className="mb-8 flex flex-col items-center text-center">
        <div className="w-24 h-24 relative mb-4 rounded-3xl overflow-hidden shadow-lg shadow-white/5 border border-white/10">
          <Image
            src="/logo.png"
            alt="Gezoist Logo"
            fill
            className="object-cover"
          />
        </div>
        <h1 className="text-xl font-extrabold tracking-widest text-white/90 uppercase">
          Gezo Yapay Zeka
        </h1>

        <p className="text-sm text-[#ffcc00] mt-2 font-bold tracking-wide uppercase">
          {timeText}
        </p>

        {/* EĞER BU YAZIYI GÖREMİYORSAN ESKİ KOD ÇALIŞIYOR DEMEKTİR */}
        <p className="text-[10px] text-gray-500 mt-2 font-medium tracking-wider uppercase opacity-70">
          Günde 3 kez (09:00 • 14:00 • 21:00) Güncellenir
        </p>
      </div>

      <div className="w-full max-w-md bg-[#1a1a24]/80 backdrop-blur-md border border-white/5 rounded-3xl p-6 shadow-2xl mb-8">
        <AudioPlayer />
      </div>

      <div className="flex flex-col items-center gap-4 w-full max-w-xs">
        <p className="text-center text-gray-500 text-xs font-semibold uppercase tracking-wider mb-2">
          Haberi Okumak İçin İndir
        </p>

        <div className="w-full h-12 bg-white/5 rounded-xl flex items-center justify-center border border-white/5 opacity-50 cursor-not-allowed">
          <span className="text-sm font-medium text-gray-400">App Store (Yakında)</span>
        </div>

        <a
          href="https://gundem.gezoist.com/indir?ref=web_landing"
          className="w-full h-12 bg-[#ffcc00]/90 text-black rounded-xl flex items-center justify-center border border-[#ffcc00] hover:bg-[#ffcc00] transition-colors cursor-pointer font-bold shadow-lg shadow-[#ffcc00]/20"
        >
          <span className="text-sm">Google Play'den Alın</span>
        </a>
      </div>
    </main>
  );
}