import React from "react";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Slideshow from "./Slideshow";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
function About() {
  return (
    <Container className="about">
      <Row className="keith-row">
        <Col>
          <Image
            id="thumbnail-img"
            src="https://i.ibb.co/sqhMjcT/dad.jpg"
          ></Image>
        </Col>
        <Col md={8} sm={6} xs={5}>
          Keith Krashnak, the owner of the company, has been in the roofing
          business for over 30 years. He has worked hard to perfect his craft
          while making sure every customer is satisfied.
        </Col>
      </Row>
      <h4 id="text-between-photo-and-carousel">Previous Projects</h4>
      <Slideshow />
    </Container>
  );
}

export default About;
