import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BooksStoreProvider } from "./contexts/BooksContext";
import { ThemeStoreProvider } from "./contexts/ThemeContext";

ReactDOM.render(
  <ThemeStoreProvider>
    <BooksStoreProvider>
      <App />
    </BooksStoreProvider>
  </ThemeStoreProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
