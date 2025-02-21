import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

import "./styles/reset.css";
import "./styles/fonts.css";
import "./styles/variables.css";
import "./styles/index.css";
import { MantineProvider } from "@mantine/core";
import Attribution from "./components/common/attribution/attribution.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MantineProvider>
      <App />
    </MantineProvider>
    <Attribution />
  </React.StrictMode>
);
