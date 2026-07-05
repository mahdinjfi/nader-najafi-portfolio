type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "right" | "center";
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "right",
}: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <span className="mb-4 inline-flex rounded-full border border-stoneGold/30 bg-stoneGold/10 px-4 py-2 text-sm font-semibold text-stoneGold">
        {eyebrow}
      </span>
      <h2 className="text-3xl font-black leading-tight text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 text-base leading-8 text-marble/72 sm:text-lg">{description}</p>
      ) : null}
    </div>
  );
}
