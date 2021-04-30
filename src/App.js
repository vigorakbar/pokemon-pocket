/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Container } from "@material-ui/core";
import { Route, Switch } from "react-router";
import DefaultAppBar from "./components/AppBar/DefaultAppBar";
import MyPokemon from "./components/pages/MyPokemon/MyPokemon";
import Pokedex from "./components/pages/Pokedex/Pokedex";
import PokemonDetail from "./components/pages/PokemonDetail/PokemonDetail";

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
        `}
      >
        <Switch>
          <Route exact path="/">
            <Pokedex />
          </Route>
          <Route path="/my-pokemon">
            <MyPokemon />
          </Route>
          <Route path="/my-pokemon/:id">
            <PokemonDetail />
          </Route>
        </Switch>
      </Container>
    </div>
  );
}

export default App;
