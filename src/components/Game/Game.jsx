import { useEffect } from "react";
import "./Game.css";

function Game({ onClose }) {
  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  function handleOverlayClick(event) {
    if (event.target === event.currentTarget) {
      onClose();
    }
  }

  return (
    <div
      className="game-overlay"
      onClick={handleOverlayClick}
    >
      <div className="game-window">
        <button
          className="game-close"
          onClick={onClose}
          aria-label="Close game"
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
  );
}

export default Game;