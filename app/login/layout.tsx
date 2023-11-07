import { Providers } from "../redux/provider";
import { Inter } from 'next/font/google'
import '../global.css';

export const metadata = {
  title: 'Game Day Grill | Login',
  description: 'Game Day Grill, submission for 2023-2024 (435) BPA Web Design Competition',
};

const inter = Inter({ subsets: ['latin'] })

import Footer from "../components/Footer/Footer"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
        {children}
        <Footer />
        </Providers>
      </body>
    </html>
  );
}
