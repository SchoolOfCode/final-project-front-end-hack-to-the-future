import React from "react";
import css from "./TsAndCs.module.css";

function TsAndCs() {
  return (
    <div className={css.container}>
      <p className={css.tC}>Apptivity Terms and Conditions </p>
      <p className={css.leftAlign}>
        By using this app, you agree to the following:
      </p>
      <ul className={css.leftAlign}>
        <li> ▪️ Important </li>
        <li> ▪️ Legal </li>
        <li> ▪️ Information </li>
        <li> ▪️ Goes </li>
        <li> ▪️ Here </li>
        <li>
          {" "}
          ▪️ As with meeting up in person with anyone you've met online, always
          follow some basic safety guidelines. Some tips can be found
          <a
            href={"https://www.wikihow.com/Safely-Meet-a-Person-You-Met-Online"}
            target="_blank"
            rel="noreferrer"
            style={{ color: "blue" }}
          >
            {" "}
            here
          </a>{" "}
        </li>
      </ul>
    </div>
  );
}

export default TsAndCs;
