import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";
import { contact, projects } from "@/data/siteData";

export default function Projects() {
  return (
    <section id="projects" className="section-padding">
      <div className="container-px">
        <SectionHeading
          eyebrow="نمونه‌کارها"
          title="دسته‌بندی نمونه پروژه‌های اجراشده"
          description="ویدیوهای کامل پروژه‌ها در صفحه اینستاگرام موجود است. کارت‌های زیر برای معرفی حرفه‌ای دسته‌های کاری و مناطق پروژه طراحی شده‌اند."
          align="center"
        />
        <div className="mt-12 grid gap-6 grid-cols-1 md:grid-cols-3">
          {projects.map((project, index) => (
            <article key={project.title} className="premium-card overflow-hidden">
              {project.image ? (
                <div className="relative aspect-square overflow-hidden p-5">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent" />
                  <div className="relative z-10 flex h-full items-end rounded-3xl border border-white/10 p-4">
                    <span className="rounded-full bg-ink/75 px-4 py-2 text-sm font-bold text-stoneGold">
                      پروژه {index + 1}
                    </span>
                  </div>
                </div>
              ) : (
                <div
                  className="stone-pattern h-56 p-5"
                  role="img"
                  aria-label={`جایگاه تصویر پروژه ${project.title}`}
                >
                  <div className="flex h-full items-end rounded-3xl border border-white/10 p-4">
                    <span className="rounded-full bg-ink/75 px-4 py-2 text-sm font-bold text-stoneGold">
                      پروژه {index + 1}
                    </span>
                  </div>
                </div>
              )}
              <div className="p-6">
                <div className="mb-4 flex flex-wrap gap-2 text-sm">
                  <span className="rounded-full bg-stoneGold/12 px-3 py-1 text-stoneGold">{project.location}</span>
                  <span className="rounded-full bg-white/8 px-3 py-1 text-marble/70">{project.type}</span>
                </div>
                <h3 className="text-xl font-black text-white">{project.title}</h3>
                <p className="mt-3 leading-8 text-marble/70">{project.description}</p>
                <a
                  href={contact.instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex font-extrabold text-stoneGold transition hover:text-marble"
                >
                  مشاهده ویدیوها در اینستاگرام ←
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
