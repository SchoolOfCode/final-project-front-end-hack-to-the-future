import * as React from "react";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import { ThemeProvider } from "@mui/material/styles";
import { buttonsTheme } from "../../../HelperFunctions";

export default function DateSelector({ handleDateChange }) {
  const [value, setValue] = React.useState(null);

  return (
    <ThemeProvider theme={buttonsTheme.cancel}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          // style={{ margin: "1rem" }}
          label="Date"
          value={value}
          type="datetime-local"
          minDate={new Date()}
          onChange={(newValue) => {
            setValue(newValue);
            handleDateChange(newValue); // send date in YYYY-MM-DD format
          }}
          renderInput={(params) => (
            <TextField
              sx={{
                width: 300,
                mt: "1rem",
                bgcolor: "white",
              }}
              // sx={{
              //     width: 400,
              // }}
              {...params}
            />
          )}
        />
      </LocalizationProvider>
    </ThemeProvider>
  );
}
