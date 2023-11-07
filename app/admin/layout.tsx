import { Providers } from "../redux/provider";
import { Inter } from 'next/font/google'
import '../global.css';

import { cookies } from "next/headers";
import { cartMiddleware } from "../../libs/cart/cartMiddleware";

// Component Imports 
import Footer from "../components/Footer/Footer";

export const metadata = {
  title: 'Game Day Grill',
  description: 'Game Day Grill, submission for 2023-2024 (435) BPA Web Design Competition',
};

const inter = Inter({ subsets: ['latin'] })

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const cookieStore = cookies();
  // const newCin = await cartMiddleware();
  // if (newCin) {
  //   console.log("HELLO")
  //   cookies().set('cin', newCin.id);
  // }
  // console.log(`FROM LAYOUT: ${newCin}`)
  // 'use server'
  // console.log("hello")
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
