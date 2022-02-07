import React from "react";
import Container from "react-bootstrap/Container";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
function Call() {
  return (
    <Container id="float">
      {/* <Container id="phone">
        <AiOutlinePhone /> 443-739-7882{" "}
      </Container> */}

      <Container id="email">
        <AiOutlineMail />
        <p>info@theroofersofmd.com</p>
      </Container>
    </Container>
  );
}

export default Call;
