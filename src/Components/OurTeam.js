import React from 'react';
import picture from '../assets/Profile Pictures/pp1.jpeg'
import picture2 from '../assets/Profile Pictures/pp2.jpeg'
import picture3 from '../assets/Profile Pictures/pp3.jpg'
import picture4 from '../assets/Profile Pictures/pp4.jpeg'
import pdf1 from '../assets/Profile Pictures/pdfProfile.pdf'
import pdf2 from '../assets/Profile Pictures/pdf2n.pdf'

const OurTeam = () => {
    return (
        <div>
            <style>
                {`
                body {
                    background: "white";
                }
                
                .name {
                    color: blue;
                }
                
                .work {
                    font-weight: bold;
                    font-size: 15px;
                }
                
                .about span {
                    font-size: 13px;
                }
                
                .v-profile {
                    color: blue;
                    cursor: pointer;
                }
                
                .box {
                    -webkit-box-shadow: 13px 12px 5px -10px rgba(196,194,196,0.72);
                    -moz-box-shadow: 13px 12px 5px -10px rgba(196,194,196,0.72);
                    box-shadow: 13px 12px 5px -10px rgba(196,194,196,0.72);
                }
                
                .col-md-3 {
                    margin-top: 10px;
                }
                .btn{
                    margin-right: 10px;
                    margin-left: 10px;
                }
                `}
            </style>
            <div className="container text-center mt-5 mb-2" style={{fontFamily:"'Bree Serif', serif"}} >
                <h1 className="mb-2">Our Team.</h1>
                
                <span>The People Behind Our Success.</span>
            </div>
            <div className="container mt-3 mb-5" >
                <div className="row justify-content-center">
                    <div className="col-md-6 col-sm-6 mb-3" style={{borderRadius:"15px"}}>
                        <div className="bg-white p-3 text-center rounded box" style={{border:"2px solid grey"}}>
                            <img className="img-responsive rounded-circle" src={picture} width="90" alt="Syed Ahmer Waqar" />
                            <h5 className="mt-3 name">Syed Ahmer Waqar</h5>
                            <span className="work d-block">Chief Executive Officer</span>
                            <span className="work d-block">ArcVue Studios</span>
                            <div className="mt-4 about">
                                <span>As our visionary CEO, Syed Ahmer Waqar leads our company with unwavering dedication, shaping its future, and driving us towards excellence.</span>
                            </div>
                            <div className="mt-3">
                                <button  className="v-profile btn btn-primary btn-sm mb-2" style={{borderRadius:"15px",backgroundColor:"#1a55fc"}}><a target='_blank' rel="noreferrer" href='https://www.linkedin.com/search/results/all/?fetchDeterministicClustersOnly=true&heroEntityKey=urn%3Ali%3Afsd_profile%3AACoAAAQfQiABE85h3WAoqOkirxLCjxdmuRp13pI&keywords=syed%20ahmer%20waqar&origin=RICH_QUERY_SUGGESTION&position=1&searchId=1ec8e770-f285-4c98-afb6-d594164928cd&sid=b%3Bw' style={{textDecoration:"none",color:"white",fontSize:"14px"}}>View Profile</a></button>
                                <button  className="v-profile btn btn-primary btn-sm mb-2" style={{borderRadius:"15px",backgroundColor:"#1a55fc"}}><a target='_blank' rel="noreferrer" href={pdf1} download= "pdfProfile.pdf" style={{textDecoration:"none",color:"white",fontSize:"14px"}}>Download Profile      <i className="fa fa-download" aria-hidden="true"></i></a></button>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 col-sm-6 mb-3">
                        <div className="bg-white p-3 text-center rounded box" style={{border:"2px solid grey"}}>
                            <img className="img-responsive rounded-circle" src={picture3} width="90" alt="Nabeel Ahmed Mughal" />
                            <h5 className="mt-3 name">Nabeel Ahmed Mughal</h5>
                            <span className="work d-block">Principle Architect </span>
                            <span className="work d-block">ArcVue Studios</span>
                            <div className="mt-4 about">
                                <span>As our Principal Architect, Nabeel Ahmed Mughal blends creativity and innovation, crafting awe-inspiring interiors that redefine spaces.</span>
                            </div>
                            <div className="mt-3">
                                <button className="v-profile btn btn-primary btn-sm mb-2" style={{borderRadius:"15px",backgroundColor:"#1a55fc"}}><a target='_blank' rel="noreferrer" href='https://www.linkedin.com/search/results/all/?fetchDeterministicClustersOnly=true&heroEntityKey=urn%3Ali%3Afsd_profile%3AACoAAAQfQiABE85h3WAoqOkirxLCjxdmuRp13pI&keywords=syed%20ahmer%20waqar&origin=RICH_QUERY_SUGGESTION&position=1&searchId=1ec8e770-f285-4c98-afb6-d594164928cd&sid=b%3Bw' style={{textDecoration:"none",color:"white",fontSize:"14px"}}>View Profile</a></button>
                                <button  className="v-profile btn btn-primary btn-sm mb-2" style={{borderRadius:"15px",backgroundColor:"#1a55fc"}}><a target='_blank' rel="noreferrer" href={pdf2} download= "pdf2n.pdf" style={{textDecoration:"none",color:"white",fontSize:"14px"}}>Download Profile      <i className="fa fa-download" aria-hidden="true"></i></a></button>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 col-sm-6 mb-3">
                        <div className="bg-white p-3 text-center rounded box" style={{border:"2px solid grey"}}>
                            <img className="img-responsive rounded-circle" src={picture2} width="90" alt="Kashif Ilyas" />
                            <h5 className="mt-3 name">Kashif Ilyas</h5>
                            <span className="work d-block">Director USA Studio</span>
                            <span className="work d-block">ArcVue Studios</span>
                            <div className="mt-4 about">
                                <span>As the visionary Director of our firm, Kashif Ilyas leads with passion, orchestrating unique designs that transcend expectations and elevate aesthetics.</span>
                            </div>
        
                        </div>
                    </div>
                    

                    <div className="col-md-6 col-sm-6 mb-3">
                        <div className="bg-white p-3 text-center rounded box" style={{border:"2px solid grey"}}>
                            <img className="img-responsive rounded-circle" src={picture4} width="87" height= "90" alt="Farhan Mohiuddin" />
                            <h5 className="mt-3 name">Farhan Mohiuddin</h5>
                            <span className="work d-block">Business Manager</span>
                            <span className="work d-block">ArcVue Studios</span>
                            <div className="mt-4 about">
                                <span>As the Business Manager, Farhan Mohiuddin skillfully oversees operations, ensuring seamless project execution and client satisfaction within our company.</span>
                            </div>
                        </div>
                    </div>
                    
                    {/* Repeat the above structure for other team members */}
                </div>
            </div>
            <hr />
        </div>
    );
}

export default OurTeam;
