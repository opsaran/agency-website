import { red } from "@mui/material/colors";
import { createTheme, ThemeOptions, Theme } from "@mui/material/styles";

import { Noto_Serif, Work_Sans } from "@next/font/google";

export const notoSerif = Noto_Serif({
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
    #ffffff1a,
    #ffffff66
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
  fontFamily: notoSerif.style.fontFamily,
  lineHeight: "3rem",
};

theme.typography.h3 = {
  fontSize: "2.8rem",
  fontFamily: notoSerif.style.fontFamily,
};

export default theme;
