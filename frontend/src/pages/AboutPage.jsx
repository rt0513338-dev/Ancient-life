import PageIntro from "../components/PageIntro";

const timeline = [
  {
    period: "Ediacaran",
    date: "About 635–539 million years ago",
    detail:
      "Some of the earliest known complex life flourished in the oceans, including the distinctive Dickinsonia.",
  },
  {
    period: "Cambrian",
    date: "About 539–485 million years ago",
    detail:
      "Marine ecosystems diversified dramatically, with new body plans and active predators such as Anomalocaris.",
  },
  {
    period: "Ordovician",
    date: "About 485–444 million years ago",
    detail:
      "Oceans teemed with marine life. Horseshoe crab relatives appeared and their lineage continues today.",
  },
  {
    period: "Devonian",
    date: "About 419–359 million years ago",
    detail:
      "Fishes diversified in the oceans, including forms such as Tiktaalik with features suited to shallow water.",
  },
  {
    period: "Jurassic",
    date: "About 201–145 million years ago",
    detail:
      "Feathered dinosaurs such as Archaeopteryx lived among the diverse animals of the Jurassic.",
  },
  {
    period: "Cretaceous",
    date: "About 145–66 million years ago",
    detail:
      "Dinosaurs including Tyrannosaurus rex lived in a changing world until the end-Cretaceous extinction.",
  },
];

function AboutPage() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-20 pt-16 sm:pt-20">
      <PageIntro
        eyebrow="About Ancient Life"
        title="A small window into"
        accent="deep time."
        description="Earth's story stretches back billions of years. Ancient Life is a guide to some of the extraordinary organisms that lived, adapted, and left traces in the fossil record."
      />

      <div className="mt-14 grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <h2 className="text-2xl font-semibold">Why look back?</h2>
          <p className="mt-4 leading-7 text-stone-400">
            Fossils offer clues to how life changed through time. By exploring
            ancient ecosystems, we can better appreciate the diversity of life
            on Earth and the connections between the distant past and the
            living world around us.
          </p>
          <a
            href="/explore"
            className="mt-7 inline-flex rounded-xl bg-amber-400 px-5 py-3 font-semibold text-amber-950 transition hover:bg-amber-300"
          >
            Browse the species
          </a>
        </div>

        <div>
          <h2 className="text-2xl font-semibold">A timeline of life</h2>
          <ol className="mt-6 space-y-4">
            {timeline.map((item) => (
              <li
                key={item.period}
                className="rounded-2xl border border-white/10 bg-[#201912] p-5"
              >
                <p className="text-sm font-medium text-amber-300">
                  {item.date}
                </p>
                <h3 className="mt-2 text-xl font-semibold">{item.period}</h3>
                <p className="mt-2 leading-6 text-stone-400">{item.detail}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

export default AboutPage;
