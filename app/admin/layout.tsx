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

import ProtectRoute from "./components/security/ProtectRoute";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  console.log(process.env.ADMIN_CREDENTIAL);
  const cookieStore = cookies();

  console.log(cookieStore.get('ownerverified')==undefined)
    console.log(cookieStore.get('briojue'))
    const ownerVerified: boolean = (!(!cookieStore.get('ownerverified') || cookieStore.get('ownerverified') == undefined))
    const test = await createSecureUrl("/admin")
    console.log(`SECUREURL: ${test}`);
    if (!ownerVerified) {
      redirect(`/security/verify?redirecturl="/admin"&secureurl="$2b$08$UiSEK4E7/VFZL0bk.LTQM.Vs0QuVgCK3klNv4GY/RNKjM1XyEepB6"`)
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
