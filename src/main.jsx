import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { Store } from "./redux/Store";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Provider store={Store}>
      {/* <ToastContainer> */}
      <App />
      <Toaster />
      {/* </ToastContainer> */}
    </Provider>
  </BrowserRouter>
);
