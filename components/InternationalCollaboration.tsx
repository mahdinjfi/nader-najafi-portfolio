import { contact } from "@/data/siteData";

export default function InternationalCollaboration() {
  return (
    <section className="section-padding bg-white/[0.025]">
      <div className="container-px">
        <div className="rounded-[2.5rem] border border-white/10 bg-charcoal p-6 sm:p-10 lg:p-12">
          <div className="max-w-4xl">
            <span className="mb-4 inline-flex rounded-full border border-stoneGold/30 bg-stoneGold/10 px-4 py-2 text-sm font-semibold text-stoneGold">
              همکاری حرفه‌ای و بین‌المللی
            </span>
            <h2 className="text-3xl font-black leading-tight text-white sm:text-4xl">
              آماده همکاری با کارفرمایان، پیمانکاران و مجموعه‌های حرفه‌ای
            </h2>
            <p className="mt-5 text-lg leading-9 text-marble/75">
              سطح تجربه و مهارت اجرایی نادر نجفی برای پروژه‌های حرفه‌ای، لوکس و
              دقیق مناسب است. کارفرمایان، پیمانکاران و همکاران می‌توانند نمونه
              اجرای واقعی پروژه‌ها را از طریق ویدیوهای اینستاگرام بررسی کنند و
              برای همکاری، اجرای پروژه یا معرفی فرصت‌های کاری تماس بگیرند.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={contact.whatsapp} className="rounded-full bg-stoneGold px-7 py-4 text-center font-extrabold text-ink transition hover:bg-marble">
                درخواست همکاری
              </a>
              <a href={contact.phoneHref} className="rounded-full border border-white/15 px-7 py-4 text-center font-extrabold text-white transition hover:border-stoneGold hover:text-stoneGold">
                تماس مستقیم
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
