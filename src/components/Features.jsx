const FEATURES = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
      </svg>
    ),
    color:   'from-indigo-500 to-violet-500',
    glow:    'group-hover:shadow-indigo-500/20',
    title:   'Account Linking',
    desc:    'Securely link Roblox accounts via bio-code verification — no third-party website needed.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
      </svg>
    ),
    color:   'from-sky-500 to-cyan-400',
    glow:    'group-hover:shadow-sky-500/20',
    title:   'User Lookup',
    desc:    'Search any Roblox profile — display name, bio, friends, followers, and creation date.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
      </svg>
    ),
    color:   'from-emerald-500 to-teal-400',
    glow:    'group-hover:shadow-emerald-500/20',
    title:   'Game & Group Info',
    desc:    'Get live stats on any Roblox experience or group — players, visits, owner, member count.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    color:   'from-amber-500 to-orange-400',
    glow:    'group-hover:shadow-amber-500/20',
    title:   'Group Rank Checker',
    desc:    'Instantly check what rank any linked Discord member holds inside a Roblox group.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
      </svg>
    ),
    color:   'from-rose-500 to-pink-400',
    glow:    'group-hover:shadow-rose-500/20',
    title:   'Server Registration',
    desc:    'Issue tokens to partner servers and manage all registrations from a central admin panel.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>
      </svg>
    ),
    color:   'from-purple-500 to-fuchsia-400',
    glow:    'group-hover:shadow-purple-500/20',
    title:   'Combined Profile',
    desc:    'View Discord identity and linked Roblox data in one rich, shareable `/whois` embed.',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-28 relative">
      {/* Subtle mid-section glow */}
      <div className="orb w-[700px] h-[400px] bg-violet/10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="section-label mb-4">Features</div>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-white mb-4">
            Everything you need,<br />
            <span className="gradient-text">nothing you don't</span>
          </h2>
          <p className="text-muted text-lg max-w-xl mx-auto">
            Purpose-built for Roblox communities on Discord — every feature serves the bridge.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {FEATURES.map((f, i) => (
            <div
              key={i}
              className="group glass glass-hover rounded-2xl p-7 flex flex-col gap-4"
            >
              {/* Icon */}
              <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${f.color} flex items-center justify-center text-white shadow-lg ${f.glow} transition-shadow duration-300`}>
                {f.icon}
              </div>

              <div>
                <h3 className="text-white font-bold text-[1.05rem] mb-2">{f.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
