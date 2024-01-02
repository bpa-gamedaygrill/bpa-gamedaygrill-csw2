import { Providers } from "../redux/provider";
import { Inter } from 'next/font/google'
import '../global.css';

export const metadata = {
  title: 'Game Day Grill',
  description: 'Game Day Grill, submission for 2023-2024 (435) BPA Web Design Competition',
};

const inter = Inter({ subsets: ['latin'] })


import VoiceAssistant from "../components/VoiceAssistant/VoiceAssistant";

export default function RootLayout({
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
