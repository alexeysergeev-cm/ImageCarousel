import { useEffect, useState } from "react";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import Dots from "../dots/dots";
import Arrows from "../arrows/arrows";
import "./carousel.scss";

function Carousel({ images }) {
  const [currentImageIdx, setCurrentImageIdx] = useState(0);
  // const [isTransitioning, setIsTransitioning] = useState(false);
  // const [isPlaying, setIsPlaying] = useState(false);
  const [imageCount, setImageCount] = useState(0);
  //if 1 image no dots and arrows

  useEffect(() => {
    if (!images || images.length === 0) {
      return;
    }
    setImageCount(images.length);
  }, [images]);

  const nextImage = () => {
    setCurrentImageIdx(
      currentImageIdx === imageCount - 1 ? 0 : currentImageIdx + 1
    );
  };

  const previousImage = () => {
    setCurrentImageIdx(
      currentImageIdx === 0 ? imageCount - 1 : currentImageIdx - 1
    );
  };

  const setCurrentImage = (idx) => {
    setCurrentImageIdx(idx);
  };

  if (!images || images.length === 0) {
    return null;
  }

  return (
    <div className="carousel">
      <div className="carousel-container">
        {images.map((image, idx) => (
          <div
            className={
              idx === currentImageIdx ? "carousel-item active" : "carousel-item"
            }
            key={image.id}
          >
            {idx === currentImageIdx && (
              <img src={image.src} alt={"carousel-" + image.id} />
            )}
          </div>
        ))}
        <Arrows nextImage={nextImage} previousImage={previousImage} />
        <Dots
          imageCount={imageCount}
          solidCircle={faCircle}
          currentIdx={currentImageIdx}
          setCurrentImage={setCurrentImage}
        />
      </div>
    </div>
  );
}

export default Carousel;
