import { Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <Container fluid className="vh-100 d-flex align-items-center bg-light">
      <Row className="w-100 text-center">
        <Col>
          <h1 className="display-1 fw-bold text-primary">404</h1>
          <h3 className="mb-3">Page Not Found</h3>
          <p className="text-muted mb-4">
            Sorry, the page you are looking for does not exist.
          </p>

          <Button variant="primary" onClick={() => navigate("/")}>
            Go to Home
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default NotFound;
