import React from "react";
import ReactDOM from "react-dom/client";

import { AppRouter } from "./app/router";
import { DemoProvider } from "./app/DemoContext";
import "./styles/index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <DemoProvider>
      <AppRouter />
    </DemoProvider>
  </React.StrictMode>,
);
