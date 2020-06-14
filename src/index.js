import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { FirebaseDatabaseProvider } from "@react-firebase/database";
import * as firebase from "firebase";

import App from "./App";
import * as serviceWorker from "./serviceWorker";

import "./index.css";

// Firebase Config
const config = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  projectId: process.env.REACT_APP_AUTH_URL,
  databaseURL: process.env.REACT_APP_FIREBASE_URL,
  authDomain: process.env.REACT_APP_AUTH_URL
};
console.log(config);
ReactDOM.render(
  <React.StrictMode>
    <FirebaseDatabaseProvider firebase={firebase} {...config}>
      <App />
    </FirebaseDatabaseProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
