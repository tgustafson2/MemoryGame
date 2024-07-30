import { useState, useEffect } from "react";
import usePokemon from "../pokemon";
import Card from "./Card";
import Scoreboard from "./Scoreboard";
import "../index.css";

function Game({ cardAmount = 10 }) {
  const [pokemon, setPokemon] = useState([]);
  const [currScore, setCurrScore] = useState(0);
  const [clicked, setClicked] = useState([]);
  const [currMax, setCurrMax] = useState(0);
  let { getPokemon, getPokemonList, shuffle } = usePokemon();
  useEffect(() => {
    getPokemonList(cardAmount).then((result) => {
      console.log(result);
      setPokemon(result);
    });
  }, []);
  useEffect(() => {
    if (currMax < currScore) {
      setCurrMax(currScore);
    }
  }, [currScore]);

  function guess(name){
    if (clicked.includes(name)) {
      setCurrScore(0);
      setClicked([]);
    } else {
      setCurrScore((score) => score + 1);
    }
    clicked.push(name);
    setPokemon(shuffle(pokemon));
  }

  return (
    <div className="game-container">
      <Scoreboard currScore={currScore} maxScore={currMax} />
      <div className="card-container">
        {pokemon.map((curr) => {
          return (
            <Card
              pokemonName={curr.name}
              pokemonImageUrl={curr.image}
              key={curr.id}
              handleClick={guess}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Game;
