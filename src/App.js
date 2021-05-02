/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Container } from "@material-ui/core";
import { Route, Switch } from "react-router";
import DefaultAppBar from "./components/appBar/AppBar";
import MyPokemon from "./components/pages/myPokemon/MyPokemon";
import Pokedex from "./components/pages/pokedex/Pokedex";
import PokemonDetail from "./components/pages/pokemonDetail/PokemonDetail";

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
          <Route exact path="/">
            <Pokedex />
          </Route>
          <Route path="/my-pokemon">
            <MyPokemon />
          </Route>
          <Route path="/pokemon-detail/:name/:id">
            <PokemonDetail />
          </Route>
        </Switch>
      </Container>
    </div>
  );
}

export default App;
