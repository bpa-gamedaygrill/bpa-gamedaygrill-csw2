import { Providers } from "../redux/provider";
import { Inter } from 'next/font/google'
import '../global.css';

import { cookies } from "next/headers";

export const metadata = {
  title: 'Checkout',
  description: 'Game Day Grill, submission for 2023-2024 (435) BPA Web Design Competition',
};

const inter = Inter({ subsets: ['latin'] })

// Component Imports 
import VoiceAssistant from "../components/VoiceAssistant/VoiceAssistant";



export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {


  return (
    <>
          <VoiceAssistant />
          {children}
    </>
  );
}
