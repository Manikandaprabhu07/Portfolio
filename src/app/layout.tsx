import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'MaXnow Technologies | Premium Web & AI Solutions',
  description: 'Portfolio website for MaXnow Technologies with services, projects, and contact information.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
