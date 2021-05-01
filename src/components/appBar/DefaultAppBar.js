/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import AppIcon from "../../assets/icons/pokeball.png";
import PokeBagIcon from "../../assets/icons/pokebag.png";
import { flexAllCenter } from "../../styles/commonPosition";
import HideOnScroll from "../transitions/HideOnScroll";
import palettes from "../../const/palettes";

const cssAppBar = css`
  background-color: ${palettes.pokeColors.red};
  box-shadow: unset;
`;

const cssToolbar = css`
  justify-content: space-between;
`;

const cssMainMenu = css`
  line-height: 1.2;
  max-width: 50%;
  font-weight: 600;

  .icon-wrapper {
    ${flexAllCenter}
    margin: 12px 0;
  }

  .icon-main-menu {
    height: 48px;
    width: 48px;
    margin-right: 12px;
  }
`;

const cssMenuLabel = css`
  color: white;
`;

const cssMyPokeMenu = css`
  max-width: 36%;

  .icon-wrapper {
    ${flexAllCenter}
  }

  .icon-my-poke {
    margin-right: 4px;
  }
`;

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
