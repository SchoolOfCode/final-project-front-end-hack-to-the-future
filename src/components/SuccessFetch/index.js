import React, { useState } from "react";
import css from "./SuccessFetch.module.css";

function Success({success}) {

   const [displayBlock, setDisplayBlock] = useState(true);
   console.log(displayBlock); 
  // let text = "";
  // const success = false;
  // success? setDisplayBlock(true) : setDisplayBlock(false);
 
  // // }else if (success === false) {
  // //   text = "request denied";
  // //   setDisplay(true);
  // // }

  return (
    // <div className={displayBlock ? `${css.successContainer} display` : `${css.successContainer} noDisplay`} >
    <div className={`${css.successContainer} display`} >
      
      <span>"this is oir essage"</span><p>{success}</p>
      {/* <button onClick={()=> setDisplay(false)}>Close</button> */}
    </div>
  );
}

export default Success;
