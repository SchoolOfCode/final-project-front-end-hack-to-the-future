import React from "react";
import { Routes, Route } from "react-router-dom";
//import Introduction from '../Introduction/index'
import Home from "../Home/index";
import ViewActivities from "../ViewActivities/index";
import CreateActivity from "../CreateActivity/index";
import InterestActivities from "../InterestActivities/index";
import ActivityCalendar from "../ActivityCalendar/index";
import TsAndCs from "../TsAndCs";

function Main() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/view-activities" element={<ViewActivities />} />
        <Route path="/create-activity" element={<CreateActivity />} />
        <Route path="/interest-activities" element={<InterestActivities />} />
        <Route path="/activity-calendar" element={<ActivityCalendar />} />
        <Route path="/terms-and-conditions" element={<TsAndCs />} />
      </Routes>
    </main>
  );
}

export default Main;
