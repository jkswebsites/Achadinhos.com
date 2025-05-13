import type { Metadata } from 'next';
import localFont from 'next/font/local';

import './globals.css';
import Header from './_components/header';

const playwriteDKLoopetExtraLight = localFont({
  src: './fonts/PlaywriteDKLoopet-ExtraLight.ttf',
  variable: '--font-PlaywriteDKLoopet-ExtraLight',
  weight: '100 900',
});
const playwriteDKLoopetRegular = localFont({
  src: './fonts/PlaywriteDKLoopet-Regular.ttf',
  variable: '--font-PlaywriteDKLoopet-Regular',
  weight: '100 900',
});
const playwriteDKLoopetThin = localFont({
  src: './fonts/PlaywriteDKLoopet-Thin.ttf',
  variable: '--font-PlaywriteDKLoopet-Thin',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'Home | Achadinhos.com',
  description: 'Variedades de diversos produtos para sua casa.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${playwriteDKLoopetExtraLight.variable} ${playwriteDKLoopetThin.variable} ${playwriteDKLoopetRegular.variable} antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
