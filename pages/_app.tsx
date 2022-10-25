import { AppProps } from "next/app";
import { CssBaseline } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  type Theme = {
    status: {
      danger: string;
    };
  };
  // allow configuration using `createTheme`
  type ThemeOptions = {
    status?: {
      danger?: string;
    };
  };
}

const theme = createTheme({
  palette: {
    primary: {
      main: "#f5c645",
      contrastText: "rgba(0, 0, 0, 0.87)",
    },
    secondary: {
      main: "#90caf9",
    },
    background: {
      default: "#303030",
      paper: "#424242",
    },
    text: {
      primary: "#fff",
      secondary: "rgba(255, 255, 255, 0.7)",
      disabled: "rgba(255, 255, 255, 0.5)",
    },
  },
  typography: {
    fontFamily: '"Open Sans", sans-serif',
    h1: {
      fontFamily: '"Saira", sans-serif',
    },
    h2: {
      fontFamily: '"Saira", sans-serif',
    },
    h3: {
      fontFamily: '"Saira", sans-serif',
    },
    h4: {
      fontFamily: '"Saira", sans-serif',
    },
    h5: {
      fontFamily: '"Saira", sans-serif',
    },
    h6: {
      fontFamily: '"Saira", sans-serif',
    },
  },
});

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default App;
