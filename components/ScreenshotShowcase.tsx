import Image from "next/image";

const SCREENSHOTS = [
  { src: "/screenshots/home.png", caption: "Ana akış" },
  { src: "/screenshots/summary.png", caption: "Günlük Özet" },
  { src: "/screenshots/explore.png", caption: "Keşfet" },
];

export default function ScreenshotShowcase() {
  return (
    <div className="w-full">
      <p className="text-[11px] font-mono uppercase tracking-widest text-gray-500 mb-6 text-center lg:text-left lg:ml-2">
        Uygulamadan Görüntüler
      </p>
      
      {/* lg:flex-nowrap sayesinde görseller asla alt satıra düşmez */}
      <div className="flex gap-5 overflow-x-auto lg:overflow-visible lg:flex-nowrap lg:justify-end -mx-6 px-6 pb-6 snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {SCREENSHOTS.map((s, index) => (
          <div key={s.src} className="shrink-0 w-[240px] lg:w-[210px] xl:w-[230px] snap-start transition-transform hover:-translate-y-2 duration-300">
            <div className="relative w-[240px] h-[500px] lg:w-[210px] lg:h-[440px] xl:w-[230px] xl:h-[480px] rounded-[2rem] overflow-hidden border-[6px] border-[#2a2a35] bg-[#1a1a24] shadow-2xl">
              <Image 
                src={s.src} 
                alt={s.caption} 
                fill 
                priority={index === 0}
                className="object-cover" 
              />
            </div>
            <p className="text-center text-sm font-medium text-gray-400 mt-4">{s.caption}</p>
          </div>
        ))}
      </div>
    </div>
  );
}