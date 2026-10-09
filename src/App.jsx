import { useState } from "react";
import { animals } from "./data/animal";

function AnimalCard({ animal }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-white/10 bg-[#171e1a] transition duration-300 hover:-translate-y-1 hover:border-emerald-400/50">
      <div className="flex h-48 items-center justify-center bg-linear-to-br from-emerald-950 to-stone-900 text-7xl">
        {animal.emoji}
        </div>

      <div className="p-5">
        <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs text-emerald-300">
          {animal.period}
        </span>

        <h2 className="mt-4 text-xl font-semibold text-white">
          {animal.name}
        </h2>

        <p className="mt-1 text-sm italic text-stone-400">
          {animal.scientificName}
        </p>

        <p className="mt-4 text-sm leading-6 text-stone-300">
          {animal.description}
        </p>

        <div className="mt-5 border-t border-white/10 pt-4">
          <p className="text-xs uppercase tracking-wider text-stone-500">
            Geological era
          </p>
          <p className="mt-1 text-sm text-stone-300">
            {animal.age}
          </p>
        </div>
      </div>
    </article>
  );
}

function App() {
  const [search, setSearch] = useState("");

  const filteredAnimals = animals.filter((animal) =>
    `${animal.name} ${animal.period} ${animal.category}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-[#0d120f] text-white">
      <nav className="border-b border-white/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <p className="text-lg font-bold tracking-tight">
            <span className="text-emerald-400">ANCIENT</span> LIFE
          </p>
          <span className="text-sm text-stone-400">
            Explore deep time
          </span>
        </div>
      </nav>
      <section className="mx-auto max-w-7xl px-6 pb-16 pt-16">
        <p className="text-sm font-medium uppercase tracking-[0.3em] text-emerald-400">
          A journey through deep time
        </p>

        <h1 className="mt-5 max-w-3xl text-4xl font-bold leading-tight sm:text-6xl">
          Life on Earth,
          <span className="text-emerald-400"> before us.</span>
        </h1>

        <p className="mt-6 max-w-2xl leading-7 text-stone-400">
          Discover extraordinary organisms that inhabited our
          planet millions of years ago, and meet the ancient
          lineages that still survive today.
        </p>

        <div className="mt-10 max-w-xl">
          <input
            type="text"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search species, periods..."
            className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-white outline-none placeholder:text-stone-500 focus:border-emerald-400"
            />
            </div>

        <div className="mt-12 flex items-center justify-between">
          <h2 className="text-2xl font-semibold">
            Explore ancient life
          </h2>
          <span className="text-sm text-stone-400">
            {filteredAnimals.length} species
          </span>
        </div>

        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredAnimals.map((animal) => (
            <AnimalCard key={animal.id} animal={animal} />
          ))}
        </div>

        {filteredAnimals.length === 0 && (
          <p className="mt-12 text-center text-stone-400">
            No organisms found. Try another search.
          </p>
        )}
      </section>
    </main>
  );
}

export default App;
