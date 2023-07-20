import { paragraphs } from "../data/mockData";
import { LanguageContext } from "../contexts/languageContext";
import { useContext } from "react";

const Profile = () => {
  const { languagePreference, setLanguagePreference } =
    useContext(LanguageContext);

  return (
    <div className="flex flex-col w-4/5 pt-10 pb-[2.62rem] border-t-[1px] border-[#BAB2E7]">
      <h2 className="mb-7 dark:text-[#AEBCCF]">{paragraphs[languagePreference].profile.header}</h2>
      <div className="flex flex-row flex-wrap gap-16">
        <div className="">
          <h3 className="mb-7 text-[#4338ca] dark:text-[#CFCBFF]">
            {paragraphs[languagePreference].profile.secondHeader_1}
          </h3>
          <div className="flex flex-row gap-8">
            <div className="w-1/3">
              {paragraphs[languagePreference].profile.profileDetails.map(
                (detail) => {
                  return <p className=" whitespace-nowrap font-semibold">{detail.title}:</p>;
                }
              )}
            </div>
            <div className="w-1/3">
              {paragraphs[languagePreference].profile.profileDetails.map(
                (detail) => {
                  return <p className=" whitespace-nowrap">{detail.detail}</p>;
                }
              )}
            </div>
          </div>
        </div>
        <div className="w-1/2">
          <h3 className="mb-7 text-[#4338ca] dark:text-[#CFCBFF]">
            {paragraphs[languagePreference].profile.secondHeader_2}
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Dignissimos, deserunt ut consequatur dolorem omnis excepturi libero
            repellendus natus aspernatur cumque. Autem ipsa provident soluta
            magni libero recusandae quia quos consequatur!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
