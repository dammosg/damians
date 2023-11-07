import "./Developer.css";
import DevImg from "../images/DevPhoto.jpg";

const Developer = () => {
  return (
    <>
      <section className="section-odd sec-hero" id="hero">
        <div className="container">
          <div className="hero">
            <div className="dev-txt">
              <h1>Front-End Web Developer</h1>
              <h3>
                Hello, I'm Damian Sevilla, a recently graduated Computer Systems
                Engineer with a passion for Front-end Web Development.
              </h3>
              <div className="skills">
                <h4>Skills</h4>
                <div className="icons">
                  <img src="https://skillicons.dev/icons?i=html" alt="Skill" />
                  <img src="https://skillicons.dev/icons?i=css" alt="Skill" />
                  <img src="https://skillicons.dev/icons?i=js" alt="Skill" />
                  <img src="https://skillicons.dev/icons?i=react" alt="Skill" />
                </div>
              </div>
            </div>
            <img
              src={DevImg}
              alt="Damian Sevilla - Developer"
              className="dev-img"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Developer;
