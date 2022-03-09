import React, { useState } from "react";
import logo from "../../images/logo.png";
import LoginButton from "../LoginPage/LoginButton";
import TsAndCs from "../TsAndCs";

import css from "./IntroductionMain.module.css";

function IntroductionMain() {
  const [checked, setChecked] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);
  const [tcVisible, setTCVisible] = useState(false);

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
          <span onClick={() => setTCVisible(true)} style={{ color: "blue" }}>
            {" "}
            Ts+Cs
          </span>
          <input type="checkbox" onClick={handleCheck}></input>
        </p>
        {tcVisible && <TsAndCs />}
        <LoginButton disabled={isDisabled} />
      </div>
    </div>
  );
}

export default IntroductionMain;
