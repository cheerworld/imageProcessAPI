import "./App.css";
import Jumbotron from "react-bootstrap/Jumbotron";
import FormForImage from "./components/form";

function App() {
  return (
    <div className="App">
      <Jumbotron>
        <h1>Image Process</h1>
        <p>This is a frontend for image process.</p>
      </Jumbotron>
      <FormForImage />
      <footer>
        <p className="footerP">
          <span role="img" aria-label="Beach with Umbrella">
            🏖️{" "}
          </span>
          Made by Yuguo Zhao
          <span role="img" aria-label="Cityscape at Dusk">
            {" "}
            🌆
          </span>
        </p>
      </footer>
    </div>
  );
}

export default App;
