import Link from 'next/link';
import { SCHOOL_DATA } from '@/constants';

export default function Navbar() {
  return (
    <nav className="bg-white border-b sticky top-0 z-50 h-20 flex items-center">
      <div className="max-w-7xl mx-auto px-6 w-full flex justify-between items-center">
        
        {/* Logo + Name Group */}
        <Link href="/" className="flex items-center gap-4 hover:opacity-90 transition">
          <img 
            src="/logo.jpg" 
            alt="Al-Ihsan Logo" 
            className="h-12 w-auto object-contain rounded-lg" 
          />
          <div className="flex flex-col">
            <span className="font-bold text-ihsan-green text-lg leading-tight uppercase tracking-tighter">
              Al-Ihsan
            </span>
            <span className="font-bold text-ihsan-gold text-xs leading-tight uppercase tracking-widest">
              Scholars
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex gap-6 font-medium text-gray-700 text-sm items-center">
          <Link href="/about" className="hover:text-ihsan-green transition">About</Link>
          <Link href="/programs" className="hover:text-ihsan-green transition">Programmes</Link>
          <Link href="/news" className="hover:text-ihsan-green transition">News</Link>
          <Link href="/gallery" className="hover:text-ihsan-green transition">Media</Link>
          <Link href="/contact" className="hover:text-ihsan-green transition">Contact</Link>
          <Link 
            href={SCHOOL_DATA.portalUrl} 
            className="bg-ihsan-green text-white px-5 py-2 rounded-xl hover:bg-ihsan-gold transition shadow-md shadow-green-900/10"
          >
            Portal Login
          </Link>
        </div>
      </div>
    </nav>
  );
}