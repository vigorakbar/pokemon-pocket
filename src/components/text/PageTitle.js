/** @jsxImportSource @emotion/react */
import { css, useTheme } from "@emotion/react";
import { Typography } from "@material-ui/core";

const PageTitle = ({ children, ...otherProps }) => {
  const theme = useTheme();
  return (
    <Typography
      variant="h4"
      css={css`
        color: ${theme.colors.black};
        font-weight: 600;
      `}
      {...otherProps}
    >
      {children}
    </Typography>
  );
};

export default PageTitle;
