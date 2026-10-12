// This is the entry point for the app.
//like flutter's main.dart file, it is the first file that is executed when the app is run.
//like flutter: dealing with the root widget, 
// in react it is dealing with the root div in the index.html file.
//the widget in flutter is like the component in react,
//the root widget in flutter is like the root component in react,
//the root widget in flutter is like the root div in react,
//the root widget in flutter is like the root div in index.html file in react.

//this file is responsible for rendering the App component into the root div in the index. html file.
//it is like importing package:flutter/material.dart; 
// in flutter, it is the first file that is executed when the app is run.
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
//import the App component from the App.jsx file.
import "./index.css";
//the is main script file that is responsible for rendering the App component 
// into the root div in the index.html file.
import App from "./App";
//the createRoot function is used to create a root for the React app.
//App is the main screen of the app, it is like the screen.dart file in flutter.
//the StrictMode component is used to enable strict mode for the React app.
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
