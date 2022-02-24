import React from "react";
import { Button } from "@mui/material";

export default function CardButton({ button, theme, type }) {
  return (
    <div>
      <Button type={type} variant="contained">
        {button}
        {theme}
      </Button>
    </div>
  );
}
