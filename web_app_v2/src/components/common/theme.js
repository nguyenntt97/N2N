import { createMuiTheme } from "@material-ui/core/styles";
import * as Colors from "@material-ui/core/colors";

// All the following keys are optional, as default values are provided.
export const Theme = createMuiTheme({
  palette: {
    primary: {
      main: "#364f6b"
    },
    secondary: {
      main: "#63779D"
    },
    error: Colors.red,
    // Used by `getContrastText()` to maximize the contrast between the background and
    // the text.
    contrastThreshold: 3,
    // Used to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
    textPrimary: {
      main: "#424242"
    },
    textSecondary: {
      main: "#364f6b"
    }
  },
  typography: {
    fontFamily: ["Roboto", "Oswald"].join(",")
  }
});

export const loadingEffect = {
  placeholder: {
    width: "100%",
    height: "100%",
    background: "rgba(28,30,34,.8)",
    backdropFilter: "blur(2px)",
    display: "flex",
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    zIndex: "5"
  },
  "@keyframes ldsDualRing": {
    "0%": {
      transform: "rotate(0deg)"
    },
    "100%": {
      transform: "rotate(360deg)"
    }
  },
  ldsDualRing: {
    display: "inline-block",
    width: "80px",
    height: "80px",
    "&::after": {
      content: "''",
      display: "block",
      width: "64px",
      height: "64px",
      margin: "8px",
      borderRadius: "50%",
      border: "6px solid #fff",
      borderColor: "#fff transparent #fff transparent",
      animation: "$ldsDualRing 1.2s linear infinite"
    }
  }
};
