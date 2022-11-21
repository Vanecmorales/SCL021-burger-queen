import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";
import "./media.css";
import AppRoutes from "./App-routes";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </React.StrictMode>
);
