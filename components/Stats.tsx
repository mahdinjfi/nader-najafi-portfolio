import { stats } from "@/data/siteData";

export default function Stats() {
  return (
    <section className="py-10">
      <div className="container-px">
        <div className="rounded-[2rem] border border-stoneGold/25 bg-stoneGold/10 p-5 sm:p-8">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-3xl bg-ink/60 p-6 text-center">
                <strong className="block text-3xl font-black text-stoneGold lg:text-4xl">
                  {stat.value}
                </strong>
                <span className="mt-3 block leading-7 text-marble/75">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
