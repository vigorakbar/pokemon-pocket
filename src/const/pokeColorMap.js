import palettes from "./palettes";

const { pokeColors } = palettes;

// map some color to its similar color for simplicity
// ex: black pokemon is mapped to gray color
const pokeColorMap = {
  1: pokeColors.gray,
  2: pokeColors.blue,
  3: pokeColors.red,
  4: pokeColors.gray,
  5: pokeColors.green,
  6: pokeColors.red,
  7: pokeColors.purple,
  8: pokeColors.red,
  9: pokeColors.blue,
  10: pokeColors.yellow,
};

export default pokeColorMap;
