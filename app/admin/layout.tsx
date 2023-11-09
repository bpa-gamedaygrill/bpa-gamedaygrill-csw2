import { Providers } from "../redux/provider";
import { Inter } from 'next/font/google'
import "../global.css";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { createSecureUrl } from "../../libs/utils/secureUrl/createSecureUrl";

// Component Imports 
export const metadata = {
  title: 'Game Day Grill',
  description: 'Game Day Grill, submission for 2023-2024 (435) BPA Web Design Competition',
};

const inter = Inter({ subsets: ['latin'] })

import { headers } from 'next/headers';
import DefaultNavbar from "../../app/components/Navbars/DefaultNavbar";


export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = cookies();
  const pathname = headers().get('x-next-pathname') as string;
  const ownerVerified: boolean = (!(!cookieStore.get('ownerverified') || cookieStore.get('ownerverified') == undefined))
  const newSecureUrl = await createSecureUrl(pathname as string)
    if (!ownerVerified) {
      redirect(`/security/verify?redirecturl="${pathname}"&secureurl="${newSecureUrl as string}"`);
  }
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <DefaultNavbar />
        {children}
        </Providers>
      </body>
    </html>
  );
}
