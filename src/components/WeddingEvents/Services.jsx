import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useInView } from "react-intersection-observer";

import BudgetStructuring from "../../assets/icons/wedding/svgs/BudgetStructuring.svg";
import CustomEinvitesAndPrintInvites from "../../assets/icons/wedding/svgs/CustomEinvitesAndPrintInvites.svg";
import DreamyDecor from "../../assets/icons/wedding/svgs/DreamyDecor.svg";
import GourmentCatering from "../../assets/icons/wedding/svgs/GourmetCatering.svg";
import GuestManagement from "../../assets/icons/wedding/svgs/GuestManagement.svg";
import MakeupMehendiAndLiveActs from "../../assets/icons/wedding/svgs/MakeupMehendiAndLiveActs.svg";
import PersonalisedWeddingWebsites from "../../assets/icons/wedding/svgs/PersonalisedWeddingWebsites.svg";
import PhotographyAndCinematography from "../../assets/icons/wedding/svgs/PhotographyAndCinematography.svg";
import ThemeAndDesign from "../../assets/icons/wedding/svgs/ThemeAndDesign.svg";
import TravelAndTransportArrangements from "../../assets/icons/wedding/svgs/TravelAndTransportArrangements.svg";
import VenuePlanning from "../../assets/icons/wedding/svgs/VenuePlanning.svg";
import VenueTieupsHallsResortAndHotels from "../../assets/icons/wedding/svgs/VenueTieupsHallsResortsAndHotels.svg";

const ServiceDetails = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  const services = [
    {
      title: "Theme & Design",
      desc: "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't.",
      icon: ThemeAndDesign,
    },
    {
      title: "Venue Planning",
      desc: "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't.",
      icon: VenuePlanning,
    },
    {
      title: "Budget Structuring",
      desc: "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't.",
      icon: BudgetStructuring,
    },
    {
      title: "Dreamy Decor",
      desc: "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't.",
      icon: DreamyDecor,
    },
    {
      title: "Gourmet Catering",
      desc: "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't.",
      icon: GourmentCatering,
    },
    {
      title: "Guest Management",
      desc: "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't.",
      icon: GuestManagement,
    },
    {
      title: "Travel & Transport Arrangements",
      desc: "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't.",
      icon: TravelAndTransportArrangements,
    },
    {
      title: "Photography & Cinematography",
      desc: "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't.",
      icon: PhotographyAndCinematography,
    },
    {
      title: "Makeup, Mehendi & Live Acts",
      desc: "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't.",
      icon: MakeupMehendiAndLiveActs,
    },
    {
      title: "Venue Tie-ups: Halls, Resorts & Hotels",
      desc: "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't.",
      icon: VenueTieupsHallsResortAndHotels,
    },
    {
      title: "Custom E-invites & Print Invites",
      desc: "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't.",
      icon: CustomEinvitesAndPrintInvites,
    },
    {
      title: "Personalised Wedding Websites",
      desc: "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't.",
      icon: PersonalisedWeddingWebsites,
    },
  ];

  return (
    <section
      className="wpo-service-details-area section-padding-60 pt-0 pb-0"
      style={{ minHeight: "100vh" }}
    >
      <div className="container">
        <div className="wpo-p-details-section">
          <div className="process-wrap">
            <div className="row">
              {services.map((service, index) => {
                const { ref, inView } = useInView({
                  threshold: 0,
                  triggerOnce: true,
                });

                return (
                  <div
                    className="col-lg-4 col-md-6 col-12"
                    key={index}
                    ref={ref}
                  >
                    <div
                      className={`process-item ${inView ? "aos-animate" : ""}`}
                      data-aos="fade-up"
                      data-aos-delay={`${index * 100}`}
                    >
                      <div className="process-icon">
                        <img
                          src={service.icon}
                          alt={service.title}
                          className="new-icons"
                        />
                      </div>
                      <div className="process-text">
                        <h3>{service.title}</h3>
                        <p>{service.desc}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetails;
