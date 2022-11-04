import React from "react";
import Container from "react-bootstrap/Container";
import { AiOutlinePhone } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";
function Call() {
  return (
    <Container id="float">
      <Container className="call" id="phone">
        <AiOutlinePhone className="icon" />
        <a href="tel:+1443-569-1511">443-569-1511</a>
      </Container>

      <Container className="call" id="email">
        <HiOutlineMail className="icon" />
        <a href="mailto:info@theroofersofmd.com">info@theroofersofmd.com</a>
      </Container>
    </Container>
  );
}

export default Call;
