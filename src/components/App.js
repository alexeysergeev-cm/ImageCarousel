import Carousel from "./carousel/carousel";
import { images, noImages, oneImage } from "../imageData/images";
import "./App.scss"

/*
  This is the code that will be used to render the carousel.
  For testing purposes please try passing -> images, noImages, oneImage to Carousel component.
*/

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Welcome to Image-Carousel React!</p>
      </header>
      <Carousel images={images} /> {/* pass images array to Carousel*/}
    </div>
  );
}

export default App;
