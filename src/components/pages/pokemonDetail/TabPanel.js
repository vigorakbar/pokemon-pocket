/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <div
          css={css`
            height: calc(50vh - 60px);
            padding: 20px;
            overflow: auto;
          `}
        >
          {children}
        </div>
      )}
    </div>
  );
}

export default TabPanel;
