import "./Footer.css";

const Footer = () => {
  return (
    <>
      <section className="sec-footer">
        <div className="footer">
          <ul>
            <li>
              <a href="#hero">Home</a>
            </li>
            <li>
              <a href="#about-me">About</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
          <div className="Copyrights">
            <p>© 2023. All Rights Reserved</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
