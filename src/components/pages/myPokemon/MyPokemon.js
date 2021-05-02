/** @jsxImportSource @emotion/react */
import { useEffect, useState } from "react";
import { css } from "@emotion/react";
import { Link } from "react-router-dom";
import {
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  Typography,
} from "@material-ui/core";
import PokemonCard from "../../cards/pokemonCard/PokemonCard";
import PokemonListContainer from "../../container/PokemonListContainer";
import PageTitle from "../../text/PageTitle";
import { cssCardsWrapper } from "../pokedex/styles";
import EmptyPocketIcon from "../../../assets/icons/pocket-empty.png";
import { flexAllCenter } from "../../../styles/common";
import forageInstance, {
  decrementPokemonCount,
  releaseMyPokemon,
} from "../../../util/dataStorage";

const MyPokemon = () => {
  const [pokemons, setPokemons] = useState([]);
  const [deleteDialog, setDeleteDialog] = useState(false);
  const [deleteId, setDeleteId] = useState();

  useEffect(() => {
    const getList = async () => {
      const pokemonList = (await forageInstance.getItem("myPokemonList")) || [];
      setPokemons(pokemonList);
    };
    getList();
  }, []);

  const onDelete = async (id) => {
    const newList = await releaseMyPokemon(id);
    await decrementPokemonCount(id);
    setPokemons(newList);
    setDeleteDialog(false);
  };

  return (
    <>
      <PokemonListContainer>
        <PageTitle>My Pokemon</PageTitle>
        <div css={cssCardsWrapper}>
          {pokemons.length ? (
            pokemons.map((pokemon) => {
              return (
                <PokemonCard
                  key={pokemon.id}
                  pokemon={pokemon}
                  onDelete={() => {
                    setDeleteId(pokemon.id);
                    setDeleteDialog(true);
                  }}
                  animateHover={false}
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
      <Dialog
        open={deleteDialog}
        onClose={() => setDeleteDialog(false)}
        aria-labelledby="alert-dialog-title"
      >
        <DialogTitle id="alert-dialog-title">
          Are you sure you want to release this pokemon?
        </DialogTitle>
        <DialogActions>
          <Button onClick={() => setDeleteDialog(false)} variant="outlined">
            Cancel
          </Button>
          <Button
            onClick={() => onDelete(deleteId)}
            color="secondary"
            variant="contained"
            autofocus
          >
            Release
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default MyPokemon;
