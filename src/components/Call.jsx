import React from "react";
import Container from "react-bootstrap/Container";
import { AiOutlinePhone } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";
function Call() {
  return (
    <Container id="float">
      <Container id="phone">
        <AiOutlinePhone />
        <p>443-569-1511</p>
      </Container>

      <Container id="email">
        <HiOutlineMail />
        <p id="email-text">info@theroofersofmd.com</p>
      </Container>
    </Container>
  );
}

export default Call;
