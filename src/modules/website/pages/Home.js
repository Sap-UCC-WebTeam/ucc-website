import React from "react";
// import HeroSection from "../../website/components/homepage/HeroSection/HeroSection";
import HeroSection from "../../website/components/homepage/HeroSection/HeroSection";
import Cards from "../../website/components/homepage/Cards/Cards";
import Marketing from "../../website/components/homepage/Marketing/Marketing";
import Buttons from "../../website/components/homepage/Buttons/Buttons";
import Footer from "../../website/components/homepage/Footer/Footer";
import WebsiteNavbar from "../../website/components/nav/WebsiteNavbar";

const Home = () => {
  return (
    <div>
           <HeroSection />
           <Cards />
           {/* <Marketing /> */}
           <Buttons />
            {/* <Footer /> */}
    </div>
  );
};

export default Home;
