import React from "react";
import { Link } from "react-router-dom";
import css from "./ButtonMainAction.module.css";

function ButtonMainAction({ text, path, imagePath }) {
  return (
    <section className={css.buttonMainContainer}>
      <Link to={path}>
        <img src={imagePath} alt={text} className={css.buttonImage} />
        <p className={css.buttonText}>{text}</p>
      </Link>
    </section>
  );
}

export default ButtonMainAction;
