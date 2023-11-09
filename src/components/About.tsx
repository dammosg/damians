import "./About.css";
import aboutimg from "../images/about_img.jpg";

const About = () => {
  return (
    <>
      <section className="section-pair" id="about-me">
        <div className="container">
          <div className="sec-title">About me</div>
          <div className="about-me">
            <img src={aboutimg} alt="" />
            <div className="about-txt">
              <h3>Hello</h3>
              <p>
                Recientemente egresado de la Licenciatura en Ingeniería en
                Sistemas Computacionales en la Universidad de Guanajuato, con
                interés de desarrollarme en el área de sistemas. Mi principal
                objetivo es seguir aprendiendo y desarrollando habilidades,
                quiero seguir creciendo como desarrollador. Me considero una
                persona capacitada para el trabajo en equipo, así como con una
                gran creatividad para la resolución de problemas.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
