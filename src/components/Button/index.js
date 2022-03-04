import React from "react";
import { Button } from "@mui/material";

export default function CardButton({ button, theme, type, onClick }) {
  return (
    <div>
      <Button
        type={type}
        variant="contained"
        onClick={onClick}
        data-testid="button"
      >
        {button}
        {theme}
      </Button>
    </div>
  );
}
