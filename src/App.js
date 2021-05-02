/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Container } from "@material-ui/core";
import { Redirect, Route, Switch } from "react-router";
import DefaultAppBar from "./components/appBar/AppBar";
import MyPokemon from "./components/pages/myPokemon/MyPokemon";
import Pokedex from "./components/pages/pokedex/Pokedex";
import PokemonDetail from "./components/pages/pokemonDetail/PokemonDetail";
import { MY_POKEMON_PAGE, POKEDEX_PAGE, POKEMON_DETAIL_PAGE } from "./const/pages";

function App() {
  return (
    <div
      css={css`
        display: flex;
      `}
    >
      <DefaultAppBar />
      <Container
        css={css`
          margin-top: 72px;
          min-height: calc(100vh - 72px);
        `}
      >
        <Switch>
        <Route exact path='/' >
          <Redirect to={POKEDEX_PAGE} />
        </Route>
          <Route exact path={POKEDEX_PAGE}>
            <Pokedex />
          </Route>
          <Route path={MY_POKEMON_PAGE}>
            <MyPokemon />
          </Route>
          <Route path={POKEMON_DETAIL_PAGE}>
            <PokemonDetail />
          </Route>
        </Switch>
      </Container>
    </div>
  );
}

export default App;
