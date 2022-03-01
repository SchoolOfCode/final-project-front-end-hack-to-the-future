import logo from '../../images/logo.png';
import createActivityImage from '../../images/create-activity.jpg'
import viewActivitiesImage from "../../images/view-activities.jpg";
import React from 'react'
import ButtonMainAction from '../ButtonMainAction/index'

function Home() {
  return (
    <div>
      <div className="logo">
        <img src={logo} alt="Apptivity logo" />
      </div>
      <ButtonMainAction
        imagePath={createActivityImage}
        text="Create Activity"
        path={"/create-activity"}
      />
      <ButtonMainAction
        imagePath={viewActivitiesImage}
        text="View Activities"
        path={"/view-activities"}
      />
    </div>
  );
}

export default Home