import { useState } from "react";

export default function usePokemon() {
  const getPokemon = async (id) => {
    let res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    let { name, sprites } = await res.json();
    let image = sprites["front_default"];
    return { name, image, id };
  };

  return { getPokemon };
}
