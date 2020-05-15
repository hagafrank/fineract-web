import React from "react";
import PropTypes from "prop-types";
import { IntlProvider } from "react-intl";
import messages from "../../../src/translations/en.json";
import { render as rtlRender } from "@testing-library/react";

const props = { locale: "en", messages };
function render(ui, { ...renderOptions } = {}) {
  function wrapper({ children }) {
    return <IntlProvider {...props}>{children}</IntlProvider>;
  }

  wrapper.propTypes = {
    children: PropTypes.object.isRequired
  };
  return rtlRender(ui, { wrapper, ...renderOptions });
}

export * from "@testing-library/react";

export { render };
