const PROPS = [
  { icon: "🎧", title: "Sesli özet", desc: "Okumaya vaktin olmasa da gündemi kaçırma — dinleyerek takip et." },
  { icon: "⏱", title: "Günde 3 güncelleme", desc: "09:00 · 14:00 · 21:00 — sabit saatlerde, taze özet." },
  { icon: "📰", title: "Tek yerde derlenir", desc: "Türkiye'nin haber kaynaklarından, tek akışta." },
];

export default function ValueProps() {
  return (
    <div className="w-full max-w-md mb-8">
      {PROPS.map((p, i) => (
        <div
          key={p.title}
          className={`flex gap-3 items-start py-4 border-t border-white/5 ${i === PROPS.length - 1 ? "border-b" : ""}`}
        >
          <div className="w-9 h-9 rounded-lg bg-[#1a1a24]/80 border border-white/5 flex items-center justify-center text-base shrink-0">
            {p.icon}
          </div>
          <div className="text-left">
            <div className="text-sm font-semibold text-white/90">{p.title}</div>
            <div className="text-xs text-gray-500 leading-relaxed mt-0.5">{p.desc}</div>
          </div>
        </div>
      ))}
    </div>
  );
}