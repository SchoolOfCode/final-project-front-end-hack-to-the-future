import React from "react";
import NavMenu from "../NavMenu/index";
import css from "./Header.module.css"

function Header() {
  return (
    <div className={css.headerContainer}>
      <NavMenu />
    </div>
  );
}

export default Header;
