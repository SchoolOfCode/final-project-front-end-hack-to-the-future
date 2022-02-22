import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import DropdownMenu from "./DropdownMenu";
import { Link } from "react-router-dom";

import logo from "../../logo-removebg-preview.png";

export default function NavMenu() {
  return (
    <Box sx={{ flexGrow: 1,  }}>
      <AppBar
        position="static"
      >
        <Toolbar>
          <Button color="inherit">
            <Link to="/">
              <img src={logo} alt="apptivity logo" />
            </Link>
          </Button>
          <Box sx={{ flexGrow: 1 }}></Box>
          <DropdownMenu />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
