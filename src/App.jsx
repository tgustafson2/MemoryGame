import { useState, useEffect } from "react";
import usePokemon from "./pokemon";
import Game from "./Components/Game";
import "./index.css";

function App() {
  return (
    <div className="page-container">
      <h1>Pokemon Memory Game</h1>
        <Game />
    </div>
  );
}

export default App;
