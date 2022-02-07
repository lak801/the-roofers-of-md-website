import React from "react";
import Container from "react-bootstrap/Container";
import Slideshow from "./Slideshow";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
function Home() {
  return (
    <div>
      <div className="home">
        <Card className="cards" style={{ width: "18rem" }}>
          <Card.Img variant="top" src="https://i.ibb.co/YDXw4xK/rubber-1.jpg" />
          <Card.Body>
            <Card.Title>Rubber Roofs</Card.Title>
            <Card.Text>
              Highly experienced in rubber roofing and patching.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="cards" style={{ width: "18rem" }}>
          <Card.Img variant="top" src="https://i.ibb.co/svrnrRk/silver-1.jpg" />
          <Card.Body>
            <Card.Title>Silver Coating</Card.Title>
            <Card.Text>
              2 year material warranty on silver coating done by professionals.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="cards" style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://i.ibb.co/c8TV14M/coating-1.jpg"
          />
          <Card.Body>
            <Card.Title>Silicone Coating</Card.Title>
            <Card.Text>
              10 year material warranty for a long lasting, expertly applied
              product.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="cards" style={{ width: "18rem" }}>
          <Card.Img
            id="short"
            variant="top"
            src="https://i.ibb.co/r2HF5RF/tpo3-1.jpg"
          />
          <Card.Body>
            <Card.Title>TPO Roofs</Card.Title>
            <Card.Text>
              20 year material warranty on TPO: the safest, most ecofriendly,
              and
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default Home;
