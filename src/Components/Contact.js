import React, { useEffect, useState } from 'react';
import Contactus from './Contactus';
import Footer from './Footer';

export default function Contact() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Trigger the animation when the component mounts
    setAnimate(true);
  }, []);

  const containerStyle = {
    opacity: animate ? 1 : 0, // Start with opacity 0 and become 1 if animate is true
    transform: animate ? 'translateX(0)' : 'translateX(-50px)', // Move to its designated place if animate is true
    transition: 'opacity 0.8s ease, transform 0.7s ease', // Smooth transition over 0.5 seconds
  };

  return (
    <div style={containerStyle}>
      <Contactus />
      <Footer />
    </div>
  );
}
