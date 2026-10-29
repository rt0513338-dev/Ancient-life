function PageIntro({ eyebrow, title, accent, description }) {
  return (
    <div className="max-w-3xl">
      <p className="text-sm font-medium uppercase tracking-[0.3em] text-amber-400">
        {eyebrow}
      </p>
      <h1 className="mt-5 text-4xl font-bold leading-tight sm:text-6xl">
        {title}
        {accent && <span className="text-amber-400"> {accent}</span>}
      </h1>
      <p className="mt-6 max-w-2xl leading-7 text-stone-400">{description}</p>
    </div>
  );
}

export default PageIntro;
