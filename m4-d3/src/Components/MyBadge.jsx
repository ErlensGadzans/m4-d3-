import React from "react";
import { Badge, Col } from "react-bootstrap";
export default class MyBadge extends React.Component {
  render() {
    return (
      <Col className="text-center" xs={12}>
        <Badge style={{ backgroundColor: this.props.color }}>New</Badge>
      </Col>
    );
  }
}
