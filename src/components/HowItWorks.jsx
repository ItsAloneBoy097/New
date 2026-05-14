const STEPS = [
  {
    num:   '01',
    color: 'from-indigo-500 to-violet-500',
    title: 'Run the command',
    desc:  'In any Discord channel, type `/link account` followed by your Roblox username. NEXUS will instantly find your profile.',
    code:  '/link account Builderman',
    lang:  'Discord',
  },
  {
    num:   '02',
    color: 'from-violet-500 to-pink-500',
    title: 'Paste the code',
    desc:  "Copy your unique verification code and paste it into your Roblox profile's bio. You can remove it afterwards.",
    code:  'RBX-AB3X7K',
    lang:  'Roblox Bio',
  },
  {
    num:   '03',
    color: 'from-pink-500 to-rose-500',
    title: "You're linked!",
    desc:  'Run `/link verify` — NEXUS reads your bio via the public Roblox API and permanently links the accounts.',
    code:  '/link verify',
    lang:  'Discord',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-28 relative">
      <div className="orb w-[500px] h-[500px] bg-primary/10 bottom-0 left-0 -translate-x-1/2" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="section-label mb-4">How It Works</div>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-white mb-4">
            Linked in{' '}
            <span className="gradient-text">three steps</span>
          </h2>
          <p className="text-muted text-lg max-w-xl mx-auto">
            The entire verification process happens inside Discord — no browser, no website, no OAuth.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Vertical connector line */}
          <div className="hidden md:block absolute left-1/2 top-16 bottom-16 w-px bg-gradient-to-b from-indigo-500/50 via-pink-500/30 to-transparent -translate-x-1/2" />

          <div className="flex flex-col gap-12">
            {STEPS.map((step, i) => (
              <div
                key={i}
                className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 md:gap-16`}
              >
                {/* Content */}
                <div className="flex-1 text-center md:text-left">
                  <div className={`inline-block text-xs font-black tracking-[0.2em] uppercase mb-3 bg-gradient-to-r ${step.color} bg-clip-text text-transparent`}>
                    Step {step.num}
                  </div>
                  <h3 className="text-white text-2xl font-bold mb-3">{step.title}</h3>
                  <p className="text-muted leading-relaxed text-[0.95rem]">{step.desc}</p>
                </div>

                {/* Number bubble (center) */}
                <div className={`relative flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-xl z-10 hidden md:flex`}>
                  <span className="text-white font-black text-xl">{step.num}</span>
                </div>

                {/* Code block */}
                <div className="flex-1">
                  <div className="glass rounded-xl overflow-hidden border border-white/10 shadow-xl">
                    {/* Terminal bar */}
                    <div className="bg-white/[0.04] border-b border-white/[0.06] px-4 py-2.5 flex items-center justify-between">
                      <div className="flex gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                        <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                        <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                      </div>
                      <span className="text-muted text-xs font-medium">{step.lang}</span>
                      <div className="w-16" />
                    </div>
                    {/* Code */}
                    <div className="px-5 py-5">
                      <code className={`font-mono text-base font-bold bg-gradient-to-r ${step.color} bg-clip-text text-transparent`}>
                        {step.code}
                      </code>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
