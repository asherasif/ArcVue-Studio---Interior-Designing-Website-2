import React, { Suspense } from "react";
import Spinner from "./Spinner";
import { useInView } from "react-intersection-observer";

// Wrap your components with React.lazy
const Journey = React.lazy(() => import("./Journey"));
const OurTeam = React.lazy(() => import("./OurTeam"));
const Footer = React.lazy(() => import("./Footer"));
const CarouselAndt = React.lazy(() => import("./CarouselAndt.tsx"));
const Services = React.lazy(() => import("./Services"));



export default function Home() {
  
const LoadingFallback = () => (
  <div>
    <Spinner/>
  </div>
);

  const [journeyRef, journeyInView] = useInView({
    triggerOnce: true,
    threshold: 0.15,
  });

  const [teamRef, teamInView] = useInView({
    triggerOnce: true,
    threshold: 0.15,
  });

  const [servicesRef, servicesInView] = useInView({
    triggerOnce: true,
    threshold: 0.15,
  });

  

  const containerStyle = {
    opacity: journeyInView ? 1 : 0,
    transform: journeyInView ? "translateX(0)" : "translateX(40px)",
    transition: "opacity 0.7s ease, transform 0.5s ease",
  };

  const teamStyle = {
    opacity: teamInView ? 1 : 0,
    transform: teamInView ? "translateX(0)" : "translateX(40px)",
    transition: "opacity 0.7s ease, transform 0.5s ease",
  };

  const servicesStyle = {
    opacity: servicesInView ? 1 : 0,
    transform: servicesInView ? "translateX(0)" : "translateX(40px)",
    transition: "opacity 0.7s ease, transform 0.5s ease",
  };

  

  return (
    <>
       
      <Suspense fallback={LoadingFallback}>
      <CarouselAndt />
        <div ref={journeyRef} style={containerStyle}>
          <Journey />
        </div>

        <div ref={teamRef} style={teamStyle}>
          <OurTeam />
        </div>

        <div ref={servicesRef} style={servicesStyle}>
          <Services />
        </div>
        <div>
        <Footer />
        </div>
        
      </Suspense>
    </>
  );
}
