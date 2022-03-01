import React, { useState } from "react";
import logo from "../../images/logo.png";
import LoginButton from "../LoginPage/LoginButton";

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
    <div>
      <img src={logo} alt="" />
      <p>Insert intro to app here</p>
      <p>I have read the T&C's</p>
      <input type="checkbox" onClick={handleCheck}></input>
      <LoginButton disabled={isDisabled} />
    </div>
  );
}

export default IntroductionMain;
