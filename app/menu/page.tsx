import React from "react";

// Component Imports 
import DefaultNavbar from "../components/Navbars/DefaultNavbar";
import MenuContent from "./components/MenuContent";
const Index = () => {
  return (
    <>
      <DefaultNavbar
      />
      <div className="mt-[110px]"></div>
      <MenuContent />
    </>
  );
}

export default Index;
