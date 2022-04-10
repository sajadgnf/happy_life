import { createTheme } from "@mui/material";
import { ThemeProvider } from "@mui/material";
import { Route, Routes } from "react-router-dom";

// components
import Login from "./components/Login";
import Signin from "./components/Signin";
import Layout from "./components/Layout";
import { Provider } from "react-redux";
import ErrorPage from "./components/ErrorPage";

// redux
import store from "./redux/store";
import shadows from "@mui/material/styles/shadows";
import { ToastContainer } from "react-toastify";

const theme = createTheme({
  direction: 'rtl',

  breakpoints: {
    values: {
      xxs: 0,
      xsm: 414,
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
      "shabnam",
      "arsoo",
      "maktab"
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
    customYellow: {
      main: '#FFC93F',
    },
    customRed: {
      main: '#782228',
    },
    secondary: {
      main: "#cbcbcb",
      light: "#e4e4e4",
      dark: '#959595'
    },
    focus: {
      main: "#36bdb4",
      light: "#baebe8",
      dark: '#1a5a56'
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
            <Route path="/signin" element={<Signin />} />
            <Route path="/error" element={<ErrorPage />} />
          </Routes>
        </div>
        <ToastContainer theme="colored" />
      </Provider>
    </ThemeProvider>
  );
}

export default App;
