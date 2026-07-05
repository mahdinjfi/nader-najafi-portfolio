import { contact } from "@/data/siteData";

export default function InstagramSection() {
  return (
    <section className="section-padding bg-white/[0.025]">
      <div className="container-px">
        <div className="grid items-center gap-8 rounded-[2.5rem] border border-stoneGold/25 bg-gradient-to-br from-stoneGold/18 to-white/[0.04] p-6 sm:p-10 lg:grid-cols-[1fr_0.75fr]">
          <div>
            <span className="text-sm font-bold text-stoneGold">نمونه‌کارهای واقعی در اینستاگرام</span>
            <h2 className="mt-4 text-3xl font-black leading-tight text-white sm:text-4xl">
              مشاهده ویدیوهای پروژه‌ها در @{contact.instagram}
            </h2>
            <p className="mt-5 text-lg leading-9 text-marble/75">
              صفحه اینستاگرام شامل ویدیوهای واقعی از مراحل اجرا، جزئیات نصب اسلب،
              کاشی‌کاری، سنگ‌کاری، پرسلان، کانتر و روشویی است و بیش از ۳۰K
              دنبال‌کننده دارد.
            </p>
          </div>
          <div className="premium-card p-6 text-center">
            <div className="mx-auto mb-6 flex size-20 items-center justify-center rounded-3xl gold-gradient text-3xl font-black text-ink">
              IG
            </div>
            <strong className="block text-4xl font-black text-white">۳۰K</strong>
            <span className="mt-2 block text-marble/70">دنبال‌کننده اینستاگرام</span>
            <a
              href={contact.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-7 inline-flex rounded-full bg-stoneGold px-6 py-3 font-extrabold text-ink transition hover:bg-marble"
            >
              مشاهده نمونه‌کارها در اینستاگرام
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
