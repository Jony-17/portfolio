import React from "react";
import Introduction from "./Introduction";
import AboutMe from "./AboutMe";
import Skills from "./Skills";
import Qualifications from "./Qualifications";
import Portfolio from "./Portfolio";
// import Certifications from "./Certifications";

export default function Main() {
  return (
    <div>
      <Introduction />
      <AboutMe />
      <Skills />
      <Qualifications />
      {/* <Certifications /> */}
      <Portfolio />
    </div>
  );
}
