import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import MainFunProvider from "./Provider/MainFunProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MainFunProvider>
      <App />
    </MainFunProvider>
  </React.StrictMode>
);
