import React from 'react';

const PricingArea = () => {
  return (
    <div className="pricing-area pt-110" data-scroll-index="3" id='pricing-area'>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-7">
            <div className="section-title text-center pb-30">
              <h1 className="wow fadeInUp" data-wow-delay=".2s">Choose <span> a plan</span></h1>
              <p className="wow fadeInUp" data-wow-delay=".4s">Find the plan that best suits your artistic level and aspirations, 
                and start your creative journey with us today!</p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-7 col-sm-9">
            <div className="single-pricing text-center wow fadeInUp" data-wow-duration="3s" data-wow-delay="0.2s">
              <div className="pricing-title">
                <h4 className="title">Basic</h4>
              </div>
              <div className="pricing-price">
                <span className="pricing">$ 50</span>
                <p className="text">Month</p>
              </div>
              <div className="pricing-list">
                <ul className="list">
                  <li>Perfect for beginners</li>
                  <li>4 classes a month</li>
                  <li>Basic supplies included</li>
                  <li>Learning fundamental techniques</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-7 col-sm-9">
            <div className="single-pricing text-center wow fadeInUp" data-wow-duration="3s" data-wow-delay="0.4s">
              <div className="pricing-title">
                <h4 className="title">Standard</h4>
              </div>
              <div className="pricing-price">
                <span className="pricing">$ 100</span>
                <p className="text">Month</p>
              </div>
              <div className="pricing-list">
                <ul className="list">
                  <li>Ideal for aspiring artists</li>
                  <li>8 classes a month</li>
                  <li>Quality materials</li>
                  <li>Personalized instruction</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-7 col-sm-9">
            <div className="single-pricing text-center wow fadeInUp" data-wow-duration="3s" data-wow-delay="0.6s">
              <div className="pricing-title">
                <h4 className="title">Professional</h4>
              </div>
              <div className="pricing-price">
                <span className="pricing">$ 150</span>
                <p className="text">Month</p>
              </div>
              <div className="pricing-list">
                <ul className="list">
                  <li>For dedicated artists</li>
                  <li>Unlimited classes</li>
                  <li>Premium Supplies</li>
                  <li>Mentoring and advanced workshops</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingArea;
