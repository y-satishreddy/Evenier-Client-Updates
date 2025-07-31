import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useInView } from "react-intersection-observer";
import AlignImage from "../../assets/Align.png";
const ServiceDetails = () => {
  useEffect(() => {
    AOS.init({
      duration: 800, // faster animation
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  const services = [
    {
      title: "Theme & Design",
      desc: "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't.",
    },
    {
      title: "Venue Planning",
      desc: "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't.",
    },
    {
      title: "Budget Structuring",
      desc: "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't.",
    },
    {
      title: "Dreamy Decor",
      desc: "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't.",
    },
    {
      title: "Gourmet Catering",
      desc: "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't.",
    },
    {
      title: "Guest Management",
      desc: "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't.",
    },
    {
      title: "Travel & Transport Arrangements",
      desc: "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't.",
    },
    {
      title: "Photography & Cinematography",
      desc: "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't.",
    },
    {
      title: "Makeup, Mehendi & Live Acts",
      desc: "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't.",
    },
    {
      title: "Venue Tie-ups: Halls, Resorts & Hotels",
      desc: "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't.",
    },
    {
      title: "Custom E-invites & Print Invites",
      desc: "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't.",
    },
    {
      title: "Personalised Wedding Websites",
      desc: "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't.",
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
                  threshold: 0, // ⬅️ Triggers as soon as it enters the viewport
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
                      data-aos-delay={`${index * 100}`} // staggered animation
                    >
                      <div className="process-icon">
                        <img src={AlignImage} alt="AlignImage" />
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
