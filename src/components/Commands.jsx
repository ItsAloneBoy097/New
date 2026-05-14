'use client';
import { useState } from 'react';

const CATEGORIES = [
  {
    id:    'roblox',
    label: '🎮  Roblox',
    color: 'from-indigo-500 to-violet-500',
    commands: [
      { name: '/link account',  desc: 'Start linking your Roblox account — generates a bio verification code' },
      { name: '/link verify',   desc: 'Confirm ownership after placing the code in your Roblox profile bio' },
      { name: '/link profile',  desc: 'View your or another user\'s linked Roblox profile' },
      { name: '/link remove',   desc: 'Permanently unlink your Roblox account from Discord' },
      { name: '/roblox user',   desc: 'Look up any Roblox user — bio, stats, friends & followers' },
      { name: '/roblox game',   desc: 'Look up a Roblox game — live players, visits, favorites, creator' },
      { name: '/roblox group',  desc: 'Look up a Roblox group — owner, member count, join settings' },
      { name: '/grouprank',     desc: 'Check what rank a linked Discord user holds in a specific group' },
      { name: '/whois',         desc: 'Combined Discord info + linked Roblox profile in one embed' },
    ],
  },
  {
    id:    'admin',
    label: '⚙️  Admin',
    color: 'from-amber-500 to-orange-400',
    commands: [
      { name: '/token new',            desc: 'Generate a new registration token for a server (owner only)' },
      { name: '/register',             desc: 'Register this server using an issued token (server owner only)' },
      { name: '/registrations list',   desc: 'Paginated list of all registered servers with status badges' },
      { name: '/registrations info',   desc: 'Full details for a specific registered server by Guild ID' },
      { name: '/registrations revoke', desc: 'Revoke a server registration and notify its owner via DM' },
      { name: '/reload',               desc: 'Hot-reload commands or events without restarting the bot' },
      { name: '/setprefix',            desc: 'Change the prefix used for legacy message commands' },
      { name: '/setlogchannel',        desc: 'Set the channel where all bot activity is logged' },
    ],
  },
  {
    id:    'info',
    label: '💡  Info',
    color: 'from-sky-500 to-cyan-400',
    commands: [
      { name: '/help', desc: 'Browse all available commands sorted by category with detailed info' },
    ],
  },
];

export default function Commands() {
  const [active, setActive] = useState('roblox');
  const cat = CATEGORIES.find(c => c.id === active);

  return (
    <section id="commands" className="py-28 relative">
      <div className="orb w-[600px] h-[400px] bg-roblox/8 top-0 right-0 translate-x-1/3 -translate-y-1/2" />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="section-label mb-4">Commands</div>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-white mb-4">
            Every command,{' '}
            <span className="gradient-text">one place</span>
          </h2>
          <p className="text-muted text-lg max-w-xl mx-auto">
            All slash commands are auto-deployed on startup and instantly available in every server.
          </p>
        </div>

        {/* Tab bar */}
        <div className="flex items-center gap-2 mb-8 overflow-x-auto pb-1">
          {CATEGORIES.map(c => (
            <button
              key={c.id}
              onClick={() => setActive(c.id)}
              className={`flex-shrink-0 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                active === c.id
                  ? `bg-gradient-to-r ${c.color} text-white shadow-lg`
                  : 'glass text-muted hover:text-white hover:bg-white/[0.06]'
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Commands grid */}
        <div className="grid sm:grid-cols-2 gap-2.5">
          {cat?.commands.map((cmd, i) => (
            <div key={i} className="cmd-block group">
              {/* Slash icon */}
              <div className={`flex-shrink-0 w-7 h-7 rounded-md bg-gradient-to-br ${cat.color} flex items-center justify-center mt-0.5`}>
                <span className="text-white font-black text-[11px]">/</span>
              </div>
              <div className="min-w-0">
                <code className="text-white text-sm font-semibold font-mono">{cmd.name}</code>
                <p className="text-muted text-xs mt-0.5 leading-relaxed">{cmd.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Count badge */}
        <div className="mt-6 text-center">
          <span className="text-muted/60 text-xs">
            Showing {cat?.commands.length} of {CATEGORIES.reduce((a, c) => a + c.commands.length, 0)} total commands
          </span>
        </div>
      </div>
    </section>
  );
}
