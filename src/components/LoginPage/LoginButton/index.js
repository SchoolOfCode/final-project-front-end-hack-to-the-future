import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = ({ disabled }) => {
  const { loginWithRedirect } = useAuth0();

  return (
    <button onClick={() => loginWithRedirect()} disabled={disabled}>
      Log In
    </button>
  );
};

export default LoginButton;
