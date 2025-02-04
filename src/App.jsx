import { useState, useEffect } from "react";
import "./App.css";

const colors = ["cyan", "magenta", "lime", "teal", "maroon", "gold"];

const App = () => {
  const [targetColor, setTargetColor] = useState("");
  const [score, setScore] = useState(0);
  const [gameStatus, setGameStatus] = useState("Guess the correct color!");
  

  const startNewGame = () => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setTargetColor(randomColor);
    setGameStatus("Guess the correct color!");
    
  };

  const handleGuess = (color) => {
    if (color === targetColor) {
      setScore((prevScore) => prevScore + 1);
      setGameStatus("Correct! Well done!🎈🎉✨🎉");
      
    } else {
      setGameStatus("Wrong! Try again.");
     
    }
    
  };

  useEffect(() => {
    startNewGame();
  }, []);

  return (
    <section className="game-wrapper">
      <div className=" game-container">
        <h1 className="title">Color Guessing Game</h1>
        <div
          data-testid="colorBox"
          className="color-box"
          style={{ backgroundColor: targetColor }}
        ></div>
        <p data-testid="gameInstructions" className="instructions">
          Guess the correct color!
        </p>
        <div className="color-options">
          {colors.map((color) => (
            <button
              key={color}
              data-testid="colorOption"
              className="color-button"
              style={{ backgroundColor: color }}
              onClick={() => handleGuess(color)}
            >
              {color}
            </button>
          ))}
        </div>
        <p data-testid="gameStatus" className="game-status">
          {gameStatus}
        </p>
        <p data-testid="score" className="score">
          Score: {score}
        </p>
        <button
          data-testid="newGameButton"
          className="new-game-button"
          onClick={startNewGame}
        >
          New Game
        </button>
      </div>
    </section>
  );
};

export default App;
