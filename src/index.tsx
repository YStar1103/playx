import React from "react";
import { render } from "react-dom";
import { Playx } from "./playx"
import * as serviceWorker from "./serviceWorker"
import { IonApp } from "@ionic/react";
import "@ionic/react/css/core.css";
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

const App = () => (
  <IonApp>
    <Playx />
  </IonApp>
);

render(<App />, document.getElementById("root"));

serviceWorker.unregister();
