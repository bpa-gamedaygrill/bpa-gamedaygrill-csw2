"use client";

import { redirect } from 'next/dist/client/components/redirect';
import React, { useState, useEffect, useRef } from 'react'
import { Mic, X } from 'react-feather';

import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { close, open } from "../../redux/features/cartModalSlice";

import { parseCookies } from 'nookies';

import deleteUserCookies from '../../../libs/actions/cookie/deleteUserCookies';

import { useRouter } from 'next13-progressbar';

interface SpeechRecognitionEvent extends Event {
  results: SpeechRecognitionResultList;
}

// Speech recognition libs
interface VACInterface {
  isSmallScreen: boolean;
}

const VoiceAssistantContents: React.FC<VACInterface> = ({ isSmallScreen }) => {
  const dispatch = useAppDispatch();
  // Speech recognition setup
  const [isActive , setIsActive] = useState<boolean>(false);
  const [isWelcomeActive, setIsWelcomeActive] = useState<boolean>(false);
  const [transcription, setTranscription] = useState<string>("");
  const [popupDisabled, setPopupDisabled] = useState<boolean>(false);
  const [notSupported, setNotSupported] = useState<boolean>(true);

  const router = useRouter();

  const cookies = parseCookies()

  const logOut = async() => {
    if (cookies.token) {
      await deleteUserCookies()
      window.location.reload();
    }
  }


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
      setTranscription(() => latestResult.transcript);
      console.log('Recognized phrase:', recognizedPhrase);


      recognizedPhrase = recognizedPhrase.toLowerCase()
      recognizedPhrase = recognizedPhrase.replace(/\s/g, '');

      console.log(recognizedPhrase)

      if (recognizedPhrase.includes("stop")) {
        setIsActive(prevIsActive => false);
        return
      } 
      if (!isActive) {
        console.log("invalid")
        return
      }
      console.log("after: ", recognizedPhrase)

      if (recognizedPhrase.includes('checkout')) {
        router.push("/checkout")
      }


      if (recognizedPhrase.includes('appetizer')) {
        window.location.replace("/menu?category=appetizer")
      }

      if (recognizedPhrase.includes('logout')) {
        logOut();
      }


      if (recognizedPhrase.includes('entree')) {
        window.location.replace("/menu?category=entree")
      }

      if (recognizedPhrase.includes('dessert')) {
        window.location.replace("/menu?category=dessert")
      }

      if (recognizedPhrase.includes('beverage') || recognizedPhrase.includes('drink')) {
        window.location.replace("/menu?category=beverage")
      }

      if (recognizedPhrase.includes('menu')) {
        router.push("/menu")
      }

      if (recognizedPhrase.includes('event')) {
        router.push("/events")
      }

      if (recognizedPhrase.includes('signup') ||
        recognizedPhrase.includes('tothesignuppage') ||
        recognizedPhrase.includes('signuppage')) {
          router.push("/signup")
      }

      if (recognizedPhrase.includes('login') ||
        recognizedPhrase.includes('totheloginpage') ||
        recognizedPhrase.includes('loginpage')) {
          router.push("/login")
      }

      if (recognizedPhrase.includes('cart') ||
        recognizedPhrase.includes('purchase')) {
        dispatch(open())      
        setIsActive(prev => false);
      }

      if (recognizedPhrase.includes('about')) {
        router.push('/about')
      }


        if (recognizedPhrase.includes('backhome') ||
        recognizedPhrase.includes('tothehomepage') ||
        recognizedPhrase.includes('home')) {
          router.push("/")
      }


    }
  };

  useEffect(() => {
    // Check if the browser supports the SpeechRecognition API
    if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
      setNotSupported(prev => false)
      if (!isActive) {
        return
      }
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
            setIsActive(prev => false);
          }

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
      if (!isActive && !isSmallScreen) {
        setIsWelcomeActive(() => true)
      }
    }, 5000)
  }, [isSmallScreen])
  return (
  <>
      { !notSupported && (
      <>
      <div className="fixed z-[100] bottom-5 right-5 min-w-[300px] group flex flex-col items-end justify-center pointer-events-none">
        <div className={`bg-white ${ (isActive || popupDisabled) ? "mb-0 opacity-0 blur-md pointer-events-none" : isWelcomeActive ? "mb-[8.5rem] opacity-60 hover:opacity-100  pointer-events-auto group-hover:opacity-100 hover:shadow-[0px_-1px_15px_0px_rgba(0,0,0,0.18)]" : "mb-0 opacity-0 blur-md pointer-events-none" } transition-all duration-300 absolute bottom-[100%] group right-0 px-2.5 py-2.5 shadow-[0px_-1px_15px_0px_rgba(0,0,0,0.15)] rounded-full cursor-pointer`} onClick={() => setPopupDisabled(prev => true)}>
              <X 
              size={20}
              className="transition-all duration-100 text-black relative"
              opacity={0.7}
              />
        </div>

        <div className={`bg-white ${ (isActive || popupDisabled) ? "mb-0 opacity-0 blur-md pointer-events-none" : isWelcomeActive ? "mb-5 opacity-60 hover:opacity-100 group-hover:opacity-100  pointer-events-auto" : "mb-0 opacity-0 blur-md pointer-events-none" } transition-all duration-300 absolute bottom-[100%] right-0 px-5 py-4 shadow-[0px_-1px_15px_0px_rgba(0,0,0,0.15)] rounded-lg`}>
          <p>Hello! I am your personal AI voice assistant. Click on the mic to get started</p>
        </div>

        <div className={`bg-white ${ (isActive) ? "mb-5" :"mb-0 opacity-0 blur-md" } transition-all duration-300 absolute bottom-[100%] right-0 px-5 py-4 shadow-[0px_-1px_15px_0px_rgba(0,0,0,0.15)] rounded-lg`}>
          <p>Listening...</p>
        </div>

        <div className={`bg-white ${ isActive ? "mb-[5.7rem]" :"mb-0 opacity-0 blur-md" } transition-all duration-300 absolute bottom-[100%] right-0 px-5 py-4 shadow-[0px_-1px_15px_0px_rgba(0,0,0,0.15)] rounded-lg`}>
          <p className="text-left opacity-70">"{transcription}"</p>
        </div>

        
        <button className="p-4 rounded-full bg-primary-red text-white cursor-pointer shadow-[0px_-1px_18px_0px_rgba(222,47,47,0.35)] opacity-90 hover:opacity-100 hover:shadow-[0px_-1px_18px_0px_rgba(222,47,47,0.5)] transition-all duration-300 hover:scale-110 pointer-events-auto" onClick={handleClick}>
          <Mic 
          size={20}
          color='white'
          />
        </button>
      </div>
      </>
      ) }
  </>
  )

}


const VoiceAssistant = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 600);
    };

    // Set the initial screen size
    handleResize();

    // Attach the event listener
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
  <>
      <div className="fixed bottom-0 right-0 z-[100]">
        <VoiceAssistantContents isSmallScreen={isSmallScreen} />
      </div>
  </>
  )
}

export default VoiceAssistant;
