const SLOTS = ["09:00", "14:00", "21:00"];

export default function EditionTicker({ activeSlot }: { activeSlot: string }) {
  return (
    <div className="flex justify-center gap-2 mb-8">
      {SLOTS.map((slot) => {
        const isActive = slot === activeSlot;
        return (
          <div
            key={slot}
            className={`relative font-mono text-xs font-semibold tracking-wide rounded-lg px-3 py-2 border ${
              isActive
                ? "bg-[#ffcc00] text-black border-[#ffcc00]"
                : "bg-[#1a1a24]/60 text-gray-400 border-white/5"
            }`}
          >
            {slot}
            {isActive && (
              <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full bg-red-500" />
            )}
          </div>
        );
      })}
    </div>
  );
}