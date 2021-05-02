import localforage from "localforage";

const forageInstance = localforage.createInstance({
  name: "pokemon-pocket-app",
});

export const decrementPokemonCount = async (id) => {
  const pokemonCount = (await forageInstance.getItem("myPokemonCount")) || {};
  let count = pokemonCount[id] || 0;
  count = count > 0 ? count - 1 : 0;
  await forageInstance.setItem("myPokemonCount", {
    ...pokemonCount,
    [id]: count,
  });
};

export const incrementPokemonCount = async (id) => {
  const pokemonCount = (await forageInstance.getItem("myPokemonCount")) || {};
  let count = pokemonCount[id] || 0;
  count++;
  await forageInstance.setItem("myPokemonCount", {
    ...pokemonCount,
    [id]: count,
  });
};

export const releaseMyPokemon = async (id) => {
  const pokemonList = (await forageInstance.getItem("myPokemonList")) || [];
  const deleteIdIdx = pokemonList.map((pokemon) => pokemon?.id).indexOf(id);
  const newList = [
    ...pokemonList.slice(0, deleteIdIdx),
    ...pokemonList.slice(deleteIdIdx + 1),
  ];
  await forageInstance.setItem("myPokemonList", newList);
  return newList
};

export default forageInstance;
