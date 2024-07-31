import { useState } from "react";

export default function usePokemon() {
  const pokemonCount = 1025;
  let potential = [];
  for (let i = 1; i <= pokemonCount; i++) {
    potential.push(i);
  }
  const getPokemon = async (id) => {
    let res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    let { name, sprites } = await res.json();
    let image = sprites["front_default"];
    return { name, image, id };
  };

  const getPokemonList = async (count) => {
    let result = [];
    for (let i = 0; i < count && potential.length > 0; i++) {
      let pokemon = Math.floor(Math.random() * potential.length);
      potential.splice(pokemon, 1);
      result.push(pokemon);
    }
    return await Promise.all(result.map(getPokemon));
  };

  const shuffle = (arr) => {
    console.log(arr);
    return arr
      .map((pokemon) => ({ ...pokemon, key: Math.random() }))
      .sort((a, b) => a.key - b.key)
      .map((pokemon) => {
        return pokemon;
      });
  };

  return { getPokemon, getPokemonList, shuffle };
}
