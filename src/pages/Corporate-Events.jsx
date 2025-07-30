import React from "react";
import Banner from "../components/CorporateEvents/Banner";
import Services from "../components/CorporateEvents/Services";
import Video from "../components/CorporateEvents/Video";
import Header from "../components/Header/Header";
import Imports from "../components/Imports/Imports";
const CorporateEvents = () => {
  return (
    <>
      <Imports />
      <Header />
      <Banner />
      <Services />
      <Video />
    </>
  );
};

export default CorporateEvents;
