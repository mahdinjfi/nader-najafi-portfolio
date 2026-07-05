import { contact, navLinks } from "@/data/siteData";

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink/78 backdrop-blur-xl">
      <div className="container-px flex h-20 items-center justify-between gap-4">
        <a href="#home" className="group flex items-center gap-3" aria-label="خانه نادر نجفی">
          <span className="flex size-11 items-center justify-center rounded-2xl gold-gradient text-lg font-black text-ink shadow-lg shadow-stoneGold/20">
            ن
          </span>
          <span>
            <span className="block text-lg font-black text-white">{contact.name}</span>
            <span className="block text-xs text-stoneGold">استادکار اسلب، کاشی و سنگ</span>
          </span>
        </a>
        <nav className="hidden items-center gap-6 lg:flex" aria-label="ناوبری اصلی">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-marble/75 transition hover:text-stoneGold"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href={contact.phoneHref}
          className="rounded-full bg-stoneGold px-5 py-3 text-sm font-extrabold text-ink transition hover:bg-marble focus:outline-none focus:ring-2 focus:ring-stoneGold focus:ring-offset-2 focus:ring-offset-ink"
        >
          تماس مستقیم
        </a>
      </div>
    </header>
  );
}
