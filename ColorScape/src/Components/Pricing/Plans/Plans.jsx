function Plans({ data }) {
  return data.map((index, element) => {
    console.log(index, element);
    return (
      <div className="col-lg-4 col-md-7 col-sm-9">
        <div
          className="single-pricing text-center wow fadeInUp"
          data-wow-duration="3s"
          data-wow-delay="0.2s"
        >
          <div className="pricing-title">
            <h4 className="title">{element.tipo}</h4>
          </div>
          <div className="pricing-price">
            <span className="pricing">$ {element.price}</span>
            <p className="text">Month</p>
          </div>
          <div className="pricing-list">
            <ul className="list">
              {element.info.map((i, e) => {
                return <li>{e}</li>;
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  });
}

export default Plans;
