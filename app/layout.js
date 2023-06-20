// css
import Footer from '@/components/footer';
import Header from '@/components/header';
import '@/styles/globals.css';
import '@/styles/reset.css';
import { Inter } from '@next/font/google';

const interFontFamily = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={interFontFamily.className}>
      <body className="container">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
