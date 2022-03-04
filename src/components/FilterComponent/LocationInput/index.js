import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { ThemeProvider } from "@mui/material/styles";
import { buttonsTheme } from "../../../HelperFunctions";

export default function LocationInput() {
  return (
    <ThemeProvider theme={buttonsTheme.cancel}>
      <Box
        component="form"
        noValidate
        autoComplete="off"
        style={{ margin: "1rem" }}
      >
        <TextField
          sx={{
            width: 300,
          }}
          id="outlined-basic"
          label="City"
          variant="outlined"
        />
      </Box>
    </ThemeProvider>
  );
}
