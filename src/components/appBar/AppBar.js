/** @jsxImportSource @emotion/react */
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
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

const DefaultAppBar = (props) => {
  return (
    <HideOnScroll>
      <AppBar css={cssAppBar} {...props}>
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
          <Link to="/my-pokemon" css={cssMyPokeMenu}>
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
