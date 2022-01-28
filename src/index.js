import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import App from "./components/App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

let styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    height: "100%",
  },
  title: {
    marginLeft: 50,
    marginRight: 10,
    fontSize: 35,
  },
  h2: {
    color: "#146356",
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "left",
    backgroundColor: "#5f945d",
    width: "100%",
    height: 60,
    paddingRight: 20,
    alignItems: "center",
    color: "#fff",
  },
  letterB: {
    backgroundColor: "#146356",
    padding: 3,
  },
};
