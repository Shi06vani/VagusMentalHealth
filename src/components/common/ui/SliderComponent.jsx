// components/common/ui/TestimonialCarousel.jsx
import React from "react";
import Slider from "react-slick";
import TestimonialCard from "./TestimonialCard";

const SliderComponent = ({ testimonials = [], settings = {} }) => {
  const defaultSettings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1440,
        settings: { slidesToShow: 3, slidesToScroll: 1 },
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3, slidesToScroll: 1 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2, slidesToScroll: 1 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  };

  return (
    <div className="my-9">
      <Slider {...{ ...defaultSettings, ...settings }}>
        {testimonials?.map((item, index) => (
          <div key={index} className="px-4 lg:px-3 xl:px-4 py-4">
            <TestimonialCard {...item} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderComponent;
