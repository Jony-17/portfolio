import React from "react";

export default function Footer() {
  return (
    <section className="footer">
      <div className="footer-icons">
        <a href="mailto:joaoaraujo2001@hotmail.com">
          <i className="fas fa-envelope"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/joaoaraujo17/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://github.com/Jony-17" target="_blank" rel="noreferrer">
          <i className="fab fa-github"></i>
        </a>
      </div>
      <p data-lang="pt">João Araújo © 2024 Todos os direitos reservados</p>
      <p data-lang="en" style={{ display: "none" }}>
        João Araújo © 2024 All Rights Reserved.
      </p>
    </section>
  );
}
