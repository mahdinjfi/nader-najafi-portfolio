import SectionHeading from "@/components/SectionHeading";
import { contact, values } from "@/data/siteData";

export default function About() {
  return (
    <section id="about" className="section-padding border-t border-white/10">
      <div className="container-px grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <SectionHeading
            eyebrow="درباره من"
            title="اجرای حرفه‌ای با تجربه، دقت و تعهد"
            description={`${contact.name} استادکار باتجربه در زمینه کاشی‌کاری، سنگ‌کاری، نصب پرسلان، اجرای اسلب، نصب روشویی و اجرای کانتر است. او با بیش از ۲۰ سال تجربه حرفه‌ای در تهران، پروژه‌های متعددی را در مناطق معتبر مانند ولنجک، درکه، زعفرانیه، قیطریه و هشتگرد اجرا کرده است.`}
          />
          <p className="mt-6 text-lg leading-9 text-marble/72">
            تمرکز اصلی در هر پروژه، آماده‌سازی درست زیرکار، اجرای تمیز، دقت در
            برش‌ها، دوام نهایی و تحویل کاری است که برای سال‌ها قابل اعتماد باشد.
            عضویت در انجمن اسلب‌کاران هنرمند نیز نشان‌دهنده نگاه تخصصی و هنرمندانه
            به اجرای متریال‌های لوکس و اسلب‌های بزرگ است.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {values.map((value, index) => (
            <div key={value} className="premium-card p-6">
              <span className="mb-5 flex size-12 items-center justify-center rounded-2xl bg-stoneGold/15 text-lg font-black text-stoneGold">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="text-xl font-black text-white">{value}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
