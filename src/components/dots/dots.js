import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-regular-svg-icons";
import "./dots.scss";

function Dots({ imageCount, solidCircle, currentIdx, setCurrentImage }) {
  const [indecesArray, setIndecesArray] = useState([]);

  useEffect(() => {
    if (!imageCount) {
      return;
    }
    setIndecesArray(
      Array(imageCount)
        .fill(0)
        .map((_, i) => i)
    );
  }, [imageCount]);

  return indecesArray.length ? (
    <div className="dots-container">
      {indecesArray.map((idx) => (
        <div className="dot" key={idx} onClick={() => setCurrentImage(idx)}>
          {currentIdx === idx ? (
            <FontAwesomeIcon icon={solidCircle} className="action-icons" />
          ) : (
            <FontAwesomeIcon icon={faCircle} className="action-icons" />
          )}
        </div>
      ))}
    </div>
  ) : null;
}

export default Dots;
