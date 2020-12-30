import { createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#4CAF50",
      dark: "#388E3C",
      light: "#C8E6C9"
    },
    secondary: {
      main: "#CDDC39"
    },
    text: {
      primary: "#212121",
      secondary: "#757575"
    },
    border: "#DEDEDE",
    background: {
      default: "#FFFFFF",
    }
  },
  typography: {
    button: {
      textTransform: "none"
    }
  },
  overrides: {
    MuiDrawer: {
      paper: {
        paddingTop: "64px" // ヘッダー分
      }
    }
  }
});

export default theme;
