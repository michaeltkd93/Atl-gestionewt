
import '../styles/globals.css';
import Link from 'next/link';

export const metadata = { title: 'ATL Gestionale', description: 'Gestionale amministrativo ATL' };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it">
      <body>
        <aside className="sidebar">
          <h1 style={{display:'flex',gap:10,alignItems:'center'}}>
            <object className="logo-embed" data="/logo-atl.pdf" type="application/pdf">ATL</object>
            ATL Gestionale
          </h1>
          <nav style={{display:'grid',gap:8,marginTop:12}}>
            <Link href="/">🏠 Dashboard</Link>
            <Link href="/members">👥 Atleti</Link>
            <Link href="/subscriptions">🧾 Abbonamenti</Link>
            <Link href="/certificates">🩺 Certificati</Link>
            <Link href="/reports">📊 Report</Link>
            <Link href="/settings">⚙️ Impostazioni</Link>
          </nav>
        </aside>
        <main className="main">
          <div className="container">{children}</div>
        </main>
      </body>
    </html>
  );
}
