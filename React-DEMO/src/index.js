import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.css";
import App from "./App";
// import Counter from "./components/counter";
// import Counters from "./components/counters";

ReactDOM.render(<App />, document.getElementById("root"));
serviceWorker.unregister();
