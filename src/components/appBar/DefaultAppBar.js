/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import AppIcon from "../../assets/icons/pokeball.png";
import PokeBagIcon from "../../assets/icons/pokebag.png";
import { flexAllCenter } from "../../styles/commonPosition";
import HideOnScroll from "../transitions/HideOnScroll";
import palettes from "../../const/palettes";

const DefaultAppBar = (props) => {
  return (
    <HideOnScroll>
      <AppBar
        css={css`
          background-color: ${palettes.pokeColors.red};
          box-shadow: unset;
        `}
        {...props}
      >
        <Toolbar
          css={css`
            justify-content: space-between;
          `}
        >
          <Typography
            variant="h6"
            css={css`
              line-height: 1.2;
              max-width: 50%;
              font-weight: 600;
            `}
          >
            <Link to="/">
              <div
                css={css`
                  ${flexAllCenter}
                  margin: 12px 0;
                `}
              >
                <img
                  css={css`
                    height: 48px;
                    width: 48px;
                    margin-right: 12px;
                  `}
                  src={AppIcon}
                  alt="pokeball icon"
                />
                <span
                  css={css`
                    color: white;
                  `}
                >
                  Pokemon Pocket
                </span>
              </div>
            </Link>
          </Typography>
          <Link
            to="/my-pokemon"
            css={css`
              max-width: 36%;
            `}
          >
            <div
              css={css`
                ${flexAllCenter}
              `}
            >
              <img
                src={PokeBagIcon}
                alt="my pokemon icon"
                css={css`
                  margin-right: 4px;
                `}
              />
              <span
                css={css`
                  color: white;
                `}
              >
                My Pocket
              </span>
            </div>
          </Link>
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  );
};

export default DefaultAppBar;
