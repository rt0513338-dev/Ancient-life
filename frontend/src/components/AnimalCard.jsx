function AnimalCard({ animal }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-white/10 bg-[#201912] transition duration-300 hover:-translate-y-1 hover:border-amber-400/50">
      <img
        src={animal.imageUrl}
        alt={animal.imageAlt}
        loading="lazy"
        decoding="async"
        className="h-52 w-full bg-linear-to-br from-amber-950 to-stone-900 object-cover"
      />
      <p className="border-b border-white/10 px-5 py-2 text-xs text-stone-500">
        Image:{" "}
        <a
          href={animal.imageSource}
          target="_blank"
          rel="noreferrer"
          className="underline decoration-white/20 underline-offset-2 hover:text-amber-300"
        >
          {animal.imageCredit}
        </a>
      </p>
      <div className="p-5">
        <span className="rounded-full bg-amber-400/10 px-3 py-1 text-xs text-amber-300">
          {animal.period}
        </span>
        <h2 className="mt-4 text-xl font-semibold text-white">{animal.name}</h2>
        {animal.scientificName && (
          <p className="mt-1 text-sm italic text-stone-400">
            {animal.scientificName}
          </p>
        )}
        <p className="mt-4 text-sm leading-6 text-stone-300">
          {animal.description}
        </p>
        <div className="mt-5 border-t border-white/10 pt-4">
          <p className="text-xs uppercase tracking-wider text-stone-500">
            Deep-time context
          </p>
          <p className="mt-1 text-sm text-stone-300">{animal.age}</p>
        </div>
        <div className="mt-5 border-t border-white/10 pt-4">
          <p className="text-xs uppercase tracking-wider text-stone-500">
            Discovery story
          </p>
          <p className="mt-2 text-sm leading-6 text-stone-300">
            {animal.discovery}
          </p>
          <a
            href={animal.sourceUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-3 inline-flex text-xs font-medium text-amber-300 hover:text-amber-200"
          >
            {animal.sourceLabel} <span aria-hidden="true"> ↗</span>
          </a>
        </div>
      </div>
    </article>
  );
}

export default AnimalCard;
