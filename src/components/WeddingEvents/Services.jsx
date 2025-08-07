import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useInView } from "react-intersection-observer";

import ThemeAndDesign from "../../assets/icons/wedding/svgs/ThemeAndDesign.svg";
import VenuePlanning from "../../assets/icons/wedding/svgs/VenuePlanning.svg";
import BudgetStructuring from "../../assets/icons/wedding/svgs/BudgetStructuring.svg";
import DreamyDecor from "../../assets/icons/wedding/svgs/DreamyDecor.svg";
import GourmentCatering from "../../assets/icons/wedding/svgs/GourmetCatering.svg";
import GuestManagement from "../../assets/icons/wedding/svgs/GuestManagement.svg";
import TravelAndTransportArrangements from "../../assets/icons/wedding/svgs/TravelAndTransportArrangements.svg";
import PhotographyAndCinematography from "../../assets/icons/wedding/svgs/PhotographyAndCinematography.svg";
import MakeupMehendiAndLiveActs from "../../assets/icons/wedding/svgs/MakeupMehendiAndLiveActs.svg";
import VenueTieupsHallsResortAndHotels from "../../assets/icons/wedding/svgs/VenueTieupsHallsResortsAndHotels.svg";
import CustomEinvitesAndPrintInvites from "../../assets/icons/wedding/svgs/CustomEinvitesAndPrintInvites.svg";
import PersonalisedWeddingWebsites from "../../assets/icons/wedding/svgs/PersonalisedWeddingWebsites.svg";

const ServiceDetails = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  const [ref1, inView1] = useInView({ threshold: 0, triggerOnce: true });
  const [ref2, inView2] = useInView({ threshold: 0, triggerOnce: true });
  const [ref3, inView3] = useInView({ threshold: 0, triggerOnce: true });
  const [ref4, inView4] = useInView({ threshold: 0, triggerOnce: true });
  const [ref5, inView5] = useInView({ threshold: 0, triggerOnce: true });
  const [ref6, inView6] = useInView({ threshold: 0, triggerOnce: true });
  const [ref7, inView7] = useInView({ threshold: 0, triggerOnce: true });
  const [ref8, inView8] = useInView({ threshold: 0, triggerOnce: true });
  const [ref9, inView9] = useInView({ threshold: 0, triggerOnce: true });
  const [ref10, inView10] = useInView({ threshold: 0, triggerOnce: true });
  const [ref11, inView11] = useInView({ threshold: 0, triggerOnce: true });
  const [ref12, inView12] = useInView({ threshold: 0, triggerOnce: true });

  return (
    <section className="wpo-service-details-area section-padding-60 pt-0 pb-6">
      <div className="container">
        <div className="wpo-p-details-section">
          <div className="process-wrap">
            <div className="row g-4">
              {/* Card 1 */}
              <div className="col-lg-4 col-md-6 col-12" ref={ref1}>
                <div
                  className={`process-item h-100 ${
                    inView1 ? "aos-animate" : ""
                  }`}
                  data-aos="fade-up"
                  data-aos-delay="0"
                >
                  <div className="process-icon w-15 h-40 h-45">
                    <img
                      src={ThemeAndDesign}
                      alt="Theme & Design"
                      className="new-icons"
                    />
                  </div>
                  <div className="process-text">
                    <h3>Theme & Design</h3>
                    <p>Crafting stunning themes that reflect your story.</p>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="col-lg-4 col-md-6 col-12" ref={ref2}>
                <div
                  className={`process-item h-100 ${
                    inView2 ? "aos-animate" : ""
                  }`}
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <div className="process-icon h-40 h-45">
                    <img
                      src={VenuePlanning}
                      alt="Venue Planning"
                      className="new-icons w-15"
                    />
                  </div>
                  <div className="process-text">
                    <h3>Venue Planning</h3>
                    <p>Planning perfect venues for every occasion.</p>
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div className="col-lg-4 col-md-6 col-12" ref={ref3}>
                <div
                  className={`process-item h-100 ${
                    inView3 ? "aos-animate" : ""
                  }`}
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <div className="process-icon h-40 h-45">
                    <img
                      src={BudgetStructuring}
                      alt="Budget Structuring"
                      className="new-icons w-20"
                    />
                  </div>
                  <div className="process-text">
                    <h3>Budget Structuring</h3>
                    <p>Smart budget planning to meet every need.</p>
                  </div>
                </div>
              </div>

              {/* Card 4 */}
              <div className="col-lg-4 col-md-6 col-12" ref={ref4}>
                <div
                  className={`process-item h-100 ${
                    inView4 ? "aos-animate" : ""
                  }`}
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <div className="process-icon h-40 h-45">
                    <img
                      src={DreamyDecor}
                      alt="Dreamy Decor"
                      className="new-icons w-15"
                    />
                  </div>
                  <div className="process-text">
                    <h3>Dreamy Decor</h3>
                    <p>
                      Designing dreamy settings with magical, elegant touches.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 5 */}
              <div className="col-lg-4 col-md-6 col-12" ref={ref5}>
                <div
                  className={`process-item h-100 ${
                    inView5 ? "aos-animate" : ""
                  }`}
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  <div className="process-icon h-40 h-45">
                    <img
                      src={GourmentCatering}
                      alt="Gourmet Catering"
                      className="new-icons w-15"
                    />
                  </div>
                  <div className="process-text">
                    <h3>Gourmet Catering</h3>
                    <p>Serving curated menus with rich, gourmet flavours.</p>
                  </div>
                </div>
              </div>

              {/* Card 6 */}
              <div className="col-lg-4 col-md-6 col-12" ref={ref6}>
                <div
                  className={`process-item h-100 ${
                    inView6 ? "aos-animate" : ""
                  }`}
                  data-aos="fade-up"
                  data-aos-delay="500"
                >
                  <div className="process-icon h-40 h-45">
                    <img
                      src={GuestManagement}
                      alt="Guest Management"
                      className="new-icons w-15"
                    />
                  </div>
                  <div className="process-text">
                    <h3>Guest Management</h3>
                    <p>Taking care of every guest with warmth.</p>
                  </div>
                </div>
              </div>

              {/* Card 7 */}
              <div className="col-lg-4 col-md-6 col-12" ref={ref7}>
                <div
                  className={`process-item h-100 ${
                    inView7 ? "aos-animate" : ""
                  }`}
                  data-aos="fade-up"
                  data-aos-delay="600"
                >
                  <div className="process-icon h-40 h-45">
                    <img
                      src={TravelAndTransportArrangements}
                      alt="Travel & Transport"
                      className="new-icons w-15"
                    />
                  </div>
                  <div className="process-text">
                    <h3>Travel & Transport Arrangements</h3>
                    <p>Coordinating travel plans for guests with ease.</p>
                  </div>
                </div>
              </div>

              {/* Card 8 */}
              <div className="col-lg-4 col-md-6 col-12" ref={ref8}>
                <div
                  className={`process-item h-100 ${
                    inView8 ? "aos-animate" : ""
                  }`}
                  data-aos="fade-up"
                  data-aos-delay="700"
                >
                  <div className="process-icon h-40 h-45">
                    <img
                      src={PhotographyAndCinematography}
                      alt="Photography"
                      className="new-icons w-15"
                    />
                  </div>
                  <div className="process-text">
                    <h3>Photography & Cinematography</h3>
                    <p>Capturing timeless memories in every perfect frame.</p>
                  </div>
                </div>
              </div>

              {/* Card 9 */}
              <div className="col-lg-4 col-md-6 col-12" ref={ref9}>
                <div
                  className={`process-item h-100 ${
                    inView9 ? "aos-animate" : ""
                  }`}
                  data-aos="fade-up"
                  data-aos-delay="800"
                >
                  <div className="process-icon h-40 h-45">
                    <img
                      src={MakeupMehendiAndLiveActs}
                      alt="Makeup & Mehendi"
                      className="new-icons w-15"
                    />
                  </div>
                  <div className="process-text">
                    <h3>Makeup, Mehendi & Live Acts</h3>
                    <p>
                      Beauty, tradition & entertainment, expertly brought
                      together.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 10 */}
              <div className="col-lg-4 col-md-6 col-12" ref={ref10}>
                <div
                  className={`process-item h-100 ${
                    inView10 ? "aos-animate" : ""
                  }`}
                  data-aos="fade-up"
                  data-aos-delay="900"
                >
                  <div className="process-icon h-40 h-45">
                    <img
                      src={VenueTieupsHallsResortAndHotels}
                      alt="Venue Tie-ups"
                      className="new-icons w-15"
                    />
                  </div>
                  <div className="process-text">
                    <h3>Venue Tie-ups: Halls, Resorts & Hotels</h3>
                    <p>Exclusive access to top venues & spaces.</p>
                  </div>
                </div>
              </div>

              {/* Card 11 */}
              <div className="col-lg-4 col-md-6 col-12" ref={ref11}>
                <div
                  className={`process-item h-100 ${
                    inView11 ? "aos-animate" : ""
                  }`}
                  data-aos="fade-up"
                  data-aos-delay="1000"
                >
                  <div className="process-icon h-40 h-45">
                    <img
                      src={CustomEinvitesAndPrintInvites}
                      alt="Custom Invites"
                      className="new-icons w-15"
                    />
                  </div>
                  <div className="process-text">
                    <h3>Custom E-invites & Print Invites</h3>
                    <p>Invites designed to reflect your wedding essence.</p>
                  </div>
                </div>
              </div>

              {/* Card 12 */}
              <div className="col-lg-4 col-md-6 col-12" ref={ref12}>
                <div
                  className={`process-item h-100 ${
                    inView12 ? "aos-animate" : ""
                  }`}
                  data-aos="fade-up"
                  data-aos-delay="1100"
                >
                  <div className="process-icon h-40 h-45">
                    <img
                      src={PersonalisedWeddingWebsites}
                      alt="Wedding Websites"
                      className="new-icons w-15"
                    />
                  </div>
                  <div className="process-text">
                    <h3>Personalised Wedding Websites</h3>
                    <p>A custom space for your love story that unfolds.</p>
                  </div>
                </div>
              </div>
              {/* End of static cards */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetails;
