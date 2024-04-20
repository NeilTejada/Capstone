import "./about.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function About() {
  return (
    <div className="about page">
      <h1>About The Developers</h1>
      <div className="cards">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="./images/Eric.jpg" />
          <Card.Body>
            <Card.Title className="card">Eric Wells</Card.Title>
            <Card.Text className="card">
              Check out my GitHub and LinkedIn!
            </Card.Text>
            <Button variant="secondary">
              <a href="https://github.com/dewdaddy35">Go To GitHub</a>
            </Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="./images/neil.jpg" />
          <Card.Body>
            <Card.Title className="card">Neil Tejada</Card.Title>
            <Card.Text className="card">
              Check out my GitHub and LinkedIn!
            </Card.Text>
            <Button variant="secondary">
              <a href="https://github.com/NeilTejada">GitHub</a>
              <br />
              <a href="https://www.linkedin.com/in/neiltejada/">LinkedIn</a>
            </Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default About;
