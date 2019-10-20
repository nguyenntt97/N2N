import { createMuiTheme } from "@material-ui/core/styles";
import * as Colors from "@material-ui/core/colors";

// All the following keys are optional, as default values are provided.
export const Theme = createMuiTheme({
  palette: {
    primary: {
      main: "#fff"
    },
    secondary: Colors.brown,
    error: Colors.red,
    // Used by `getContrastText()` to maximize the contrast between the background and
    // the text.
    contrastThreshold: 3,
    // Used to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
    textPrimary: {
      main: "#fff"
    }
  },
  typography: {
    fontFamily: [
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(",")
  }
});
