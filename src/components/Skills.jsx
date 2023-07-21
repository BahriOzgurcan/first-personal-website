import { paragraphs } from "../data/mockData";
import { useContext, useEffect } from "react";
import { LanguageContext } from "../contexts/languageContext";
import { Carousel } from "@trendyol-js/react-carousel";
import Arrow from "../assets/arrow";

const Skills = (props) => {
  const { languagePreference } = useContext(LanguageContext);

  useEffect(()=>{
    
  }, [languagePreference])

  return (
    <div id="skills" className="flex flex-col w-4/5 mt-20 pb-[2.62rem]">
      <h2 className="mb-7 dark:text-[#AEBCCF]">
        {paragraphs[languagePreference].skills.header}
      </h2>
      {/* <div className="flex flex-row w-full flex-wrap gap-[3rem] place-content-between"> */}
        <Carousel className="gap-10" show={4.5} slide={2} transition={0.5} swiping={true} rightArrow={<Arrow theme={props.theme}/>} leftArrow={<Arrow rotation={180} theme={props.theme}/>}>
          {paragraphs[languagePreference].skills.skills.map((skill) => {
            return (
              <div
                id="detail-text"
                className=" flex flex-col shrink "
                key={skill.title}
              >
                <h3 className="flex mb-7 text-[#4338ca] dark:text-[#CFCBFF]">
                  {skill.title}
                </h3>
                <p className="flex">{skill.detail}</p>
              </div>
            );
          })}
        </Carousel>
      {/* </div> */}
    </div>
  );
};

export default Skills;
