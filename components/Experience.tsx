import SectionHeading from "@/components/SectionHeading";
import { timeline } from "@/data/siteData";

export default function Experience() {
  return (
    <section id="experience" className="section-padding">
      <div className="container-px grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <SectionHeading
          eyebrow="رزومه کاری"
          title="مسیر حرفه‌ای در پروژه‌های ساختمانی و داخلی"
          description="تجربه عملی، شناخت متریال، نظم در اجرا و تمرکز بر کیفیت، پایه اصلی فعالیت حرفه‌ای نادر نجفی در دو دهه گذشته بوده است."
        />
        <div className="relative space-y-5 before:absolute before:right-6 before:top-4 before:h-[calc(100%-2rem)] before:w-px before:bg-stoneGold/30">
          {timeline.map((item) => (
            <div key={item.title} className="relative pr-16">
              <span className="absolute right-0 top-2 flex size-12 items-center justify-center rounded-full border border-stoneGold/40 bg-ink text-stoneGold">
                ◆
              </span>
              <div className="premium-card p-6">
                <h3 className="text-xl font-black text-white">{item.title}</h3>
                <p className="mt-3 leading-8 text-marble/70">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
