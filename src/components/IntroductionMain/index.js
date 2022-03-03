import React, { useState } from "react";
import logo from "../../images/logo.png";
import LoginButton from "../LoginPage/LoginButton";
import { Link } from "react-router-dom";
import { style } from "@mui/system";
import { FormatUnderlined } from "@mui/icons-material";
import css from "./IntroductionMain.module.css";

function IntroductionMain() {
  const [checked, setChecked] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);

  const canBeSubmitted = () => {
    return checked ? setIsDisabled(true) : setIsDisabled(false);
  };

  const handleCheck = () => {
    setChecked(!checked);
    return canBeSubmitted();
  };
  return (
    <div className={css.container}>
      <div className={css.introCard}>
        <img src={logo} alt="" />
        <p className={`${css.intro} flex-horizontal`}>
          The only app you need to explore your interests, find events in your
          local area and make lasting friendships!
        </p>
        <p>
          I have read the
          <Link to="/terms-and-conditions" style={{ color: "blue" }}>
            {" "}
            T&C's
          </Link>
          <input type="checkbox" onClick={handleCheck}></input>
        </p>

        <LoginButton disabled={isDisabled} />
      </div>
    </div>
  );
}

export default IntroductionMain;
