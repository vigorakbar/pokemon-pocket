/** @jsxImportSource @emotion/react */
import { Card, CardActionArea, Chip, Typography } from "@material-ui/core";
import { useEffect, useState } from "react";
import { spriteURL } from "../../../const/common";
import pokeColorMap from "../../../const/pokeColorMap";

import { titleCase } from "../../../util/string";
import PokeballShadowIcon from "../../svg/PokeballShadowIcon";
import PageTitle from "../../text/PageTitle";
import {
  cssAbilityWrapper,
  cssCardActionArea,
  cssCardBody,
  cssCardsWrapper,
  cssOwnedContainer,
  cssPageDecor,
  cssPokeCards,
} from "./style";

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
    <div>
      <div>
        <PageTitle>Pokedex</PageTitle>
        <div css={cssCardsWrapper}>
          {pokemons.map((pokemon) => {
            const colorId = pokemon.pokemon_v2_pokemonspecy.pokemon_color_id;
            return (
              <Card key={pokemon.id} css={cssPokeCards(colorId)}>
                <CardActionArea css={cssCardActionArea}>
                  <div css={cssCardBody}>
                    <Typography variant="h5" className="pokemon-name">
                      {titleCase(pokemon.name)}
                    </Typography>
                    <div css={cssAbilityWrapper(colorId)}>
                      {pokemon.pokemon_v2_pokemontypes.map((type) => (
                        <Chip
                          className="ability-chip"
                          key={`${pokemon.id}${type.pokemon_v2_type.id}`}
                          label={titleCase(type.pokemon_v2_type.name)}
                        />
                      ))}
                    </div>
                    <div css={cssOwnedContainer(colorId)}>
                      <div className="owned-inner-container">
                        <div className="owned-wrapper">
                          <Typography variant="body2">
                            Owned: <b>{pokemon.owned || 0}</b>
                          </Typography>
                        </div>
                      </div>
                    </div>
                    <img
                      className="pokemon-sprite"
                      src={`${spriteURL}${pokemon.id}.png`}
                      alt="pokemon sprite"
                    />
                    <PokeballShadowIcon
                      className="card-pokeball-decor"
                      color={pokeColorMap[colorId]}
                    />
                  </div>
                </CardActionArea>
              </Card>
            );
          })}
        </div>
      </div>
      <PokeballShadowIcon css={cssPageDecor} />
    </div>
  );
};

export default Pokedex;
