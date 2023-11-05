import React from "react";

// Component Imports 
import DefaultNavbar from "../components/Navbars/DefaultNavbar";
import HeroSection from "./components/Hero/HeroSection";
import PopularItemsSection from "./components/PopularItems/PopularItemsSection";
import OrderOnlineBanner from "./components/Banner/OrderOnlineBanner";
import Reviews from "./components/Reviews/Reviews";
import ContactAndLocation from "./components/ContactAndLocation/ContactAndLocation";
// import CookieInfo from "./components/CookieInfo/CookieInfo";

const Index = () => {
  return (
    <>
      <DefaultNavbar />
      <HeroSection />
      <PopularItemsSection />
      <OrderOnlineBanner />
      <Reviews />
      <ContactAndLocation />
    </>
  );
}

export default Index;
