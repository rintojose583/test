import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { IsAuthProvider } from "./contex/Auth.jsx";

import { store } from "./redux/store.js";
import { Provider } from "react-redux";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <IsAuthProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </IsAuthProvider>
  </BrowserRouter>
);
