function NotFoundPage() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <p className="text-sm font-medium uppercase tracking-[0.3em] text-amber-400">
        Lost in deep time?
      </p>
      <h1 className="mt-5 text-4xl font-bold">This page does not exist.</h1>
      <a
        href="/"
        className="mt-8 inline-flex rounded-xl bg-amber-400 px-5 py-3 font-semibold text-amber-950 transition hover:bg-amber-300"
      >
        Return home
      </a>
    </section>
  );
}

export default NotFoundPage;
