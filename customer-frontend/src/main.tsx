import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import App from "./App";
import "./index.css";

import { store } from "./store/store";
import { ThemeProvider } from "./providers/ThemeProvider";
import AppClerkProvider from "./providers/ClerkProvider";

ReactDOM.createRoot(document.getElementById("root")!).render(
 <AppClerkProvider>
    <React.StrictMode>
        <Provider store={store}>
          <ThemeProvider>
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </ThemeProvider>
        </Provider>
      </React.StrictMode>
  </AppClerkProvider>
);