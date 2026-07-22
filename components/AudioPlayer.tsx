"use client"; // Bu çok kritik: Bileşenin tarayıcıda çalışacağını belirtir.

import { useState, useRef, useEffect } from "react";

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [voice, setVoice] = useState<"male" | "female">("male");
  const [progress, setProgress] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const audioUrls = {
    male: "https://api.gezoist.com/summary_male.mp3",
    female: "https://api.gezoist.com/summary_female.mp3",
  };

  // Çalma/Durdurma işlemi
  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Ses değiştiğinde oynatıcıyı sıfırla
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
      setProgress(0);
      audioRef.current.load(); // Yeni kaynağı yükle
    }
  }, [voice]);

  // İlerleme çubuğunu güncelle
  const handleTimeUpdate = () => {
    if (audioRef.current) {
      const current = audioRef.current.currentTime;
      const duration = audioRef.current.duration;
      if (duration) {
        setProgress((current / duration) * 100);
      }
    }
  };

  return (
    <div className="w-full flex flex-col items-center">
      {/* Gizli Audio Etiketi */}
      <audio
        ref={audioRef}
        src={audioUrls[voice]}
        onTimeUpdate={handleTimeUpdate}
        onEnded={() => setIsPlaying(false)}
      />

      {/* Ses Seçimi (Erkek / Kadın) */}
      <div className="flex bg-white/10 rounded-full p-1 mb-6 border border-white/5">
        <button
          onClick={() => setVoice("male")}
          className={`px-4 py-1.5 text-xs font-semibold rounded-full transition-all ${
            voice === "male" ? "bg-[#ffcc00] text-black" : "text-gray-400 hover:text-white"
          }`}
        >
          Erkek Sesi
        </button>
        <button
          onClick={() => setVoice("female")}
          className={`px-4 py-1.5 text-xs font-semibold rounded-full transition-all ${
            voice === "female" ? "bg-[#ffcc00] text-black" : "text-gray-400 hover:text-white"
          }`}
        >
          Kadın Sesi
        </button>
      </div>

      {/* Play/Pause Butonu */}
      <button
        onClick={togglePlay}
        className="w-16 h-16 bg-[#ffcc00] rounded-full flex items-center justify-center shadow-lg shadow-[#ffcc00]/20 hover:scale-105 transition-transform"
      >
        {isPlaying ? (
          // Pause İkonu
          <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
            <rect x="6" y="4" width="4" height="16" />
            <rect x="14" y="4" width="4" height="16" />
          </svg>
        ) : (
          // Play İkonu (Biraz sağa hizalı durması için padding-left eklendi)
          <svg className="w-7 h-7 text-black pl-1" fill="currentColor" viewBox="0 0 24 24">
            <path d="M5 3l14 9-14 9V3z" />
          </svg>
        )}
      </button>

      {/* İlerleme Çubuğu */}
      <div className="w-full h-1 bg-white/10 rounded-full mt-6 overflow-hidden">
        <div
          className="h-full bg-[#ffcc00] transition-all duration-100 ease-linear"
          style={{ width: `${progress}%` }}
        />
      </div>
      
      <p className="text-gray-400 text-xs mt-3">
        {isPlaying ? "Günün özeti oynatılıyor..." : "Dinlemek için dokunun"}
      </p>
    </div>
  );
}