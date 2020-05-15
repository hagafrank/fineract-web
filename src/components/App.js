import React from "react";
import { IntlProvider } from "react-intl";
import locale_en from "../translations/en.json";
import locale_es from "../translations/es.json";
import { Route, Switch } from "react-router-dom";
import Home from "./home/Home";
import Centers from "./centers/Centers";
import Clients from "./clients/Clients";
import Groups from "./groups/Groups";
import Header from "./headers/Header";

const data = {
  en: locale_en,
  es: locale_es
};

const language = navigator.language.split(/[-_]/)[0];

function App() {
  return (
    <IntlProvider local={language} messages={data[language]}>
      <div className="container-fluid">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/clients" component={Clients} />
          <Route path="/groups" component={Groups} />
          <Route path="/centers" component={Centers} />
        </Switch>
      </div>
    </IntlProvider>
  );
}

export default App;
