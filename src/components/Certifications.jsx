import React from "react";

const certifications = [
  {
    name: "Udemy",
    course: "The Complete JavaScript Course 2024: From Zero to Expert!",
    year: "2024",
    icon: `${process.env.PUBLIC_URL}/images/imgs-certifications/udemy.png`,
    certification: "Certificate-JavaScript_JoãoAraújo.pdf",
  },
  {
    name: "Udemy",
    course: "The Ultimate React Course",
    year: "2024",
    icon: `${process.env.PUBLIC_URL}/images/imgs-certifications/udemy.png`,
    certification: "",
  },
  {
    name: "freeCodeCamp",
    course: "Responsive Web Design",
    year: "2023",
    icon: `${process.env.PUBLIC_URL}/images/imgs-certifications/freecodecamp.png`,
    certification: "Certificate-ResponsiveWeb_JoãoAraújo.jpg",
  },
];

export default function Certifications() {
  return (
    <section className="certifications" id="certifications">
      <div className="container">
        <div className="title-wrapper">
          <h1 data-lang="pt" className="btn-ss">
            Aprendizagens
          </h1>
          <h1 data-lang="pt" className="title-normal">
            Certificações
          </h1>

          <h1 data-lang="en" className="btn-ss" style={{ display: "none" }}>
            Learnings
          </h1>
          <h1
            data-lang="en"
            className="title-normal"
            style={{ display: "none" }}
          >
            Certifications
          </h1>
        </div>

        {certifications.map((certification, index) => (
          <div className="container4" key={index}>
            <div className="text-box2">
              <div className="left-content">
                <div className="image-box">
                  <img src={certification.icon} alt={certification.name} />
                </div>
                <div className="content">
                  <h2>{certification.name}</h2>
                  <h3>{certification.course}</h3>
                  <h4>{certification.year}</h4>
                </div>
              </div>

              {certification.certification !== "" ? (
                <div className="image-box2">
                  <i className="fa-solid fa-download"></i>
                  <a
                    href={certification.certification}
                    className="btn"
                    download
                    data-lang="pt"
                  >
                    Download
                  </a>
                  <a
                    href={certification.certification}
                    className="btn"
                    download
                    data-lang="en"
                    style={{ display: "none" }}
                  >
                    Download
                  </a>
                </div>
              ) : (
                <div className="image-box2">
                  <i className="fa-regular fa-clock"></i>
                  <button
                    className="btn"
                    data-lang="pt"
                    style={{
                      background: "transparent",
                      border: "none",
                    }}
                  >
                    Em curso
                  </button>
                  <button
                    className="btn"
                    data-lang="en"
                    style={{
                      display: "none",
                      background: "transparent",
                      border: "none",
                    }}
                  >
                    On going
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
