import './globals.css';

export const metadata = {
  title:       'NEXUS — Roblox × Discord Bridge Bot',
  description: 'Link Roblox accounts, look up users and games, check group ranks — all from Discord.',
  keywords:    'Discord bot, Roblox, account linking, group rank, verification',
  openGraph: {
    title:       'NEXUS — Roblox × Discord Bridge Bot',
    description: 'The most powerful Roblox-Discord bridge bot.',
    type:        'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="overflow-x-hidden">{children}</body>
    </html>
  );
}
