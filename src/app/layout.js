import { Roboto } from 'next/font/google';
import './styles/globals.css';
import { Header } from './components/Header/Header';

const roboto = Roboto({
  variable: '--font-roboto',
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});

export const metadata = {
  title: 'LearnLingo',
  description: 'Services of teachers for learning languages online',
};

export default function RootLayout({ children, modal }) {
  return (
    <html lang="en">
      <body className={`${roboto.variable}`}>
        <Header />

        <main>
          {children}
          {modal}
        </main>
      </body>
    </html>
  );
}
