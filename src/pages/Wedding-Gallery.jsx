import React from "react";
import Banner from "../components/WeddingGallery/Banner";
import Gallery from "../components/WeddingGallery/Gallery";
import Header from "../components/Header/Header";
import Imports from "../components/Imports/Imports";
const WeddingGallery = () => {
  return (
    <>
      <Imports />
      <Header />
      <Banner />
      <Gallery />
    </>
  );
};

export default WeddingGallery;
