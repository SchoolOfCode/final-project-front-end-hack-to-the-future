import React from "react";
import Button from "../Button/index";
import DateSelector from "../FilterComponent/DateSelector";
import { FormControl, FormHelperText, TextField } from "@mui/material";
// import cancel from '../../theme'
// import create from '../../theme'
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DateTimePicker from "@mui/lab/DateTimePicker";

// Material UI variables to customize the Create & Cancel Buttons
let cancel = createTheme({
  palette: {
    primary: {
      main: "#006D77",
    },
    secondary: {
      main: "#E29578",
    },
  },
});

let create = createTheme({
  palette: {
    primary: {
      main: "#E29578",
    },
    secondary: {
      main: "#006D77",
    },
  },
});

// Date & Time Picker component
function DateAndTimePicker() {
  const [value, setValue] = React.useState(new Date("2014-08-18T21:11:54"));

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DateTimePicker
        label="Date and Time picker"
        value={value}
        onChange={handleChange}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
}

// Form card
export default function Form() {
  function handleSubmit(e) {
    e.preventDefault();
    console.log(e);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <FormControl>
          <TextField
            sx={{
              width: 400,
            }}
            id="location"
            label="Location"
            variant="outlined"
            required
          />
          <DateAndTimePicker required />
          <TextField
            sx={{
              width: 400,
            }}
            id="activity-type"
            label="Activity Type"
            variant="outlined"
            required
          />
          <TextField
            sx={{
              width: 400,
            }}
            id="activity-description"
            label="Description"
            variant="outlined"
            required
          />
          <TextField
            type="number"
            inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
            sx={{
              width: 400,
            }}
            id="activity-max-attendees"
            label="Maximum Attendees"
            variant="outlined"
            required
          />

          <ThemeProvider theme={cancel}>
            <Button button={"Cancel"} />
          </ThemeProvider>
          <ThemeProvider theme={create}>
            <Button type="submit" button={"Create"} />
          </ThemeProvider>

          <FormHelperText id="my-helper-text">
            Please enter the details
          </FormHelperText>
        </FormControl>
      </form>
    </div>
  );
}
