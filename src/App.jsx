import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/ContactUs";
import Imports from "../src/components/Imports";
import WeddingEvents from "./pages/WeddingEvents";
import SchoolEvents from "./pages/SchoolEvents";
import ContactUs from "./pages/ContactUs";
import CorporateEvents from "./pages/CorporateEvents";
import WeddingGallery from "./pages/WeddingGallery";
import Enquiry from "./pages/Enquiry";
import ScrollToTop from "./components/ScrollToTop";
import PrivacyAndPolicy from "./pages/PrivacyAndPolicy";
import FaArrow from "./components/FaArrow/FaArrow";
import ErrorPage from "./components/ErrorPage";
import Loader from "./components/Loader/Loader"; // ⬅️ Import Loader
import "./App.css";
import CorporateGallery from "./pages/CorporateGallery";
import SchoolGallery from "./pages/SchoolGallery";
import TermsAndConditions from "./pages/TermsAndConditions";
import Careers from "./pages/Careers";
function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); // Loader stays for 2 seconds
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

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
        <Route path="/corporate-gallery" element={<CorporateGallery />} />
        <Route path="school-gallery" element={<SchoolGallery />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/enquiry" element={<Enquiry />} />
        <Route path="/privacy-policy" element={<PrivacyAndPolicy />} />
        <Route path="/404" element={<ErrorPage />} />
        <Route path="/terms-conditions" element={<TermsAndConditions />} />
        <Route path="/career" element={<Careers />}></Route>
      </Routes>
      <FaArrow />
      <Footer />
    </>
  );
}

export default App;
