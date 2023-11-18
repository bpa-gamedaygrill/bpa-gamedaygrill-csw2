"use client";

import { redirect } from 'next/dist/client/components/redirect';
import React, { useState, useEffect, useRef } from 'react'
import { Mic } from 'react-feather';


interface SpeechRecognitionEvent extends Event {
  results: SpeechRecognitionResultList;
}

// Speech recognition libs


const VoiceAssistant = () => {
  // Speech recognition setup
  const [isActive , setIsActive] = useState<boolean>(false);
  const [isWelcomeActive, setIsWelcomeActive] = useState<boolean>(false);

  const handleSpeechRecognition = (event: SpeechRecognitionEvent) => {
    const recognizedResults = Array.from(event.results)
      .map((result) => Array.from(result)
        .map((alternative) => ({ transcript: alternative.transcript, confidence: alternative.confidence })))
      .flat();

    // Filter results based on confidence (adjust the threshold as needed)
    const highConfidenceResults = recognizedResults.filter((result) => result.confidence > 0.7);

    if (highConfidenceResults.length > 0) {
      // Access the latest recognized result
      const latestResult = highConfidenceResults[highConfidenceResults.length - 1];
      let recognizedPhrase = latestResult.transcript;
      console.log('Recognized phrase:', recognizedPhrase);

      recognizedPhrase = recognizedPhrase.toLowerCase()
      recognizedPhrase = recognizedPhrase.replace(/\s/g, '');

      console.log(recognizedPhrase)

      // Perform actions based on the recognized phrase
      if (recognizedPhrase == 'heybob') {
        console.log('Hey Bob detected!');
        setIsActive(prevIsActive => true);
        return
      } 
      if (!isActive) {
        console.log("invalid")
        return
      }
      console.log("after: ", recognizedPhrase)

      if (recognizedPhrase.includes('tothemenu') ||
      recognizedPhrase.includes('tothemenupage') ||
      recognizedPhrase.includes('tothemenupage')) {
        console.log("MENU DETECTED")
        window.location.replace("/menu")
      }

      if (recognizedPhrase.includes('tosignup') ||
        recognizedPhrase.includes('tothesignuppage') ||
        recognizedPhrase.includes('tothesignuppage')) {
        console.log("MENU DETECTED")
        window.location.replace("/signup")
      }

    }
  };

  useEffect(() => {
    // Check if the browser supports the SpeechRecognition API
    if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
      try {
        const recognition = new ((window as any).SpeechRecognition || (window as any).webkitSpeechRecognition)();

        // Set the language for recognition
        recognition.lang = 'en-US';

        // Enable continuous recognition
        recognition.continuous = true;

        // Set the interim results to get partial transcriptions
        recognition.interimResults = true;

        // Add result event listener
        recognition.onresult = handleSpeechRecognition;

        // Handle errors
        recognition.onerror = (event: any) => {
          console.error('Speech recognition error:', event.error);

          if (event.error === 'no-speech') {
            console.log('No speech detected. Restarting recognition...');
            recognition.start();
          }
          // Handle errors as needed
        };

        // Start recognition
        recognition.start();

        // Cleanup when the component unmounts
        return () => {
          recognition.stop();
        };
      } catch (error) {
        console.error('Error initializing SpeechRecognition:', error);
      }
    } else {
      console.log('Speech recognition is not supported in this browser.');
    }
  }, [isActive]);
  const handleClick = () => {
    setIsActive(prevIsActive => !prevIsActive);
  }
  useEffect(() => {
    setTimeout(() => {
      if (!isActive) {
        setIsWelcomeActive(() => true)
      }
    }, 5000)
  }, [])
  return (
  <>
      <div className="fixed z-[100] bottom-5 right-5 min-w-[300px] group flex flex-col items-end justify-center pointer-events-none">

        <div className={`bg-white  pointer-events-auto ${ isActive ? "mb-0 opacity-0 blur-md" : isWelcomeActive ? "mb-5 opacity-60 hover:opacity-100 group-hover:opacity-100" : "mb-0 opacity-0 blur-md" } transition-all duration-300 absolute bottom-[100%] right-0 px-5 py-4 shadow-[0px_-1px_15px_0px_rgba(0,0,0,0.15)] rounded-lg`}>
          <p>Hello! I am your personal AI voice assistant. Say "Hey Bob" to get started.</p>
        </div>

        <div className={`bg-white ${ isActive ? "mb-5" :"mb-0 opacity-0 blur-md" } transition-all duration-300 absolute bottom-[100%] right-0 px-5 py-4 shadow-[0px_-1px_15px_0px_rgba(0,0,0,0.15)] rounded-lg`}>
          <p>Listening...</p>
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
