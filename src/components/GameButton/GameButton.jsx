import { useState } from "react";
import Game from "../Game/Game";
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

      {isOpen && <Game onClose={() => setIsOpen(false)} />}
    </>
  );
}

export default GameButton;