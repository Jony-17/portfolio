import React, { useState } from "react";
import "../styles/style.scss";

const skills = [
  {
    name: "HTML5",
    icon: "/images/imgs-skills/HTML5.png",
    category: "Front-end",
  },
  {
    name: "JavaScript",
    icon: "/images/imgs-skills/javascript.png",
    category: "Front-end",
  },
  {
    name: "React",
    icon: "/images/imgs-skills/react.png",
    category: "Front-end",
  },
  { name: "CSS3", icon: "/images/imgs-skills/css.png", category: "Front-end" },
  { name: "SASS", icon: "/images/imgs-skills/sass.png", category: "Front-end" },
  {
    name: "Tailwind",
    icon: "/images/imgs-skills/tailwind.png",
    category: "Front-end",
  },
  { name: "PHP", icon: "/images/imgs-skills/php.png", category: "Back-end" },
  {
    name: "Python",
    icon: "/images/imgs-skills/python.png",
    category: "Back-end",
  },
  {
    name: "MySQL",
    icon: "/images/imgs-skills/mysql.png",
    category: "Base de dados",
  },
  {
    name: "SQL Server",
    icon: "/images/imgs-skills/sql-server.png",
    category: "Base de dados",
  },
  { name: "Figma", icon: "/images/imgs-skills/figma.png", category: "Design" },
  {
    name: "Adobe Illustrator",
    icon: "/images/imgs-skills/adobeillustrator.png",
    category: "Design",
  },
  {
    name: "Bootstrap",
    icon: "/images/imgs-skills/bootstrap.png",
    category: "Front-end",
  },
  {
    name: "GitHub",
    icon: "/images/imgs-skills/github.png",
    category: "Controlo de versão",
  },
  {
    name: "Git",
    icon: "/images/imgs-skills/git.png",
    category: "Controlo de versão",
  },
];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("Todas");
  const [isLoading, setIsLoading] = useState(false);

  function handleCategory(category) {
    setIsLoading(true);
    setTimeout(() => {
      setActiveCategory(category);
      setIsLoading(false);
    }, 500); // Esse delay vai adicionar um pequeno atraso antes de trocar a categoria
  }

  function filteredSkills(category) {
    return category === "Todas"
      ? skills
      : skills.filter(function (skill) {
          return skill.category === category;
        });
  }

  return (
    <section className="skills" id="skills">
      <div className="container">
        <div className="title-wrapper">
          <h1 data-lang="pt" className="btn-ss">
            Nível técnico
          </h1>
          <h1 data-lang="pt" className="title-normal">
            Competências
          </h1>

          <h1 data-lang="en" className="btn-ss" style={{ display: "none" }}>
            Technical Level
          </h1>
          <h1
            data-lang="en"
            className="title-normal"
            style={{ display: "none" }}
          >
            Skills
          </h1>
        </div>

        <div className="stack">
          <button className="btn-all" onClick={() => handleCategory("Todas")}>
            Todas
          </button>
          <button
            className="btn-all"
            onClick={() => handleCategory("Front-end")}
          >
            Front-end
          </button>
          <button
            className="btn-all"
            onClick={() => handleCategory("Back-end")}
          >
            Back-end
          </button>
          <button
            className="btn-all"
            onClick={() => handleCategory("Base de dados")}
          >
            Base de dados
          </button>
          <button className="btn-all" onClick={() => handleCategory("Design")}>
            Design
          </button>
          {/* <button className="btn-all">Teste</button> */}
          <button
            className="btn-all"
            onClick={() => handleCategory("Controlo de versão")}
          >
            Controlo de versão
          </button>
        </div>

        <div className="container2" style={{ opacity: isLoading ? 0 : 1 }}>
          {filteredSkills(activeCategory).map((skill) => (
            <div key={skill.name} className="skill-title">
              <div className="img">
                <img src={skill.icon} className="skill-icon" alt={skill.name} />
              </div>
              <h2 className="skills-h2">{skill.name}</h2>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
