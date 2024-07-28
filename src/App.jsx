import { useState, useEffect } from "react";
import usePokemon from "./pokemon";
import Card from "./Components/Card";

function App() {
  const [pokemon, setPokemon] = useState({});
  useEffect(() => {
    let {getPokemon} = usePokemon();
    getPokemon(1).then((result) => {
      setPokemon(result);
    });
  }, []);
  return (
    <>
      {pokemon && (
        <Card pokemonName={pokemon.name} pokemonImageUrl={pokemon.image} />
      )}
    </>
  );
}

export default App;
