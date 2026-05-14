export default function CTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 dot-grid opacity-40" />
      <div className="orb w-[500px] h-[500px] bg-primary/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-glow-pulse" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Card */}
        <div className="relative glass rounded-3xl p-12 sm:p-16 border border-white/10 overflow-hidden">
          {/* Inner glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-violet/8 rounded-3xl pointer-events-none" />

          <div className="relative z-10">
            <div className="section-label mb-6 mx-auto w-fit">Get Started</div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white mb-5 leading-tight">
              Ready to{' '}
              <span className="gradient-text">bridge your</span>
              <br />
              community?
            </h2>

            <p className="text-muted text-lg max-w-xl mx-auto mb-10 leading-relaxed">
              Add NEXUS to your Discord server in seconds. Free forever — no sign-up, no credit card, no limits.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="#" className="btn-primary text-base px-8 py-3.5 w-full sm:w-auto justify-center">
                <svg width="18" height="18" viewBox="0 0 127.14 96.36" fill="white">
                  <path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z"/>
                </svg>
                Add to Discord — It&apos;s Free
              </a>
              <a href="#" className="btn-ghost text-base px-8 py-3.5 w-full sm:w-auto justify-center">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                </svg>
                View on GitHub
              </a>
            </div>

            {/* Trust badges */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-muted/60 text-xs">
              {['No credit card required', 'Open source', 'Self-hostable', '100% Free'].map(t => (
                <span key={t} className="flex items-center gap-1.5">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#2ECC71" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
