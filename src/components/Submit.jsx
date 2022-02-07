import React from "react";
import Form from "react-bootstrap/Form";

class Submit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      feedback: ""
    };
  }
  handleInputChange(event) {
    event.preventDefault();
    const target = event.target;
    const name = target.name;
    const value = target.value;
    this.setState({ [name]: value });
  }
  render() {
    return <h1>hi</h1>;
  }
}
export default Submit;
