import React from "react";

const Services = () => {
  const sectionStyles = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  };

  const cardStyles = {
    width: "100%",
    padding: "2em 1.5em",
    background: "linear-gradient(#ffffff 50%, #2c7bfe 50%)",
    backgroundSize: "100% 200%",
    backgroundPosition: "0 2.5%",
    boxShadow: "0 0 35px rgba(0, 0, 0, 0.05)",
    cursor: "pointer",
    transition: "0.7s",
    borderRadius: "25px",
    border: "1px solid grey",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const h3Styles = {
    fontSize: "20px",
    fontWeight: 600,
    color: "#1f194c",
    margin: "1em 0",
    textAlign: "center",
  };

  const sectionHeaderStyle = {
    fontSize: "70px",
    color: "black",
    textAlign: "center",
    fontWeight: 500,
    position: "relative",
    fontFamily: "'Bree Serif', Serif",
  };

  const pStyles = {
    color: "#575a7b",
    fontSize: "15px",
    lineHeight: 1.6,
    letterSpacing: "0.03em",
  };

  const iconWrapperStyles = {
    backgroundColor: "#2c7bfe",
    fontSize: "30px",
    height: "2.5em",
    width: "2.5em",
    color: "#ffffff",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "0.5s",
  };

  const sectionParagraphStyle = {
    textAlign: "center",
    margin: "auto",
    fontSize: "15px",
    paddingBottom: "15px",
    color: "black",
    width: "100%",
  };

  const handleCardHover = (event) => {
    // ... (same as before)
    const card = event.currentTarget;
    const iconWrapper = card.querySelector(".icon-wrapper");
    const h3 = card.querySelector("h3");
    const paragraphs = card.querySelectorAll("p");

    card.style.backgroundPosition = "0 100%";
    iconWrapper.style.backgroundColor = "#ffffff";
    iconWrapper.style.color = "#2c7bfe";
    h3.style.color = "#ffffff";

    paragraphs.forEach((p) => {
      p.style.color = "#f0f0f0";
    });
  };

  const handleCardLeave = (event) => {
    // ... (same as before)
    const card = event.currentTarget;
    const iconWrapper = card.querySelector(".icon-wrapper");
    const h3 = card.querySelector("h3");
    const paragraphs = card.querySelectorAll("p");

    card.style.backgroundPosition = "0 2.5%";
    iconWrapper.style.backgroundColor = "#2c7bfe";
    iconWrapper.style.color = "#ffffff";
    h3.style.color = "#1f194c";

    paragraphs.forEach((p) => {
      p.style.color = "#575a7b";
    });
  };

  return (
    <section style={sectionStyles}>
      <div className="section-header my-3" style={sectionHeaderStyle}>
        <h3 style={{ fontSize: "2.2rem" }}>Our Services.</h3>
        <p style={sectionParagraphStyle}>Enjoy our wide Array of Services.</p>
      </div>
      <div className="container mb-4">
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
            <div
              className="card"
              style={cardStyles}
              onMouseEnter={handleCardHover}
              onMouseLeave={handleCardLeave}
            >
              <div className="icon-wrapper" style={iconWrapperStyles}>
                <i className="fas fa-building fa-bounce"></i>
              </div>
              <h3 style={h3Styles}>Architectural.</h3>
              <div style={{ ...pStyles, overflow: "auto", maxHeight: "250px",minHeight:"250px" }}>
                <p className="text-center">
                <strong>• Site Analysis:</strong> Evaluating the site's
                  characteristics, such as topography, climate, and utilities.
                  <br />
                  <strong>• Conceptual Design:</strong> Creating initial design concepts and
                  ideas for a building or space. <br />
                  <strong>• Schematic Design:</strong> Developing detailed sketches and plans
                  based on the concept. <br />
                  <strong>• Design Development:</strong> Refining the schematic design into a
                  more detailed and precise plan. <br />
                  <strong>• Construction Documents:</strong> Preparing comprehensive drawings
                  and specifications for the construction phase.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
            <div
              className="card"
              style={cardStyles}
              onMouseEnter={handleCardHover}
              onMouseLeave={handleCardLeave}
            >
              <div className="icon-wrapper" style={iconWrapperStyles}>
                <i className="fas fa-marker fa-bounce"></i>
              </div>
              <h3 style={h3Styles}>Interior design.</h3>
              <div style={{ ...pStyles, overflow: "auto", maxHeight: "250px",minHeight:"250px" }}>
                <p className="text-center">
                • <strong>Space Planning:</strong> Optimizing the layout and organization of
                  interior spaces. <br />
                • <strong>Theme selection:</strong> selection of theme of interior as per site
                  requirement i.e. over all environment, Architecture, and
                  surroundings. <br />
                • <strong>Material and Finish Selection:</strong> Choosing appropriate
                  materials, colors, and finishes for walls, floors, and
                  furniture. <br />
                • <strong>Furniture and Fixture Selection:</strong> Selecting and specifying
                  furniture, lighting, and fixtures. <br />
                • <strong>Custom Millwork and Cabinetry:</strong> Designing and specifying
                  custom-built storage and cabinetry. <br />
                • <strong>Interior Styling:</strong> Adding decorative elements, artwork, and
                  accessories to enhance the aesthetic. <br />
                • <strong>Interior Design for Specific Sectors:</strong> Specializing in areas
                  like healthcare, hospitality, retail, or corporate interiors.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
            <div
              className="card"
              style={cardStyles}
              onMouseEnter={handleCardHover}
              onMouseLeave={handleCardLeave}
            >
              <div className="icon-wrapper" style={iconWrapperStyles}>
                <i className="fas fa-couch fa-bounce"></i>
              </div>
              <h3 style={h3Styles}>Renovation and Remodeling.</h3>
              <div style={{ ...pStyles, overflow: "auto", maxHeight: "250px",minHeight:"250px" }}>
                <p className="text-center">
                • <strong>Home Renovation:</strong> Updating and enhancing residential spaces.{" "}
                  <br />
                • <strong>Commercial Renovation:</strong> Revamping offices, retail spaces, or
                  other commercial environments. <br />
                • <strong>Adaptive Reuse:</strong> Converting existing buildings for new
                  purposes while preserving historical or architectural
                  significance. <br />
                • <strong>3D Visualization and Renderings:</strong> Creating realistic 3D
                  renderings and virtual tours to help clients visualize the
                  final design. Comprehensive Design Solutions: We specialize in
                  both residential and commercial design services, offering a
                  one-stop solution for all your architectural and interior
                  needs.
                  
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
            <div
              className="card"
              style={cardStyles}
              onMouseEnter={handleCardHover}
              onMouseLeave={handleCardLeave}
            >
              <div className="icon-wrapper" style={iconWrapperStyles}>
                <i className="fas fa-eye fa-bounce"></i>
              </div>
              <h3 style={h3Styles}>Consultation and Advisory Services.</h3>
              <div style={{ ...pStyles, overflow: "auto", maxHeight: "250px",minHeight:"250px" }}>
                <p
                  className="text-center"
                >
                  • <strong>Expert Guidance:</strong> Benefit from our expert consultation and advisory services for architectural and interior design, backed by years of industry experience.<br/>
                  • <strong>Customized Solutions:</strong> We tailor our advice to your specific needs, whether it's renovating a home, planning a commercial space, or executing a new construction project.<br/>
                  • <strong>Design Conceptualization:</strong> We help you conceptualize and refine design ideas, ensuring they align with your vision, budget, and functional requirements..<br/>
                  • <strong>Material and Color Selection:</strong> Get recommendations on materials, color palettes, and finishes that harmonize with your design objectives and aesthetic preferences.<br/>
                  • <strong>Space Optimization:</strong> Maximize the utility and appeal of your spaces with our insights on layout, furniture arrangement, and spatial planning..<br/>
                  • <strong>Project Management:</strong> We offer guidance on project management strategies, assisting you in overseeing and coordinating the execution of your design plans.<br/>
                  • <strong>Sustainability Focus:</strong> Explore sustainable design options and eco-friendly practices to create spaces that are not only beautiful but also environmentally responsible.<br/>
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
            <div
              className="card"
              style={cardStyles}
              onMouseEnter={handleCardHover}
              onMouseLeave={handleCardLeave}
            >
              <div className="icon-wrapper" style={iconWrapperStyles}>
                <i className="fas fa-cube fa-bounce"></i>
              </div>
              <h3 style={h3Styles}>Residential and Commercial Design.</h3>
              <div style={{ ...pStyles, overflow: "auto", maxHeight: "250px",minHeight:"250px" }}>
              <p className="text-center">
              • <strong>Landscape Architecture:</strong> Designing outdoor spaces, including
                gardens, parks, and outdoor living areas.<br />
              • <strong>Tailored to Your Vision:</strong> Our team works closely with
                  you to understand your unique vision and requirements,
                  ensuring that every design reflects your style and objectives.<br />
              • <strong>A Decade of Expertise:</strong> With over ten years of experience, we
                  bring a wealth of knowledge and creativity to every project,
                  guaranteeing exceptional results.<br />
              • <strong>Functional and Aesthetic:</strong>
                  Our designs blend functionality and aesthetics seamlessly,
                  creating spaces that are not only visually stunning but also
                  highly practical. <br />
              • <strong>Residential Excellence:</strong> From cozy homes to
                  luxurious estates, we transform living spaces into havens that
                  match your lifestyle and preferences.<br /> 
              • <strong>Commercial Brilliance:</strong> For businesses, we optimize spaces to enhance productivity,
                  branding, and customer experience, giving your venture a
                  competitive edge. <br />
              • <strong>Proven Track Record:</strong> Explore our portfolio
                  of successful residential and commercial projects, showcasing
                  our commitment to excellence in design.<br />
              </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
            <div
              className="card"
              style={cardStyles}
              onMouseEnter={handleCardHover}
              onMouseLeave={handleCardLeave}
            >
              <div className="icon-wrapper" style={iconWrapperStyles}>
                <i className="fas fa-truck-moving fa-bounce"></i>
              </div>
              <h3 style={h3Styles}>Project Management and Planning.</h3>
              <div style={{ ...pStyles, overflow: "auto", maxHeight: "250px",minHeight:"250px"}}>
                <p className="text-center">
                • <strong>Project Planning:</strong> Developing a comprehensive project plan
                  that outlines the project scope, objectives, timeline, and
                  budget. This plan serves as a roadmap for the entire project.{" "}
                  <br />
                • <strong>Scheduling:</strong> Creating a project schedule that outlines key
                  milestones, deadlines, and tasks. Monitoring progress and
                  ensuring that the project stays on schedule. <br />
                • <strong>Resource Management:</strong> Allocating and managing resources such
                  as materials, labor, and subcontractors to ensure they are
                  available when needed. Client Communication: Maintaining clear
                  and open communication with the client throughout the project.
                  Providing regular updates, addressing questions or concerns,
                  and obtaining client approvals for design choices and changes.{" "}
                  <br />
                • <strong>Design Concept Implementation:</strong> Overseeing the execution of
                  the design concept, including selecting and procuring
                  furniture, fixtures, materials, and finishes that align with
                  the design vision.
                  <br />
                • <strong>Contractor Coordination:</strong> Hiring and managing contractors,
                  tradespeople, and craftsmen involved in the project. This
                  includes coordinating their schedules and ensuring quality
                  workmanship. <br />
                • <strong>Quality Control:</strong> Conducting quality inspections to ensure
                  that the work meets design Problem Solving: Identifying and
                  resolving any issues or challenges that may arise during the
                  course of the project. This could include design revisions,
                  unexpected delays, or budget adjustments. <br />
                • <strong>Documentation:</strong> Maintaining detailed project records,
                  including contracts, invoices, change orders, and project
                  reports. This documentation helps with accountability and
                  project evaluation. <br />
                • <strong>Safety and Compliance:</strong> Ensuring that all work is carried out
                  in compliance with safety regulations and building codes.{" "}
                  <br />
                • <strong>Project Closeout:</strong> Managing the final stages of the project,
                  which may include final inspections, client walkthroughs, and
                  the completion of any outstanding tasks or punch list items.{" "}
                  <br />
                • <strong>Post-Project Evaluation:</strong> After the project is completed,
                  conducting a post-project evaluation to assess what went well
                  and identify areas for improvement in future projects.
                </p>
              </div>
            </div>
          </div>
          {/* Repeat similar code for other service cards */}
        </div>
      </div>
    </section>
  );
};

export default Services;
