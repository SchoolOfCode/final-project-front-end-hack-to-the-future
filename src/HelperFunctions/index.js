import { createTheme } from "@mui/material/styles";

export function converDateTime(dateTime) {
  const [date, time] = dateTime.split("T");
  const hourstime = time.slice(0, 5);

  //number between 0 - 24
  //if 12 / +pm
  //0 - 11 leave it at it is/ + am
  //13 - 23 do - 12 / +pm

  let hours = Number(hourstime.slice(0, 2));
  if (hours === 12) {
    hours = hours + hourstime.slice(2) + " pm";
  } else if (hours >= 0 && hours < 12) {
    hours = hours + hourstime.slice(2) + " am";
  } else {
    hours = hours - 12 + hourstime.slice(2) + " pm";
  }

  return [date, hours];
}

export function convertActivitiesToEvents(activity) {
  function Add2hours() {
    // first to get the hours character
    // convert those character to number
    // if are 22 or 23 ( return 00 or 01)
    // if not add 2 to the that number
    // replace it back into the string

    const timeString = activity.date_time;
    let newTime;
    const startTime = Number(timeString.slice(11, 13));

    switch (startTime) {
      case 22:
        newTime = "00";
        break;
      case 23:
        newTime = "01";
        break;
      default:
        newTime = startTime + 2;
    }

    return timeString.slice(0, 11) + newTime.toString() + timeString.slice(13);
  }

  return {
    id: activity.activity_id,
    startAt: activity.date_time,
    endAt: Add2hours(),
    timezoneStartAt: "Europe/Berlin", // optional
    summary: activity.description,
    color: "red",
    calendarID: "work",
    location_name: activity.location_name,
    organiser_id: activity.organiser_id,
    max_attendees: activity.max_attendees,
    type: activity.type,
    user_id: activity.user_id,
    user_name: activity.user_name,
    email: activity.email,
  };
}

export function convertData(activity) {
  return {
    activity_id: activity.id,
    organiser_id: activity.organiser_idganiser_id,
    max_attendees: activity.max_attendees,
    date_time: activity.startAt,
    location_name: activity.location_name,
    type: activity.type,
    description: activity.summary,
    user_name: activity.user_name,
    email: activity.email,
    user_id: activity.user_id,
  };
}

export function removeActivity(array, id, setFuntion) {
  const index = array.findIndex((activity) => activity.activity_id === id);
  console.log(index);
  const newActivities = [...array.slice(0, index), ...array.slice(index + 1)];
  setFuntion(newActivities);
}

export const buttonsTheme = {
  cancel: createTheme({
    palette: {
      primary: {
        main: "#006D77",
      },
      secondary: {
        main: "#E29578",
      },
    },
  }),

  create: createTheme({
    palette: {
      primary: {
        main: "#E29578",
      },
      secondary: {
        main: "#006D77",
      },
    },
  }),
};
