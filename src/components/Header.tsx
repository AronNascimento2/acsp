export const Header = () => {
  const links = [
    ["Concerto", "#evento"],
    ["Quarteto", "#quarteto"],
    ["Contato", "#contato"],
  ];

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-black/35 backdrop-blur-2xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-4">
          <img
            src="/acsplogo.jpg"
            alt="Academia de Cordas de São Paulo"
            className="h-12 w-12 rounded-full border border-[#c9a45c]/50 object-cover shadow-[0_0_30px_rgba(201,164,92,0.25)]"
          />

          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-[#c9a45c]">
              ACSP
            </p>
            <h1 className="text-sm font-semibold md:text-base">
              Academia de Cordas de São Paulo
            </h1>
          </div>
        </div>

        <nav className="hidden items-center gap-8 text-sm text-white/65 md:flex">
          {links.map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="relative transition hover:text-[#c9a45c] after:absolute after:-bottom-2 after:left-0 after:h-px after:w-0 after:bg-[#c9a45c] after:transition-all hover:after:w-full"
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};
