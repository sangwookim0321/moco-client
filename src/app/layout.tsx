import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import ClientProvider from '@/shared/services/ClientProvider';
import Header from '@/shared/components/organisms/header';
import Footer from '@/shared/components/organisms/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '모코 플레이',
  description: '각종 테스트를 플레이 할 수 있는 사이트입니다.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/assets/styles/globals.css" />
        <link rel="stylesheet" href="/assets/styles/reset.css" />
      </head>
      <body className={inter.className}>
        <ClientProvider>
          <Header />
          <div className="main-content">{children}</div>
          <Footer />
        </ClientProvider>
      </body>
    </html>
  );
}
