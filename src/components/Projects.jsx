import { paragraphs } from "../data/mockData";
import { useContext } from "react";
import { LanguageContext } from "../contexts/languageContext";
import img from "../assets/test-img.jpg";

const Projects = () => {
  const { languagePreference } = useContext(LanguageContext);

  return (
    <div id="projects" className="flex flex-col w-4/5 pt-10 pb-[2.62rem] border-t-[1px] border-[#BAB2E7] h-fit">
      <h2 className="mb-7 dark:text-[#AEBCCF]">
        {paragraphs[languagePreference].projects.header}
      </h2>
      <div className="flex flex-row flex-wrap place-content-between gap-[7.5rem] mx-2 h-fit">
        {paragraphs[languagePreference].projects.projectDetails.map(
          (project) => {
            console.log();
            return (
              <div
                className="flex flex-col shrink-0 w-[16rem] h-fit"
                id="detail-text"
                key={project.title}
              >
                <a
                  href={project.links[1]}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className=" shrink-0 rounded-[1.125rem] mb-[1.125rem] w-full h-[11.25rem] object-cover shadow-img justify-center center"
                    src={project.img_url}
                    alt=""
                    htmlFor="live-version"
                  />
                </a>
                <div className="flex flex-col flex-grow place-content-between justify-between">
                  <h3 className="flex flex-row basis-[3.2rem] mb-[1.125rem] text-[#4338ca] dark:text-[#CFCBFF]">
                    {project.title}
                  </h3>
                  <p id="detail" className="mb-[1.125rem] text-[#6b7280]">
                    {project.detail}
                  </p>
                  <div className="flex flex-wrap flex-row gap-4 place-content-start ">
                    {project.techs.map((tech) => {
                      return (
                        <p className="flex tech px-[0.875rem] whitespace-nowrap py-[0.375rem] basis-1/4 items-center place-content-center rounded-[0.25rem] border-[1px] text-text-indigo border-text-indigo dark:text-[#8F88FF] dark:border-[#8F88FF]">
                          {tech}
                        </p>
                      );
                    })}
                  </div>
                  <div className="flex w-full place-content-between px-2 mt-2">
                    <a
                      className="text-xs underline font-semibold text-text-indigo dark:text-[#8F88FF]"
                      href={project.links[0]}
                    >
                      Github
                    </a>
                    <a
                      className="text-xs underline font-semibold text-text-indigo dark:text-[#8F88FF]"
                      href={project.links[1]}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {
                        paragraphs[languagePreference].projects
                          .projectDetails[0].button
                      }
                    </a>
                  </div>
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
