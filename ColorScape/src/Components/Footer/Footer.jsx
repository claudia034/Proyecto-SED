import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhoneAlt,
  faGlobe,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF as fabFacebookF,
  faTwitter as fabTwitter,
  faInstagram as fabInstagram,
  faLinkedinIn as fabLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope as farEnvelope,
} from "@fortawesome/free-regular-svg-icons";

const Footer = () => {
  return (
    <footer className="footer-area">
      <div className="footer-shape shape-1"></div>
      <div className="footer-shape shape-2"></div>
      <div className="footer-shape shape-3"></div>
      <div className="footer-shape shape-4"></div>
      <div className="footer-shape shape-5"></div>
      <div className="footer-shape shape-6"></div>
      <div className="footer-widget pt-30 pb-80">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="footer-about mt-50">
                <a href="/" className="logo">
                  <img src="assets/img/header/logo/logo1.png" alt="Logo" />
                </a>
                <p className="text">
                  Discover your artistic talent in our painting school. Learn,
                  create and connect with other art lovers. Your artistic
                  journey starts here
                </p>
                <ul className="social">
                  <li>
                    <a href="/">
                      <FontAwesomeIcon icon={fabFacebookF} />
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <FontAwesomeIcon icon={fabTwitter} />
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <FontAwesomeIcon icon={fabInstagram} />
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <FontAwesomeIcon icon={fabLinkedinIn} />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-5 col-md-6">
              <div className="footer-link d-flex flex-wrap">
                <div className="footer-link-wrapper mt-45">
                  <div className="footer-title">
                    <h4 className="title">Quick Links</h4>
                  </div>
                  <ul className="link">
                    <li>
                      <a href="/">Home</a>
                    </li>
                    <li>
                      <a href="/">Benefits</a>
                    </li>
                    <li>
                      <a href="/">Testimonial</a>
                    </li>
                    <li>
                      <a href="/">Pricing</a>
                    </li>
                    <li>
                      <a href="/">Inscription</a>
                    </li>
                  </ul>
                </div>
                <div className="footer-link-wrapper mt-45">
                  <div className="footer-title">
                    <h4 className="title">Support</h4>
                  </div>
                  <ul className="link">
                    <li>
                      <a href="/">FAQ</a>
                    </li>
                    <li>
                      <a href="/">Privacy Policy</a>
                    </li>
                    <li>
                      <a href="/">Terms OF Use</a>
                    </li>
                    <li>
                      <a href="/">Legal</a>
                    </li>
                    <li>
                      <a href="/">Site Map</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="footer-contact mt-45">
                <div className="footer-title">
                  <h4 className="title">Contact</h4>
                </div>
                <ul className="contact-list">
                  <li>
                    <div className="contact-info">
                      <div className="info-content media-body">
                        <p className="text">
                          <FontAwesomeIcon icon={faPhoneAlt} />
                          +503 2210-6600{" "}
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="contact-info">
                      <div className="info-content media-body">
                        <p className="text">
                          <a href="mailto:comunicaciones@uca.edu.sv">
                            <FontAwesomeIcon icon={farEnvelope} />
                            comunicaciones@uca.edu.sv{" "}
                          </a>
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="contact-info">
                      <div className="info-content media-body">
                        <p className="text">
                          <a
                            href="https://www.uca.edu.sv"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <FontAwesomeIcon icon={faGlobe} />
                            www.uca.edu.sv{" "}
                          </a>
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="contact-info">
                      <div className="info-content media-body">
                        <p className="text">
                          <FontAwesomeIcon icon={faMapMarkerAlt} />
                          Bulevar Los Próceres, Antiguo Cuscatlán, La Libertad{" "}
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
