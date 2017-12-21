import React from "react";
import { render } from "react-dom";
import "./index.css";
import { configureStore } from "./configureStore";
import Root from "./Root";

const store = configureStore();

render(<Root store={store} />, document.querySelector("#root"));
