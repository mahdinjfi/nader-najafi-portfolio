import Image from "next/image";
import { contact, stats } from "@/data/siteData";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-32 sm:pt-36 lg:pt-40">
      <div className="container-px grid items-center gap-12 pb-16 lg:grid-cols-[1.05fr_0.95fr] lg:pb-24">
        <div>
          <span className="mb-6 inline-flex rounded-full border border-stoneGold/30 bg-stoneGold/10 px-4 py-2 text-sm font-semibold text-stoneGold">
            بیش از ۲۰ سال تجربه حرفه‌ای در تهران
          </span>
          <h1 className="text-4xl font-black leading-[1.25] text-white sm:text-5xl lg:text-6xl">
            نادر نجفی؛ استادکار نصب اسلب، کاشی، سنگ و پرسلان
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-9 text-marble/78">
            اجرای دقیق و تمیز پروژه‌های کاشی‌کاری، سنگ‌کاری، نصب اسلب‌های بزرگ،
            کانتر و روشویی در تهران؛ مناسب فضاهای لوکس، مسکونی و تجاری با کیفیت
            ماندگار و نگاه حرفه‌ای به جزئیات.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={contact.phoneHref}
              className="rounded-full bg-stoneGold px-7 py-4 text-center font-extrabold text-ink transition hover:bg-marble"
            >
              تماس برای مشاوره
            </a>
            <a
              href={contact.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/15 bg-white/5 px-7 py-4 text-center font-extrabold text-white transition hover:border-stoneGold hover:text-stoneGold"
            >
              مشاهده نمونه‌کارها در اینستاگرام
            </a>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {stats.slice(0, 3).map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/[0.045] p-4">
                <strong className="block text-2xl font-black text-stoneGold">{stat.value}</strong>
                <span className="mt-1 block text-sm leading-6 text-marble/70">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-5 rounded-[2.5rem] bg-stoneGold/15 blur-3xl" />
          <div className="premium-card relative overflow-hidden p-5">
            <div className="relative flex aspect-square items-end overflow-hidden rounded-[2rem] p-6">
              <Image
                src="/images/nader-najafi-profile.jpg"
                alt="تصویر حرفه‌ای نادر نجفی، استادکار نصب اسلب، کاشی و سنگ"
                fill
                priority
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/35 to-transparent" />
              <div className="relative z-10 w-full rounded-3xl border border-white/15 bg-ink/70 p-6 backdrop-blur">
                <p className="text-sm font-semibold text-stoneGold">تصویر استادکار / پروژه</p>
                <h2 className="mt-2 text-2xl font-black text-white">اجرای اسلب، سنگ و کاشی با جزئیات دقیق</h2>
                <p className="mt-3 leading-7 text-marble/70">
                  ویدیوهای واقعی پروژه‌ها و نمونه‌کارهای اجرایی در صفحه اینستاگرام
                  @{contact.instagram} موجود است.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
