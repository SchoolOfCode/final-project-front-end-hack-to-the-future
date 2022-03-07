import React, { useState } from "react";
import css from "./SuccessFetch.module.css";

function Success({ success, setSuccess }) {
  // const [displayBlock, setDisplayBlock] = useState(false);
  // console.log(displayBlock);
  // let text = "";
  // const success = false;
  // success ? setDisplayBlock(true) : setDisplayBlock(false);

  // // }else if (success === false) {
  // //   text = "request denied";
  // //   setDisplay(true);
  // // }

  return (
    <div
      className={
        success
          ? `${css.successContainer} display`
          : `${css.successContainer} noDisplay`
      }
    >
      {/* <div className={`${css.successContainer} display`} > */}
      <p>
        {success
          ? "Thanks for confirming your attendance 😀"
          : "Something went wrong 😞 please try again"}
      </p>
      <button onClick={() => setSuccess(null)}>Close</button>
    </div>
  );
}

export default Success;
