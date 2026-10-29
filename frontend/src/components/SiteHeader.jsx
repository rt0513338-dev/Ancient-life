const navigation = [
  { label: "Home", href: "/" },
  { label: "Explore", href: "/explore" },
  { label: "About", href: "/about" },
];

function SiteHeader({ activePath }) {
  return (
    <header className="border-b border-white/10">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-5"
      >
        <a
          className="text-lg font-bold tracking-tight"
          href="/"
          aria-label="Ancient Life home"
        >
          <span className="text-amber-400">ANCIENT</span> LIFE
        </a>
        <div className="flex items-center gap-6">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              aria-current={activePath === item.href ? "page" : undefined}
              className={`text-sm transition hover:text-amber-300 ${
                activePath === item.href
                  ? "text-amber-300"
                  : "text-stone-400"
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}

export default SiteHeader;
