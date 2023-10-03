import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function AppNavbar() {
  return (
    <Navbar expand="lg" data-bs-theme="dark" id="navbar">
      <Container className="py-1">
        <Navbar.Brand href="#home">PlayStation Productions</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#hero">Home</Nav.Link>
            <Nav.Link href="#current">Watch Now</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#upcoming">Coming Soon</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;
