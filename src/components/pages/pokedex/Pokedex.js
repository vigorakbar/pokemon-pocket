/** @jsxImportSource @emotion/react */
import { useQuery } from "@apollo/client";
import { css } from "@emotion/react";
import { Button, CircularProgress } from "@material-ui/core";
import { useEffect, useState } from "react";
import { flexAllCenter } from "../../../styles/common";
import forageInstance from "../../../util/dataStorage";
import {
  GET_POKEMON_LIST,
  POKEMON_LIST_LIMIT,
} from "../../../util/graphql/queries";

import PokemonCard from "../../cards/pokemonCard/PokemonCard";
import PokemonListContainer from "../../container/PokemonListContainer";
import PageTitle from "../../text/PageTitle";
import { cssCardsWrapper, cssLoadMoreBtn } from "./styles";

const renderPokemonList = (error, data, ownedCount) => {
  if (error) return <span>{error.message}</span>;
  return data.map((pokemon) => {
    return <PokemonCard key={pokemon.id} pokemon={pokemon} ownedCount={ownedCount} />;
  });
};

const Pokedex = (props) => {
  const [pokemons, setPokemons] = useState([]);
  const [index, setIndex] = useState(0);
  const [ownedCount, setOwnedCount] = useState({});

  const { loading, error, data } = useQuery(GET_POKEMON_LIST, {
    variables: { offset: index * POKEMON_LIST_LIMIT },
    context: { clientName: "beta" },
  });

  useEffect(() => {
    async function getOwnedCount() {
      const result = await forageInstance.getItem("myPokemonCount");
      setOwnedCount(result);
    }
    getOwnedCount();
  }, []);

  useEffect(() => {
    if (data) {
      setPokemons((prevData) => [...prevData, ...data.pokemon_v2_pokemon]);
    }
  }, [data]);

  return (
    <PokemonListContainer>
      <PageTitle>Pokedex</PageTitle>
      <div css={cssCardsWrapper}>{renderPokemonList(error, pokemons, ownedCount)}</div>
      <div
        css={css`
          ${flexAllCenter}
        `}
      >
        {loading && <CircularProgress />}
        {data && (
          <Button
            variant="outlined"
            css={cssLoadMoreBtn}
            onClick={() => setIndex((prevIdx) => prevIdx + 1)}
          >
            Load More
          </Button>
        )}
      </div>
    </PokemonListContainer>
  );
};

export default Pokedex;
