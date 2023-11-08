import { Providers } from "../redux/provider";
import { Inter } from 'next/font/google'
import '../global.css';

import { cookies } from "next/headers";
import { cartMiddleware } from "../../libs/cart/cartMiddleware";

// Component Imports 
export const metadata = {
  title: 'Game Day Grill',
  description: 'Game Day Grill, submission for 2023-2024 (435) BPA Web Design Competition',
};

const inter = Inter({ subsets: ['latin'] })

import ProtectRoute from "./components/security/ProtectRoute";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  console.log(process.env.ADMIN_CREDENTIAL);
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
        <ProtectRoute cred={process.env.ADMIN_CREDENTIAL as string} />
        {children}
        </Providers>
      </body>
    </html>
  );
}
