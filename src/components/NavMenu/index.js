import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import DropdownMenu from "./DropdownMenu";

export default function NavMenu() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit">Home</Button>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            apptivity
          </Typography>
          <DropdownMenu />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
