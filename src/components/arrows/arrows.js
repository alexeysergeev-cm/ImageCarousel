import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Arrows({ nextImage, previousImage }) {
  return (
    <>
      <FontAwesomeIcon
        icon={faChevronLeft}
        className="action-icons left"
        onClick={previousImage}
      />
      <FontAwesomeIcon
        icon={faChevronRight}
        className="action-icons right"
        onClick={nextImage}
      />
    </>
  );
}

export default Arrows;
