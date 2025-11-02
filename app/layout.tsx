import './globals.css';
import type { Metadata } from 'next';
import { Playfair_Display, Roboto } from 'next/font/google';
import Header from '../components/Header';

const playfair = Playfair_Display({ subsets: ['latin'], weight: ['700'] });
const roboto = Roboto({ subsets: ['latin'], weight: ['400','500','700'], style: ['normal','italic'], display: 'swap' });

export const metadata: Metadata = {
  title: 'SAM LEGAL',
  description: 'Professional legal services',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <div className={playfair.className}>
          <Header />
        </div>

        {/* ✅ Universal wrapper so every route gets the same top offset */}
        <main className="site-main">
          {children}
        </main>
      </body>
    </html>
  );
}
