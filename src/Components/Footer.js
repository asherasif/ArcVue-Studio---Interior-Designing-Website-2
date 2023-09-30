import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer
      className="text-center text-white"
      style={{ backgroundColor: "#e3e3e3" }}
    >
      <div
        className="container pt-4"
        style={{ backgroundColor: "#e3e3e3", borderBottom: "1px solid black" }}
      >
        <section className="mb-2">
          <a
            className="btn btn-link btn-floating btn-lg text-dark m-1"
            rel="noreferrer"
            href="https://www.facebook.com/blocksinterior"
            role="button"
            target="_blank "
            data-mdb-ripple-color="dark"
          >
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a
            className="btn btn-link btn-floating btn-lg text-dark m-1"
            rel="noreferrer"
            href="https://twitter.com/SyedAhmerWaqar1"
            target="_blank"
            role="button"
            data-mdb-ripple-color="dark"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>

          <a
            className="btn btn-link btn-floating btn-lg text-dark m-1"
            rel="noreferrer"
            href="https://www.instagram.com/blocks_interiors/"
            target="_blank"
            role="button"
            data-mdb-ripple-color="dark"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a
            className="btn btn-link btn-floating btn-lg text-dark m-1"
            rel="noreferrer"
            href="https://www.linkedin.com/company/blocks-interior/"
            target="_blank"
            role="button"
            data-mdb-ripple-color="dark"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </section>
      </div>
      <div
        className="text-center text-dark p-3"
        style={{ backgroundColor: "#e3e3e3" }}
      >
        <div className="container text-center">
          &copy; 2023 Copyright ArcVue Studio.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
