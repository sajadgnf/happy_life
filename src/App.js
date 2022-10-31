import { ThemeProvider } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";

// components
import Login from "./components/Login";
import Signin from "./components/Signin";
import Layout from "./containers/Layout";
import ErrorPage from "./components/ErrorPage";
import theme from "./mui/theme";

// redux
import store from "./redux/store";

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
};

export default App;
