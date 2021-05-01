/** @jsxImportSource @emotion/react */
import { useEffect, useState } from "react";

import PokemonCard from "../../cards/pokemonCard/PokemonCard";
import PokemonListContainer from "../../container/PokemonListContainer";
import PageTitle from "../../text/PageTitle";
import { cssCardsWrapper } from "./styles";

const mock = [
  {
    pokemon_v2_pokemonspecy: {
      pokemon_color_id: 5,
    },
    name: "bulbasaur",
    id: 1,
    pokemon_v2_pokemontypes: [
      {
        pokemon_v2_type: {
          name: "grass",
          id: 12,
        },
      },
      {
        pokemon_v2_type: {
          name: "poison",
          id: 4,
        },
      },
      {
        pokemon_v2_type: {
          name: "fire",
          id: 4,
        },
      },
    ],
  },
  {
    pokemon_v2_pokemonspecy: {
      pokemon_color_id: 5,
    },
    name: "ivysaur",
    id: 2,
    pokemon_v2_pokemontypes: [
      {
        pokemon_v2_type: {
          name: "grass",
          id: 12,
        },
      },
      {
        pokemon_v2_type: {
          name: "poison",
          id: 4,
        },
      },
    ],
  },
  {
    pokemon_v2_pokemonspecy: {
      pokemon_color_id: 5,
    },
    name: "venusaur",
    id: 3,
    pokemon_v2_pokemontypes: [
      {
        pokemon_v2_type: {
          name: "grass",
          id: 12,
        },
      },
      {
        pokemon_v2_type: {
          name: "poison",
          id: 4,
        },
      },
    ],
  },
  {
    pokemon_v2_pokemonspecy: {
      pokemon_color_id: 8,
    },
    name: "charmander",
    id: 4,
    pokemon_v2_pokemontypes: [
      {
        pokemon_v2_type: {
          name: "fire",
          id: 10,
        },
      },
    ],
  },
  {
    pokemon_v2_pokemonspecy: {
      pokemon_color_id: 8,
    },
    name: "charmeleon",
    id: 5,
    pokemon_v2_pokemontypes: [
      {
        pokemon_v2_type: {
          name: "fire",
          id: 10,
        },
      },
    ],
  },
  {
    pokemon_v2_pokemonspecy: {
      pokemon_color_id: 8,
    },
    name: "charizard",
    id: 6,
    pokemon_v2_pokemontypes: [
      {
        pokemon_v2_type: {
          name: "fire",
          id: 10,
        },
      },
      {
        pokemon_v2_type: {
          name: "flying",
          id: 3,
        },
      },
    ],
  },
  {
    pokemon_v2_pokemonspecy: {
      pokemon_color_id: 2,
    },
    name: "squirtle",
    id: 7,
    pokemon_v2_pokemontypes: [
      {
        pokemon_v2_type: {
          name: "water",
          id: 11,
        },
      },
    ],
  },
  {
    pokemon_v2_pokemonspecy: {
      pokemon_color_id: 2,
    },
    name: "wartortle",
    id: 8,
    pokemon_v2_pokemontypes: [
      {
        pokemon_v2_type: {
          name: "water",
          id: 11,
        },
      },
    ],
  },
  {
    pokemon_v2_pokemonspecy: {
      pokemon_color_id: 2,
    },
    name: "blastoise",
    id: 9,
    pokemon_v2_pokemontypes: [
      {
        pokemon_v2_type: {
          name: "water",
          id: 11,
        },
      },
    ],
  },
  {
    pokemon_v2_pokemonspecy: {
      pokemon_color_id: 5,
    },
    name: "caterpie",
    id: 10,
    pokemon_v2_pokemontypes: [
      {
        pokemon_v2_type: {
          name: "bug",
          id: 7,
        },
      },
    ],
  },
];

const Pokedex = (props) => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    setPokemons(mock);
  }, []);

  return (
    <PokemonListContainer>
      <PageTitle>Pokedex</PageTitle>
      <div css={cssCardsWrapper}>
        {pokemons.map((pokemon) => {
          return <PokemonCard key={pokemon.id} pokemon={pokemon} />;
        })}
      </div>
    </PokemonListContainer>
  );
};

export default Pokedex;
