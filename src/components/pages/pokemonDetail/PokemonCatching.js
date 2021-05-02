/** @jsxImportSource @emotion/react */
import { useState } from "react";
import {
  Backdrop,
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Fab,
  TextField,
} from "@material-ui/core";
import { css } from "@emotion/react";
import { biggerOnHover } from "../../../styles/animation";
import OpenPokeballIcon from "../../../assets/icons/open-pokeball.png";
import { flexAllCenter } from "../../../styles/common";
import { cssSpriteContainer } from "./styles";
import forageInstance, { incrementPokemonCount } from "../../../util/dataStorage";
import { titleCase } from "../../../util/string";

const PokemonCatching = ({ pokemonDetail }) => {
  const [loading, setLoading] = useState(false);
  const [modalSuccess, setModalSuccess] = useState(false);
  const [modalFail, setModalFail] = useState(false);
  const [nickname, setNickname] = useState("");
  const [errorNick, setErrorNick] = useState("");

  const onClick = async () => {
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const catched = Math.random() < 0.5;
    if (catched) {
      onCatched();
    } else {
      onMissed();
    }
  };

  const onCatched = () => {
    setLoading(false);
    setModalSuccess(true);
  };

  const onMissed = () => {
    setLoading(false);
    setModalFail(true);
  };

  const onKeepPokemon = async () => {
    if (nickname) {
      const pokemonList = (await forageInstance.getItem("myPokemonList")) || [];
      const sameNicks = pokemonList.filter(
        (myPokemon) => myPokemon.nickname === nickname
      );
      if (sameNicks.length) {
        setErrorNick("Nickname already exists");
      } else {
        setLoading(true);
        const data = {
          pokemon_v2_pokemonspecy: {
            pokemon_color_id: pokemonDetail.colorId,
          },
          name: pokemonDetail.name,
          nickname,
          id: pokemonDetail.id,
          pokemon_v2_pokemontypes: pokemonDetail.types.map((data) => ({
            pokemon_v2_type: {
              name: data?.type?.name,
            },
          })),
        };
        await forageInstance.setItem("myPokemonList", [...pokemonList, data]);
        await incrementPokemonCount(pokemonDetail.id)
        setLoading(false);
        setModalSuccess(false);
      }
    } else {
      setErrorNick("Nickname required");
    }
  };

  return (
    <>
      <Fab
        css={css`
          position: fixed;
          z-index: 10;
          bottom: 32px;
          right: 32px;
          width: 100px;
          height: 100px;
          ${biggerOnHover}
        `}
        title="Catch This Pokemon!"
        onClick={onClick}
      >
        <img src={OpenPokeballIcon} alt="open pokeball" />
      </Fab>
      <Backdrop
        css={css`
          z-index: 9999;
          color: black;
        `}
        open={loading}
      >
        <Dialog open={loading} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Catching Pokemon...</DialogTitle>
          <DialogContent css={flexAllCenter}>
            <CircularProgress
              css={css`
                margin-bottom: 36px;
              `}
            />
          </DialogContent>
        </Dialog>
      </Backdrop>
      <Dialog
        open={modalSuccess}
        onClose={() => setModalSuccess(false)}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Pokemon Catched!</DialogTitle>
        <DialogContent>
          <DialogContentText>
            <b>{titleCase(pokemonDetail.name)}</b>
          </DialogContentText>
          <div css={cssSpriteContainer}>
            <img
              className="sprite-image"
              src={pokemonDetail.sprites?.front_default}
              alt="pokemon sprite"
            />
          </div>
          <TextField
            autoFocus
            margin="dense"
            id="nickname"
            label="Nickname"
            fullWidth
            value={nickname}
            onChange={(e) => {
              setNickname(e.target.value);
              setErrorNick("");
            }}
            error={Boolean(errorNick)}
            helperText={errorNick}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setModalSuccess(false)} variant="outlined">
            Release
          </Button>
          <Button onClick={onKeepPokemon} color="primary" variant="contained">
            Keep
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog
        open={modalFail}
        onClose={() => setModalFail(false)}
        aria-labelledby="alert-dialog-title"
      >
        <DialogTitle id="alert-dialog-title">
          Whoops.. The pokemon got away :(
        </DialogTitle>
        <DialogActions>
          <Button
            onClick={() => setModalFail(false)}
            variant="contained"
            color="primary"
          >
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default PokemonCatching;
