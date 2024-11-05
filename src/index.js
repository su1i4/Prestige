import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import Natification from "./shared/components/notification";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Natification>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Natification>
);
