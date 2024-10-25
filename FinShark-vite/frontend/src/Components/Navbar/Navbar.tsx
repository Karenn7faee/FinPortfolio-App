import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavBar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const NavbarTop = () => {
  return (
    <NavBar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Link to={"/"}>
          <NavBar.Brand>FINSHARK</NavBar.Brand>
        </Link>
        <NavBar.Toggle aria-controls="navbarScroll" />
        <NavBar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link as={Link} to="/search" active>
              Search
            </Nav.Link>
          </Nav>

          <Button className="mx-2" variant="outline-secondary">
            Log in
          </Button>
          <Button variant="success">Sign up</Button>
        </NavBar.Collapse>
      </Container>
    </NavBar>
  );
};

export default NavbarTop;
