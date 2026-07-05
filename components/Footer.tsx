import { contact, navLinks } from "@/data/siteData";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="container-px grid gap-8 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <h2 className="text-2xl font-black text-white">{contact.name}</h2>
          <p className="mt-4 max-w-lg leading-8 text-marble/70">
            استادکار نصب اسلب، کاشی، سنگ، پرسلان، کانتر و روشویی با بیش از ۲۰ سال
            تجربه حرفه‌ای در تهران.
          </p>
        </div>
        <div>
          <h3 className="font-black text-stoneGold">لینک‌های سریع</h3>
          <div className="mt-4 grid gap-2">
            {navLinks.slice(0, 6).map((link) => (
              <a key={link.href} href={link.href} className="text-marble/70 transition hover:text-stoneGold">
                {link.label}
              </a>
            ))}
          </div>
        </div>
        <div>
          <h3 className="font-black text-stoneGold">اطلاعات تماس</h3>
          <div className="mt-4 grid gap-2 text-marble/70">
            <a href={contact.phoneHref} className="transition hover:text-stoneGold">{contact.phone}</a>
            <a href={contact.instagramUrl} target="_blank" rel="noreferrer" className="transition hover:text-stoneGold">
              @{contact.instagram}
            </a>
            <span>{contact.fullLocation}</span>
          </div>
        </div>
      </div>
      <div className="container-px mt-10 border-t border-white/10 pt-6 text-center text-sm text-marble/55">
        © تمامی حقوق برای نادر نجفی محفوظ است.
      </div>
    </footer>
  );
}
