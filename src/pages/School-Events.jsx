import React from "react";
import Banner from "../components/SchoolEvents/Banner";
import Services from "../components/SchoolEvents/Services";
import Video from "../components/SchoolEvents/Video";
import Header from "../components/Header/Header";
import Imports from "../components/Imports/Imports";
const SchoolEvents = () => {
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
export default SchoolEvents;
