import { red } from "@mui/material/colors";
import { createTheme, ThemeOptions, Theme } from "@mui/material/styles";

import { Work_Sans, Manrope } from "@next/font/google";

export const manrope = Manrope({
  weight: ["700"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["serif"],
});

export const roboto = Work_Sans({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Helvetica", "Arial", "sans-serif"],
});

declare module "@mui/material/styles" {
  interface CustomTheme extends Theme {
    gradient: {
      main: React.CSSProperties["background"];
    };
    cardGradient: React.CSSProperties["background"];
    cardGradient2: React.CSSProperties["background"];
    linearGradient1: React.CSSProperties["background"];
  }
  interface CustomThemeOptions extends ThemeOptions {
    gradient?: {
      main?: React.CSSProperties["background"];
    };
    cardGradient?: React.CSSProperties["background"];
    cardGradient2?: React.CSSProperties["background"];
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
    #6867671a,
    #32323266
  )`,
  cardGradient2: `linear-gradient(
    90deg,
    #3e39391a,
    #6f70a166
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
      contrastText: "#7000ff",
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
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: "none",
          color: "inherit",
        },
      },
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
});

theme.typography.h2 = {
  fontSize: "3rem",
  fontFamily: manrope.style.fontFamily,
  lineHeight: "3rem",
  wordSpacing: "0.5rem",
};

theme.typography.h3 = {
  fontSize: "2.8rem",
  fontFamily: manrope.style.fontFamily,
};
theme.typography.body1 = {
  fontSize: "1.15rem",
};
export default theme;
