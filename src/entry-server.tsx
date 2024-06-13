import React from "react";
import "./index.css";
import ReactDOMServer from "react-dom/server";

import MainRoutes from "./pages/index.tsx";
import { StaticRouter } from "react-router-dom/server";

interface IRenderProps {
  path: string;
}

export function render({ path }: IRenderProps) {
  const html = ReactDOMServer.renderToString(
    <React.StrictMode>
      <StaticRouter basename="/" location={path}>
        <MainRoutes />
      </StaticRouter>
    </React.StrictMode>
  );

  return { html };
}
