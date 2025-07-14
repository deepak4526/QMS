import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

// Create a simple initial store
// You'll need to replace this with your actual reducers
const store = configureStore({
  reducer: {
    auth_store: (state = { is_Login: true, role: "user" }) => {
      // Simple placeholder reducer
      return state;
    },
  },
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
