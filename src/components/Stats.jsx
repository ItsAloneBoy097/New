const STATS = [
  { value: '11',       label: 'Slash Commands',      suffix: '' },
  { value: '100',      label: 'Supported Servers',   suffix: '+' },
  { value: '0',        label: 'Setup Required',       suffix: ' config files' },
  { value: '100',      label: 'Free Forever',         suffix: '%' },
];

export default function Stats() {
  return (
    <section className="relative py-6">
      {/* Divider line */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/[0.06] rounded-2xl overflow-hidden glass border border-white/[0.06]">
          {STATS.map((s, i) => (
            <div
              key={i}
              className="relative px-8 py-8 flex flex-col items-center justify-center text-center hover:bg-white/[0.025] transition-colors duration-200 group"
            >
              <span className="text-3xl sm:text-4xl font-black gradient-text-blue mb-1 leading-none">
                {s.value}<span className="text-xl">{s.suffix}</span>
              </span>
              <span className="text-muted text-sm font-medium">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
