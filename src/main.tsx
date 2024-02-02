import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import "@fontsource/noto-sans"; // Defaults to weight 400
import "@fontsource/noto-sans/400.css"; // Specify weight
import "@fontsource/noto-sans/400-italic.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
