import React from "react";

const Industrial = () => {
    return (
        <div className="skills__content">
            <h3 className="skills__title">Tecnico Industrial</h3>

            <div className="skills__box">
                <div className="skills__group">
                    <div className="skills__data">
                        <i class="bx bx-badge-check"></i>

                        <div>
                            <h3 className="skills__name">Tecnico em Automação industrial</h3>
                            <span className="skills__level">Basico</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i class="bx bx-badge-check"></i>

                        <div>
                            <h3 className="skills__name">Eletricista Instalador</h3>
                            <span className="skills__level">Basico</span>
                        </div>
                    </div>


                </div>

                <div className="skills__group">
                    <div className="skills__data">
                        <i class="bx bx-badge-check"></i>

                        <div>
                            <h3 className="skills__name">PLC Programação</h3>
                            <span className="skills__level">Basico</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i class="bx bx-badge-check"></i>

                        {/*      <div>
                            <h3 className="skills__name">Firebase</h3>
                            <span className="skills__level">Intermediate</span>
                        </div> */}
                    </div>

                    <div className="skills__data">
                        <i class="bx bx-badge-check"></i>

                        {/*       <div>
              <h3 className="skills__name">SQL</h3>
              <span className="skills__level">Intermediate</span>
            </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Industrial;
