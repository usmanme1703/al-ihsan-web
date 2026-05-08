import Link from 'next/link';
import { SCHOOL_DATA } from '@/constants';

export default function Footer() {
  return (
    <footer className="bg-ihsan-dark text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Col */}
          <div className="space-y-6">
            <Link href="/" className="font-bold text-2xl tracking-tighter">
              AL-IHSAN <span className="text-ihsan-gold">SCHOLARS</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs italic">
              "{SCHOOL_DATA.motto}"
            </p>
          </div>

          {/* Institutional Col */}
          <div>
            <h4 className="text-ihsan-gold font-bold text-xs uppercase tracking-[0.2em] mb-8">Institutional</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link href="/about" className="hover:text-white transition">About Our History</Link></li>
              <li><Link href="/programs" className="hover:text-white transition">Our Programmes</Link></li>
              <li><Link href="/news" className="hover:text-white transition">News & Blog</Link></li>
              <li><Link href="/gallery" className="hover:text-white transition">Media Gallery</Link></li>
            </ul>
          </div>

          {/* Quick Access Col */}
          <div>
            <h4 className="text-ihsan-gold font-bold text-xs uppercase tracking-[0.2em] mb-8">Quick Access</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link href="/apply" className="hover:text-white transition">Enrollment Form</Link></li>
              <li><Link href={SCHOOL_DATA.portalUrl} className="hover:text-white transition">Student Portal</Link></li>
              <li><Link href="/contact" className="hover:text-white transition">Contact Us</Link></li>
            </ul>
          </div>

          {/* Connect Col */}
          <div>
            <h4 className="text-ihsan-gold font-bold text-xs uppercase tracking-[0.2em] mb-8">Connect</h4>
            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              {SCHOOL_DATA.address}
            </p>
            <div className="flex flex-col gap-2 mb-4">
              {SCHOOL_DATA.phones.map(phone => (
                <span key={phone} className="text-white font-bold text-sm">{phone}</span>
              ))}
            </div>
            <p className="text-gray-500 text-xs lowercase border-t border-white/5 pt-4">
              {SCHOOL_DATA.email}
            </p>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-widest text-gray-600">
          <p>© 2026 {SCHOOL_DATA.name}. All Rights Reserved.</p>
          <div className="flex gap-8">
            <Link href="/privacy" className="hover:text-white transition">Privacy</Link>
            <Link href="/terms" className="hover:text-white transition">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}