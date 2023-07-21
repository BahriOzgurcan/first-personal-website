import { useContext } from "react";
import { LanguageContext } from "../contexts/languageContext";
import { paragraphs } from "../data/mockData";

const Footer = () => {
  const { languagePreference, setLanguagePreference } =
    useContext(LanguageContext);

  return (
    <div className="flex flex-row justify-center w-full bg-[#F9F9F9] dark:bg-[#141414] border-t-black">
      <div className="flex flex-col w-4/5 pb-[2.62rem]">
        <h4 className="flex shrink mb-20 mt-24 dark:text-[#AEBCCF] text-text-default-gray">{paragraphs[languagePreference].footer.text}</h4>
        <div className=" flex flex-row flex-wrap place-content-between">
          <a id="email" className=" text-[#AF0C48] dark:text-[#E1E1FF] text-[1.25rem]" href="">👉&nbsp;<span className="underline">{paragraphs[languagePreference].footer.email}</span></a>
          <div className="flex gap-5">
            {paragraphs[languagePreference].footer.links.map((link)=> {
                return (
                    <a className="text-[1.25rem] dark:text-[#E1E1FF]" href={link.url}>{link.text}</a>
                )
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
