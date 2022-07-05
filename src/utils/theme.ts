import { createTheme, ThemeOptions, Theme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

import React from "react";

declare module "@mui/material/styles" {
  interface CustomTheme extends Theme {
    gradient: {
      main: React.CSSProperties["background"];
    };
    cardGradient: React.CSSProperties["background"];
    linearGradient1: React.CSSProperties["background"];
  }
  interface CustomThemeOptions extends ThemeOptions {
    gradient?: {
      main?: React.CSSProperties["background"];
    };
    cardGradient?: React.CSSProperties["background"];
    linearGradient1?: React.CSSProperties["background"];
  }
  export function createTheme(options?: CustomThemeOptions): CustomTheme;
}
//creating a theme instance
const theme = createTheme({
  gradient: {
    main: `radial-gradient(
      ellipse farthest-corner at 0% 0%,
      #e94eee 5%,
      #7000ff 20%,
      black 50%
    )`,
  },
  cardGradient: `linear-gradient(
    45deg,
    #ffffff1a,
    #ffffff66
  )`,
  linearGradient1: `linear-gradient(to right,#e94eee 0%,
    #7000ff 25%,
    black 50%)`,
  palette: {
    primary: {
      main: "#000000",
    },
    secondary: {
      main: "#e94eee",
    },
    error: {
      main: red.A400,
    },
    info: {
      main: "#ffffff",
    },
    text: {
      primary: "#ffffff",
      secondary: "#c9c9bf",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          color: "inherit",
          border: "1px solid white",
          textTransform: "capitalize",
        },
      },
    },
  },
});

theme.typography.h2 = {
  fontSize: "3rem",
  fontFamily: "'Noto Serif', serif",
  lineHeight: "3rem",
};

theme.typography.h3 = {
  fontSize: "2.8rem",
  fontFamily: "'Noto Serif', serif",
};
export default theme;
