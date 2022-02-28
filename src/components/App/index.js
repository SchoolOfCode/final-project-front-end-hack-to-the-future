import React from "react";
import Header from "../Header/index";
import Main from "../Main/index";
import "./App.css";
import theme from "../../theme";
import { ThemeProvider } from "@mui/material/styles";
import { useAuth0 } from "@auth0/auth0-react";
import LoginPage from "../LoginPage";

function App() {
  const {isAuthenticated } = useAuth0();
  return (
    <React.StrictMode>
      <div className="App">
        <ThemeProvider theme={theme}>
          {isAuthenticated ? (
            <>
              <Header />
              <Main />
            </>
          ) : (
            <LoginPage />
          )}
        </ThemeProvider>
      </div>
    </React.StrictMode>
  );
}

export default App;
