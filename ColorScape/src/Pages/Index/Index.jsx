import React, { useEffect } from "react";

import BenefitsSection from "../../Components/Benefits/Benefits";
import Preloader from "../../Components/Preloader/Preloader";
import PricingSection from "../../Components/Pricing/Pricing";
import TestimonialSection from "../../Components/Testimonials/Testimonials";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

function Index() {
  const navigate = useNavigate();
  useEffect(() => {
    // Ejecutar el código después de que el DOM se haya cargado completamente
    document.addEventListener("DOMContentLoaded", function () {
      // Preloader en carga de ventana
      const preloader = document.querySelector(".preloader");
      if (preloader) {
        setTimeout(() => {
          preloader.style.display = "none";
        }, 500);
      }

      // Navbar pegajosa en desplazamiento
      window.addEventListener("scroll", () => {
        const scroll = window.scrollY;
        const navbar = document.querySelector(".navbar-area");
        if (navbar) {
          if (scroll < 20) {
            navbar.classList.remove("sticky");
          } else {
            navbar.classList.add("sticky");
          }
        }
      });

      return () => {
        // Eliminar cualquier escucha de eventos o código de limpieza si es necesario
      };
    });
    const preloader = document.querySelector(".preloader");
    if (preloader) {
      setTimeout(() => {
        preloader.style.display = "none";
      }, 500);
    }
  }, []);
  return (
    <>
      <Preloader></Preloader>
      <>
        <div className="header-hero" data-scroll-index="0">
          <div className="container">
            <div className="row align-items-center justify-content-center justify-content-lg-between">
              <div className="col-lg-6 col-md-10">
                <div className="header-hero-content">
                  <h1
                    className="header-title wow fadeInLeftBig"
                    data-wow-duration="3s"
                    data-wow-delay="0.2s"
                  >
                    <span>Awaken your creativity</span> and immerse yourself in
                    the exciting world of art.
                  </h1>
                  <p
                    className="text wow fadeInLeftBig"
                    data-wow-duration="3s"
                    data-wow-delay="0.4s"
                  >
                    In our painting studio, we offer you much more than just
                    brushes and canvases; We give you the opportunity to bring
                    your dreams to life and express yourself in unique ways.
                    Ready to immerse yourself in an ocean of colors and shapes?
                  </p>
                  <ul className="d-flex">
                    <li>
                      <button
                        onClick={() => {
                          navigate("/login")
                        }}
                        className="header-video venobox wow fadeInLeftBig"
                        data-autoplay="true"
                        data-vbtype="video"
                        data-wow-duration="3s"
                        data-wow-delay="1.2s"
                      >
                        <FontAwesomeIcon icon={faPlay} />
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="header-image">
                  <img
                    src="assets/img/header/logo/moviles.png"
                    alt=""
                    className="image-1 wow fadeInRightBig"
                    data-wow-duration="3s"
                    data-wow-delay="0.5s"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="header-shape-1"></div>
            <div className="header-shape-2">
              <img src="assets/img/header/header-shape-2.svg" alt="" />
            </div>
          </div>
        </div>
      </>
      <BenefitsSection></BenefitsSection>
      <TestimonialSection></TestimonialSection>
      <PricingSection></PricingSection>
    </>
  );
}
export default Index;
