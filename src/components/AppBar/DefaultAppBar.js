/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import AppIcon from "../../assets/icons/pokeball.png";
import HideOnScroll from "../Transition/HideOnScroll";

const DefaultAppBar = (props) => (
  <HideOnScroll>
    <AppBar
      css={css`
        background-color: transparent;
        box-shadow: unset;
      `}
      {...props}
    >
      <Toolbar>
        <Typography variant="h6">
          <Link to="/">
            <img src={AppIcon} alt="pokeball icon" />
            <span>Pokemon Pocket</span>
          </Link>
        </Typography>
      </Toolbar>
    </AppBar>
  </HideOnScroll>
);

export default DefaultAppBar;
