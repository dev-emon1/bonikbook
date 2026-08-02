import ReactDOM from "react-dom/client";

import App from "./App";

import { AppProvider } from "@/app/providers";

import "@/app/styles/globals.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <AppProvider>
    <App />
  </AppProvider>,
);
