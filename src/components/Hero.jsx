import { paragraphs } from "../data/mockData";
import { useContext } from "react";
import { LanguageContext } from "../contexts/languageContext";
import LinkedInLogo from "../assets/linkedin";
import GithubLogo from "../assets/github";
import img from "../assets/test-img.jpg"


const Hero = (props) => {
  const { languagePreference } = useContext(LanguageContext);
 

  return (
    <div className="flex flex-row w-4/5 mt-10 md:mt-20 flex-wrap gap-8 items-center place-content-between">
        <div className="flex flex-col w-[45rem] gap-10 place-content-between items-start">
          <p className="text-lg text-indigo-700 font-medium dark:text-[#B7AAFF]"
          >-------Bahri Özgürcan Aksoy</p>
          <h1 className="text-[3rem]  md:text-[4.5em] leading-[4.5rem] font-bold dark:text-[#AEBCCF] text-text-default-gray">
            {paragraphs[languagePreference.toLowerCase()].hero.header}
          </h1>
          <p className="flex shrink text-[1.125rem] leading-[1.75rem]"
          >{paragraphs[languagePreference.toLowerCase()].hero.detail}</p>
          <div className="flex flex-row gap-3 flex-wrap">
            <button className="flex-initial whitespace-nowrap  text-lg font-medium not-italic bg-text-indigo text-white rounded-md border-[1px] px-8 py-3 border-indigo-900 dark:bg-[#E1E1FF] dark:text-[#3730A3]" href="#skills">
             {paragraphs[languagePreference.toLowerCase()].hero.link_1}
            </button>
            <button className="inline-flex flex-initial whitespace-nowrap  text-lg font-medium not-italic bg-white text-text-indigo rounded-md border-[1px] px-8 py-3 border-indigo-900 dark:bg-[#383838] dark:text-[#E1E1FF] dark:border-[#E1E1FF]" href="#skills">
              <GithubLogo theme={props.theme}/> &nbsp;&nbsp;
              {paragraphs[languagePreference.toLowerCase()].hero.link_2}
            </button>
            <button className="inline-flex flex-initial whitespace-nowrap  text-lg font-medium not-italic bg-white text-text-indigo rounded-md border-[1px] px-8 py-3 border-indigo-900 dark:bg-[#383838] dark:text-[#E1E1FF] dark:border-[#E1E1FF]" href="#skills">
             <LinkedInLogo theme={props.theme}/> &nbsp;&nbsp;
              {paragraphs[languagePreference.toLowerCase()].hero.link_3}
            </button>
          </div>
        </div>
        <img
          className="rounded-[1.125rem] w-[29.75rem] h-[23rem] object-cover shadow-img justify-center center"
          src={img}
          alt="."
        />
    </div>
  );
};

export default Hero;
