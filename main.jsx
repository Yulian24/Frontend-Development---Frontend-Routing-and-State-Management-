import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { RecipeProvider } from "./context/RecipeContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <RecipeProvider>
    <App />
  </RecipeProvider>
);  