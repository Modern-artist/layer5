import React from "react";
import { FeaturesWrapper } from "./product_slider_style";
import Slider from "react-slick";

const Product_slider = ({ features }) => {
  return (
    <FeaturesWrapper>
      <div className="features-carousel">
        <Slider
          autoplay={true}
          autoplaySpeed={3500}
          arrows={false}
          dots={true}
          infinite={true}
          speed={500}
          slidesToShow={1}
          slidesToScroll={1}
        >
          {features.map((feature) => (
            <div key={features.title}>
              <div className="feature">
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </FeaturesWrapper>
  );
};

export default Product_slider;
