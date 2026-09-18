import { useState } from "react";
import "./GameButton.css";

function GameButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        className="game-button"
        onClick={() => setIsOpen(true)}
      >
        <span className="game-button-icon">◉</span>

        <span className="game-button-text">
          Play
        </span>
      </button>

      {isOpen && (
        <div className="game-overlay">
          <div className="game-window">
            <button
              className="game-close"
              onClick={() => setIsOpen(false)}
            >
              ×
            </button>

            <h2>Game Mode</h2>

            <p>
              Welcome to the interactive section of my portfolio.
            </p>

            <div className="robot">
              🤖
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default GameButton;