import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
  ChevronDownIcon
} from "@heroicons/react/20/solid";
import { useContext } from "react";
import { LanguageContext } from "../contexts/languageContext";

const solutions = [
  { name: "EN", description: "", icon: "🇬🇧", source: "en" },
  { name: "TR", description: "", icon: "🇹🇷", source: "tr" },
];

export default function LanguageToggle() {
  const { languagePreference, setLanguagePreference } =
    useContext(LanguageContext);

  const handleOnClick = (lang) => {
    if (lang === "en") {
      setLanguagePreference("en");
      document.documentElement.lang = "en";
      return;
    } else {
      setLanguagePreference("tr");
      document.documentElement.lang = "tr";
      return;
    }
  };

  return (
    <Popover className=" flex justify-end">
      <Popover.Button className=" flex flex-row place-content-between items-center px-4 text-xs border-2 text-white border-text-indigo rounded-md bg-text-indigo">
        <span>Language</span>
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
                  <div className={`mt-1 flex h-6 w-6 flex-none text-lg items-center justify-center rounded-[1.125rem] ${languagePreference === "en" && item.source === "en" && "bg-[#B7AAFF]" || languagePreference === "tr" && item.source === "tr" && "bg-[#B7AAFF]" } group-hover:bg-[#B7AAFF]`}>
                    {item.icon}
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
