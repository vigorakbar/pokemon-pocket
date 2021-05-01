/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import { useEffect, useState } from "react";
import { useRouteMatch } from "react-router";
import theme from "../../../const/palettes";
import PageTitle from "../../text/PageTitle";

const mock = {};

const PokemonDetail = () => {
  const match = useRouteMatch();
  const name = match.params.name;
  const [pokemonDetail, setPokemonDetail] = useState({});

  useEffect(() => {
    setPokemonDetail(mock);
  }, []);
  return (
    <>
      <div>
        <PageTitle>{name}</PageTitle>
      </div>
      <div
        css={css`
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          background-color: ${theme.pokeColors.green};
        `}
      />
    </>
  );
};

export default PokemonDetail;
