import { useContext, useEffect, useState } from "react";
import { LanguageContext } from "./contexts/languageContext";
import Footer from "./components/Footer";
import PreferenceSwitchPanel from "./components/PreferenceSwitchPanel";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import "./index.css";

function App() {
  const [count, setCount] = useState(0);
  const [dil, setDil] = useState("en");
  const [dil1, setDil1] = useState("");

  const { languagePreference, setLanguagePreference } =
    useContext(LanguageContext);

  //useEffect for applying theme according to local storage or preferred as user system and eventListener for theme change if no localStorage preferences
  useEffect(() => {
    const handleThemeChange = () => {
      if (
        localStorage.getItem("theme") === JSON.stringify("dark") ||
        (!("theme" in localStorage) &&
          window.matchMedia("(prefers-color-scheme: dark)").matches)
      ) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    };

    const darkModeQuery = window.matchMedia("(prefers-color-scheme: dark)");

    //Theme control on load (if nothing on localStorage, decide according to user system preference, else set according localStorage)
    handleThemeChange();
    //Change theme whenever dark mode is changed (control for user system preference)
    darkModeQuery.addEventListener("change", handleThemeChange);
    //delete eventlistener when unmount of the component
    return () => {
      darkModeQuery.removeEventListener("change", handleThemeChange);
    };
  }, []);

  return (
    <div className="flex flex-col w-full items-center bg-white dark:bg-[#252128] dark:text-[#FFFFFF]">
      <PreferenceSwitchPanel />
      <Header />
      <Hero />
      <Skills />
      <Profile />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
