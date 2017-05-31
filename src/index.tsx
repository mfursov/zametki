import * as React from "react";
import * as ReactDOM from "react-dom";

import "./css/basics.css";
import "./css/bootstrap-theme.css";
import "./css/colors.css";
import "./css/font.css";
import "./css/home-page.css";
import "./css/margin.css";
import "./css/page.css";
import "./css/table.css";
import "./css/text.css";

import {HomePage} from "./containers/HomePage";

ReactDOM.render(
    <HomePage compiler="TypeScript" framework="React" />,
    document.getElementById("app")
);