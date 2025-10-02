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
                <span className="line"></span>Sou uma pessoa que gosta de
                aprender, sempre focado em adquirir conhecimento de modo a
                conseguir agregar valor a todos os projetos em que me insiro.
                Além da programação, aprecio bastante desporto, séries, música e
                estar com a família para recarregar as energias. Apaixonado pelo
                mundo da tecnologia, gosto de me manter atualizado com as
                novidades da área.
              </p>

              <p data-lang="en" style={{ display: "none" }}>
                <span className="line"></span>I'm a person who enjoys learning,
                always focused on acquiring knowledge in order to add value to
                every project I'm involved in. Besides programming, I also enjoy
                sports, TV shows, music, and being with my family to recharge my
                batteries. Passionate about the world of technology, I enjoy
                staying up to date with the latest developments in the field.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
