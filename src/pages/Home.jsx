import React from "react";
import Banner from "../components/Home/Banner/Banner";
import AboutUs from "../components/Home/About-Us";
import Services from "../components/Home/Services/Services";
import Counter from "../components/Home/Counter/Counter";
import Form from "../components/Home/Form/Form";
import Collaborators from "../components/Home/Collaborators/Collaborators";
import TestimonialSlider from "../components/Home/Testimonials/Testimonials";
import Header from "../components/Header/Header";
import Imports from "../components/Imports/Imports";
const Home = () => {
  return (
    <>
      {" "}
      <Imports />
      <Header />
      <Banner />
      <AboutUs />
      <Services />
      <Counter />
      <Form />
      <Collaborators />
      <TestimonialSlider />
    </>
  );
};

export default Home;
