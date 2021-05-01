/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Typography } from "@material-ui/core";
import palettes from "../../const/palettes";

const cssTitle = css`
  color: ${palettes.colors.black};
  font-weight: 600;
  margin-top: 32px;
`;

const PageTitle = ({ children, ...otherProps }) => {
  return (
    <Typography variant="h4" css={cssTitle} {...otherProps}>
      {children}
    </Typography>
  );
};

export default PageTitle;
