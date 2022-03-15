import { createTheme } from "@mui/material";
import { ThemeProvider } from "@mui/material";
import { Route, Routes } from "react-router-dom";

// components
import Login from "./components/Login";
import Singin from "./components/Singin";
import Layout from "./components/Layout";

const theme = createTheme({
  direction: 'rtl',
  typography: {
    fontFamily: "estedad"
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
