import React, { useState } from "react";

export default function Qualifications() {
  const [activeIndex, setActiveIndex] = useState([]);

  function activeToggle(index) {
    setActiveIndex(activeIndex === index ? null : index);
  }

  const qualifications = [
    {
      titlePt: "CTeSP - Tecnologias e Programação de Sistemas de Informação",
      titleEn: "CTeSP - Information Systems Technologies and Programming",
      educatInst: "Instituto Superior Politécnico de Gaya",
      yearPt: "2019-2021",
      yearEn: "",
      details: (
        <ul style={{ paddingLeft: "60px" }}>
          <li style={{ listStyleType: "disc" }}>HTML</li>
          <li style={{ listStyleType: "disc" }}>CSS</li>
          <li style={{ listStyleType: "disc" }}>JavaScript</li>
          <li style={{ listStyleType: "disc" }}>Bootstrap</li>
          <li style={{ listStyleType: "disc" }}>MySQL</li>
          <li style={{ listStyleType: "disc" }}>PHP</li>
          <li style={{ listStyleType: "disc" }}>Java</li>
          <li style={{ listStyleType: "disc" }}>Metodologias Agile</li>
        </ul>
      ),
    },

    {
      titlePt: "Estágio curricular",
      titleEn: "Curricular intership",
      educatInst: "WeCreateYou",
      yearPt: "março 2021 - agosto 2021",
      yearEn: "march 2021 - august 2021",
      details: (
        <>
          <p data-lang="pt">
            Trabalhei essencialmente com edição de imagem, utilizado a
            ferramenta <em>Adobe Illustrator</em>, com o intuito de melhorar a
            experiência do utilizador.
          </p>
          <p data-lang="en" style={{ display: "none" }}>
            I mainly worked with image editing, using <em>Adobe Illustrator</em>
            , with the aim of improving my user experience skills.
          </p>
        </>
      ),
    },

    {
      titlePt: "Licenciatura - Engenharia Informática",
      titleEn: "Graduation - Computer Engineering",
      educatInst: "Instituto Superior Politécnico de Gaya",
      yearPt: "2021-2024",
      yearEn: "",
      details: (
        <ul style={{ paddingLeft: "60px" }}>
          <li style={{ listStyleType: "disc" }}>Web Scraping</li>
          <li style={{ listStyleType: "disc" }}>SQL Server</li>
          <li style={{ listStyleType: "disc" }}>T-SQL</li>
          <li style={{ listStyleType: "disc" }}>WebGL</li>
          <li style={{ listStyleType: "disc" }}>Python</li>
          <li style={{ listStyleType: "disc" }}>Raspberry Pi</li>
        </ul>
      ),
    },

    {
      titlePt: "Estágio interno",
      titleEn: "Internal intership",
      educatInst: "WideSkills - Instituto Superior Politécnico de Gaya",
      yearPt: "fevereiro 2024 - julho 2024",
      yearEn: "february 2024 - july 2024",
      details: (
        <>
          <p data-lang="pt">
            Desenvolvi um website na área da saúde mental, como projeto final de
            curso. O objetivo era permitir que os estudantes da faculdade
            aprendessem sobre e mitigassem a falta de conhecimento sobre a
            importância da saúde mental na atualidade. É importante destacar que
            este projeto proporcionou a oportunidade de escrever um artigo
            científico. O projeto utilizou tecnologias como:
            <ul style={{ paddingLeft: "40px", marginTop: "10px" }}>
              <li style={{ listStyleType: "disc" }}>HTML</li>
              <li style={{ listStyleType: "disc" }}>CSS</li>
              <li style={{ listStyleType: "disc" }}>JavaScript</li>
              <li style={{ listStyleType: "disc" }}>PHP</li>
              <li style={{ listStyleType: "disc" }}>Python</li>
            </ul>
          </p>
          <p data-lang="en" style={{ display: "none" }}>
            I developed a website in the area of mental health, as a final
            course project. Its objective was to allow college students to learn
            about and mitigate the lack of knowledge about the importance of
            mental health today. It is important to highlight that this project
            gave rise to the opportunity to write a scientific article. The
            project used technologies such as:
            <ul style={{ paddingLeft: "40px", marginTop: "10px" }}>
              <li style={{ listStyleType: "disc" }}>HTML</li>
              <li style={{ listStyleType: "disc" }}>CSS</li>
              <li style={{ listStyleType: "disc" }}>JavaScript</li>
              <li style={{ listStyleType: "disc" }}>PHP</li>
              <li style={{ listStyleType: "disc" }}>Python</li>
            </ul>
          </p>
          <div data-lang="pt">
            <p>
              Desenvolvi um website na área da saúde mental, como projeto final
              de curso. O objetivo era permitir que os estudantes da faculdade
              aprendessem sobre e mitigassem a falta de conhecimento sobre a
              importância da saúde mental na atualidade. É importante destacar
              que este projeto proporcionou a oportunidade de escrever um artigo
              científico. O projeto utilizou tecnologias como:
            </p>
            <ul style={{ paddingLeft: "40px", marginTop: "10px" }}>
              {" "}
              <li style={{ listStyleType: "disc" }}>HTML</li>{" "}
              <li style={{ listStyleType: "disc" }}>CSS</li>{" "}
              <li style={{ listStyleType: "disc" }}>JavaScript</li>{" "}
              <li style={{ listStyleType: "disc" }}>PHP</li>{" "}
              <li style={{ listStyleType: "disc" }}>Python</li>{" "}
            </ul>
          </div>

          {/* EN */}
          <div data-lang="en" style={{ display: "none" }}>
            <p>
              I developed a website in the area of mental health, as a final
              course project. Its objective was to allow college students to
              learn about and mitigate the lack of knowledge about the
              importance of mental health today. It is important to highlight
              that this project gave rise to the opportunity to write a
              scientific article. The project used technologies such as:
            </p>
            <ul style={{ paddingLeft: "40px", marginTop: "10px" }}>
              {" "}
              <li style={{ listStyleType: "disc" }}>HTML</li>{" "}
              <li style={{ listStyleType: "disc" }}>CSS</li>{" "}
              <li style={{ listStyleType: "disc" }}>JavaScript</li>{" "}
              <li style={{ listStyleType: "disc" }}>PHP</li>{" "}
              <li style={{ listStyleType: "disc" }}>Python</li>{" "}
            </ul>
          </div>
        </>
      ),
    },

    {
      titlePt: "Tech Presales",
      titleEn: "Tech Presales",
      educatInst: "Eidosmedia",
      yearPt: "janeiro 2025 - ",
      yearEn: "january 2025 - ",
      details: (
        <>
          <div data-lang="pt">
            <ul style={{ paddingLeft: "40px", marginTop: "10px" }}>
              <li style={{ listStyleType: "disc" }}>
                Desenvolver soluções que destacam os valores essenciais do
                software para potenciais clientes e clientes, como por exemplo,
                J.P. Morgan, na forma de proof-of-concept;
              </li>
              <li style={{ listStyleType: "disc" }}>
                Apoiar a preparação de respostas a solicitações de propostas
                (RFPs) e outras consultas de clientes;
              </li>
              <li style={{ listStyleType: "disc" }}>
                Participar na demonstração de produtos e contribuir para a
                preparação das demonstrações;
              </li>
              <li style={{ listStyleType: "disc" }}>
                Colaborar com as equipas de vendas e produto para coletar e
                analisar os requisitos dos clientes.
              </li>
            </ul>
            <p>
              Tecnologias usadas: JavaScript, Node.js, Express, jQuery, CSS,
              XML, REST APIs, Linux.
            </p>
          </div>

          <div data-lang="en">
            <ul style={{ paddingLeft: "40px", marginTop: "10px" }}>
              <li style={{ listStyleType: "disc" }}>
                Develop solutions that highlight the software core values to
                prospects and customers, e.g. J.P. Morgan, in the form of
                proof-of-concept;
              </li>
              <li style={{ listStyleType: "disc" }}>
                Support the preparation of responses to Requests for Proposals
                (RFPs) and other customer inquiries;
              </li>
              <li style={{ listStyleType: "disc" }}>
                Participate in product demonstrations and contribute to demo
                preparations;
              </li>
              <li style={{ listStyleType: "disc" }}>
                Collaborate with sales and product teams to gather and analyze
                customer requirements.
              </li>
            </ul>
            <p>
              Technologies used: JavaScript, Node.js, Express, jQuery, CSS, XML,
              REST APIs, Linux.
            </p>
          </div>
        </>
      ),
    },
  ];
  return (
    <>
      {/* <div className="banner-container">
        <div className="banner1">
          <img
            src={`${process.env.PUBLIC_URL}/images/imgs-background/background1.png`}
            alt="banner background"
          />
        </div>

        <div className="banner2">
          <img
            src={`${process.env.PUBLIC_URL}/images/imgs-background/background2.png`}
            alt="banner background"
          />
        </div>

        <div className="banner3">
          <img
            src={`${process.env.PUBLIC_URL}/images/imgs-background/background3.png`}
            alt="banner background"
          />
        </div>
      </div> */}
      <section className="experience" id="experience">
        <div className="container">
          <div className="title-wrapper">
            <h1 data-lang="pt" className="btn-ss">
              Percurso
            </h1>
            <h1 data-lang="pt" className="title-normal">
              Qualificações
            </h1>

            <h1 data-lang="en" className="btn-ss" style={{ display: "none" }}>
              Route
            </h1>
            <h1
              data-lang="en"
              className="title-normal"
              style={{ display: "none" }}
            >
              Qualifications
            </h1>
          </div>

          <div className="timeline">
            {qualifications.map((qualification, index) => (
              <div
                key={index}
                className={`container3 ${
                  activeIndex === index ? "active" : ""
                }`}
              >
                <i></i>
                <div className="text-box" onClick={() => activeToggle(index)}>
                  <div className="content">
                    <h2 data-lang="pt">{qualification.titlePt}</h2>
                    <h3 data-lang="pt">{qualification.educatInst}</h3>
                    <p data-lang="pt">{qualification.yearPt}</p>

                    <h2 data-lang="en" style={{ display: "none" }}>
                      {qualification.titleEn}
                    </h2>
                    <h3 data-lang="en" style={{ display: "none" }}>
                      {qualification.educatInst}
                    </h3>
                    <p
                      data-lang="en"
                      style={{
                        display: qualification.yearEn ? "block" : "none",
                      }}
                    >
                      {qualification.yearEn || qualification.yearPt}
                    </p>
                  </div>
                  <svg
                    width="15"
                    height="25"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path d="M207 381.5L12.7 187.1c-9.4-9.4-9.4-24.6 0-33.9l22.7-22.7c9.4-9.4 24.5-9.4 33.9 0L224 284.5l154.7-154c9.4-9.3 24.5-9.3 33.9 0l22.7 22.7c9.4 9.4 9.4 24.6 0 33.9L241 381.5c-9.4 9.4-24.6 9.4-33.9 0z" />
                  </svg>
                </div>

                <div className="answer">
                  <p data-lang="pt">{qualification.details}</p>
                  <p data-lang="en" style={{ display: "none" }}>
                    {qualification.details}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
