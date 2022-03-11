import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import css from "./LoginButton.module.css";

const LoginButton = ({ disabled }) => {
  const { loginWithRedirect } = useAuth0();

  return (
    <button
      id="loginButton"
      className={css.loginButton}
      onClick={() => {
        if (disabled) {
          alert("Please agree to terms and conditions");
        } else {
          loginWithRedirect();
        }
      }}
    >
      Log In
    </button>
  );
};

export default LoginButton;
