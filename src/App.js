import { createTheme } from "@mui/material";
import { ThemeProvider } from "@mui/material";
import { Route, Routes } from "react-router-dom";

// components
import Login from "./components/Login";
import Singin from "./components/Singin";
import Layout from "./components/Layout";

const theme = createTheme({
  direction: 'rtl',

  breakpoints: {
    values:{
      xxs:340,
      xs: 520,
      sm: 620,
      ml: 720,
      lg: 980,
      xl: 1200
    }
  },

  typography: {
    fontFamily: [
      "estedad",
      "shabnam"
    ].join(","),

    fontWeightLight: 100,
    fontWeightRegular: 200,
    fontWeightMedium: 400,
    fontWeightBold: 500,

    body1: {
      fontFamily: "estedad",
      fontWeight: 100
    }
  },

  palette: {
    primary:{
      main:"#227872",
      light:"#30aca3",
      dark:"#1b625d"
    }
  },

  shadows: {
    14: "1.0543478727340698px 1.4057972431182861px 2.8115944862365723px 0px rgba(0, 0, 0, .2)",
    15: " 2px 4px 17px 0px rgba(3, 3, 3, 0.28)",
  }
})


const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Routes>
          <Route path="/*" element={<Layout />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signin" element={<Singin />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
