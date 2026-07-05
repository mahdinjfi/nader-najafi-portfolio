import SectionHeading from "@/components/SectionHeading";
import { testimonials } from "@/data/siteData";

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-padding">
      <div className="container-px">
        <SectionHeading
          eyebrow="نظرات مشتریان"
          title="متن‌های نمونه برای جایگزینی با بازخورد واقعی مشتریان"
          description="این بخش برای ایجاد اعتماد اولیه طراحی شده و متن‌ها به‌صورت نمونه هستند؛ در ادامه می‌توان بازخورد واقعی کارفرمایان را جایگزین کرد."
          align="center"
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {testimonials.map((testimonial) => (
            <figure key={testimonial.name} className="premium-card p-6">
              <blockquote className="text-lg leading-9 text-marble/78">«{testimonial.text}»</blockquote>
              <figcaption className="mt-6 border-t border-white/10 pt-5 font-extrabold text-stoneGold">
                {testimonial.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
