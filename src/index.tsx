import React from "react";
import ReactDOM from "react-dom/client";

//_______REACR-ROUTER-DOM
import { BrowserRouter } from "react-router-dom";
//_______REDUX
import { store } from "./redux/store";
import { Provider } from "react-redux";

import App from "./App";

const rootElem = document.getElementById("root");
if (rootElem) {
  const root = ReactDOM.createRoot(rootElem);
  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </React.StrictMode>
  );
}
