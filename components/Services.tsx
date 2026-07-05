import SectionHeading from "@/components/SectionHeading";
import { services } from "@/data/siteData";

export default function Services() {
  return (
    <section id="services" className="section-padding bg-white/[0.025]">
      <div className="container-px">
        <SectionHeading
          eyebrow="خدمات تخصصی"
          title="خدمات کامل کاشی، سنگ، اسلب، پرسلان و فضاهای مرطوب"
          description="هر خدمت با توجه به نوع متریال، شرایط زیرکار، جزئیات معماری و انتظار کارفرما برنامه‌ریزی و اجرا می‌شود."
          align="center"
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article key={service.title} className="premium-card p-6">
              <div className="mb-6 h-1.5 w-16 rounded-full gold-gradient" />
              <h3 className="text-xl font-black text-white">{service.title}</h3>
              <p className="mt-4 leading-8 text-marble/70">{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
