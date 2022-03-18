import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { UserAuthContextProvider } from "./context/userAuthContext";
import "./style/main.css";

ReactDOM.render(
  <React.StrictMode>
    <UserAuthContextProvider>
      <App />
    </UserAuthContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
