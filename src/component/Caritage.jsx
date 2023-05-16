import { Container, Row, Col, Badge } from "react-bootstrap";
import goodproduct from "../assets/images/goodproduct.png";
import "./cartridges.css";
const Caritage = () => {
  return (
    <Container>
      <Row className="" style={{ display: "flex", width: "100%" }}>
        <Row lg={8} md={8} style={{ width: "65%" }} className="cartridges1">
          <Col className="caritage-col">
            <Badge variant="primary" className="badges">
              {" "}
              Cartridges
            </Badge>
          </Col>
        </Row>
        <Row lg={4} md={4} style={{ width: "35%" }}>
          <Col className="prerolls">
            <Badge variant="primary" className="badges">
              {" "}
              Pre-rolls
            </Badge>
          </Col>
          <Col className="edibles">
            <Badge variant="primary" className="badges">
              Edibles
            </Badge>
          </Col>
        </Row>
      </Row>
    </Container>
  );
};

export default Caritage;
