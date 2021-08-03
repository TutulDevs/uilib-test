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
    },
    purple: {
      main: "#663399",
      light: "#7D48B1",
      lighter: "#F2F1FE",
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
  },
  typography: {
    fontFamily: ["Nunito Sans", "sans-serif"].join(", "),
  },
});

export default theme;
