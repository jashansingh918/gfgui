import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom"; //the things which are not not a default export need to be wrapped in {} brackets
import { Provider } from "react-redux";
import { configureStore } from "./AppState";
import "./firebaseSetup";
import UserProvider from "./UserProvider";

ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <BrowserRouter>
        <Provider store={configureStore}>
          <App />
        </Provider>
      </BrowserRouter>
    </UserProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
//browswer router will give routing capabilities to app component

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();