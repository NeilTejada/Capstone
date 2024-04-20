import { Link } from "react-router-dom";
import "./home.css";
import Card from "react-bootstrap/Card";
function Home() {
  return (
    <div className="container-home">
      <div className="home-page">
        <h1> Show Us How You Burn!!! </h1>
        <section className="section">
          <div className="home-bbq">
            <img className="img-main" src="./images/smokerHome.png" alt="" />
            <p className="home-text">
              Discover a world of delicious grilling and smoking recipes with
              our application! Browse through a curated selection of recipes to
              find your next culinary adventure. Narrow down your choices with
              our easy-to-use filtering options to find the perfect recipe for
              your taste. Create an account to save your favorite recipes and
              access them whenever you want. Get ready to ignite your passion
              for grilling and smoking!"
            </p>
          </div>
          <div>
            <div className="cards">
              <Card style={{ width: "20rem" }}>
                <Card.Img
                  className="img"
                  variant="top"
                  src="./images\pulledPork.png"
                />
                <Card.Body>
                  <Card.Title className="text">
                    Beginner's Pulled Pork
                  </Card.Title>
                  <Card.Text className="text">
                    <p>Method: Smoked</p>
                    <p>FoodType: Pork</p>
                    <p>Level: Beginner</p>
                  </Card.Text>
                  <Link className="btn btn-secondary" to="/recipeDetail/2">
                    See Details
                  </Link>
                </Card.Body>
              </Card>

              <Card style={{ width: "20rem" }}>
                <Card.Img
                  className="img"
                  variant="top"
                  src="./images\honeyWings.png"
                />
                <Card.Body>
                  <Card.Title className="text">Honey Chipotle Wings</Card.Title>
                  <Card.Text className="text">
                    <p>Method: Grilled</p>
                    <p>FoodType: Poultry</p>
                    <p>Level: Beginner</p>
                  </Card.Text>
                  <Link className="btn btn-secondary" to="/recipeDetail/11">
                    See Details
                  </Link>
                </Card.Body>
              </Card>

              <Card style={{ width: "20rem" }}>
                <Card.Img
                  className="img"
                  variant="top"
                  src="./images\baconShrimp.png"
                />
                <Card.Body>
                  <Card.Title className="text">
                    Bacon Wrapped Shrimp with Jalapeno Coleslaw
                  </Card.Title>
                  <Card.Text className="text">
                    <p>Method: Grilled</p>
                    <p>FoodType: Seafood</p>
                    <p>Level: Intermediate</p>
                  </Card.Text>
                  <Link className="btn btn-secondary" to="/recipeDetail/14">
                    See Details
                  </Link>
                </Card.Body>
              </Card>
            </div>
          </div>
          <div className="recipe-text">
            <p>Recipes of the Week</p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
