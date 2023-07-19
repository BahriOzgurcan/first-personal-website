import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import LanguagePreferenceProvider from "./contexts/languageContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <LanguagePreferenceProvider>
        <App />
      </LanguagePreferenceProvider>
  </React.StrictMode>
);
