import React from "react";
import "./skills.css";
import Frontend from "./Frontend";
import Backend from "./Backend";
import Industrial from "./Industrial";

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">Minhas Habilidades técnicas</span>

      <div className="skills__container container grid">
        <Frontend />
        <Backend />
        <Industrial />
      </div>
    </section>
  );
};

export default Skills;
