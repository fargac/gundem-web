import Image from "next/image";

const SCREENSHOTS = [
  { src: "/screenshots/home.png", caption: "Ana akış" },
  { src: "/screenshots/summary.png", caption: "Günlük Özet" },
  { src: "/screenshots/explore.png", caption: "Keşfet" },
];

export default function ScreenshotShowcase() {
  return (
    <div className="w-full max-w-md mb-10">
      <p className="text-[11px] font-mono uppercase tracking-widest text-gray-500 mb-3">
        Uygulamadan görüntüler
      </p>
      <div className="flex gap-3 overflow-x-auto -mx-6 px-6 pb-2 snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {SCREENSHOTS.map((s, index) => (
          <div key={s.src} className="shrink-0 w-[150px] snap-start">
            <div className="relative w-[150px] h-[310px] rounded-2xl overflow-hidden border border-white/10 bg-[#1a1a24]">
              <Image 
                src={s.src} 
                alt={s.caption} 
                fill 
                priority={index === 0}
                className="object-cover" 
              />
            </div>
            <p className="text-center text-xs text-gray-500 mt-2">{s.caption}</p>
          </div>
        ))}
      </div>
    </div>
  );
}