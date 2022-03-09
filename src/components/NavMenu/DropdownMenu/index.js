import * as React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import LogoutButton from "../../LoginPage/LogoutButton";

import { Link } from "react-router-dom";

export default function DropdownMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        id="menu-button"
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 2 }}
        onClick={handleClick}
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
      >
        <MenuIcon />
      </IconButton>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "menu-button",
        }}
      >
        <Link to="/">
          <MenuItem onClick={handleClose}>Home</MenuItem>
        </Link>
        <Link to="/view-activities">
          <MenuItem onClick={handleClose}>View Activities</MenuItem>
        </Link>
        <Link to="/create-activity">
          <MenuItem onClick={handleClose}>Create an Activity</MenuItem>
        </Link>
        <Link to="/interest-activities">
          <MenuItem onClick={handleClose}>Interest List</MenuItem>
        </Link>
        <Link to="/activity-calendar">
          <MenuItem onClick={handleClose}>Activity Calendar</MenuItem>
        </Link>
        <Link to="/terms-and-conditions">
          <MenuItem onClick={handleClose}>Terms and Conditions</MenuItem>
        </Link>
        <MenuItem onClick={handleClose}>
          <LogoutButton />
        </MenuItem>{" "}
      </Menu>
    </div>
  );
}
