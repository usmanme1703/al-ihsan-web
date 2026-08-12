import Link from 'next/link';

const LINKS = [
  { href: '/about', label: 'About' },
  { href: '/programs', label: 'Programmes' },
  { href: '/news', label: 'News' },
  { href: '/gallery', label: 'Media' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  return (
    <nav className="bg-white/90 backdrop-blur-sm border-b border-ihsan-cream-alt sticky top-0 z-50 h-24 flex items-center">
      <div className="max-w-7xl mx-auto px-6 w-full flex justify-between items-center">

        {/* Logo + Name Group */}
        <Link href="/" className="flex items-center gap-4 hover:opacity-90 transition">
          <img
            src="/logo.jpg"
            alt="Al-Ihsan Logo"
            className="h-12 w-auto object-contain rounded-lg"
          />
          <div className="flex flex-col leading-tight">
            <span className="font-serif font-semibold text-ihsan-green text-xl leading-tight">
              Al-Ihsan
            </span>
            <span className="font-bold text-ihsan-gold text-[11px] leading-tight uppercase tracking-[0.25em]">
              Noble Scholars
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex gap-9 font-medium text-ihsan-dark/80 text-sm items-center">
          {LINKS.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-ihsan-green transition">
              {link.label}
            </Link>
          ))}
          <Link
            href="/apply"
            className="bg-ihsan-green text-white px-6 py-2.5 rounded-full hover:bg-ihsan-green-soft transition font-semibold tracking-wide text-sm"
          >
            Apply Now
          </Link>
        </div>
      </div>
    </nav>
  );
}
