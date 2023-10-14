import React from "react";

// Component Imports 
import DefaultNavbar from "../components/Navbars/DefaultNavbar";
import HeroSection from "./components/Hero/HeroSection";
import PopularItemsSection from "./components/PopularItems/PopularItemsSection";
import OrderOnlineBanner from "./components/Banner/OrderOnlineBanner";

const Index = () => {
  return (
    <>
      <DefaultNavbar />
      <HeroSection />
      <PopularItemsSection />
      <OrderOnlineBanner />
    </>
  );
}

export default Index;
