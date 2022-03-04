import React from "react";
import { Routes, Route } from "react-router-dom";
//import Introduction from '../Introduction/index'
import Home from "../Home/index";
import ViewActivities from "../ViewActivities/index";
import CreateActivity from "../CreateActivity/index";
import InterestActivities from "../InterestActivities/index";
import ActivityCalendar from "../ActivityCalendar/index";

import TsAndCs from "../TsAndCs"
import css from "./Main.module.css";


function Main({ user_id }) {
  return (
    <main className={css.mainContainer}>
      <Routes>
        <Route path="/" element={<Home user_id={user_id} />} />
        <Route
          path="/view-activities"
          element={<ViewActivities user_id={user_id} />}
        />
        <Route
          path="/create-activity"
          element={<CreateActivity user_id={user_id} />}
        />
        <Route
          path="/interest-activities"
          element={<InterestActivities user_id={user_id} />}
        />
        <Route
          path="/activity-calendar"
          element={<ActivityCalendar user_id={user_id} />}
        />
                <Route
                  path="/terms-and-conditions"
                  element={<TsAndCs />}
                />{" "}
              </Routes>
    </main>
  );
}

export default Main;
