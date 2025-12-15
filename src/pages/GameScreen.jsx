import React from "react";
import { useLocation } from "react-router-dom";

const GameScreen = () => {
  const location = useLocation();
  const difficulty = location.state?.difficulty || "Unknown";

  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      <h1>Game Page</h1>
      <p>Selected Difficulty: {difficulty}</p>
    </div>
  );
};

export default GameScreen;
