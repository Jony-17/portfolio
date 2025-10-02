import React from "react";

export default function NavLinks() {
  return (
    <>
      <li>
        <a href="#about-me" data-lang="pt">
          Sobre mim
        </a>
        <a href="#about-me" data-lang="en" style={{ display: "none" }}>
          About me
        </a>
      </li>
      <li>
        <a href="#skills" data-lang="pt">
          Competências
        </a>
        <a href="#skills" data-lang="en" style={{ display: "none" }}>
          Skills
        </a>
      </li>
      <li>
        <a href="#experience" data-lang="pt">
          Qualificações
        </a>
        <a href="#experience" data-lang="en" style={{ display: "none" }}>
          Qualifications
        </a>
      </li>
      {/* <li>
        <a href="#certifications" data-lang="pt">
          Certificações
        </a>
        <a href="#certifications" data-lang="en" style={{ display: "none" }}>
          Certifications
        </a>
      </li> */}
      <li>
        <a href="#projects" data-lang="pt">
          Projetos
        </a>
        <a href="#projects" data-lang="en" style={{ display: "none" }}>
          Projects
        </a>
      </li>
    </>
  );
}
