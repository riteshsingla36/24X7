import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <footer>
      <Container fluid  className="mt-5">
        <Row>
          <Col className="bg-dark text-light text-center py-5">
            Copyright &copy; Reserved
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
