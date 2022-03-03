import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import DropdownMenu from "./DropdownMenu";
import { Link } from "react-router-dom";
import css from "./NavMenu.module.css";
import logo from "../../logo-removebg-preview.png";

export default function NavMenu() {
  return (
    <Box sx={{ flexGrow: 1,  }}>
      <AppBar
        position="static"
      >
        <Toolbar>
          <div className={css.logoContainer}>
            <Link to="/">
              <img src={logo} alt="apptivity logo" />
            </Link>
          </div>
          <Box sx={{ flexGrow: 1 }}></Box>
          <DropdownMenu />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
