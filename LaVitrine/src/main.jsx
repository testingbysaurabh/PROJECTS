import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { MyContext } from "./Utlity/MyContext.jsx";
import Store from "./Utlity/Store.js";
import { Provider } from "react-redux";
BrowserRouter;
MyContext;

createRoot(document.getElementById("root")).render(
  <Provider store={Store}>
    <MyContext>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </MyContext>
  </Provider>
);
