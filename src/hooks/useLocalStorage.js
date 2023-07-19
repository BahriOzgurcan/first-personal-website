import { useState } from "react";

const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(() => {
    const localValue = localStorage.getItem(key);

    if (key === "language") {
      if (localValue) {
        return JSON.parse(localValue);
      } else {
        const userSystemLanguage = navigator.language.slice(0, 2);
        if (userSystemLanguage === "en" || userSystemLanguage === "tr") {
          return navigator.language.slice(0, 2);
        } else {
          return "en";
        }
      }
    }
  });

  const updateValue = (newValue) => {
    localStorage.setItem(key, JSON.stringify(newValue));
    setValue(newValue);
  };

  return [value, updateValue];
};

export default useLocalStorage;
