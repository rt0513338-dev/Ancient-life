import { useState } from "react";
import AnimalGrid from "../components/AnimalGrid";
import PageIntro from "../components/PageIntro";

function ExplorePage({ animals }) {
  const [search, setSearch] = useState("");
  const normalizedSearch = search.trim().toLowerCase();
  const filteredAnimals = animals.filter((animal) =>
    [
      animal.name,
      animal.scientificName,
      animal.period,
      animal.category,
      animal.description,
      animal.discovery,
    ]
      .filter(Boolean)
      .join(" ")
      .toLowerCase()
      .includes(normalizedSearch),
  );

  return (
    <section className="mx-auto max-w-7xl px-6 pb-20 pt-16 sm:pt-20">
      <PageIntro
        eyebrow="The species archive"
        title="Explore ancient"
        accent="life."
        description="From the earliest soft-bodied organisms to formidable Cambrian predators, discover the remarkable life forms that shaped Earth's story."
      />
      <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <label className="sr-only" htmlFor="species-search">
          Search species, periods, and categories
        </label>
        <input
          id="species-search"
          type="search"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Search species, periods..."
          className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-white outline-none placeholder:text-stone-500 focus:border-amber-400 sm:max-w-xl"
        />
        <p aria-live="polite" className="text-sm text-stone-400">
          {filteredAnimals.length} species
        </p>
      </div>
      {filteredAnimals.length > 0 ? (
        <AnimalGrid
          animals={filteredAnimals}
          className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        />
      ) : (
        <p className="mt-12 rounded-2xl border border-white/10 bg-white/5 px-6 py-12 text-center text-stone-400">
          No organisms found. Try another search.
        </p>
      )}
    </section>
  );
}

export default ExplorePage;
