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
    hours = (hours -12) + hourstime.slice(2) + " pm";
  }

  return [date, hours];

}

