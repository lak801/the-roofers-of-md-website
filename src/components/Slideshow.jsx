import React from "react";
import Carousel from "react-bootstrap/Carousel";

function Slideshow() {
  return (
    <Carousel controls={false} indicators={false} pause={false}>
      <Carousel.Item interval={3000}>
        <img
          className="carousel-image"
          src="https://i.ibb.co/YDXw4xK/rubber-1.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          className="carousel-image"
          src="https://i.ibb.co/svrnrRk/silver-1.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          className="carousel-image"
          src="https://i.ibb.co/c8TV14M/coating-1.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          className="carousel-image"
          src="https://i.ibb.co/r2HF5RF/tpo3-1.jpg"
          alt="Fourth slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default Slideshow;
