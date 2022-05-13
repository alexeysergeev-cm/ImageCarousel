import { useCallback, useEffect, useState } from "react";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import Dots from "../dots/dots";
import Arrows from "../arrows/arrows";
import NoImage from "../noImage/noImage";
import "./carousel.scss";

/**
 * @param {Array} images [List of image objects]
 *
 * image object:
 * @param {Object} image {id: number, src: string}
 */

function Carousel({ images }) {
  const [currentImageIdx, setCurrentImageIdx] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [imageCount, setImageCount] = useState(0);

  //do not show dots and arrows if less than 1 image
  const navigationIsVisible = imageCount > 1;

  useEffect(() => {
    if (!images || images.length === 0) {
      return;
    }
    setImageCount(images.length);
  }, [images]);

  useEffect(() => {
    if (!isTransitioning || imageCount < 2) {
      return;
    }
    const interval = setInterval(() => {
      setCurrentImageIdx((currentImageIdx + 1) % imageCount);
    }, 3000);
    return () => clearInterval(interval);
  }, [currentImageIdx, isTransitioning, imageCount]);

  const toggleIsAutoSlide = useCallback(() => {
    setIsTransitioning(!isTransitioning);
  }, [isTransitioning, setIsTransitioning]);

  const nextImage = useCallback(() => {
    setCurrentImageIdx(
      currentImageIdx === imageCount - 1 ? 0 : currentImageIdx + 1
    );
  }, [currentImageIdx, imageCount, setCurrentImageIdx]);

  const previousImage = useCallback(() => {
    setCurrentImageIdx(
      currentImageIdx === 0 ? imageCount - 1 : currentImageIdx - 1
    );
  }, [currentImageIdx, imageCount, setCurrentImageIdx]);

  const setCurrentImage = useCallback(
    (idx) => {
      setCurrentImageIdx(idx);
    },
    [setCurrentImageIdx]
  );

  return !images || !imageCount ? (
    <NoImage />
  ) : (
    <div
      className="carousel"
      onMouseEnter={toggleIsAutoSlide}
      onMouseLeave={toggleIsAutoSlide}
    >
      <div className="carousel-container">
        {images.map((image, idx) => (
          <div
            className={
              idx === currentImageIdx ? "carousel-item active" : "carousel-item"
            }
            key={image.id}
          >
            <img src={image.src} alt={"carousel-" + image.id} />
          </div>
        ))}
        {navigationIsVisible && (
          <>
            <Arrows nextImage={nextImage} previousImage={previousImage} />
            <Dots
              imageCount={imageCount}
              solidCircle={faCircle}
              currentIdx={currentImageIdx}
              setCurrentImage={setCurrentImage}
            />
          </>
        )}
      </div>
    </div>
  );
}

export default Carousel;
