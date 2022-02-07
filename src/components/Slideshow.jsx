import React from "react";
import Carousel from "react-bootstrap/Carousel";

function Slideshow() {
  return (
    <Carousel>
      <Carousel.Item interval={3000}>
        <img
          className="carousel-image"
          src="https://i.ibb.co/vv8YRZJ/coating.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          className="carousel-image"
          src="https://i.ibb.co/RbZhfKQ/silver.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          className="carousel-image"
          src="https://i.ibb.co/R2ZNHpR/rubber.jpg"
          alt="Fourth slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          className="carousel-image"
          src="https://i.ibb.co/RvmmsjY/tpo3.jpg"
          alt="Fifth slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default Slideshow;
