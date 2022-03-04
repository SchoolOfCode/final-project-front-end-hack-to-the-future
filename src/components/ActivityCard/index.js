import React from "react";
// import activityImage from "../../images/Activities/tennis.jpg";
import artCraftImg from "../../images/Activities/art-craft.jpg";
import artGalleryImg from "../../images/Activities/art-gallery.jpg";
import cafeImg from "../../images/Activities/cafe.jpg";
import cinemaImg from "../../images/Activities/cinema.jpg";
import cycleImg from "../../images/Activities/cycle.jpg";
import otherImg from "../../images/Activities/other.jpg";
import karaokeImg from "../../images/Activities/karaoke.jpg";
import restaurantImg from "../../images/Activities/restaurant.jpg";
import runImg from "../../images/Activities/run.jpg";
import swimImg from "../../images/Activities/swim.jpg";
import tennisImg from "../../images/Activities/tennis.jpg";
import theatreImg from "../../images/Activities/theatre.jpg";
import walkImg from "../../images/Activities/walk.jpg";
import museumImg from "../../images/Activities/museum.jpg";
import Button from "../Button";
import { converDateTime } from "../../HelperFunctions";
import { ThemeProvider } from "@mui/material/styles";

import css from "./ActivityCard.module.css";

function ActivityCard({ activity, leftButton, rightButton }) {
  const [date, time] = converDateTime(activity.date_time);

  let image;
  switch (activity.type) {
    case "arts/crafts":
      image = artCraftImg;
      break;
    case "cafe":
      image = cafeImg;
      break;
    case "cinema":
      image = cinemaImg;
      break;
    case "cycle":
      image = cycleImg;
      break;
    case "gallery":
      image = artGalleryImg;
      break;
    case "karaoke":
      image = karaokeImg;
      break;
    case "museum":
      image = museumImg;
      break;
    case "restaurant":
      image = restaurantImg;
      break;
    case "run":
      image = runImg;
      break;
    case "swim":
      image = swimImg;
      break;
    case "tennis":
      image = tennisImg;
      break;
    case "theatre":
      image = theatreImg;
      break;
    case "walk":
      image = walkImg;
      break;
    case "other":
      image = otherImg;
      break;
    default:
    // do nothing
  }
  return (
    <div className={css.card}>
      <div className={css.imageFrame}>
        <img src={image} alt={activity.type} />
        {/* <img src={activityImage} alt="activity representation" /> */}
      </div>
      <h3>{activity.type}</h3>
      <div className={css.descriptionContainer}>{activity.description}</div>
      <div className={css.spanned}>
        <span>
          <b>Location: </b>
          {activity.location_name}
        </span>
        <span>
          {" "}
          <b>Max attendees: </b>
          {activity.max_attendees}
        </span>
      </div>
      <div className={css.spanned}>
        <span>
          <b>Date: </b>
          {date}
        </span>
        <span>
          <b>Time: </b>
          {time}
        </span>
      </div>
      <div className={`${css.buttonsContainer} flex-horizontal`}>
        {leftButton && (
          <ThemeProvider theme={leftButton.theme}>
            <Button button={leftButton.text} onClick={leftButton.onClick} />
          </ThemeProvider>
        )}
        {rightButton && (
          <ThemeProvider theme={rightButton.theme}>
            <Button button={rightButton.text} onClick={rightButton.onClick} />
          </ThemeProvider>
        )}
      </div>
    </div>
  );
}

export default ActivityCard;
