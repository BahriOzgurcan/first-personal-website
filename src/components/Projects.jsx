import { paragraphs } from "../data/mockData";
import { useContext } from "react";
import { LanguageContext } from "../contexts/languageContext";
import img from "../assets/test-img.jpg";

const Projects = () => {
  const { languagePreference } = useContext(LanguageContext);

  return (
    <div className="flex flex-col w-4/5 pt-10 pb-[2.62rem] border-t-[1px] border-[#BAB2E7]">
      <h2 className="mb-7 dark:text-[#AEBCCF]">{paragraphs[languagePreference].projects.header}</h2>
      <div className="flex flex-row gap-[7.5rem]">
        {paragraphs[languagePreference].projects.projectDetails.map(
          (project) => {
            console.log()
            return (
              <div id="detail-text" key={project.title}>
                <img
                  className="rounded-[1.125rem] mb-[1.125rem] object-cover shadow-img justify-center center"
                  src={project.img_url}
                  alt=""
                />
                <h3 className="mb-[1.125rem] text-[#4338ca] dark:text-[#CFCBFF]">{project.title}</h3>
                <p id="detail" className="mb-[1.125rem] text-[#6b7280]">{project.detail}</p>
                <div className="flex flex-row gap-4">
                  {project.techs.map((tech) => {
                    return <p className="tech px-[1.125rem] py-[0.375rem] rounded-[0.25rem] border-[1px] text-text-indigo border-text-indigo dark:text-[#8F88FF] dark:border-[#8F88FF]">{tech}</p>;
                  })}
                </div>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
};

export default Projects;
