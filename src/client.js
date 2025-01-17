import React from "react";
import styles from "./styles/nav-bar.scss";
import style from "./styles/homepage.scss";
import { loadableReady } from '@loadable/component'
import { hydrate } from "react-dom";

import {BrowserRouter} from "react-router-dom";
import App from "./react-client/components/app";
loadableReady(() => {
hydrate(<BrowserRouter><App /></BrowserRouter>, document.getElementById("root"))
})