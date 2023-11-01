import { Providers } from "./redux/provider";
import { Inter } from 'next/font/google'
import './global.css';

import { cartMiddleware } from "../libs/cart/cartMiddleware";
import { cookies } from "next/headers";

import axios from "axios";

import { myAction } from "./components/Actions/testAction";

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
  // myAction();
  // async function test() {
  //   const hello =   axios.post('/api/test')
  //   .then(function (response) {
  //     console.log(response);
  //   })
  //   return hello
  // }
  // const testy = await test();
  // console.log(testy);
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
        {children}
        </Providers>
      </body>
    </html>
  );
}
