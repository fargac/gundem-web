"use client";

import { sendGAEvent } from '@next/third-parties/google';

export default function StoreCTA() {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-[#08080a]/90 backdrop-blur-md border-t border-white/5 px-6 pt-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] z-50">
      <div className="max-w-md mx-auto flex gap-2.5">
        
        <a
          href="https://apps.apple.com/app/gezo-gundem/id6762355653"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => sendGAEvent({ event: 'mobile_app_store_click', value: 'ios' })}
          className="flex-1 h-12 bg-white/5 rounded-xl flex items-center justify-center border border-white/5 hover:bg-white/10 transition-colors"
        >
          <span className="text-sm font-medium text-gray-300">App Store</span>
        </a>

        <a
          href="https://gundem.gezoist.com/indir?ref=web_landing"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => sendGAEvent({ event: 'mobile_play_store_click', value: 'android' })}
          className="flex-1 h-12 bg-[#ffcc00]/90 text-black rounded-xl flex items-center justify-center border border-[#ffcc00] hover:bg-[#ffcc00] transition-colors font-bold shadow-lg shadow-[#ffcc00]/20"
        >
          <span className="text-sm">Google Play'den Al</span>
        </a>
        
      </div>
    </div>
  );
}