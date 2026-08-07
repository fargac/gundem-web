"use client";

import { sendGAEvent } from '@next/third-parties/google';

export default function DesktopCTA() {
  return (
    <div className="hidden lg:flex w-full max-w-md gap-4 mt-10">
      <a
        href="https://apps.apple.com/app/gezo-gundem/id6762355653"
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => sendGAEvent({ event: 'desktop_app_store_click', value: 'ios' })}
        className="flex-1 h-14 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 hover:bg-white/10 transition-colors"
      >
        <span className="text-base font-medium text-white">App Store</span>
      </a>
      <a
        href="https://gundem.gezoist.com/indir?ref=web_landing"
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => sendGAEvent({ event: 'desktop_play_store_click', value: 'android' })}
        className="flex-1 h-14 bg-[#ffcc00] text-black rounded-2xl flex items-center justify-center border border-[#ffcc00] hover:bg-[#ffaa00] transition-colors font-bold shadow-lg shadow-[#ffcc00]/20"
      >
        <span className="text-base">Google Play'den Al</span>
      </a>
    </div>
  );
}