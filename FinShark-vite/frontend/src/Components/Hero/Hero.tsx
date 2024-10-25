import { Link } from "react-router-dom";
import hero from "./hero.png";

import { Col, Container, Row } from "react-bootstrap";

const Hero = () => {
  return (
    <section id="hero">
      <Container>
        <Row className="align-items-center py-4 gap-3">
          <Col className="pl-3">
            <h1 className="text-5xl font-bold">Financial data with no news.</h1>
            <p className="text-2xl  text-dark ">
              Search relevant financial documents without fear mongering and
              fake news.
            </p>
            <div className="m-auto">
              <Link
                to="/search"
                className="w-100 m-auto py-2 px-5 text-2xl font-bold text-white bg-success rounded hover:opacity-70"
              >
                Get Started
              </Link>
            </div>
          </Col>
          <Col className="text-center">
            <img
              src={hero}
              alt="hero picture"
              className="image-fluid"
              style={{ maxHeight: "300px" }}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
