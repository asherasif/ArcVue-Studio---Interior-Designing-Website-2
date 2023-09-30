import React from 'react';
import Image1 from "../assets/IMG_3254.jpg"

const Contactus = () => {
  const containerStyle = {
    overflow: "hidden",
    
    margin: "20px", // Add margin from all sides
    borderRadius: "15px", // Add border radius

  };

  const imageStyle = {
    height: "600px",
    objectFit: "cover",
    width: "100%",
  };

  return (
    <div style={containerStyle}>
      <img
        src={Image1}
        alt=""
        className="img-fluid w-100"
        style={imageStyle}
      />
     
    <div className="container py-5">
      <div className="row justify-content-center align-items-center">
        <div className="col-lg-8 ">
        <div className="fw-bold fs-4 text-primary mb-3 text-center">Pakistan Studio.</div>
          <div className="bg-white p-4 rounded shadow my-3 mb-4">
            <div className="row ">
              <div className="col-lg-4 mb-4">
                <div className="text-center">
                  <i className="fas fa-map-marker-alt text-primary fs-4 mb-3"></i>
                  <div className="fw-bold fs-5">Address</div>
                  <div className="text-muted fs-6">1-1/2P Block-06 PECHS</div>
                  <div className="text-muted fs-6">Karachi, Pakistan</div>
                </div>
              </div>
              <div className="col-lg-4 mb-4">
                <div className="text-center">
                  <i className="fas fa-phone-alt text-primary fs-4 mb-3"></i>
                  <div className="fw-bold fs-5">Phone</div>
                  <div className="text-muted fs-6">+92-213-434-90005</div>
                  <div className="text-muted fs-6">+92-332-3747-517</div>
                </div>
              </div>
              <div className="col-lg-4 mb-4">
                <div className="text-center">
                  <i className="fas fa-envelope text-primary fs-4 mb-3"></i>
                  <div className="fw-bold fs-5">Email</div>
                  <div className="text-muted fs-6">info@archvuestudio.com</div>
                 
                </div>
              </div>
            </div>
          </div>
          <div className="fw-bold fs-4 text-primary mb-3 text-center">USA Studio.</div>
          <div className="bg-white p-4 rounded shadow">
          
            <div className="row ">
              <div className="col-lg-4 mb-4">
                <div className="text-center">
                  <i className="fas fa-map-marker-alt text-primary fs-4 mb-3"></i>
                  <div className="fw-bold fs-5">Address</div>
                  <div className="text-muted fs-6">512 E St Charles Rd Carol Stream</div>
                  <div className="text-muted fs-6">IL 60188</div>
                </div>
              </div>
              <div className="col-lg-4 mb-4">
                <div className="text-center">
                  <i className="fas fa-phone-alt text-primary fs-4 mb-3"></i>
                  <div className="fw-bold fs-5">Phone</div>
                  <div className="text-muted fs-6">+1-773-543-8481</div>
                </div>
              </div>
              <div className="col-lg-4 mb-4">
                <div className="text-center">
                  <i className="fas fa-envelope text-primary fs-4 mb-3"></i>
                  <div className="fw-bold fs-5">Email</div>
                  <div className="text-muted fs-6">info@archvuestudio.com</div>
                 
                </div>
              </div>
            </div>
          </div>
        </div>
        
        
        <div className="col-lg-4 mt-4 mt-lg-0">
          <div className="bg-white p-4 rounded shadow">
            <div className="fw-bold fs-4 text-primary mb-4">Send us a message</div>
            <p>
              If you have any work for me or any types of queries related to my tutorial, you can send me a message from here. It's my pleasure to help you.
            </p>
            <form action="#">
              <div className="mb-3">
                <input type="text" placeholder="Enter your name" className="form-control" />
              </div>
              <div className="mb-3">
                <input type="text" placeholder="Enter your email" className="form-control" />
              </div>
              <div className="mb-2">
                <textarea placeholder="Your message" className="form-control" rows="4"></textarea>
              </div>
              <div className="mb-3">
                <input
                  type="button"
                  value="Send Now"
                  className="btn btn-primary btn-lg"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
      
    </div>
    </div>
    
  );
};

export default Contactus;

