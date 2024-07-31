import { useState, useEffect } from "react";
import usePokemon from "../pokemon";
import Card from "./Card";
import Scoreboard from "./Scoreboard";
import "../index.css";

function Game({ cardAmount = 10 }) {
  const [pokemon, setPokemon] = useState([]);
  const [currScore, setCurrScore] = useState(0);
  const [rounds, setRounds] = useState(0);
  const [clicked, setClicked] = useState([]);
  const [currMax, setCurrMax] = useState(0);
  let { getPokemon, getPokemonList, shuffle } = usePokemon();
  useEffect(() => {
    getPokemonList(cardAmount).then((result) => {
      setPokemon(result);
    });
  }, [rounds]);
  useEffect(() => {
    if (currMax < currScore) {
      setCurrMax(currScore);
    }
    if(currScore > 0 && currScore%10===0){
      setRounds(rounds => rounds+1);
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
      
      <div className="card-container">
        {pokemon.map((curr) => {
          return (
            <Card
              pokemonName={curr.name}
              pokemonImageUrl={curr.image}
              key={curr.key || curr.id}
              handleClick={guess}
            />
          );
        })}
      </div>
      <Scoreboard currScore={currScore} maxScore={currMax} />
    </div>
  );
}

export default Game;
