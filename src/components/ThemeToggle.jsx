import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
  ChevronDownIcon,
  MoonIcon,
  SunIcon,
  ComputerDesktopIcon,
} from "@heroicons/react/20/solid";
import { paragraphs } from "../data/mockData";
import { useContext } from "react";
import { LanguageContext } from "../contexts/languageContext";



export default function ThemeToggle() {

    const { languagePreference } = useContext(LanguageContext);

    const solutions = [
        { name: paragraphs[languagePreference].switchPanel.darkMode , description: "", icon: MoonIcon, source: "dark" },
        { name: paragraphs[languagePreference].switchPanel.lightMode, description: "", icon: SunIcon, source: "light" },
        {
          name: paragraphs[languagePreference].switchPanel.systemMode,
          description: "",
          icon: ComputerDesktopIcon,
          source: "delete",
        },
      ];

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

  const handleOnClick = (theme) => {
    if (theme === "delete") {
      localStorage.removeItem("theme");
      handleThemeChange();
      return;
    } else {
      localStorage.setItem("theme", JSON.stringify(theme));
      handleThemeChange();
      return;
    }
  };

  return (
    <Popover className=" flex justify-end">
      <Popover.Button className=" flex flex-row place-content-between items-center px-4 text-xs border-2 text-white border-text-indigo rounded-md bg-text-indigo">
        <span>Theme</span>
        <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
      </Popover.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <Popover.Panel className="absolute mt-8 flex justify-end ">
          <div className="  flex-auto overflow-hidden rounded-[1.125rem] bg-text-indigo text-white text-sm shadow-lg ring-1 ">
            <div className="p-2">
              {solutions.map((item) => (
                <div
                  key={item.name}
                  className="group relative flex gap-x-2 my-1 px-1 rounded-lg hover:bg-[#B7AAFF]"
                >
                  <div className="mt-1 flex h-6 w-6 flex-none items-center justify-center rounded-[1.125rem] bg-[#B7AAFF] group-hover:bg-[#B7AAFF]">
                    <item.icon
                      className="h-4 w-4 text-gray-600 group-hover:text-indigo-700"
                      aria-hidden="true"
                    />
                  </div>
                  <div className=" items-center flex ">
                    <button
                      onClick={() => {
                        handleOnClick(item.source);
                      }}
                      className=" items-center flex place-content-center font-semibold text-white"
                    >
                      {item.name}
                      <span className="absolute inset-0" />
                    </button>
                    <p className="mt-1 text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
