import React from "react";
import { Carousel } from "antd";
import Image1 from "../assets/IMG_3364.jpg";
import Image2 from "../assets/IMG_3331.jpg";
import Image3 from "../assets/IMG_3279.jpg";
import Image4 from "../assets/IMG_3392.jpg";


const contentStyle: React.CSSProperties = {
  margin: 0,
  height: "600px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
  position: "relative", // Added for positioning of custom content
  opacity: "1",
};

const customFontStyle = {
  fontFamily: "'Bree Serif', serif", // Replace with your desired font
  fontWeight: "bolder",
};

const customImages = [Image1, Image2, Image3,Image4];

const App: React.FC = () => {
  const onChange = (currentSlide: number) => {
    console.log(currentSlide);
  };

  return (
    <Carousel afterChange={onChange}>
      {/* First Slide with Custom Title and Paragraph */}
      <div style={{ position: "relative" }}>
        <h3 style={contentStyle}>
          <div
            style={{
              position: "absolute",
              top: "50%", // Adjusted top position
              left: "50%",
              transform: "translate(-50%, -50%)",
              color: "black",
              zIndex: 2, // Set a higher z-index for text container
            }}
          >
            <h1
              style={{
                marginBottom: "25px",
                color: "white",
                fontSize: "50px",
                ...customFontStyle,
                
              }}
            >
              <strong>Welcome To ArcVue Studios.</strong>
            </h1>
            <p
              style={{
                fontSize: "17px",
                lineHeight: "20px",
                color: "white",
                ...customFontStyle,
                fontWeight: "lighter",
              }}
            >
              Welcome to ArcVue Studios! Elevate your spaces with our expert architectural and interior design services. From corporate to residential and commercial projects, we bring your visions to life.
            </p>
          </div>
          <img
            src={Image1}
            alt="Slide 1"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              filter: "blur(3px)", // Apply a blur filter to the image
              opacity:"0.9"
            }}
          />
        </h3>
      </div>

      {/* Remaining Slides */}
      {customImages.slice(1).map((imageUrl, index) => (
        <div key={index}>
          <h3 style={contentStyle}>
            <img
              src={imageUrl}
              alt={`Slide ${index + 2}`}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </h3>
        </div>
      ))}
    </Carousel>
  );
};

export default App;
