import Link from 'next/link';
import { SCHOOL_DATA } from '@/constants';

export default function Navbar() {
  return (
    <nav className="bg-white border-b sticky top-0 z-50 h-20 flex items-center">
      <div className="max-w-7xl mx-auto px-6 w-full flex justify-between items-center">
        {/* Clickable Brand Name back to Home */}
        <Link href="/" className="font-bold text-ihsan-green text-xl uppercase tracking-tighter hover:opacity-80 transition">
          Al-Ihsan <span className="text-ihsan-gold">Scholars</span>
        </Link>
        
        <div className="hidden lg:flex gap-6 font-medium text-gray-700 text-sm">
          <Link href="/about" className="hover:text-ihsan-green transition">About</Link>
          <Link href="/programs" className="hover:text-ihsan-green transition">Programmes</Link>
          <Link href="/news" className="hover:text-ihsan-green transition">News & Blog</Link>
          <Link href="/gallery" className="hover:text-ihsan-green transition">Media</Link>
          <Link href="/contact" className="hover:text-ihsan-green transition">Contact</Link>
          <Link 
            href={SCHOOL_DATA.portalUrl} 
            className="bg-ihsan-green text-white px-5 py-2 rounded-xl hover:bg-ihsan-gold transition shadow-md shadow-green-900/10"
          >
            Portal
          </Link>
        </div>
      </div>
    </nav>
  );
}