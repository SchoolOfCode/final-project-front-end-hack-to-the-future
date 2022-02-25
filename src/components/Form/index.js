import React, { useEffect } from "react";
import { useState } from "react";
import Button from "../Button/index";
//import DateSelector from "../FilterComponent/DateSelector";
import { FormControl, FormHelperText, TextField } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
import {Link} from "react-router-dom";
//import AdapterDateFns from "@mui/lab/AdapterDateFns";
//import LocalizationProvider from "@mui/lab/LocalizationProvider";
//import DateTimePicker from "@mui/lab/DateTimePicker";

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

// Form card
export default function Form() {
  // useState to check if submit button has been pressed and trigger request
  const [submittedValues, setSubmittedValues] = useState();
  console.log(submittedValues);
  function handleSubmit(e) {
    e.preventDefault();
    setSubmittedValues({
      location_name: e.target.location.value,
      max_attendees: e.target.activityMaxAttendees.value,
      date_time: e.target.activityTime.value,
      description: e.target.activityDescription.value,
      type: e.target.activityType.value,
    });
  }
  useEffect(() => {
    const createActivity = async () => {
      const requestBody = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          organiser_id: "3",
          ...submittedValues,
        }),
      };
      const response = await fetch(
        // link to be changed
        "https://activity-app-backend.herokuapp.com/activities",
        requestBody
      );
      const data = await response.json();
      console.log(data);
    };

    if (submittedValues) {
      createActivity();
    }
  }, [submittedValues]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <FormControl>
          <TextField
            sx={{
              width: 400,
            }}
            id="location"
            name="location"
            label="Location"
            variant="outlined"
            required
          />
          {/* <DateAndTimePicker
            value={dateTimeValue}
            onChange={(newDateValue) => setDateTimeValue(newDateValue)}
            id="dateTime"
            name="dateTime"
            label="Date Time"
            variant="outlined"
            required
          /> */}

          <input
            type="datetime-local"
            id="activityTime"
            name="activityTime"
            required
          ></input>
          <select
            id="activityType"
            name="activityType"
            defaultValue="defaultValue"
            required
          >
            <option value="defaultValue" disabled>
              --Please choose an activity type--
            </option>
            <option value="walk">Walk</option>
            <option value="swim">Swim</option>
            <option value="tennis">Tennis</option>
          </select>

          {/* <TextField
            sx={{
              width: 400,
            }}
            id="activityType"
            name="activityType"
            label="Activity Type"
            variant="outlined"
            required
          /> */}
          <TextField
            sx={{
              width: 400,
            }}
            id="activityDescription"
            name="activityDescription"
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
            id="activityMaxAttendees"
            name="activityMaxAttendees"
            label="Maximum Attendees"
            variant="outlined"
            required
          />

          <ThemeProvider theme={cancel}>
            <Link to="/">
              <Button button={"Cancel"} />
            </Link>
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
