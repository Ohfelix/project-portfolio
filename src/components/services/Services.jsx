import React, { useState } from "react";
import "./services.css";

const Services = () => {
  const [toggleState, setToggleState] = useState(null);

  const toggleTab = (index) => {
    if (toggleState === index) {
      // Se o modal já estiver aberto, fecha-o
      setToggleState(null);
    } else {
      // Senão, abre o modal correspondente
      setToggleState(index);
    }
  };

  return (
    <section className="services section" id="services">
      <h2 className="section__title">Serviços</h2>
      <span className="section__subtitle"></span>

      <div className="services__container container grid">
        <div className="services__content">
          <div className="services__tabs">
            <i className="uil uil-web-grid services__icon"></i>
            <h3 className="services__title">
              Desenvolvedor de  <br /> Produto
            </h3>
          </div>

          <span className="services__button" onClick={() => toggleTab(1)}>
            Veja mais
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 1
                ? "services__modal active-modal"
                : "services__modal" === 1
                  ? "services__modal active-modal"
                  : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services__modal-close"
              ></i>

              <h3 className="services__modal-title">Desenvolvedor de Produto</h3>
              <p className="services__modal-description">
                Habilitado como desenvolvedor full stack MERN (MongoDB, Express.js, React.js e Node.js) possuo habilidades técnicas e conhecimentos necessários para criar aplicativos web completos, desde o back-end até o front-end. Algumas das qualificações.
              </p>

              <ul className="services__modal-services grid">

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Conhecimento profundo de JavaScript: O JavaScript é a linguagem principal utilizada em todo o stack MERN, portanto, é essencial ter um domínio sólido dessa linguagem.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Conhecimento de Node.js: Node.js é uma plataforma de tempo de execução JavaScript que permite executar código JavaScript no lado do servidor.</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Experiência em MongoDB: Como parte do stack MERN, o MongoDB é um banco de dados NoSQL amplamente utilizado.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Domínio do Express.js: O Express.js é um framework de aplicativo web para Node.js, usado para criar APIs RESTful e gerenciar rotas do servidor
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Experiência em React.js: React.js é uma biblioteca JavaScript para construir interfaces de usuário interativas.
                  </p>
                </li>
                <div className="close__modal" onClick={() => toggleTab(0)}>
                  <p className="services__button" > X </p></div>
              </ul>
            </div>
          </div>
        </div>



        <div className="services__content">
          <div>
            <i className="uil uil-edit services__icon"></i>
            <h3 className="services__title">
              Tecnico em Automação <br /> Industrial
            </h3>
          </div>

          <span onClick={() => toggleTab(3)} className="services__button">
            Veja mais
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 3
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services__modal-close"
              ></i>

              <h3 className="services__modal-title">Tecnico em Automação industrial</h3>
              <p className="services__modal-description">
                Um técnico em automação industrial geralmente possui uma combinação de habilidades técnicas, conhecimento teórico e experiência prática para trabalhar efetivamente na área. Algumas das qualificações comumente procuradas para esse cargo incluem:
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Habilidades em Programação: (por exemplo, ladder, FBD, SFC).
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Conhecimento em Instrumentação Industrial:como transmissores de pressão, temperatura, vazão, nível, etc.</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Conhecimento em Eletrônica e Eletrotécnica: Compreensão dos princípios básicos de eletrônica e circuitos elétricos, incluindo leitura de diagramas elétricos.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Segurança Industrial: Conhecimento das normas de segurança aplicáveis à indústria, bem como práticas seguras de trabalho em ambientes industriais.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Capacidade de Diagnosticar Problemas:Habilidade para identificar e solucionar problemas em sistemas automatizados, utilizando técnicas de troubleshooting e diagnóstico de falhas.
                  </p>
                </li>
              </ul>
              <div className="close__modal" onClick={() => toggleTab(0)}>
                <p className="services__button" > X </p></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
