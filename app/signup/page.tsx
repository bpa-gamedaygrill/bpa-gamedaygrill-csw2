import React from "react";

// Component Imports 
import DefaultNavbar from "../components/Navbars/DefaultNavbar";
import SignupFormWrapper from "./components/SignupFormWrapper";

import VoiceAssistant from "../../app/components/VoiceAssistant/VoiceAssistant";

const Index = () => {
  return (
    <>
      <VoiceAssistant />
      <DefaultNavbar
      hideMiddlePill
      bottomBorder
      />
      <SignupFormWrapper />
    </>
  );
}

export default Index;
