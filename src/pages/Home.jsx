import React from "react";
import Banner from "../components/Home/Banner/SecondBanner";
import AboutUs from "../components/Home/AboutUs";
import Services from "../components/Home/Services/Services";
import Counter from "../components/Home/Counter/Counter";
import Form from "../components/Home/Form/Form";
import Collaborators from "../components/Home/Collaborators/Collaborators";
import TestimonialSlider from "../components/Home/Testimonials/Testimonials";
import Header from "../components/Header/Header";
import Imports from "../components/Imports/Imports";
import ProductionAndManagment from "../components/Home/ProductionAndManagement/ProductionAndManagement";
import { Element, scroller } from "react-scroll";

const Home = () => {
  // const scrollToForm = () => {
  //   const headerHeight =
  //     document.querySelector(".header-back")?.offsetHeight ?? 80;

  //   // Delay ensures layout/animations are done before scroll
  //   setTimeout(() => {
  //     scroller.scrollTo("formSection", {
  //       duration: 600,
  //       smooth: "easeInOutQuart",
  //       offset: -headerHeight - 8,
  //       isDynamic: true, // force recalc every click
  //     });
  //   }, 100); // small delay fixes first click issue
  // };

  return (
    <>
      <Imports />
      <Header />
      <Banner />

      <AboutUs />
      <Services />
      <ProductionAndManagment />
      <Counter />

      {/* Target section */}
      <Element name="formSection">
        <Form />
      </Element>

      <Collaborators />
      <TestimonialSlider />
    </>
  );
};

export default Home;
