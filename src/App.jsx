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
import RandomQuotes from "./components/RandomQuotes";
import ThemeToggle from "./components/ThemeToggle";
import LanguageToggle from "./components/LanguageToggle";

function App() {
  const [theme, setTheme] = useState("light");

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
        setTheme("dark");
      } else {
        document.documentElement.classList.remove("dark");
        setTheme("light");
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
      <div className="flex flex-row w-4/5 justify-end gap-4 mt-2">
        <LanguageToggle />
        <ThemeToggle />
      </div>
      {/* <RandomQuotes/> */}
      {/* <PreferenceSwitchPanel /> */}
      <Header />
      <Hero theme={theme} />
      <Skills theme={theme} />
      <Profile />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
