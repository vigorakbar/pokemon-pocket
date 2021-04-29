/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import DefaultAppBar from "./components/AppBar/DefaultAppBar";

function App() {
  return (
    <div
      css={css`
        display: flex;
      `}
    >
      <DefaultAppBar />
    </div>
  );
}

export default App;
