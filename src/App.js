import { createTheme } from "@mui/material";
import { ThemeProvider } from "@mui/material";
import { Route, Routes } from "react-router-dom";

// components
import Login from "./components/Login";
import Singin from "./components/Singin";
import Layout from "./components/Layout";
import { Provider } from "react-redux";

// redux
import store from "./redux/store";
import shadows from "@mui/material/styles/shadows";

const theme = createTheme({
  direction: 'rtl',

  breakpoints: {
    values: {
      xxs: 0,
      xs: 520,
      sm: 620,
      ml: 720,
      lg: 980,
      xl: 1200,
      xxl: 1300
    }
  },

  typography: {
    fontFamily: [
      "estedad",
      "shabnam"
    ].join(","),

    body1: {
      fontFamily: "estedad",
      fontWeight: 300
    },
    h3: {
      fontFamily: "estedad",
      fontWeight: 400
    }
  },

  palette: {
    primary: {
      main: "#227872",
      light: "#30aca3",
      dark: "#1b625d"
    },
    secondary: {
      main: "#cbcbcb",
      light: "#e4e4e4",
      dark: '#959595'
    }
  },

  shadows: {
    ...shadows,
    13: "1px 3px 8px 0px rgba(0, 0, 0, 5%)",
    14: "1.0543478727340698px 1.4057972431182861px 2.8115944862365723px 0px rgba(0, 0, 0, .2)",
    15: " 2px 4px 17px 0px rgba(3, 3, 3, 0.28)",
  }
})


const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <div>
          <Routes>
            <Route path="/*" element={<Layout />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signin" element={<Singin />} />
          </Routes>
        </div>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
