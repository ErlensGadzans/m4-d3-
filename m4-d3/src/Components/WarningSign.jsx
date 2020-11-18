import React from "react";
import { Alert, Col } from "react-bootstrap";
export default class WarningSign extends React.Component {
  render() {
    return (
      <Col className="text-center" xs={12}>
        <Alert variant="danger">{this.props.text}</Alert>
      </Col>
    );
  }
}
