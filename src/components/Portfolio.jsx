import React from "react";

const projects = [
  {
    name_pt: "Portal de Saúde Mental",
    name_en: "Mental Health Portal",
    image: `${process.env.PUBLIC_URL}/images/imgs-slider/mental-health.jpg`,
    link: "https://github.com/Jony-17/Projeto-Portal-Saude-Mental",
    type_pt: "Académico/Projeto Pessoal",
    type_en: "Academic/Personal Project",
  },
  {
    name_pt: "CountriesApp",
    name_en: "CountriesApp",
    image: `${process.env.PUBLIC_URL}/images/imgs-slider/countriesapp.jpg`,
    link: "https://github.com/Jony-17/Countries-App/",
    type_pt: "Projeto Pessoal",
    type_en: "Personal Project",
  },
  {
    name_pt: "PopCornFilms",
    name_en: "PopCornFilms",
    image: `${process.env.PUBLIC_URL}/images/imgs-slider/popcornfilms.png`,
    link: "https://github.com/Jony-17/PopCornFilms",
    type_pt: "Projeto Pessoal",
    type_en: "Personal Project",
  },
  // {
  //   name_pt: "Box Champ",
  //   name_en: "Box Champ",
  //   image: `${process.env.PUBLIC_URL}/images/imgs-slider/boxchamp.jpg`,
  //   link: "https://github.com/Jony-17/Box-Champ",
  //   type_pt: "Projeto Pessoal",
  //   type_en: "Personal Project",
  // },
  {
    name_pt: "JPMusicShop",
    name_en: "JPMusicShop",
    image: `${process.env.PUBLIC_URL}/images/imgs-slider/jpmusicshop.jpg`,
    link: "",
    type_pt: "Projeto Académico",
    type_en: "Academic Project",
  },
  {
    name_pt: "iLavagem",
    name_en: "iLavagem",
    image: `${process.env.PUBLIC_URL}/images/imgs-slider/ilavagem.jpg`,
    link: "https://github.com/Jony-17/iLavagem",
    type_pt: "Projeto Académico",
    type_en: "Academic Project",
  },
  // {
  //   name_pt: "Tasty Food",
  //   name_en: "Tasty Food",
  //   image: `${process.env.PUBLIC_URL}/images/imgs-slider/tastyfood.jpg`,
  //   link: "https://github.com/Jony-17/Tasty-Food",
  //   type_pt: "Projeto Pessoal",
  //   type_en: "Personal Project",
  // },
];

export default function Portfolio() {
  return (
    <section className="projects" id="projects">
      <div className="container">
        <div className="projects-text">
          <div className="title-wrapper">
            <h1 data-lang="pt" className="btn-ss">
              Pessoais e académicos
            </h1>
            <h1 data-lang="pt" className="title-normal">
              Projetos
            </h1>

            <h1 data-lang="en" className="btn-ss" style={{ display: "none" }}>
              Personal and academic
            </h1>
            <h1
              data-lang="en"
              className="title-normal"
              style={{ display: "none" }}
            >
              Projects
            </h1>
          </div>
        </div>

        <div className="card3-container">
          {projects.map((project, index) => (
            <div className="card3" key={index}>
              <img src={project.image} alt={project.name} />
              <div className="overlay">
                <div className="overlay__icon">
                  <a href={project.link} target="_blank" rel="noreferrer">
                    {project.link ? <i className="fab fa-github"></i> : ""}
                  </a>
                </div>
                <div className="overlay__text">
                  <h1 data-lang="pt">{project.name_pt}</h1>
                  <h1 data-lang="en" style={{ display: "none" }}>
                    {project.name_en}
                  </h1>

                  <p data-lang="pt">{project.type_pt}</p>
                  <p data-lang="en" style={{ display: "none" }}>
                    {project.type_en}
                  </p>
                </div>
              </div>
            </div>
          ))}

          {/* <div className="video" id="videoPlayer">
          <video width="100%" controls autoplay id="myVideo">
            <source src="/images/PortalSaudeMental.mp4" type="video/mp4" />
          </video>
          <i
            className="fas fa-times-circle close-btn"
            onclick="stopVideo()"
          ></i>
        </div> */}

          {/* <script>
            var videoPlayer = document.getElementById("videoPlayer");
            var myVideo = document.getElementById("myVideo");

            function stopVideo() {
                videoPlayer.style.display = "none";
            }

            function playVideo() {
                videoPlayer.style.display = "block";
            }
        </script> */}
        </div>
      </div>
    </section>
  );
}
