import React from "react";
import Banner from "../components/About-Us/Banner";
import WhyVisionAndMission from "../components/About-Us/WhyAndVisionAndMission";
import WhyUs from "../components/About-Us/WhyUs";
import Header from "../components/Header/Header";
import Imports from "../components/Imports/Imports";
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
