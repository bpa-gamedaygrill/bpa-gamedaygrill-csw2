import { Providers } from "../redux/provider";
import { Inter } from 'next/font/google'
import '../global.css';

export const metadata = {
  title: 'Game Day Grill | Signup',
  description: 'Game Day Grill, submission for 2023-2024 (435) BPA Web Design Competition',
};

const inter = Inter({ subsets: ['latin'] })

import Footer from "../components/Footer/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
        {children}
        <Footer />
        </>
  );
}
