import React from "react";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Slideshow from "./Slideshow";
function About() {
  return (
    <Container className="about">
      <Container className="picture">
        <Image
          id="thumbnail-img"
          src="https://i.ibb.co/sqhMjcT/dad.jpg"
        ></Image>
        <Container>
          Keith Krashnak, the owner of the company, has been in the roofing
          business for over 30 years. He has worked hard to perfect his craft
          while making sure every customer is satisfied.
        </Container>
      </Container>
      <h4 id="text-between-photo-and-carousel">Previous Projects</h4>
      <Slideshow />
    </Container>
  );
}

export default About;
