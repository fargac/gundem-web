"use client"; // Dinamik saat hesaplaması yapacağımız için Client Component'e çeviriyoruz

import Image from "next/image";
import AudioPlayer from "../components/AudioPlayer"; 
import { useEffect, useState } from "react";

export default function Home() {
  const [timeText, setTimeText] = useState("GÜNDEM ÖZETİ");

  useEffect(() => {
    // Türkiye saat dilimine göre sadece "saat" kısmını alıyoruz (Örn: "23")
    const currentHour = new Intl.DateTimeFormat("tr-TR", {
      timeZone: "Europe/Istanbul",
      hour: "2-digit",
    }).format(new Date());
    
    // Formatı birleştirip state'e aktarıyoruz (Örn: "23:00 GÜNDEM ÖZETİ")
    setTimeText(`${currentHour}:00 GÜNDEM ÖZETİ`);
  }, []);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6 relative overflow-hidden">

      {/* Gezoist Logo / Header Alanı */}
      <div className="mb-8 flex flex-col items-center">
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
        {/* Sabit 19:00 yerine dinamik state'imizi yazdırıyoruz */}
        <p className="text-sm text-gray-400 mt-2 font-medium tracking-wide uppercase">
          {timeText}
        </p>
      </div>

      {/* OYNATICI KARTI BURADA */}
      <div className="w-full max-w-md bg-[#1a1a24]/80 backdrop-blur-md border border-white/5 rounded-3xl p-6 shadow-2xl mb-8">
        <AudioPlayer />
      </div>

      {/* Mağaza İndirme Butonları */}
      <div className="flex flex-col items-center gap-4 w-full max-w-xs">
        <p className="text-center text-gray-500 text-xs font-semibold uppercase tracking-wider mb-2">
          Haberi Okumak İçin İndir
        </p>

        {/* App Store Butonu (Yakında - Pasif) */}
        <div className="w-full h-12 bg-white/5 rounded-xl flex items-center justify-center border border-white/5 opacity-50 cursor-not-allowed">
          <span className="text-sm font-medium text-gray-400">App Store (Yakında)</span>
        </div>

        {/* Google Play Butonu (Worker'a Yönlendirir) */}
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