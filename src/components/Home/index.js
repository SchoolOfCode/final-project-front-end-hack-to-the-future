import logo from "../../images/logo.png";
import createActivityImage from "../../images/create-activity.jpg";
import viewActivitiesImage from "../../images/view-activities.jpg";
import React from "react";
import ButtonMainAction from "../ButtonMainAction/index";
import css from "./Home.module.css";
import Loading from "../LoadingComponent";

function Home() {
  return (
    <div className={`${css.homeContainer} flex-vertical`}>
      <div className={css.logoContainer}>
        <img src={logo} alt="Apptivity logo" />
      </div>
      <div className={`${css.mainButtons} flex-horizontal`}>
        <ButtonMainAction
          id="buttonLeft"
          className={css.buttonAction}
          imagePath={createActivityImage}
          text="Create Activity"
          path={"/create-activity"}
        />
        <ButtonMainAction
          className={css.buttonAction}
          imagePath={viewActivitiesImage}
          text="View Activities"
          path={"/view-activities"}
        />
      </div>
    </div>
  );
}

export default Home;
