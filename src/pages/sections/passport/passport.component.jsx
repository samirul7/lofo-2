import React from "react";
import "./passport.styles.scss";

import LostPassport from "../../../components/sections/passport/lost-passport/lost-passport.component";
import FoundPassport from "../../../components/sections/passport/found-passport/found-passport.component";

const PassportPage = () => (
  <div className="passport">
    <LostPassport />
    <FoundPassport />
  </div>
);

export default PassportPage;
