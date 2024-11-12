import { useContext } from "react";
import { PostContext } from "../App";

export default function LanguageToggle() {
  const { language, handleLanguageChange } = useContext(PostContext);
  return (
    <>
      <button
        onClick={(e) => {
          e.preventDefault();
          handleLanguageChange("pt");
        }}
        className={`lang-toggle ${language === "pt" ? "active" : ""}`}
      >
        PT
      </button>
      <span className="language-toggle">|</span>
      <button
        onClick={(e) => {
          e.preventDefault();
          handleLanguageChange("en");
        }}
        className={`lang-toggle ${language === "en" ? "active" : ""}`}
      >
        EN
      </button>
    </>
  );
}
