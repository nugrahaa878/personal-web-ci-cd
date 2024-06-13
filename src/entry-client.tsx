import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import MainRoutes from "./pages/index.tsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.hydrateRoot(
  document.getElementById("root") as HTMLElement,
  <React.StrictMode>
    <BrowserRouter basename="/">
      <MainRoutes />
    </BrowserRouter>
  </React.StrictMode>
);
