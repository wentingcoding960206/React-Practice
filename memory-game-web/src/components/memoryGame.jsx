import "./memoryGame.css";
import _ from "lodash";
import { useState } from "react";
import placeholder from "../assets/placeholder.png";

const MemoryGame = ({ images }) => {
  const [shuffled, setShuffled] = useState(() => {
    const duplicated = [...images, ...images];
    return _.shuffle(duplicated);
  });

  const [flippedIndexes, setFlippedIndexes] = useState([]);
  const [keepIndexes, setKeepIndexes] = useState([]);

  const handleCardClick = (index) => {
    if(flippedIndexes.includes(index) || flippedIndexes.length === 2) return;
    
    const newFlipped = [...flippedIndexes, index];
    setFlippedIndexes(newFlipped);

    console.log("newFlipped" + newFlipped);
    console.log("flippedIndexes" + flippedIndexes);
    console.log("keepIndexes" + keepIndexes);
    if (newFlipped.length === 2) {
      if (shuffled[newFlipped[0]] == shuffled[newFlipped[1]]) {
        setTimeout(() => {
          setKeepIndexes([...keepIndexes, newFlipped[0], newFlipped[1]]);
          setFlippedIndexes([]);
        }, 1000);
        return;
      } else {
        setTimeout(() => {
          setFlippedIndexes([]);
        }, 1000);
      }
    }
  };

  return (
    <div>
      <h1>Memory Game</h1>

      <div className="image-grid">
        {shuffled.map((image, index) => {
          const isFlipped = flippedIndexes.includes(index) || keepIndexes.includes(index);
          return (
            <img
              key={image + "-" + index}
              src={isFlipped ? image : placeholder}
              className="square-image"
              onClick={() => handleCardClick(index)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default MemoryGame;
