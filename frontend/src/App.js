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
    </div>
  );
}

export default App;
