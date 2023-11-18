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

// Component Imports 
import VoiceAssistant from "../components/VoiceAssistant/VoiceAssistant";

import { isMobile } from "react-device-detect";



export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const isMobileDevice =
    typeof window !== 'undefined' &&
    /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  console.log(isMobileDevice);

  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          { isMobileDevice ? "" : <VoiceAssistant /> }
         
        {children}
        <Footer />
        </Providers>
      </body>
    </html>
  );
}
