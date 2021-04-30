import { css } from "@emotion/react";

export const biggerOnHover = css`
  transition: transform 0.3s;
  &:hover {
    transform: scale(1.03);
  }
`;
