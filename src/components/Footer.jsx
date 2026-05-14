const LINKS = {
  Product: [
    { label: 'Features',    href: '#features'    },
    { label: 'How It Works',href: '#how-it-works' },
    { label: 'Commands',    href: '#commands'     },
  ],
  Resources: [
    { label: 'GitHub',         href: '#' },
    { label: 'Support Server', href: '#' },
    { label: 'Documentation',  href: '#' },
  ],
};

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06] pt-16 pb-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#" className="inline-flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-violet flex items-center justify-center shadow-lg shadow-primary/30">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
                  <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
                </svg>
              </div>
              <span className="text-white font-bold text-lg tracking-tight">NEXUS</span>
            </a>
            <p className="text-muted text-sm leading-relaxed max-w-xs">
              The most powerful Roblox × Discord bridge bot. Verification, lookups, and group management — all in one.
            </p>

            {/* Status indicator */}
            <div className="mt-5 inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass border border-emerald-500/20 text-emerald-400 text-xs font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              All systems operational
            </div>
          </div>

          {/* Links */}
          {Object.entries(LINKS).map(([section, links]) => (
            <div key={section}>
              <h4 className="text-white text-sm font-semibold mb-4 tracking-wide">{section}</h4>
              <ul className="space-y-3">
                {links.map(l => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-muted text-sm hover:text-white transition-colors duration-200"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.06] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-muted/50 text-xs">
            © {new Date().getFullYear()} NEXUS. Built with discord.js v14 and the Roblox Public API.
          </p>
          <div className="flex items-center gap-5">
            <a href="#" className="text-muted/50 hover:text-muted text-xs transition-colors">Privacy Policy</a>
            <a href="#" className="text-muted/50 hover:text-muted text-xs transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
