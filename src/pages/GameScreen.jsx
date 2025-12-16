import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./GameScreen.css";

const GameScreen = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const difficulty = location.state?.difficulty || "Unknown";

  const getDifficultyColor = (difficulty) => {
    switch (difficulty.toLowerCase()) {
      case "easy":
        return "#4ade80";
      case "medium":
        return "#fbbf24";
      case "hard":
        return "#ef4444";
      default:
        return "#6b7280";
    }
  };

  const handleBackToHome = () => {
    navigate("/");
  };

  return (
    <div className="game-container">
      <div className="game-header">
        <button className="back-button" onClick={handleBackToHome}>
          ← Back to Home
        </button>
        <div className="difficulty-indicator">
          <span className="difficulty-label">Difficulty:</span>
          <span 
            className="difficulty-value"
            style={{ color: getDifficultyColor(difficulty) }}
          >
            {difficulty}
          </span>
        </div>
      </div>

      <div className="game-content">
        <div className="game-title-section">
          <h1 className="game-title">Game Screen</h1>
          <p className="game-subtitle">Ready to play at {difficulty} level!</p>
        </div>

        <div className="game-area">
          <div className="game-placeholder">
            <div className="placeholder-icon">🎮</div>
            <h3 className="placeholder-title">Game Content</h3>
            <p className="placeholder-text">
              This is where the game logic would be implemented.
              The difficulty level "{difficulty}" is now active.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameScreen;
