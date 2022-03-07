import React, { useState } from "react";
import css from "./SuccessFetch.module.css";

function Success() {
  const [displayBlock, setDisplayBlock] = useState(false);
  console.log(displayBlock); 
  let text = "";
  const success = false;
  success? setDisplayBlock(true) : setDisplayBlock(false);
 
  // }else if (success === false) {
  //   text = "request denied";
  //   setDisplay(true);
  // }

  return (
    <div className={displayBlock ? `${css.successContainer} display` : `${css.successContainer} noDisplay`} >
      <p>{text}</p>
      {/* <button onClick={()=> setDisplay(false)}>Close</button> */}
    </div>
  );
}

export default Success;
