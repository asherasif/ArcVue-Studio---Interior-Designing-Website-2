import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import image1 from "../assets/Carousel/IMG_3279.jpg";
import image2 from "../assets/Carousel/IMG_3331.jpg";
import image3 from "../assets/Carousel/IMG_3343.jpg";

const Parallax = () => {
  const { innerHeight } = window;

  const getRatio = (el) => innerHeight / (innerHeight + el.offsetHeight);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.utils.toArray("section").forEach((section, i) => {
      section.bg = section.querySelector(".bg");

      gsap.fromTo(
        section.bg,
        {
          backgroundPosition: () =>
            i ? `50% ${-innerHeight * getRatio(section)}px` : "50% 0px",
        },
        {
          backgroundPosition: () =>
            `50% ${innerHeight * (1 - getRatio(section))}px`,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: () => (i ? "top bottom" : "top top"),
            end: "bottom top",
            scrub: true,
          },
        }
      );
    });
  }, []);

  return (
    <>
      <style>
        {`
        html {
          overflow-y: scroll;
          height: 100%;
          -webkit-overflow-scrolling: touch;
          overflow-scrolling: touch;
        }
        
        body {
          margin: 0;
          background: #3b4151;
          font-family: "Euclid Circular A", "Poppins";
          z-index: -1;
        }
        
        section {
          position: relative;
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: -1;
        }
        
        .bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: -1;
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          filter: brightness(0.68);
        }
        
        h1 {
          color: white;
          text-shadow: 1px 1px 3px black;
          z-index: 1;
          font-size: 3em;
          font-weight: 400;
        }
        `}
      </style>
      <section>
        <div className="bg" style={{ backgroundImage: `url(${image1})` }} />
        <h1>Parallax</h1>
      </section>
      <section>
        <div className="bg" style={{ backgroundImage: `url(${image2})` }} />
        <h1>So smooth</h1>
      </section>
      <section>
        <div className="bg" style={{ backgroundImage: `url(${image3})` }} />
        <h1>Nice, right?</h1>
      </section>
    </>
  );
};

export default Parallax;
