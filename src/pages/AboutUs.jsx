import React from "react";
import Banner from "../components/AboutUs/Banner";
import WhyVisionAndMission from "../components/AboutUs/WhyAndVisionAndMission";
import WhyUs from "../components/AboutUs/WhyUs";
import Header from "../components/Header/Header";
import Imports from "../components/Imports";
const AboutUs = () => {
  return (
    <>
      {" "}
      <Imports />
      <Header />
      <Banner />
      <WhyVisionAndMission />
      <WhyUs />
    </>
  );
};

export default AboutUs;
