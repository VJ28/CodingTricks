import React from "react";
import styles from "./styles/nav-bar.scss";
import { hydrate } from "react-dom";

import {BrowserRouter} from "react-router-dom";
import App from "./react-client/components/app";

hydrate(<BrowserRouter><App /></BrowserRouter>, document.getElementById("root"));