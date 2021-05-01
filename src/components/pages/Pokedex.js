/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Card, CardActionArea, Chip, Typography } from "@material-ui/core";
import { useEffect, useState } from "react";
import { spriteURL } from "../../const/common";
import pokeColorMap from "../../const/pokeColorMap";
import { biggerOnHover } from "../../styles/animation";
import { flexAllCenter } from "../../styles/commonPosition";
import { titleCase } from "../../util/string";
import PokeballShadowIcon from "../svg/PokeballShadowIcon";
import PageTitle from "../text/PageTitle";

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
        <PageTitle
          css={css`
            margin-top: 32px;
          `}
        >
          Pokedex
        </PageTitle>
        <div
          css={css`
            ${flexAllCenter}
            flex-wrap: wrap;
            margin: 28px 0;
          `}
        >
          {pokemons.map((pokemon) => {
            const colorId = pokemon.pokemon_v2_pokemonspecy.pokemon_color_id;
            return (
              <Card
                key={pokemon.id}
                css={css`
                  ${biggerOnHover}
                  height: 200px;
                  width: 320px;
                  margin: 12px;
                  background-color: ${pokeColorMap[colorId]};
                  border-radius: 20px;
                `}
              >
                <CardActionArea
                  css={css`
                    height: 100%;
                    position: relative;
                    display: flex;
                    align-items: start;
                    justify-content: left;
                  `}
                >
                  <div
                    css={css`
                      padding: 20px;
                      width: 100%;
                    `}
                  >
                    <Typography
                      variant="h5"
                      css={css`
                        font-weight: 600;
                        color: white;
                      `}
                    >
                      {titleCase(pokemon.name)}
                    </Typography>
                    <div
                      css={css`
                        max-width: 40%;
                        margin-top: 10px;
                      `}
                    >
                      {pokemon.pokemon_v2_pokemontypes.map((type) => (
                        <Chip
                          css={css`
                            margin-right: 6px;
                            margin-bottom: 6px;
                            background-color: ${pokeColorMap[colorId]};
                            filter: brightness(130%);
                            font-family: "Helvetica Neue", "Segoe UI", "Roboto",
                              "Oxygen", "Ubuntu", "Cantarell", "Fira Sans",
                              "Droid Sans", sans-serif;
                          `}
                          key={`${pokemon.id}${type.pokemon_v2_type.id}`}
                          label={titleCase(type.pokemon_v2_type.name)}
                        />
                      ))}
                    </div>
                    <img
                      css={css`
                        position: absolute;
                        width: 150px;
                        height: 150px;
                        right: 2px;
                        bottom: 2px;
                        z-index: 1;
                      `}
                      src={`${spriteURL}${pokemon.id}.png`}
                      alt="pokemon sprite"
                    />
                    <PokeballShadowIcon
                      css={css`
                        position: absolute;
                        width: 125px;
                        height: 125px;
                        right: 0px;
                        bottom: 0;
                        opacity: 0.35;
                        filter: brightness(150%);
                      `}
                      color={pokeColorMap[colorId]}
                    />
                  </div>
                </CardActionArea>
              </Card>
            );
          })}
        </div>
      </div>
      <PokeballShadowIcon
        css={css`
          position: fixed;
          width: 200px;
          height: 200px;
          right: -75px;
          top: 0;
          opacity: 0.2;
          z-index: -1;
        `}
      />
    </div>
  );
};

export default Pokedex;
