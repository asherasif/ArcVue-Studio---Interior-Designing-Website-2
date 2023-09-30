import React, { useState } from "react";

import Image1 from "../assets/Journey/Journey2.jpg";
import Image2 from "../assets/Journey/Journey1.jpg";
import Image3 from "../assets/Journey/journey3.jpg";

export default function JourneyItems() {
  
  const journeyItems = [
    {
      image: Image2,
      title: "Contract Signing with DSV Global Transport & Logistics.",
      content:
        `We're delighted to announce the Interior Designing agreement signing between DSV–Global Transport & Logistics and Blocks Studio, symbolizing an impactful partnership for transformative spaces.`,
      link: "https://www.facebook.com/blocksinterior/posts/pfbid0FT4iQnxZyNSgHLiMksdrW9wfkskvtxpa1ibaQT3vZZRwFpUVSvyHars5hYbwKgS9l",
    },

    {
      image: Image1,
      title: "Contract Signing with INFRAPROPco. - USA-Atlanta.",
      content:
        "We're excited to announce the signing of an Interior Designing agreement between INFRAPROPco. and Blocks Studio, marking a significant collaboration for innovative spaces.",
      link: "https://www.facebook.com/blocksinterior/posts/pfbid0VBCxVUchdQqUsBv5XZs7a4m84prdhfwYiGsKTCA2X1u25ZSUExZib3putzGiHFxUl",
    },
    {
      image: Image3,
      title:
        "Exploring a Decade-Long Partnership with Engro Polymer & Chemicals.",
      content:
        "We are proud to announce that, an Interior Designing agreement has been signed between INFRAPROPco. and  Blocks Studio...",
      link: "https://www.facebook.com/blocksinterior/posts/pfbid0VBCxVUchdQqUsBv5XZs7a4m84prdhfwYiGsKTCA2X1u25ZSUExZib3putzGiHFxUl",
    },
  ];

 

  const itemsPerSlide = 3;
  const totalItems = journeyItems.length;
  const totalSlides = Math.ceil(totalItems / itemsPerSlide);

  const [currentSlide, setCurrentSlide] = useState(0);

  const showPrevSlide = () => {
    setCurrentSlide((currentSlide - 1 + totalSlides) % totalSlides);
  };

  const showNextSlide = () => {
    setCurrentSlide((currentSlide + 1) % totalSlides);
  };

  const startIndex = currentSlide * itemsPerSlide;
  const endIndex = startIndex + itemsPerSlide;
  const currentItems = journeyItems.slice(startIndex, endIndex);

  return (
    <>
      <div className="row">
        {currentItems.map((item, index) => (
          <div key={index} className="col-md-4 mb-4 mx-0">
            <div
              className="card h-100 d-flex flex-column"
              style={{
                borderRadius: "25px",
                border: "2px solid grey",
                overflow: "hidden",
              }}
            >
              <img className="card-img-top" src={item.image} alt={item.title} />
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p>{item.content}</p>
                <button
                  type="button"
                  className="btn btn-primary btn-sm "
                  style={{ backgroundColor: "#1a55fc" }}
                >
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    Read More
                  </a>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="d-flex justify-content-between align-items-center mt-4 ">
        <button className="btn btn-primary  mx-2" onClick={showPrevSlide}>
          <i className="fa fa-angle-double-left"></i>
        </button>
        <button className="btn btn-primary mx-2" onClick={showNextSlide}>
          <i className="fa fa-angle-double-right"></i>
        </button>
      </div>
    </>
  );
}
