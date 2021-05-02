/** @jsxImportSource @emotion/react */
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { Link, useRouteMatch } from "react-router-dom";
import AppIcon from "../../assets/icons/pokeball.png";
import PokeBagIcon from "../../assets/icons/pokebag.png";
import HideOnScroll from "../transitions/HideOnScroll";
import {
  cssAppBar,
  cssMainMenu,
  cssMenuLabel,
  cssMyPokeMenu,
  cssToolbar,
} from "./styles";
import { MY_POKEMON_PAGE, POKEMON_DETAIL_PAGE } from "../../const/pages";

const DefaultAppBar = (props) => {
  const isDetailPage = useRouteMatch(POKEMON_DETAIL_PAGE);

  return (
    <HideOnScroll>
      <AppBar css={cssAppBar(isDetailPage)} {...props}>
        <Toolbar css={cssToolbar}>
          <Typography css={cssMainMenu} variant="h6">
            <Link to="/">
              <div className="icon-wrapper">
                <img
                  className="icon-main-menu"
                  src={AppIcon}
                  alt="pokeball icon"
                />
                <span css={cssMenuLabel}>Pokemon Pocket</span>
              </div>
            </Link>
          </Typography>
          <Link to={MY_POKEMON_PAGE} css={cssMyPokeMenu}>
            <div className="icon-wrapper">
              <img
                src={PokeBagIcon}
                alt="my pokemon icon"
                className="icon-my-poke"
              />
              <span css={cssMenuLabel}>My Pocket</span>
            </div>
          </Link>
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  );
};

export default DefaultAppBar;
