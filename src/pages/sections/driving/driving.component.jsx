import React from "react";
import "./driving.styles.scss";

import LostDriving from "../../../components/sections/driving/lost-driving/lost-driving.component";
import FoundDriving from "../../../components/sections/driving/found-driving/found-driving.component";

const DrivingPage = () => (
  <div className="driving">
    <LostDriving />
    <FoundDriving />
  </div>
);

export default DrivingPage;
