import React from 'react';
import Aboutus from './Aboutus';
import OurClients from './OurClients';
import Footer from './Footer';
import { useInView } from "react-intersection-observer";

export default function About() {


  const [aboutRef, aboutInView] = useInView({
    triggerOnce: true,
    threshold: 0.15,
  });

  const [clientRef, clientInView] = useInView({
    triggerOnce: true,
    threshold: 0.15,
  });

  

  const aboutStyle = {
    opacity: aboutInView ? 1 : 0,
    transform: aboutInView ? "translateX(0)" : "translateX(40px)",
    transition: "opacity 0.8s ease, transform 0.5s ease",
  };

  const clientStyle = {
    opacity: clientInView ? 1 : 0,
    transform: clientInView ? "translateX(0)" : "translateX(40px)",
    transition: "opacity 0.8s ease, transform 0.5s ease",
  };


  return (
    <>
      <div ref={aboutRef} style={aboutStyle}>
      <Aboutus />
      </div>
      <div ref={clientRef} style={clientStyle}>
      <OurClients />
      </div>
      <div>
      <Footer />
      </div>
      
     </>
  );
}
