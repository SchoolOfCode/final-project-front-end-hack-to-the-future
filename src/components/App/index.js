import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../Header/index";
import Main from "../Main/index";
import theme from "../../theme";
import { ThemeProvider } from "@mui/material/styles";
import { useAuth0 } from "@auth0/auth0-react";
import LoginPage from "../LoginPage";
import TsAndCs from "../TsAndCs";
import LoadingComponent from "../LoadingComponent";
import css from "./App.module.css";
import { API_URL } from "../../config/index.js";
//Our app!
function App() {
  const { isAuthenticated, user, isLoading } = useAuth0();

  useEffect(() => {
    //send PUT request to /users with the user's auth0 id
    //backend will create a new user if needed

    async function authenticateUser() {
      const requestBody = {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: user.sub,
        },
        body: JSON.stringify({
          user_name: user.name,
          email: user.email,
        }),
      };
      const response = await fetch(`${API_URL}/users`, requestBody);
      const data = await response.json();
      console.log(data);
    }
    console.log("user object", user);
    if (user) authenticateUser();
  }, [user]);
  return (
    <React.StrictMode>
      <div className={css.app}>
        <ThemeProvider theme={theme}>
          {isAuthenticated ? (
            <>
              <Header />
              <Main user_id={user.sub} />
            </>
          ) : isLoading ? (
            <LoadingComponent />
          ) : (
            <>
              <LoginPage />
              <Routes>
                {" "}
                <Route
                  path="/terms-and-conditions"
                  element={<TsAndCs />}
                />{" "}
              </Routes>
            </>
          )}
        </ThemeProvider>
      </div>
    </React.StrictMode>
  );
}

export default App;
