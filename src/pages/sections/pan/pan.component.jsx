import React from "react";
import "./pan.styles.scss";

import LostPan from "../../../components/sections/pan/lost-pan/lost-pan.component";
import FoundPan from "../../../components/sections/pan/found-pan/found-pan.component";

const PanPage = () => (
  <div className="pan">
    <LostPan />
    <FoundPan />
  </div>
);

export default PanPage;
