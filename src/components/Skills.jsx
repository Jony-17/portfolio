const skills = [
  {
    category: "Frontend",
    items: [
      "HTML",
      "CSS",
      "SASS",
      "JavaScript",
      "jQuery",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind",
      "Bootstrap",
    ],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express.js", "PHP", "Python"],
  },
  {
    category: "Base de dados",
    items: ["MySQL", "SQL Server"],
  },
  {
    category: "Outros",
    items: [
      "Git",
      "GitHub",
      "Docker",
      "Jest",
      "React Testing Library",
      "Rest API's",
      "Postman",
      "Linux",
      "XML",
      "Figma",
      "Adobe Illustrator",
    ],
  },
];

export default function Skills() {
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

        <div className="card-c">
          {skills.map((group) => (
            <div key={group.category} className="card">
              <h3>{group.category}</h3>
              <div className="tags">
                {group.items.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
