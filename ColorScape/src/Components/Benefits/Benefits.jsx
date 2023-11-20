import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHandPointer,
  faHandHoldingUsd,
  faStethoscope,
} from "@fortawesome/free-solid-svg-icons";

const BenefitsSection = () => {
  return (
    <section className="feature-section pt-80" data-scroll-index="1" id="feature-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-7">
            <div className="section-title text-center mb-30">
              <h1 className="mb-25 wow fadeInUp" data-wow-delay=".2s">
                Impressive <span> benefits </span>
              </h1>
              <p className="wow fadeInUp" data-wow-delay=".4s">
                Discover a unique experience that goes beyond the canvas and
                brushes!
              </p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-4">
            <div
              className="single-feature wow fadeInUp"
              data-wow-duration="3s"
              data-wow-delay="0.2s"
            >
              <div className="icon color-1">
                <FontAwesomeIcon icon={faHandPointer} />
              </div>
              <div className="content">
                <h3>Social connection</h3>
                <p>
                  Join our community of art enthusiasts. Meet people who share
                  your interests and share unforgettable moments in a friendly
                  and collaborative environment.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div
              className="single-feature wow fadeInUp"
              data-wow-duration="3s"
              data-wow-delay="0.4s"
            >
              <div className="icon color-2">
                <FontAwesomeIcon icon={faHandHoldingUsd} />
              </div>
              <div className="content">
                <h3>Learn without financial worries</h3>
                <p>
                  Our affordable rates allow you to explore your artistic
                  passion without financial burdens. We believe that everyone
                  deserves the opportunity to experience art.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div
              className="single-feature wow fadeInUp"
              data-wow-duration="3s"
              data-wow-delay="0.6s"
            >
              <div className="icon color-3">
                <FontAwesomeIcon icon={faStethoscope} />
              </div>
              <div className="content">
                <h3>Reduces stress</h3>
                <p>
                  Forget about daily worries as you immerse yourself in a world
                  of colors and shapes. Painting is a relaxing therapy that will
                  allow you to disconnect and find peace in each stroke.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
