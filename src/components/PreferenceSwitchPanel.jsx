import { unstable_renderSubtreeIntoContainer } from "react-dom";
import { LanguageContext } from "../contexts/languageContext";
import { useContext, useEffect } from "react";


const PreferenceSwitchPanel = () => {
  const { languagePreference, setLanguagePreference } =
    useContext(LanguageContext);

  return (
    <div>
      <div className="language">
        <button className="bg-red-600 text-cyan-500"
          onClick={() => {
            setLanguagePreference("en");
            document.documentElement.lang = "en";
          }}
        >
          dil degis en
        </button>
        <button
          onClick={() => {
            setLanguagePreference("tr");
            document.documentElement.lang = "tr";
          }}
        >
          dil degis tr
        </button>
      </div>
      <div className="theme">
        <button
          onClick={() => {
            localStorage.setItem("theme", JSON.stringify("dark"));
            document.documentElement.classList.add("dark");
          }}
        />
        <button
          onClick={() => {
            localStorage.setItem("theme", JSON.stringify("light"));
            document.documentElement.classList.remove("dark");
          }}
        />
        <button
          onClick={() => {
            localStorage.removeItem("theme");
            if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
              document.documentElement.classList.add("dark");
            } else {
              document.documentElement.classList.remove("dark");
            }
          }}
        />
      </div>
    </div>
  );
};

export default PreferenceSwitchPanel;
