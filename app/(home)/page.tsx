import React from "react";

// Component Imports 
import DefaultNavbar from "../components/Navbars/DefaultNavbar";
import HeroSection from "./components/Hero/HeroSection";
import PopularItemsSection from "./components/PopularItems/PopularItemsSection";

const Index = () => {
  return (
    <>
      <DefaultNavbar />
      <HeroSection />
      <PopularItemsSection />
    </>
  );
}

export default Index;
