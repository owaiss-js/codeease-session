import React from "react";
import { useNavigate } from "react-router-dom";
import "./StartScreen.css";

const StartScreen = () => {
  const navigate = useNavigate();

  const handleDifficultySelect = (difficulty) => {
    navigate("/game", { state: { difficulty } });
  };

  return (
    <div className="start-container">
      <div className="start-content">
        <div className="title-container">
          <h1 className="start-title">Welcome to the Game!</h1>
          <p className="start-subtitle">Choose your difficulty level to begin your adventure</p>
        </div>
        
        <div className="difficulty-grid">
          <button
            className="difficulty-card easy-card"
            onClick={() => handleDifficultySelect("Easy")}
          >
            <div className="card-icon">🌱</div>
            <h3 className="card-title">Easy</h3>
            <p className="card-description">Perfect for beginners</p>
          </button>
          
          <button
            className="difficulty-card medium-card"
            onClick={() => handleDifficultySelect("Medium")}
          >
            <div className="card-icon">⚡</div>
            <h3 className="card-title">Medium</h3>
            <p className="card-description">A balanced challenge</p>
          </button>
          
          <button
            className="difficulty-card hard-card"
            onClick={() => handleDifficultySelect("Hard")}
          >
            <div className="card-icon">🔥</div>
            <h3 className="card-title">Hard</h3>
            <p className="card-description">For experienced players</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default StartScreen;
