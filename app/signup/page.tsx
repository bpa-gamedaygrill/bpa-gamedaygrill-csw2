import React from "react";

// Component Imports 
import DefaultNavbar from "../components/Navbars/DefaultNavbar";
import SignupFormWrapper from "./components/SignupFormWrapper";

const Index = () => {
  return (
    <>
      <DefaultNavbar
      hideMiddlePill
      bottomBorder
      />
      <SignupFormWrapper />
    </>
  );
}

export default Index;
