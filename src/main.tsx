import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import "@fontsource/noto-sans"; // Defaults to weight 400
import "@fontsource/noto-sans/400.css"; // Specify weight
import "@fontsource/noto-sans/600.css"; // Specify weight
import "@fontsource/noto-sans/800.css"; // Specify weight
import "@fontsource/noto-sans/400-italic.css";

import MainRoutes from "./pages/index.tsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter basename="/personal-web-ci-cd">
      <MainRoutes />
    </BrowserRouter>
  </React.StrictMode>
);
