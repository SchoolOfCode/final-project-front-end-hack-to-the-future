import React from "react";
import css from "./TsAndCs.module.css";
import { Link } from "react-router-dom";

function TsAndCs() {
  return (
    <div className={css.container}>
      <p>
        Apptivity Terms and Conditions <br></br>
        By using this app, you agree to the following: <br></br>
        <ul className={css.bullets}>
          <li> ▪️ Important </li>
          <li> ▪️ Legal </li>
          <li> ▪️ Information </li>
          <li> ▪️ Goes </li>
          <li> ▪️ Here </li>
          <li>
            {" "}
            ▪️ As with meeting up in person with anyone you've met online,
            always follow some basic safety guidelines. Some tips can be found
            <Link
              to="https://www.wikihow.com/Safely-Meet-a-Person-You-Met-Online"
              style={{ color: "blue" }}
            >
              {" "}
              here
            </Link>{" "}
          </li>
        </ul>
      </p>
    </div>
  );
}

export default TsAndCs;
