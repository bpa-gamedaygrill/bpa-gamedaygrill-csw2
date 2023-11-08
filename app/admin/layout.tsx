import { Providers } from "../redux/provider";
import { Inter } from 'next/font/google'
import "../global.css";

import { cookies } from "next/headers";
import { cartMiddleware } from "../../libs/cart/cartMiddleware";

import { redirect } from "next/navigation";

import { createSecureUrl } from "../../libs/utils/secureUrl/createSecureUrl";

// Component Imports 
export const metadata = {
  title: 'Game Day Grill',
  description: 'Game Day Grill, submission for 2023-2024 (435) BPA Web Design Competition',
};

const inter = Inter({ subsets: ['latin'] })

import { headers } from 'next/headers';


export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  console.log(process.env.ADMIN_CREDENTIAL);
  const cookieStore = cookies();

  const pathname = headers().get('x-next-pathname') as string;
  console.log(pathname)
  const ownerVerified: boolean = (!(!cookieStore.get('ownerverified') || cookieStore.get('ownerverified') == undefined))
  const newSecureUrl = await createSecureUrl(pathname as string)
    if (!ownerVerified) {
      redirect(`/security/verify?redirecturl="${pathname}"&secureurl="${newSecureUrl as string}"`);
  }
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
