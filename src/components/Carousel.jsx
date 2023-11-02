import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import unchartedImg from "../assets/images/uncharted.jpg";
import theLastOfUsImg from "../assets/images/the-last-of-us.webp";
import twistedMetalImg from "../assets/images/twisted-metal.jpeg";
import granTurismoImg from "../assets/images/gran-turismo.jpeg";

const productions = [
  {
    name: "Uncharted",
    id: 1,
    description:
      "Fortune favors the bold. Starring Tom Holland & Mark Wahlberg.",
    link: "https://youtu.be/eHp3MbsCbMg",
    image: unchartedImg,
    text: "First slide",
  },
  {
    name: "The Last of Us",
    id: 2,
    description:
      "The critically acclaimed story brought to life for TV. Starring Pedro Pascal & Bella Ramsey.",
    link: "https://youtu.be/uLtkt8BonwM",
    image: theLastOfUsImg,
    text: "Second slide",
  },
  {
    name: "Twisted Metal",
    id: 3,
    description:
      "Anthony Mackie must deliver a mysterious package across a post-apocalyptic wasteland. Buckle up.",
    link: "https://youtu.be/98qKqfBP6OA",
    image: twistedMetalImg,
    text: "Third slide",
  },
  {
    name: "Gran Turismo",
    id: 4,
    description:
      "Dreams are meant to be chased. Based on the incredible true story of a gamer who became a racer.",
    link: "https://youtu.be/GVPzGBvPrzw",
    image: granTurismoImg,
    text: "Fourth slide",
  },
];

function ReleasedProductions() {
  return (
    <Container id="current">
      <Carousel>
        {productions.map((production) => (
          <Carousel.Item key={production.id}>
            <Image
              src={production.image}
              text={production.text}
              fluid
              alt="A released PlayStation Production"
            />
            <Carousel.Caption className="bg-dark bg-opacity-75 rounded">
              <h3>{production.name}</h3>
              <p>{production.description}</p>
              <Button
                className="bg-light text-dark fw-bold mb-2"
                href={production.link}
                target="_blank"
              >
                Watch Trailer
              </Button>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
}

export default ReleasedProductions;
