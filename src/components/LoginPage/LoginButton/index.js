import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import css from "./LoginButton.module.css";

const LoginButton = ({ disabled }) => {
  const { loginWithRedirect } = useAuth0();

  return (
    <button
      className={css.loginButton}
      onClick={() => loginWithRedirect()}
      disabled={disabled}
    >
      Log In
    </button>
  );
};

export default LoginButton;
