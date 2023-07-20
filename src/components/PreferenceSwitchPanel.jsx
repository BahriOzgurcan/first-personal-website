import { unstable_renderSubtreeIntoContainer } from "react-dom";
import { LanguageContext } from "../contexts/languageContext";
import { useContext, useEffect } from "react";


const PreferenceSwitchPanel = (props) => {
  const { languagePreference, setLanguagePreference } =
    useContext(LanguageContext);

  return (
    <div className="flex w-4/5 justify-end place-content-between">
      <div className="language flex flex-row gap-8 ">
        <button className=" border-2 border-text-indigo rounded-md"
          onClick={() => {
            setLanguagePreference("en");
            document.documentElement.lang = "en";
          }}
        >
          english
        </button>
        <button className=" border-2 border-text-indigo rounded-md bg-text-gray"
          onClick={() => {
            setLanguagePreference("tr");
            document.documentElement.lang = "tr";
          }}
        >
          turkce
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
