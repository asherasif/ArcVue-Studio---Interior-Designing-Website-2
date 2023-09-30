import React from 'react';
import Image1 from '../assets/3m.jpg'
import Image2 from '../assets/AMPAK-LOGO.jpg'
import Image3 from '../assets/Abbott Logo.jpg'
import Image4 from '../assets/Bisconni_Logo-01.png'
import Image5 from '../assets/DVS.png'
import Image6 from '../assets/Engro_Corporation.png'
import Image7 from '../assets/Infra Corp.png'
import Image8 from '../assets/PTCL.jpg'
import Image9 from '../assets/Philips.png'
import Image10 from '../assets/Rotary international.png'
import Image11 from '../assets/candylandlogo-1.png'
import Image12 from '../assets/gls_logo.png'
import Image13 from '../assets/logo_xxl.jpg'
import Image14 from '../assets/unnamed.png'
import Image15 from '../assets/ufone-1200px-logo.jpg'
import Image16 from '../assets/samsung.png'
import Image17 from '../assets/DMK logistics.png'
import Image18 from '../assets/National-Bank-of-Pakistan-Logo-Vector-1024x1024.jpg'
import Image19 from '../assets/download.png'
import Image20 from '../assets/SnackCity Logo.png'







const OurClients = () => {
    const sectionHeaderStyle = {
        fontSize: '70px',
        color: 'black',
        textAlign: 'center',
        fontWeight: 500,
        position: 'relative',
        
    };

   

    const sectionParagraphStyle = {
        textAlign: 'center',
        margin: 'auto',
        fontSize: '15px',
        paddingBottom: '50px',
        color: 'black',
        width: '50%',
    };

    const clientsSectionStyle = {
        padding: '40px 0',
        backgroundColor:"white"
    };

    const clientsWrapStyle = {
        borderTop: '1px solid #d6eaff',
        borderLeft: '1px solid #d6eaff',
        marginBottom: '30px',
    };

    const clientLogoStyle = {
        padding: '64px',
        marginBottom: "5px",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRight: '1px solid #d6eaff',
        borderBottom: '1px solid #d6eaff',
        overflow: 'hidden',
        background: '#fff',
        height: '160px',
        border:"1px solid grey"
    };

    const imgStyle = {
        transition: 'all 0.4s ease-in-out',
    };

    return (
        <section id="clients" className="section-bg" style={clientsSectionStyle}>
            <div className="container" style={{fontFamily:"'Bree Serif', serif"}}>
                <div className="section-header" style={sectionHeaderStyle}>
                    <h3 style={{fontSize:"2.5rem"}}>Our Clients.</h3>
                    <p style={sectionParagraphStyle}>Meet our happy clients.</p>
                </div>

                <div className="row no-gutters clients-wrap clearfix wow fadeInUp" style={clientsWrapStyle}>
                    <div className="col-lg-3 col-md-4 col-xs-6">
                        <div className="client-logo" style={clientLogoStyle}>
                            <img src={Image1} className="img-fluid" alt="" style={imgStyle} />
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-xs-6">
                        <div className="client-logo" style={clientLogoStyle}>
                            <img src={Image2}className="img-fluid" alt="" style={imgStyle} />
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-xs-6">
                        <div className="client-logo" style={clientLogoStyle}>
                            <img src={Image3} className="img-fluid" alt="" style={imgStyle} />
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-xs-6">
                        <div className="client-logo" style={clientLogoStyle}>
                            <img src={Image4} className="img-fluid" alt="" style={imgStyle} />
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-xs-6">
                        <div className="client-logo" style={clientLogoStyle}>
                            <img src={Image5} className="img-fluid" alt="" style={imgStyle} />
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-xs-6">
                        <div className="client-logo" style={clientLogoStyle}>
                            <img src={Image6}className="img-fluid" alt="" style={imgStyle} />
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-xs-6">
                        <div className="client-logo" style={clientLogoStyle}>
                            <img src={Image7}className="img-fluid" alt="" style={imgStyle} />
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-xs-6">
                        <div className="client-logo" style={clientLogoStyle}>
                            <img src={Image8} alt="" />
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-xs-6">
                        <div className="client-logo" style={clientLogoStyle}>
                            <img src={Image9} alt="" />
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-xs-6">
                        <div className="client-logo" style={clientLogoStyle}>
                            <img src={Image10} alt="" />
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-xs-6">
                        <div className="client-logo" style={clientLogoStyle}>
                            <img src={Image11} alt="" />
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-xs-6">
                        <div className="client-logo" style={clientLogoStyle}>
                            <img src={Image12} alt="" />
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-xs-6">
                        <div className="client-logo" style={clientLogoStyle}>
                            <img src={Image13} alt="" />
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-xs-6">
                        <div className="client-logo" style={clientLogoStyle}>
                            <img src={Image14} alt="" />
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-xs-6">
                        <div className="client-logo" style={clientLogoStyle}>
                            <img src={Image15} alt="" />
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-xs-6">
                        <div className="client-logo" style={clientLogoStyle}>
                            <img src={Image16} alt="" />
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-xs-6">
                        <div className="client-logo" style={clientLogoStyle}>
                            <img src={Image17} alt="" />
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-xs-6">
                        <div className="client-logo" style={clientLogoStyle}>
                            <img src={Image18} alt="" />
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-xs-6">
                        <div className="client-logo" style={clientLogoStyle}>
                            <img src={Image19} alt="" />
                        </div>
                    </div>
                    {/* Repeat the other client logo items similarly */}
                    <div className="col-lg-3 col-md-4 col-xs-6">
                        <div className="client-logo" style={clientLogoStyle}>
                            <img src={Image20} alt="" />
                        </div>
                    </div>
                    {/* Repeat the other client logo items similarly */}
                </div>
            </div>
        </section>
    );
}

export default OurClients;
