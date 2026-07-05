import SectionHeading from "@/components/SectionHeading";
import { contact } from "@/data/siteData";

export default function Contact() {
  return (
    <section id="contact" className="section-padding">
      <div className="container-px grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <SectionHeading
          eyebrow="تماس"
          title="برای مشاوره، بازدید یا بررسی پروژه تماس بگیرید"
          description="خدمات شامل کاشی‌کاری، سنگ‌کاری، نصب اسلب، پرسلان، کانتر و روشویی در تهران و پروژه‌های منتخب اطراف تهران است."
        />
        <div className="premium-card p-6 sm:p-8">
          <div className="grid gap-4 sm:grid-cols-2">
            <Info label="شماره تماس" value={contact.phone} />
            <Info label="اینستاگرام" value={`@${contact.instagram}`} />
            <Info label="موقعیت" value={contact.location} />
            <Info label="خدمات" value="کاشی، سنگ، اسلب، پرسلان، کانتر و روشویی" />
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            <a href={contact.phoneHref} className="rounded-full bg-stoneGold px-5 py-4 text-center font-extrabold text-ink transition hover:bg-marble">
              تماس مستقیم
            </a>
            <a href={contact.whatsapp} className="rounded-full border border-white/15 bg-white/5 px-5 py-4 text-center font-extrabold text-white transition hover:border-stoneGold hover:text-stoneGold">
              پیام در واتساپ
            </a>
            <a href={contact.instagramUrl} target="_blank" rel="noreferrer" className="rounded-full border border-white/15 bg-white/5 px-5 py-4 text-center font-extrabold text-white transition hover:border-stoneGold hover:text-stoneGold">
              مشاهده اینستاگرام
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
      <span className="text-sm font-bold text-stoneGold">{label}</span>
      <strong className="mt-2 block leading-8 text-white">{value}</strong>
    </div>
  );
}
