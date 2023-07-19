import { paragraphs } from "../data/mockData";
import { useContext } from "react";
import { LanguageContext } from "../contexts/languageContext";
import LinkedInLogo from "../assets/linkedin";
import GithubLogo from "../assets/github";


const Hero = () => {
  const { languagePreference } = useContext(LanguageContext);
 

  return (
    <div className="flex flex-row w-4/5 mt-20">
      <div className="flex flex-row gap-8 items-center">
        <div className="flex flex-col gap-10 place-content-between items-start">
          <p className="text-lg text-indigo-700 font-medium dark:text-[#B7AAFF]"
          >-------Bahri Özgürcan Aksoy</p>
          <h1 className="text-[4.5rem] leading-[4.5rem] font-bold dark:text-[#AEBCCF] text-text-default-gray">
            {paragraphs[languagePreference.toLowerCase()].hero.header}
          </h1>
          <p className="w-[34rem] shrink"
          >{paragraphs[languagePreference.toLowerCase()].hero.detail}</p>
          <div className="flex flex-row gap-3">
            <button className="flex-initial whitespace-nowrap  text-lg font-medium not-italic bg-text-indigo text-white rounded-md border-[1px] px-8 py-3 border-indigo-900" href="#skills">
             {paragraphs[languagePreference.toLowerCase()].hero.link_1}
            </button>
            <button className="inline-flex flex-initial whitespace-nowrap  text-lg font-medium not-italic bg-white text-text-indigo rounded-md border-[1px] px-8 py-3 border-indigo-900 dark:bg-[#383838] dark:text-[#E1E1FF]" href="#skills">
              <GithubLogo/> &nbsp;&nbsp;
              {paragraphs[languagePreference.toLowerCase()].hero.link_2}
            </button>
            <button className="inline-flex flex-initial whitespace-nowrap  text-lg font-medium not-italic bg-white text-text-indigo rounded-md border-[1px] px-8 py-3 border-indigo-900 dark:bg-[#383838] dark:text-[#E1E1FF]" href="#skills">
             <LinkedInLogo fill={"#3730A3"}/> &nbsp;&nbsp;
              {paragraphs[languagePreference.toLowerCase()].hero.link_3}
            </button>
          </div>
        </div>
        <img
          className="rounded-[1.125rem] w-[29.75rem] h-[23rem] object-cover shadow-img justify-center center"
          src="../../public/test-img.jpg"
          alt="."
        />
      </div>
    </div>
  );
};

export default Hero;
