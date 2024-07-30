import { useState } from "react";


export default function usePokemon() {
  const pokemonCount = 1025;
  const getPokemon = async (id) => {
    let res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    let { name, sprites } = await res.json();
    let image = sprites["front_default"];
    return { name, image, id };
  };

  const getPokemonList = async (count) => {
    let potential = [];
    for (let i = 1; i <= pokemonCount; i++) {
      potential.push(i);
    }
    let result = [];
    for (let i = 0; i < count; i++) {
      let pokemon = Math.floor(Math.random() * potential.length);
      potential.splice(pokemon, 1);
      result.push(pokemon);
    }
    return await Promise.all(result.map(getPokemon));
  };

  const shuffle = (arr) => {
    console.log(arr);
    return arr.map((pokemon) =>({...pokemon, sort: Math.random()}))
          .sort((a,b) => a.sort - b.sort)
          .map((pokemon) => {return ({name:pokemon.name, image:pokemon.image, id:pokemon.id})})
  }

  return { getPokemon, getPokemonList, shuffle };
}
