'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { X } from 'lucide-react';

// Bump this key whenever a new flyer replaces the old one, so it
// reappears for visitors who already dismissed a previous flyer.
const DISMISS_KEY = 'flyer-dismissed-ibtidahiy-graduation-2026';

export default function FlyerPopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    try {
      if (sessionStorage.getItem(DISMISS_KEY)) return;
    } catch {
      // sessionStorage unavailable (e.g. private browsing) — still show the popup.
    }
    const timer = setTimeout(() => setOpen(true), 600);
    return () => clearTimeout(timer);
  }, []);

  function close() {
    setOpen(false);
    try {
      sessionStorage.setItem(DISMISS_KEY, '1');
    } catch {
      // ignore
    }
  }

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={close}
    >
      <div
        className="relative bg-white rounded-[1.5rem] overflow-hidden shadow-2xl max-w-sm w-full max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={close}
          aria-label="Close"
          className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-black/50 hover:bg-black/70 text-white flex items-center justify-center transition"
        >
          <X size={18} />
        </button>

        <div className="overflow-y-auto">
          <img
            src="/flyers/ibtidahiy-graduation-2026.jpg"
            alt="Ibtidahiy Graduation Ceremony — Sunday 6th September 2026"
            className="w-full h-auto"
          />
        </div>

        <div className="p-5 border-t border-ihsan-cream-alt text-center shrink-0">
          <Link
            href="/news"
            onClick={close}
            className="inline-block bg-ihsan-green text-white px-8 py-3 rounded-full font-semibold hover:bg-ihsan-green-soft transition"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}
