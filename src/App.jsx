import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/ContactUs";
import Imports from "../src/components/Imports/Imports";
import WeddingEvents from "./pages/WeddingEvents";
import SchoolEvents from "./pages/SchoolEvents";
import ContactUs from "./pages/ContactUs";
import CorporateEvents from "./pages/CorporateEvents";
import WeddingGallery from "./pages/WeddingGallery";
import Enquiry from "./Pages/Enquiry";
import ScrollToTop from "./components/ScrollToTop";
import PrivacyAndPolicy from "./pages/PrivacyAndPolicy";
import FaArrow from "./components/FaArrow/FaArrow";
import "./App.css";
import ErrorPage from "./components/ErrorPage";
function App() {
  return (
    <>
      <Imports />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/wedding-events" element={<WeddingEvents />} />
        <Route path="/school-events" element={<SchoolEvents />} />
        <Route path="/corporate-events" element={<CorporateEvents />} />
        <Route path="/wedding-gallery" element={<WeddingGallery />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/enquiry" element={<Enquiry />} />
        <Route path="/privacy-policy" element={<PrivacyAndPolicy />} />
        <Route path="/404" element={<ErrorPage />}></Route>
      </Routes>
      <FaArrow />
      <Footer />
    </>
  );
}

export default App;
