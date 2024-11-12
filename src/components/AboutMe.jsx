import React from "react";
import "../styles/style.scss";

export default function AboutMe() {
  return (
    <section className="about-me" id="about-me">
      <div className="container">
        <div className="about-me-content">
          <div className="begin-img"></div>

          <div className="about-me-content-right">
            <div className="title-wrapper">
              <h1 data-lang="pt" className="btn-ss">
                Quem sou eu?
              </h1>
              <h1 data-lang="pt" className="title-normal">
                Sobre mim
              </h1>

              <h1 data-lang="en" className="btn-ss" style={{ display: "none" }}>
                Who am I?
              </h1>
              <h1
                data-lang="en"
                className="title-normal"
                style={{ display: "none" }}
              >
                About me
              </h1>
            </div>

            <div className="about-me-text">
              <p data-lang="pt">
                <span className="line"></span>Desenvolvedor Front-end com foco
                no crescimento e aprendizagem contínua. Estou constantemente
                interessado em melhorar as minhas habilidades, seja em qualquer
                área, sempre com o intuito de me tornar melhor todos os dias.
                Além da programação, gosto de ser social e me conectar com as
                pessoas. Aprecio séries, música, desportos e estar com a família
                para recarregar as energias. Apaixonado pelo mundo da
                tecnologia, gosto de me manter atualizado com as novidades da
                área e principalmente de aprender.
              </p>

              <p data-lang="en" style={{ display: "none" }}>
                <span className="line"></span>Front-end developer focused on
                growth and continuous learning. I am constantly interested in
                improving my skills, be it in any area, always with the aim of
                becoming better every day. Besides programming, I like being
                social and connecting with people. I enjoy series, music, sports
                and being with my family to recharge my energy. Passionate about
                the world of technology, I like to keep up to date with new
                developments in the area and, above all, to learn.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
