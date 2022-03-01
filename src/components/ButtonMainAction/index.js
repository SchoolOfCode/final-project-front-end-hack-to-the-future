import React from "react";
import { Link } from "react-router-dom";

function ButtonMainAction({ text, path, imagePath }) {
  return (
    <section style={{ display: "inline-block", margin: "1rem" }}>
      <Link to={path}>
        <img src={imagePath} alt={text} />
        <p style={{ textDecoration: "none" }}>{text}</p>
      </Link>
    </section>
  );
}

export default ButtonMainAction;
