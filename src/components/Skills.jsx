import { paragraphs } from "../data/mockData";
import { useContext, useEffect, useState } from "react";
import { LanguageContext } from "../contexts/languageContext";
import { Carousel } from "@trendyol-js/react-carousel";
import Arrow from "../assets/arrow";
import ArrowOpp from "../assets/arrowOpposite";

const Skills = (props) => {
  const { languagePreference } = useContext(LanguageContext);
  const [carouselData, setCarouselData] = useState(
    paragraphs[languagePreference]
  );

  console.log(carouselData);

  useEffect(() => {
    setCarouselData({ ...paragraphs[languagePreference] });
  }, [languagePreference]);

  return (
    <div id="skills" className="flex flex-col w-4/5 mt-20 pb-[2.62rem]">
      <h2 className="mb-7 dark:text-[#AEBCCF]">
        {paragraphs[languagePreference].skills.header}
      </h2>

      <div className="flex flex-row w-full flex-wrap  place-content-between">
        <Carousel
          dynamic={true}
          className="gap-10"
          show={5.5}
          slide={2}
          transition={0.5}
          swiping={true}
          rightArrow={<Arrow theme={props.theme} />}
          leftArrow={<ArrowOpp theme={props.theme} />}
        >
          {carouselData?.skills?.skills?.map((skill) => {
            return (
              <div
                id="detail-text"
                className=" flex flex-col shrink text-center"
                key={skill.title}
              >
                <h3 className="flex place-content-center mb-7 text-[#4338ca] dark:text-[#CFCBFF]">
                  {skill.title}
                </h3>
                
                {/*<p className="flex mr-3">{skill.detail}</p>*/}
              </div>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};

export default Skills;
