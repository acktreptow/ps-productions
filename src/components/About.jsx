import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import asad from "../assets/images/asad-qizilbash.webp";

function About() {
  return (
    <Container id="about">
      <Row className="mt-sm-5 mb-5">
        <Col sm={7}>
          <p className="mt-4 lead fst-italic">
            "Together with PlayStation Studios, PlayStation Productions brings
            our memorable characters and compelling storytelling to the screen;
            launching fans into the center of their favorite worlds like it was
            the first time. PlayStation Productions strikes the delicate balance
            between honoring the rich source materials and creating a brand-new
            cinematic experience for audiences."
          </p>
          <p className="mt-4 text-end fw-bold">
            - Asad Qizilbash, Head of PlayStation Productions
          </p>
        </Col>
        <Col sm={5}>
          <Image src={asad} fluid rounded alt="Asad Qizilbash headshot" />
        </Col>
      </Row>
    </Container>
  );
}

export default About;
