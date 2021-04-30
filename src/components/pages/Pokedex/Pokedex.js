/** @jsxImportSource @emotion/react */
import { css, useTheme } from "@emotion/react";
import { Card, CardActionArea, Chip, Typography } from "@material-ui/core";
import { useState } from "react";
import { spriteURL } from "../../../const/common";
import pokeColorMap from "../../../const/pokeColorMap";
import { biggerOnHover } from "../../../styles/animation";
import { flexAllCenter } from "../../../styles/commonPosition";
import { titleCase } from "../../../util/string";
import PokeballShadowIcon from "../../svg/PokeballShadowIcon";

const mock = [
  {
    pokemon_v2_pokemonspecy: {
      pokemon_color_id: 2,
    },
    name: "inteleon",
    id: 818,
    pokemon_v2_pokemonabilities: [
      {
        pokemon_v2_ability: {
          name: "torrent",
          id: 67,
        },
      },
      {
        pokemon_v2_ability: {
          name: "sniper",
          id: 97,
        },
      },
    ],
  },
  {
    pokemon_v2_pokemonspecy: {
      pokemon_color_id: 2,
    },
    name: "inteleon-gmax",
    id: 10202,
    pokemon_v2_pokemonabilities: [
      {
        pokemon_v2_ability: {
          name: "torrent",
          id: 67,
        },
      },
      {
        pokemon_v2_ability: {
          name: "sniper",
          id: 97,
        },
      },
    ],
  },
  {
    pokemon_v2_pokemonspecy: {
      pokemon_color_id: 3,
    },
    name: "skwovet",
    id: 819,
    pokemon_v2_pokemonabilities: [
      {
        pokemon_v2_ability: {
          name: "gluttony",
          id: 82,
        },
      },
      {
        pokemon_v2_ability: {
          name: "cheek-pouch",
          id: 167,
        },
      },
    ],
  },
  {
    pokemon_v2_pokemonspecy: {
      pokemon_color_id: 3,
    },
    name: "greedent",
    id: 820,
    pokemon_v2_pokemonabilities: [
      {
        pokemon_v2_ability: {
          name: "gluttony",
          id: 82,
        },
      },
      {
        pokemon_v2_ability: {
          name: "cheek-pouch",
          id: 167,
        },
      },
    ],
  },
  {
    pokemon_v2_pokemonspecy: {
      pokemon_color_id: 2,
    },
    name: "rookidee",
    id: 821,
    pokemon_v2_pokemonabilities: [
      {
        pokemon_v2_ability: {
          name: "keen-eye",
          id: 51,
        },
      },
      {
        pokemon_v2_ability: {
          name: "unnerve",
          id: 127,
        },
      },
      {
        pokemon_v2_ability: {
          name: "big-pecks",
          id: 145,
        },
      },
    ],
  },
  {
    pokemon_v2_pokemonspecy: {
      pokemon_color_id: 2,
    },
    name: "corvisquire",
    id: 822,
    pokemon_v2_pokemonabilities: [
      {
        pokemon_v2_ability: {
          name: "keen-eye",
          id: 51,
        },
      },
      {
        pokemon_v2_ability: {
          name: "unnerve",
          id: 127,
        },
      },
      {
        pokemon_v2_ability: {
          name: "big-pecks",
          id: 145,
        },
      },
    ],
  },
  {
    pokemon_v2_pokemonspecy: {
      pokemon_color_id: 7,
    },
    name: "corviknight",
    id: 823,
    pokemon_v2_pokemonabilities: [
      {
        pokemon_v2_ability: {
          name: "pressure",
          id: 46,
        },
      },
      {
        pokemon_v2_ability: {
          name: "unnerve",
          id: 127,
        },
      },
      {
        pokemon_v2_ability: {
          name: "mirror-armor",
          id: 240,
        },
      },
    ],
  },
  {
    pokemon_v2_pokemonspecy: {
      pokemon_color_id: 7,
    },
    name: "corviknight-gmax",
    id: 10203,
    pokemon_v2_pokemonabilities: [
      {
        pokemon_v2_ability: {
          name: "pressure",
          id: 46,
        },
      },
      {
        pokemon_v2_ability: {
          name: "unnerve",
          id: 127,
        },
      },
      {
        pokemon_v2_ability: {
          name: "mirror-armor",
          id: 240,
        },
      },
    ],
  },
  {
    pokemon_v2_pokemonspecy: {
      pokemon_color_id: 2,
    },
    name: "blipbug",
    id: 824,
    pokemon_v2_pokemonabilities: [
      {
        pokemon_v2_ability: {
          name: "compound-eyes",
          id: 14,
        },
      },
      {
        pokemon_v2_ability: {
          name: "swarm",
          id: 68,
        },
      },
      {
        pokemon_v2_ability: {
          name: "telepathy",
          id: 140,
        },
      },
    ],
  },
  {
    pokemon_v2_pokemonspecy: {
      pokemon_color_id: 10,
    },
    name: "dottler",
    id: 825,
    pokemon_v2_pokemonabilities: [
      {
        pokemon_v2_ability: {
          name: "compound-eyes",
          id: 14,
        },
      },
      {
        pokemon_v2_ability: {
          name: "swarm",
          id: 68,
        },
      },
      {
        pokemon_v2_ability: {
          name: "telepathy",
          id: 140,
        },
      },
    ],
  },
];

const Pokedex = (props) => {
  const [pokemons, setPokemons] = useState(mock);
  const theme = useTheme();

  return (
    <div>
      <div>
        <Typography
          variant="h4"
          css={css`
            color: ${theme.colors.black};
            font-weight: 600;
            margin-top: 32px;
          `}
        >
          Pokedex
        </Typography>
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
                        max-width: 50%;
                        margin-top: 10px;
                      `}
                    >
                      {pokemon.pokemon_v2_pokemonabilities.map((ability) => (
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
                          key={`${pokemon.id}${ability.pokemon_v2_ability.id}`}
                          label={titleCase(ability.pokemon_v2_ability.name)}
                        />
                      ))}
                    </div>
                    <img
                      css={css`
                        position: absolute;
                        width: 140px;
                        height: 140px;
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
                        width: 100px;
                        height: 100px;
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
