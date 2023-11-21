function Plans({ data }) {
  return data.map((element) => {
    console.log(element);
    return (
      <div className="col-lg-4 col-md-7 col-sm-9">
        <div
          className="single-pricing text-center wow fadeInUp"
          data-wow-duration="3s"
          data-wow-delay="0.2s"
        >
          <div className="pricing-title">
            <h4 className="title">{element.nombre}</h4>
          </div>
          <div className="pricing-price">
            <span className="pricing">$ {element.precio}</span>
            <p className="text">Month</p>
          </div>
          <div className="pricing-list">
            <span className="pricing">{element.descripcion}</span>
          </div>
        </div>
      </div>
    );
  });
}

export default Plans;
