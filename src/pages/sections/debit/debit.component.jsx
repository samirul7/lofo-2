import React from "react";
import "./debit.styles.scss";

import LostDebit from "../../../components/sections/debit/lost-debit/lost-debit.component";
import FoundDebit from "../../../components/sections/debit/found-debit/found-debit.component";

const DebitPage = () => (
  <div className="debit">
    <LostDebit />
    <FoundDebit />
  </div>
);

export default DebitPage;
