import "./index.css";
import React from "react";
import { render } from "react-dom";
import { Home } from "./pages/Home";
import vanillaDevice from "vanilla-device";

vanillaDevice.setFocusTouchScroll();

render(<Home />, document.getElementById("root"));
