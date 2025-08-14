import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

import funImg1 from "../../../assets/images/funfact/1.png";
import funImg2 from "../../../assets/images/funfact/2.png";
import funImg3 from "../../../assets/images/funfact/3.png";

const CounterItem = ({ end, label, imageSrc }) => {
  const [count, setCount] = useState(0);
  const duration = 2000; // 2 seconds
  const fps = 60;
  const totalFrames = Math.round((duration / 1000) * fps);
  const increment = end / totalFrames;

  useEffect(() => {
    let frame = 0;
    let current = 0;
    let animationFrame;

    const animate = () => {
      frame++;
      current += increment;
      if (frame < totalFrames) {
        setCount(Math.floor(current));
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
        cancelAnimationFrame(animationFrame);
      }
    };

    animate();

    return () => cancelAnimationFrame(animationFrame);
  }, [end]);

  return (
    <div className="grid">
      <div className="info">
        <h3>{count}+</h3>
        <p>{label}</p>
      </div>
      {imageSrc && (
        <div className="flower">
          <img src={imageSrc} alt={label} />
        </div>
      )}
    </div>
  );
};

const Counter = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section ref={ref} className="wpo-fun-fact-section section-padding-60 pt-0">
      <div className="container">
        <div className="row">
          <div className="col col-xs-12">
            <div className="wpo-fun-fact-grids clearfix">
              {inView && (
                <>
                  <CounterItem
                    end={10000}
                    label={
                      <>
                        Decor Projects <br /> Completed
                      </>
                    }
                    imageSrc={funImg2}
                  />

                  <CounterItem
                    end={15}
                    label={
                      <>
                        Years of <br /> Experience
                      </>
                    }
                    imageSrc={funImg1}
                  />

                  <CounterItem
                    end={5000}
                    label={
                      <>
                        Happy <br />
                        clients
                      </>
                    }
                    imageSrc={funImg3}
                  />
                  <CounterItem
                    end={30}
                    label={
                      <>
                        Full-time <br /> Professionals
                      </>
                    }
                  />
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Counter;
