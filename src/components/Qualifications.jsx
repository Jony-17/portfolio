import React, { useState } from "react";

export default function Qualifications() {
  const [activeIndex, setActiveIndex] = useState([]);

  function activeToggle(index) {
    setActiveIndex(activeIndex === index ? null : index);
  }

  const qualifications = [
    {
      titlePt: "Tech Presales",
      titleEn: "Tech Presales",
      educatInst: "Eidosmedia",
      yearPt: "janeiro 2025 - Presente",
      yearEn: "january 2025 - Present",
      details: (
        <>
          <div data-lang="pt">
            <ul style={{ paddingLeft: "40px", marginTop: "10px" }}>
              <li style={{ listStyleType: "disc" }}>
                Desenvolvi soluções que destacam os valores essenciais do
                software para potenciais clientes e atuais, como por exemplo,
                J.P. Morgan, na forma de proof-of-concept usando{" "}
                <strong>JavaScript, jQuery, Node.js (Express), CSS, XML</strong>{" "}
                e <strong>REST API</strong> integrações testadas com
                integrations tested with <strong>Postman</strong>, dependendo da
                necessidade do projeto;
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
                analisar os requisitos dos clientes;
              </li>
              <li style={{ listStyleType: "disc" }}>
                Trabalhei num ambiente baseado em <strong>Linux</strong> para
                desenvolvimento e testes.
              </li>
            </ul>
          </div>

          <div data-lang="en">
            <ul style={{ paddingLeft: "40px", marginTop: "10px" }}>
              <li style={{ listStyleType: "disc" }}>
                Developed solutions that highlight the software core values to
                prospects and customers, e.g. J.P. Morgan, in the form of
                proof-of-concept using{" "}
                <strong>JavaScript, jQuery, Node.js (Express), CSS, XML</strong>{" "}
                and <strong>REST API</strong> integrations tested with{" "}
                <strong>Postman</strong>, depending on project requirement;
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
                customer requirements;
              </li>
              <li style={{ listStyleType: "disc" }}>
                Worked in a <strong>Linux</strong> based environment for
                development and testing.
              </li>
            </ul>
          </div>
        </>
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
          <div data-lang="pt">
            <ul style={{ paddingLeft: "40px", marginTop: "10px" }}>
              <li style={{ listStyleType: "disc" }}>
                Desenvolvi um site de conscientização sobre saúde mental como
                projeto final de curso. Planeei e prototipei a{" "}
                <strong>UX/UI</strong> usando <strong>Figma</strong> e{" "}
                <strong>Adobe Illustrator</strong>, e implementei com{" "}
                <strong>HTML, CSS, JavaScript</strong> e <strong>PHP</strong>{" "}
                para promover a conscientização entre estudantes universitários
                e combater a desinformação sobre o tema;
              </li>
              <li style={{ listStyleType: "disc" }}>
                Além do conteúdo interativo e educativo desenvolvido para
                abordar a falta de conhecimento sobre questões de saúde mental,
                implementei um simples chatbot, usando{" "}
                <strong>Python (Flask)</strong>, para responder a perguntas
                frequentes e incentivar a interação com o utilizador.
              </li>
            </ul>
          </div>

          <div data-lang="en">
            <ul style={{ paddingLeft: "40px", marginTop: "10px" }}>
              <li style={{ listStyleType: "disc" }}>
                Developed a mental health awareness website as a final course
                project. Planned and prototyped the <strong>UX/UI</strong> using{" "}
                <strong>Figma</strong> and <strong>Adobe Illustrator</strong>,
                and implemented it with <strong>HTML, CSS, JavaScript</strong>{" "}
                and <strong>PHP</strong> to promote awareness among university
                students and combat misinformation on the topic;
              </li>
              <li style={{ listStyleType: "disc" }}>
                In addition to the interactive and educational content designed
                to address the lack of knowledge about mental health issues,
                implemented a simple chatbot, using{" "}
                <strong>Python (Flask)</strong>, to answer frequently asked
                questions and encourage user engagement.
              </li>
            </ul>
          </div>
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
      titlePt: "Estágio curricular",
      titleEn: "Curricular intership",
      educatInst: "WeCreateYou",
      yearPt: "março 2021 - agosto 2021",
      yearEn: "march 2021 - august 2021",
      details: (
        <>
          <p data-lang="pt">
            Trabalhei principalmente com edição de imagem, utilizando a
            ferramenta <strong>Adobe Illustrator</strong>, com o intuito de
            melhorar a experiência do utilizador.
          </p>
          <p data-lang="en" style={{ display: "none" }}>
            Worked primarily with image editing, using{" "}
            <strong>Adobe Illustrator</strong>, with the aim of improving user
            experience skills
          </p>
        </>
      ),
    },

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
