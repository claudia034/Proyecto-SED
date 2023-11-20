import { useEffect } from "react";
import "./Preloader.scss";

function Preloader() {
  useEffect(() => {
    const handleWindowLoad = () => {
      const preloader = document.querySelector(".preloader");
      if (preloader) {
        setTimeout(() => {
          preloader.style.transition = "opacity 0.5s";
          preloader.style.opacity = "0";
          setTimeout(() => {
            preloader.style.display = "none";
          }, 500);
        }, 500);
      }
    };

    window.addEventListener("load", handleWindowLoad);

    // ComponentWillUnmount
    return () => {
      // Clean up code if needed
      // Remove event listeners
      window.removeEventListener("load", handleWindowLoad);
    };
  }, []);

  return (
    <div className="preloader">
      <div className="loader">
        <div className="spinner">
          <div className="spinner-container">
            <div className="spinner-rotator">
              <div className="spinner-left">
                <div className="spinner-circle"></div>
              </div>
              <div className="spinner-right">
                <div className="spinner-circle"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Preloader;
