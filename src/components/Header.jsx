import { paragraphs } from "../data/mockData";
import { useContext } from "react";
import { LanguageContext } from "../contexts/languageContext";

const Header = () => {

    const {languagePreference} = useContext(LanguageContext);

  return (
    <div className="flex flex-row flex-wrap w-4/5 place-content-between">
      <div className="shrink w-5/12">
        <button className="bg-[#EEEBFF] dark:bg-[#4731D3] rounded-full w-16 h-16 ">
          <p className="-rotate-45 text-indigo-700 font-bold dark:text-[#CFCBFF]">BOA</p>
        </button>
      </div>
      <div className="flex flex-row place-content-between justify-end items-center gap-2 md:gap-10 mt-10 sm:mt-0">
        <a className="flex-initial inline-flex h-13 text-base sm:text-lg font-medium leading-7 text-text-gray" href="#skills">
          {paragraphs[languagePreference.toLowerCase()].header.skills}
        </a>
        <a className="flex-initial inline-flex h-13 text-base sm:text-lg font-medium leading-7 text-text-gray" href="#skills">
        {paragraphs[languagePreference.toLowerCase()].header.projects}
        </a>
        <a className="flex-initial whitespace-nowrap text-base  sm:text-lg font-medium not-italic bg-white text-text-indigo rounded-md border-[1px] px-8 py-3 border-indigo-900" href="#skills">
        {paragraphs[languagePreference.toLowerCase()].header.hire}
        </a>
      </div>
    </div>
  );
};

export default Header;
