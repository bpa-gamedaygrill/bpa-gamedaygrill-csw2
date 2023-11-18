"use client";

import { redirect } from 'next/dist/client/components/redirect';
import React, { useState, useEffect } from 'react'
import { Mic } from 'react-feather';

const annyang = require('annyang');

interface VoiceAssistantInterface {
  onSpeechRecognition: (phrase: string) => void;
}

// Speech recognition libs


const VoiceAssistant: React.FC<VoiceAssistantInterface> = ( { onSpeechRecognition } ) => {
  // Speech recognition setup
 const [transcription, setTranscription] = useState<string | null>(null);
  
  useEffect(() => {
    let localTranscription = transcription?.toLowerCase();
    localTranscription = localTranscription?.replace(/\s/g, '')
    console.log(`LOCAL: ${localTranscription}`)
    if (localTranscription == "heybob") {
      setHasBeenPressedAtleastOnce(() => true)
      return
    }
    if (!hasBeenPressedAtleastOnce) {
      console.log("not valid")
      return
    }
    if (localTranscription?.includes("gotomenu") || localTranscription?.includes("gotomenupage") || localTranscription?.includes("gotothemenupage")) {
      redirect('/menu')
    }
    if (localTranscription?.includes("tosignup") || localTranscription?.includes("tosignuppage") || localTranscription?.includes("tothesignuppage")) {
      redirect('/signup')
    }
  }, [transcription])

  useEffect(() => {
    if (annyang) {
      annyang.start();

      annyang.addCallback('result', (phrases: any) => {
        const recognizedPhrase = phrases[0];
        console.log('Recognized phrase:', recognizedPhrase);

        setTranscription(recognizedPhrase);

        if (onSpeechRecognition) {
          onSpeechRecognition(recognizedPhrase);
        }
      });
    }

    return () => {
      if (annyang) {
        annyang.abort();
      }
    };
  }, [onSpeechRecognition]);
  const [hasBeenPressedAtleastOnce, setHasBeenPressedAtleastOnce] = useState<boolean>(false);
  const [isWelcomeActive, setIsWelcomeActive] = useState<boolean>(false);
  const handleClick = () => {
    setHasBeenPressedAtleastOnce(() => !hasBeenPressedAtleastOnce);
  }
  useEffect(() => {
    setTimeout(() => {
      if (!hasBeenPressedAtleastOnce) {
        setIsWelcomeActive(() => true)
      }
    }, 5000)
  }, [])
  return (
  <>
      <div className="fixed z-[100] bottom-5 right-5 min-w-[300px] group flex flex-col items-end justify-center pointer-events-none">

        <div className={`bg-white  pointer-events-auto ${ hasBeenPressedAtleastOnce ? "mb-0 opacity-0 blur-md" : isWelcomeActive ? "mb-5 opacity-60 hover:opacity-100 group-hover:opacity-100" : "mb-0 opacity-0 blur-md" } transition-all duration-300 absolute bottom-[100%] right-0 px-5 py-4 shadow-[0px_-1px_15px_0px_rgba(0,0,0,0.15)] rounded-lg`}>
          <p>Hello! I am your personal AI voice assistant.</p>
        </div>

        <div className={`bg-white ${ hasBeenPressedAtleastOnce ? "mb-5" :"mb-0 opacity-0 blur-md" } transition-all duration-300 absolute bottom-[100%] right-0 px-5 py-4 shadow-[0px_-1px_15px_0px_rgba(0,0,0,0.15)] rounded-lg`}>
          <p>{ transcription ? `Listening...` : "How may I help you?"}</p>
        </div>
        
        <button className="p-4 rounded-full bg-primary-red text-white cursor-pointer shadow-[0px_-1px_18px_0px_rgba(222,47,47,0.35)] opacity-90 hover:opacity-100 hover:shadow-[0px_-1px_18px_0px_rgba(222,47,47,0.5)] transition-all duration-300 hover:scale-110 pointer-events-auto" onClick={handleClick}>
          <Mic 
          size={20}
          color='white'
          />
        </button>
      </div>
  </>
  )
}

export default VoiceAssistant;
