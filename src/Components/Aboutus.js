import React from "react";
import Image1 from "../assets/IMG_3380.jpg";
import Image2 from "../assets/img1.jpg"
import Image3 from "../assets/IMG_3279.jpg"

function Aboutus() {
  const containerStyle = {
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
    margin: "20px", // Add margin from all sides
    borderRadius: "15px", // Add border radius
  };

  const imageStyle = {
    height: "600px",
    objectFit: "cover",
    width: "100%",
  };
  

  return (
    <>
      <div style={containerStyle}>
        <img
          src={Image1}
          alt=""
          className="img-fluid w-100"
          style={imageStyle}
        />
      </div>
      <div style={{ backgroundColor: "white" }}>
        <div
          className="container text-center mt-5"
          style={{ fontFamily: "'Bree Serif', serif" }}
        >
          <h1
            className="position-relative"
            style={{ marginBottom: "25px", position: "relative" }}
          >
            About Us.
            <span
              style={{
                content: "''",
                position: "relative",
                width: "25%",
                height: "4px",
                display: "block",
                margin: "0 auto",
                backgroundColor: "#5ba19b", // Neon Green Color
                bottom: "-10px", // Adjust this value to control the distance between heading and underline
              }}
            ></span>
          </h1>
          <p>
          Empowering Spaces Through Innovative Design.
          </p>
        </div>
        <div className="container my-5">
          <div className="row">
            <div className="col-md-6 mb-4">
              <img
                src={Image2}
                alt=""
                className="img-fluid rounded"
              />
            </div>
            <div
              className="col-md-6"
              style={{ fontFamily: "'Bree Serif', serif" }}
            >
              <h2 className="mb-3">The Best Interior Designers in Town.</h2>
              <span
                style={{
                  content: "''",
                  position: "relative",
                  width: "80%",
                  height: "4px",
                  display: "block",
                  margin: "0px",
                  backgroundColor: "#5ba19b", // Neon Green Color
                  bottom: "10px", // Adjust this value to control the distance between heading and underline
                }}
              ></span>

              <p>
                Welcome to Blocks Studio – Your Architectural and Interior
                Designing Partner!' Founded in 2007 in Karachi, Pakistan, Blocks
                Studio is a result of Syed Ahmer Waqar's visionary passion for
                design. Our journey reflects a deep commitment to excellence,
                evolving into a dynamic force in architecture and interior
                design. With an initial focus on the corporate sector, we
                collaborated with renowned Pakistani companies, gaining insight
                into the vital connection between design and business. At Blocks
                Studio, design isn't just about spaces; it's about crafting
                experiences. Our innovative solutions are tailored to your
                workspace, reflecting a thorough understanding of your unique
                needs. Join us in shaping spaces where innovation meets design,
                and stories come to life. We believe in the power of
                collaboration, and our designs reflect that belief. We create
                spaces that are not only visually stunning but also robust and
                flexible, capable of accommodating your business's ever-evolving
                needs.
              </p>
              
            </div>
          </div>
        </div>
        <div
          className="container my-5"
          style={{ fontFamily: "'Bree Serif', serif" }}
        >
          <div className="row" style={{ marginTop: "7rem" }}>
            <div className="col-md-6 order-md-2 mb-4">
              <img
                src={Image3}
                className="img-fluid rounded"
                alt="img"
              />
            </div>
            <div
              className="col-md-6 order-md-1"
              style={{ fontFamily: "'Bree Serif', serif" }}
            >
              <h2 className="mb-3">Turning Your Vision into Timely Reality.</h2>
              <span
                style={{
                  content: "''",
                  position: "relative",
                  width: "90%",
                  height: "4px",
                  display: "block",
                  margin: "0px",
                  backgroundColor: "#5ba19b", // Neon Green Color
                  bottom: "10px", // Adjust this value to control the distance between heading and underline
                }}
              ></span>

              <p>
                Our dedicated team is your constant companion throughout the
                entire project timeline. We walk beside you, ensuring that every
                facet of your vision is meticulously translated into reality –
                seamlessly, and within the confines of time and budget. At
                Blocks Studio, we don't just design spaces; we curate
                experiences. We recognize the value of investing time to truly
                understand you and your unique business requirements. This
                understanding becomes the bedrock upon which we craft innovative
                design and build solutions tailored to your workspace. Our
                dedicated team is your constant companion throughout the entire
                project timeline. We walk beside you, ensuring that every facet
                of your vision is meticulously translated into reality –
                seamlessly, and within the confines of time and budget. Our
                commitment reaches beyond individual projects; it's about
                fostering enduring partnerships.{" "}
              </p>
              
            </div>
          </div>
        </div>
        <hr />
      </div>
    </>
  );
}

export default Aboutus;
