/** @jsxImportSource @emotion/react */
import { useEffect, useState } from "react";
import { css } from "@emotion/react";
import { Link } from "react-router-dom";
import { Typography } from "@material-ui/core";
import PokemonCard from "../../cards/pokemonCard/PokemonCard";
import PokemonListContainer from "../../container/PokemonListContainer";
import PageTitle from "../../text/PageTitle";
import { cssCardsWrapper } from "../pokedex/styles";
import EmptyPocketIcon from "../../../assets/icons/pocket-empty.png";
import { flexAllCenter } from "../../../styles/common";

const mock = [
  {
    pokemon_v2_pokemonspecy: {
      pokemon_color_id: 2,
    },
    name: "blastoise",
    nickname: "YEE",
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
    nickname: "ASS",
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

const MyPokemon = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    setPokemons(mock);
  }, []);

  return (
    <PokemonListContainer>
      <PageTitle>My Pokemon</PageTitle>
      <div css={cssCardsWrapper}>
        {pokemons.length ? (
          pokemons.map((pokemon) => {
            return (
              <PokemonCard
                key={pokemon.id}
                pokemon={pokemon}
                onDelete={() => console.log("delete!")}
                animateHover={false}
                onClick={() => console.log("Clicked!")}
              />
            );
          })
        ) : (
          <div
            css={css`
              ${flexAllCenter}
              flex-direction: column;
            `}
          >
            <img
              css={css`
                margin: 32px 0;
              `}
              src={EmptyPocketIcon}
              alt="question mark icon"
            />
            <Typography
              css={css`
                margin-bottom: 12px;
              `}
              variant="h6"
              align="center"
            >
              You don't have any Pokemon right now...
            </Typography>
            <Link to="/">
              <Typography variant="subtitle1">
                Better go and catch one!
              </Typography>
            </Link>
          </div>
        )}
      </div>
    </PokemonListContainer>
  );
};

export default MyPokemon;
