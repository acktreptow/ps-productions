import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import logo from "../assets/images/playstation-productions-hero.webp";
import intro from "../assets/videos/playstation-productions-intro.mp4";

function Hero() {
  return (
    <Container id="hero">
      <Row className="my-5">
        <Col sm={7}>
          <Image
            src={logo}
            fluid
            rounded
            className="mb-5 mb-sm-0"
            alt="PlayStation Productions logo"
          />
        </Col>
        <Col sm={5}>
          <h1 className="">PlayStation Productions</h1>
          <p className="mt-4 lead">
            PlayStation Productions takes the emotive storytelling and immersive
            gameplay experience from PlayStation Studios, and spins that shared
            DNA into movies, TV shows and animations that come to life on the
            big and small screens.
          </p>
          <p className="lead">
            Learn more about TV, movies and animation based on the incredible
            character and worlds from PlayStation Studios' acclaimed games.
          </p>
          <Button
            variant="outline-primary"
            className="fw-bold mt-2"
            href={intro}
            target="_blank"
          >
            Our Mission Intro
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default Hero;
