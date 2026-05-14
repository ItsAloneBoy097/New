export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-16 overflow-hidden dot-grid">

      {/* Background orbs */}
      <div className="orb w-[600px] h-[600px] bg-primary/20 top-[-150px] left-[-200px] animate-glow-pulse" />
      <div className="orb w-[500px] h-[500px] bg-violet/15 top-[100px] right-[-150px] animate-glow-pulse" style={{ animationDelay: '1.5s' }} />
      <div className="orb w-[400px] h-[400px] bg-roblox/10 bottom-[-100px] left-[30%] animate-glow-pulse" style={{ animationDelay: '3s' }} />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-primary/25 text-xs font-semibold text-indigo-300 mb-8 tracking-widest uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Roblox × Discord Bridge
        </div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight leading-[1.05] mb-6">
          <span className="text-white">The Bridge Between</span>
          <br />
          <span className="gradient-text">Discord & Roblox</span>
        </h1>

        {/* Subtitle */}
        <p className="text-muted text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
          Verify Roblox accounts, look up users & games, check group ranks — all without leaving Discord. No website required.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
          <a href="#" className="btn-primary text-base px-7 py-3">
            <svg width="18" height="18" viewBox="0 0 127.14 96.36" fill="white">
              <path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z"/>
            </svg>
            Add to Discord — Free
          </a>
          <a href="#commands" className="btn-ghost text-base px-7 py-3">
            Browse Commands
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>

        {/* Discord embed mockup */}
        <div className="relative mx-auto max-w-md">
          {/* Glow behind card */}
          <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-3xl scale-90" />

          <div className="relative glass rounded-2xl overflow-hidden text-left shadow-2xl border border-white/10 animate-float">
            {/* Discord top bar */}
            <div className="bg-[#1e1f22] px-4 py-3 flex items-center gap-2.5 border-b border-white/5">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                <div className="w-3 h-3 rounded-full bg-[#28c840]" />
              </div>
              <div className="flex-1 flex justify-center">
                <div className="bg-[#2b2d31] rounded-md px-3 py-0.5 text-xs text-muted flex items-center gap-1.5">
                  <span className="text-[#949cf7]">#</span> general
                </div>
              </div>
            </div>

            {/* Message */}
            <div className="bg-[#313338] p-4">
              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-violet flex-shrink-0 flex items-center justify-center">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
                  </svg>
                </div>
                <div className="flex-1">
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-white font-semibold text-sm">NEXUS</span>
                    <span className="text-[#949cf7] text-[10px] font-semibold bg-[#949cf7]/15 px-1.5 py-0.5 rounded">APP</span>
                    <span className="text-muted text-xs">Today at 12:00 PM</span>
                  </div>

                  {/* Embed */}
                  <div className="rounded-md overflow-hidden border-l-4 border-emerald-500 bg-[#2b2d31] px-3.5 py-3">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-emerald-400 font-bold text-sm">✅  Account Linked!</span>
                    </div>
                    <p className="text-[#dbdee1] text-xs mb-3">Your Discord is now linked to <strong>Builderman</strong> on Roblox.</p>
                    <div className="grid grid-cols-2 gap-x-4 gap-y-1.5 text-xs">
                      <div><span className="text-muted">🎮 Roblox</span><br/><span className="text-white font-medium">Builderman</span></div>
                      <div><span className="text-muted">🔑 ID</span><br/><span className="text-white font-medium">156</span></div>
                      <div className="col-span-2"><span className="text-muted">🌐 Profile</span><br/><span className="text-[#949cf7] text-xs">View on Roblox →</span></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="mt-12 flex flex-col items-center gap-2 text-muted/50">
          <span className="text-xs tracking-widest uppercase">Scroll to explore</span>
          <div className="w-px h-10 bg-gradient-to-b from-muted/30 to-transparent" />
        </div>
      </div>
    </section>
  );
}
