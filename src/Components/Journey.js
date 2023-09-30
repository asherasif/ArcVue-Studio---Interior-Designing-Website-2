import React from "react";
import JourneyItems from "./JourneyItems";




export default function Journey() {
  const sectionParagraphStyle = {
    textAlign: 'center',
    margin: 'auto',
    fontSize: '15px',
    paddingBottom: '20px',
    color: 'black',
    width: '50%',
  };
  return (
    <>
    <div  style={{fontFamily:"'Bree Serif', serif"}}>
      <h2 className="text-center my-4 mb-2">Our Journey.</h2>
      <p style={sectionParagraphStyle}>A Sneak Peek Into Our Amazing Story.</p>    
    <div className="container text-center  d-flex " >
      <div className="container text-center " >
        
        <div className="row  justify-content-center" >
            <JourneyItems />
        </div>
      </div>
      </div>  
      <hr />
      </div>  
    </>
  );
}
