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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                dignissim mi nec lacus porta, a imperdiet nisl gravida. Ut
                tempor egestas nibh in vehicula. Phasellus viverra urna sed dui
                sodales varius. Quisque imperdiet, libero non congue rutrum, leo
                ex pulvinar erat, nec tristique erat diam a sem. Suspendisse
                odio libero, pharetra quis condimentum pharetra, vehicula a
                felis. Integer ut dolor nunc. Orci varius natoque penatibus et
                magnis dis parturient montes, nascetur ridiculus mus. Proin
                augue felis, egestas sit amet consequat aliquet, sagittis vel
                tellus.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
