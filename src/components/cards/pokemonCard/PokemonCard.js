/** @jsxImportSource @emotion/react */
import {
  Card,
  CardActionArea,
  Chip,
  IconButton,
  Typography,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import { spriteURL } from "../../../const/common";
import pokeColorMap from "../../../const/pokeColorMap";
import { titleCase } from "../../../util/string";
import {
  cssAbilityWrapper,
  cssCardActionArea,
  cssCardBody,
  cssOwnedContainer,
  cssPokeCards,
} from "../../pages/pokedex/styles";
import PokeballShadowIcon from "../../svg/PokeballShadowIcon";

const PokemonCard = ({ pokemon, ...otherProps }) => {
  const colorId = pokemon.pokemon_v2_pokemonspecy.pokemon_color_id;
  return (
    <Card css={cssPokeCards(colorId)} {...otherProps}>
      <CardActionArea css={cssCardActionArea}>
        <div css={cssCardBody}>
          <Typography variant="h5" className="pokemon-name">
            {titleCase(pokemon.name)}
          </Typography>
          <div css={cssAbilityWrapper(colorId)}>
            {pokemon.pokemon_v2_pokemontypes.map((type, i) => (
              <Chip
                className="ability-chip"
                key={i}
                label={titleCase(type.pokemon_v2_type.name)}
              />
            ))}
          </div>
          <div css={cssOwnedContainer(colorId)}>
            <div className="owned-inner-container">
              <div className="owned-wrapper">
                <Typography variant="body2">
                  Owned: <b>{pokemon.owned || 0}</b>
                </Typography>
              </div>
            </div>
          </div>
          <IconButton aria-label="delete">
            <DeleteIcon />
          </IconButton>
          <img
            className="pokemon-sprite"
            src={`${spriteURL}${pokemon.id}.png`}
            alt="pokemon sprite"
          />
          <PokeballShadowIcon
            className="card-pokeball-decor"
            color={pokeColorMap[colorId]}
          />
        </div>
      </CardActionArea>
    </Card>
  );
};

export default PokemonCard;
