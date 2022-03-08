import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { ThemeProvider } from "@mui/material/styles";
import { buttonsTheme } from "../../../HelperFunctions";

export default function LocationInput({ handleLocationChange }) {
  return (
    <ThemeProvider theme={buttonsTheme.cancel}>
      <Box
        component="form"
        noValidate
        autoComplete="off"
        style={{ margin: "1rem" }}
      >
        <TextField
          onChange={(e) => handleLocationChange(e.target.value)}
          sx={{
            width: 300,
            mt: "1rem",
            bgcolor: "white",
          }}
          id="outlined-basic"
          label="City"
          variant="outlined"
        />
      </Box>
    </ThemeProvider>
  );
}
