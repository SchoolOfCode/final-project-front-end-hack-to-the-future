import * as React from "react";
import Button from "@mui/material/Button";
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
        <MenuItem onClick={handleClose}>
          <Link to="/">Home</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link to="/view-activities">View Activities</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link to="/create-activity">Create an Activity</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link to="/interest-activities">Interest List</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link to="/activity-calendar">Activity Calendar</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link to="/terms-and-conditions">Terms and Conditions</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <LogoutButton />
        </MenuItem>{" "}
        {/*Add log out route */}
      </Menu>
    </div>
  );
}
