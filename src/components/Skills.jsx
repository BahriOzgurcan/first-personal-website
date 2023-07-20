import { paragraphs } from "../data/mockData";
import { useContext } from "react";
import { LanguageContext } from "../contexts/languageContext";

const Skills = () => {

  const {languagePreference} = useContext(LanguageContext);
  
  return (
    <div id="skills" className="flex flex-col w-4/5 mt-20 pb-[2.62rem]">
      <h2 className="mb-7 dark:text-[#AEBCCF]">{paragraphs[languagePreference].skills.header}</h2>
      <div className="flex flex-row w-full flex-wrap gap-[3rem] place-content-between">
        {paragraphs[languagePreference].skills.skills.map((skill) => {
          return (
            <div id="detail-text" className=" flex flex-col shrink w-[16rem]" key={skill.title}>
              <h3 className="flex mb-7 text-[#4338ca] dark:text-[#CFCBFF]">{skill.title}</h3>
              <p className="flex">{skill.detail}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
