import React, { useEffect } from "react";
import Header from "../Header/index";
import Main from "../Main/index";
import "./App.css";
import theme from "../../theme";
import { ThemeProvider } from "@mui/material/styles";
import { useAuth0 } from "@auth0/auth0-react";
import LoginPage from "../LoginPage";

function App() {
  const { isAuthenticated, user } = useAuth0();

  useEffect(() => {
    //send PUT request to /users with the user's auth0 id
    //backend will create a new user if needed
    console.log("user object", user);
    if (user) console.log("user id", user.sub);
  }, [user]);
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
