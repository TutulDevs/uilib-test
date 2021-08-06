import { createTheme } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#556cd6",
    },

    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#F1F3F4",
      dark: "#949494",
      light: "#B1B1B1",
    },
    purple: {
      main: "#663399",
      light: "#7D48B1",
      lighter: "rgba(125, 72, 172, 0.25)",
    },
    blue: {
      main: "#3981F7",
      lighter: "#C5DBFF",
    },
    green: {
      main: "#5DAE49",
      lighter: "#BCDDB3",
    },
    orange: {
      main: "#FFC620",
      lighter: "#FFF6E0",
    },
    gray: {
      main: "#43454D",
    },
  },
  typography: {
    fontFamily: ["Nunito Sans", "sans-serif"].join(", "),
  },
  mixins: {
    toolbar: {
      minHeight: 80,
      paddingTop: 30,
      paddingBottom: 30,
    },
  },
});

export default theme;
