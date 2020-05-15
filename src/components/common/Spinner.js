import React from "react";
import "./Spinner.css";
import { FormattedMessage } from "react-intl";

const Spinner = () => {
  return (
    <div className="loader">
      <FormattedMessage id="loading" />
    </div>
  );
};

export default Spinner;
