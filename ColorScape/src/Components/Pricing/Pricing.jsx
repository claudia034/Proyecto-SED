import React, { useEffect, useState } from "react";
import Plans from "./Plans/Plans";
import axios from "axios";

const PricingArea = () => {
  const [plans, setPlans] = useState([]);
  useEffect(() => {
    const prueba = async () => {
      const response = await axios.get("/general/plans");
      console.log(response);
      setPlans(response.data.plans);
    };
    prueba();
  }, []);
  return (
    <div
      className="pricing-area pt-110"
      data-scroll-index="3"
      id="pricing-area"
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-7">
            <div className="section-title text-center pb-30">
              <h1 className="wow fadeInUp" data-wow-delay=".2s">
                Choose <span> a plan</span>
              </h1>
              <p className="wow fadeInUp" data-wow-delay=".4s">
                Find the plan that best suits your artistic level and
                aspirations, and start your creative journey with us today!
              </p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <Plans data={plans}></Plans>
        </div>
      </div>
    </div>
  );
};

export default PricingArea;
