import React, { useEffect } from "react";
import { useState } from "react";
import Button from "../Button/index";
//import DateSelector from "../FilterComponent/DateSelector";
import { FormControl, FormHelperText, TextField } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
//import { createTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";
import css from "./Form.module.css";
import {buttonsTheme} from "../../HelperFunctions";
import { padding } from "@mui/system";

//import AdapterDateFns from "@mui/lab/AdapterDateFns";
//import LocalizationProvider from "@mui/lab/LocalizationProvider";
//import DateTimePicker from "@mui/lab/DateTimePicker";

// Material UI variables to customize the Create & Cancel Buttons
// let cancel = createTheme({
//   palette: {
//     primary: {
//       main: "#006D77",
//     },
//     secondary: {
//       main: "#E29578",
//     },
//   },
// });

// let create = createTheme({
//   palette: {
//     primary: {
//       main: "#E29578",
//     },
//     secondary: {
//       main: "#006D77",
//     },
//   },
// });

// Form card
export default function Form({ user_id }) {
  // useState to check if submit button has been pressed and trigger request
  const [submittedValues, setSubmittedValues] = useState();

  function handleSubmit(e) {
    e.preventDefault();
    setSubmittedValues({
      location_name: e.target.location.value,
      max_attendees: e.target.activityMaxAttendees.value,
      date_time: e.target.activityTime.value,
      description: e.target.activityDescription.value,
      type: e.target.activityType.value,
    });
    e.target.reset();
  }
  useEffect(() => {
    const createActivity = async () => {
      const requestBody = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: user_id,
        },
        body: JSON.stringify(submittedValues),
      };
      const response = await fetch(
        // link to be changed
        "https://activity-app-backend.herokuapp.com/activities",
        requestBody
      );
      const data = await response.json();
      console.log(data);
      alert(data.success ? "Activity created" : "Sorry there was an error");
      setSubmittedValues(null);
    };

    if (submittedValues && user_id) {
      createActivity();
    }
  }, [submittedValues, user_id]);

  return (
    <div className={css.formContainer}>
      <h2>Create an Event</h2>
      <form onSubmit={handleSubmit}>
        <FormControl className={css.formControl}>
          <TextField
            sx={{ bgcolor: "white" }}
            className={css.Input}
            // sx={{
            //   width: 100%,
            // }}
            id="location"
            name="location"
            label="Location"
            variant="outlined"
            required
          />

          <input
            className={css.input}
            type="datetime-local"
            id="activityTime"
            name="activityTime"
            required
          ></input>
          <select
            className={css.input}
            id="activityType"
            name="activityType"
            defaultValue="defaultValue"
            required
          >
            <option value="defaultValue" disabled>
              --Please choose an activity type--
            </option>
            <option value="arts/crafts">Arts/Crafts</option>
            <option value="cafe">Cafe</option>
            <option value="cinema">Cinema</option>
            <option value="cycle">Cycle</option>
            <option value="gallery">Gallery</option>
            <option value="karaoke">Karaoke</option>
            <option value="museum">Museum</option>
            <option value="restaurant">Restaurant</option>
            <option value="run">Run</option>
            <option value="swim">Swim</option>
            <option value="tennis">Tennis</option>
            <option value="theatre">Theatre</option>
            <option value="walk">Walk</option>
            <option value="other">Other</option>
          </select>

          <TextField
            sx={{ mt: "1rem", bgcolor: "white" }}
            className={css.input}
            id="activityDescription"
            name="activityDescription"
            label="Description"
            variant="outlined"
            required
          />
          <TextField
            sx={{ mt: "1rem", bgcolor: "white" }}
            className={css.input}
            type="number"
            inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
            id="activityMaxAttendees"
            name="activityMaxAttendees"
            label="Maximum Attendees"
            variant="outlined"
            required
          />
          <div className={`${css.buttons} flex-horizontal`}>
            <ThemeProvider theme={buttonsTheme.cancel}>
              <Link to="/">
                <Button button={"Cancel"} />
              </Link>
            </ThemeProvider>
            <ThemeProvider theme={buttonsTheme.create}>
              <Button type="submit" button={"Create"} />
            </ThemeProvider>
          </div>
        </FormControl>
      </form>
    </div>
  );
}
