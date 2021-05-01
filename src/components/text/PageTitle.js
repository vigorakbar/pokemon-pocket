/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Typography, useTheme } from "@material-ui/core";
import palettes from "../../const/palettes";

const cssTitle = (theme) => css`
  color: ${palettes.colors.black};
  font-weight: 600;
  margin-top: 32px;

  ${theme.breakpoints.up("sm")} {
    text-align: center;
  }
`;

const PageTitle = ({ children, ...otherProps }) => {
  const theme = useTheme();
  return (
    <Typography variant="h4" css={cssTitle(theme)} {...otherProps}>
      {children}
    </Typography>
  );
};

export default PageTitle;
