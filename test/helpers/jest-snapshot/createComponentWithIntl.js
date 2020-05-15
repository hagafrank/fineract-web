import React from "react";
import { IntlProvider } from "react-intl";
import renderer from "react-test-renderer";
import messages from "../../../src/translations/en.json";

const createComponentWithIntl = (
  children,
  props = { locale: "en", messages }
) => {
  return renderer.create(<IntlProvider {...props}>{children}</IntlProvider>);
};

export default createComponentWithIntl;
