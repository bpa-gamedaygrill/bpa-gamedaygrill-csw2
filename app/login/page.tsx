import React from "react";

// Component Imports 
import DefaultNavbar from "../components/Navbars/DefaultNavbar";
import LoginFormWrapper from "./components/LoginFormWrapper";

import { Toaster } from "react-hot-toast";

const Index = () => {
  return (
    <>
      <Toaster />
      <DefaultNavbar
      hideMiddlePill
      bottomBorder
      />
      <LoginFormWrapper />
    </>
  );
}

export default Index;
