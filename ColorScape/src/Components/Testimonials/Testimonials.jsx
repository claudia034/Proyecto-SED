import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import "bootstrap/dist/css/bootstrap.min.css";
import "../../assets/css/animate.css";
import "../../assets/css/tiny-slider.css";
import "../../assets/css/all.css";
import "../../assets/css/venobox.css";
import "../../assets/css/default.css";
import "../../assets/css/style.scss";

const TestimonialSection = () => {
  return (
    <section className="testimonial-section" data-scroll-index="2" id="testimonial-section">
      <div className="container">
        <div className="row justify-content-center testimonial-active-wrapper">
          <div className="col-xl-6 col-lg-7">
            <div className="section-title text-center mb-60">
              <h1 className="mb-25 text-white wow fadeInUp" data-wow-delay=".2s">
                What Our Client Says
              </h1>
              <p className="text-white wow fadeInUp" data-wow-delay=".4s">
                The true magic of our work lies in the satisfaction of our
                clients. But don't just take our word for it, listen to what our
                amazing customers have to say!
              </p>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-8">
              <div className="testimonial-active">
                <div className="testimonial-wrapper">
                  <div className="single-testimonial">
                    <div className="info">
                      <div className="image-2">
                        <img src="assets/img/testemonial/test1.jpg" alt="" />
                      </div>
                      <h4>Nestor Aldana</h4>
                      <p>Computer Engineer</p>
                      <div className="quote">
                        <FontAwesomeIcon icon={faQuoteRight} />
                      </div>
                      <div className="content">
                        <p>
                          I never thought I could create such beautiful works of
                          art until I joined Color Scape. Their inspiration and
                          professionalism have transformed my artistic vision.
                          Thank you for giving me the confidence to explore my
                          creativity!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="testimonial-wrapper">
                  <div className="single-testimonial">
                    <div className="info">
                      <div className="image-2">
                        <img src="assets/img/testemonial/test2l2.jpeg" alt="" />
                      </div>
                      <h4>Claudia Grande</h4>
                      <p>Aeronautical Engineer</p>
                      <div className="quote">
                        <FontAwesomeIcon icon={faQuoteRight} />
                      </div>
                      <div className="content">
                        <p>
                          Color Scape is not just a place to learn, but a unique
                          creative space that makes you feel at home. The
                          instructors are passionate and caring, and I have
                          developed skills I never imagined I would have.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
