function SiteFooter() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-6 text-sm text-stone-500 sm:flex-row sm:items-center sm:justify-between">
        <p>
          <span className="font-semibold text-stone-300">ANCIENT LIFE</span>{" "}
          — Explore the story of life on Earth.
        </p>
        <a href="/about" className="hover:text-amber-300">
          About this project
        </a>
      </div>
    </footer>
  );
}

export default SiteFooter;
