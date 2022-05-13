import Carousel from "./carousel/carousel";
import { images } from "../imageData/images";
import "./App.scss"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Welcome to Image-Carousel React!</p>
      </header>
      <Carousel images={images} />
    </div>
  );
}

export default App;
