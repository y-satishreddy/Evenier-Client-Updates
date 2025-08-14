import React, { useRef } from "react";
import Banner from "../components/Home/Banner/SecondBanner";
import AboutUs from "../components/Home/AboutUs";
import Services from "../components/Home/Services/Services";
import Counter from "../components/Home/Counter/Counter";
import Form from "../components/Home/Form/Form";
import Collaborators from "../components/Home/Collaborators/Collaborators";
import TestimonialSlider from "../components/Home/Testimonials/Testimonials";
import Header from "../components/Header/Header";
import Imports from "../components/Imports/Imports";

const Home = () => {
  const formRef = useRef(null);
  const firstClick = useRef(true); // Track first click

  const scrollToForm = () => {
    if (formRef.current) {
      let offsetPosition;
      const elementPosition =
        formRef.current.getBoundingClientRect().top + window.scrollY;

      if (firstClick.current) {
        // First click: fixed offset 142px, small delay to ensure header renders fully
        offsetPosition = elementPosition + 80;
        firstClick.current = false;

        setTimeout(() => {
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }, 50); // delay 50ms
      } else {
        // Subsequent clicks: dynamic header height
        const headerElement = document.querySelector(".header-back");
        const headerHeight = headerElement ? headerElement.offsetHeight : -80;

        offsetPosition = elementPosition - headerHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <>
      <Imports />
      <Header />
      <Banner onEnquiryClick={scrollToForm} />
      <AboutUs />
      <Services />
      <Counter />
      <div ref={formRef}>
        <Form />
      </div>
      <Collaborators />
      <TestimonialSlider />
    </>
  );
};

export default Home;
