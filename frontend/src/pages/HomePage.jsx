import AnimalGrid from "../components/AnimalGrid";
import PageIntro from "../components/PageIntro";

function HomePage({ animals }) {
  const periodCount = new Set(animals.map((animal) => animal.period)).size;

  return (
    <>
      <section className="mx-auto max-w-7xl px-6 pb-20 pt-20 sm:pt-28">
        <PageIntro
          eyebrow="A journey through deep time"
          title="Life on Earth,"
          accent="before us."
          description="Discover extraordinary organisms that inhabited our planet millions of years ago, and meet the ancient lineages that still survive today."
        />
        <div className="mt-9 flex flex-wrap gap-4">
          <a
            href="/explore"
            className="rounded-xl bg-amber-400 px-5 py-3 font-semibold text-amber-950 transition hover:bg-amber-300"
          >
            Explore ancient life
          </a>
          <a
            href="/about"
            className="rounded-xl border border-white/15 px-5 py-3 font-semibold text-stone-200 transition hover:border-amber-400/60 hover:text-amber-300"
          >
            About the journey
          </a>
        </div>
        <div className="mt-16 grid gap-4 border-y border-white/10 py-6 sm:grid-cols-3">
          {[
            ["558 million", "years back in time"],
            [String(animals.length), "organisms to discover"],
            [`${periodCount} periods`, "across deep time"],
          ].map(([value, label]) => (
            <div key={label}>
              <p className="text-2xl font-semibold text-white">{value}</p>
              <p className="mt-1 text-sm text-stone-500">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-amber-400">
              A glimpse into the past
            </p>
            <h2 className="mt-3 text-2xl font-semibold">Meet ancient life</h2>
          </div>
          <a
            href="/explore"
            className="text-sm font-medium text-amber-300 hover:text-amber-200"
          >
            View all species <span aria-hidden="true">→</span>
          </a>
        </div>
        <AnimalGrid
          animals={animals.slice(0, 3)}
          className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        />
      </section>
    </>
  );
}

export default HomePage;
