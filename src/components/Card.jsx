import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/esm/Col";
import horizon from "../assets/images/horizon.webp";
import godOfWar from "../assets/images/god-of-war.webp";
import ghostOfTsushima from "../assets/images/ghost-of-tsushima.webp";

const productions = [
  {
    name: "Horizon",
    id: 1,
    description:
      "In an era where machines roam the land and mankind is no longer the dominant species, a young hunter named Aloy embarks on a journey to discover her destiny. Discover a world of majestic nature, awe-inspiring machines and the last remnants of mankind.",
    image: horizon,
    link: "https://www.playstation.com/en-us/horizon/",
    button: "Explore The Horizon Universe",
  },
  {
    name: "God Of War",
    id: 2,
    description:
      "Join Kratos and Atreus on a mythic journey for answers before Ragnarök arrives. Together, father and son must put everything on the line as they journey to each of the Nine Realms. Finding surprising allies and foes along the way.",
    image: godOfWar,
    link: "https://www.playstation.com/en-us/god-of-war/",
    button: "Explore The God Of War Universe",
  },
  {
    name: "Ghost Of Tsushima",
    id: 3,
    description:
      "Uncover the hidden wonders of Tsushima and venture beyond the battlefield to experience feudal Japan like never before. When the Mongols handily defeat the samurai forces, Jin is faced with the most difficult decision of his life.",
    image: ghostOfTsushima,
    link: "https://www.playstation.com/en-us/games/ghost-of-tsushima/",
    button: "Explore The Ghost Of Tsushima Universe",
  },
];

function FutureProductions() {
  return (
    <Container id="upcoming">
      <Row>
        <Card className="text-center text-light mb-5 py-2" id="topCard">
          <Card.Body className="h1">Coming Soon</Card.Body>
        </Card>
      </Row>
      <Row>
        {productions.map((production) => (
          <Col md={4} className="mb-3" key={production.id}>
            <Card>
              <Card.Img
                variant="top"
                src={production.image}
                alt="A future PlayStation Production"
              />
              <Card.Body>
                <Card.Title>{production.name}</Card.Title>
                <Card.Text>{production.description}</Card.Text>
                <Button
                  variant="primary"
                  href={production.link}
                  target="_blank"
                >
                  {production.button}
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default FutureProductions;
