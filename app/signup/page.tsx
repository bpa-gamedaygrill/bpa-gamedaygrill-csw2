import React from "react";

// Component Imports 
import DefaultNavbar from "../components/Navbars/DefaultNavbar";
import SignupFormWrapper from "./components/SignupFormWrapper";
import { Toaster } from "react-hot-toast";
import VoiceAssistant from "../../app/components/VoiceAssistant/VoiceAssistant";

const Index = () => {
  return (
    <>
      <VoiceAssistant />
      <DefaultNavbar
      hideMiddlePill
      bottomBorder
      />
      <Toaster />
      <SignupFormWrapper />
    </>
  );
}

export default Index;
