import type { Metadata } from 'next';
import { Roboto, Oxygen, Poppins } from 'next/font/google';
import './globals.css';
import Header from './_components/header';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100', '400', '900'],
  variable: '--font-roboto',
});
const oxygen = Oxygen({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  variable: '--font-oxygen',
});
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '500', '800', '900'],
  variable: '--font-poppins',
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
        className={`${roboto.variable} ${oxygen.variable} ${poppins.variable} antialiased`}
      >
        <Header />
        <div className="mt-[100px] sm:w-[650px]">{children}</div>
      </body>
    </html>
  );
}
