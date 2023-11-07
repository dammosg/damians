import "./Contact.css";

const Contact = () => {
  return (
    <>
      <section className="section-pair" id="contact">
        <div className="container">
          <div className="sec-title">CONTACT</div>
          <h2>You can find me here 👇</h2>
          <div className="contacts">
            <div className="contact">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30px"
                  height="30px"
                  viewBox="0 0 20 20"
                  fill="#ffffff"
                >
                  <rect x="0" fill="none" width="20" height="20" />
                  <g>
                    <path d="M2.5 18h3V6.9h-3V18zM4 2c-1 0-1.8.8-1.8 1.8S3 5.6 4 5.6s1.8-.8 1.8-1.8S5 2 4 2zm6.6 6.6V6.9h-3V18h3v-5.7c0-3.2 4.1-3.4 4.1 0V18h3v-6.8c0-5.4-5.7-5.2-7.1-2.6z" />
                  </g>
                </svg>
              </span>
              <div className="contact-info">
                <h3>
                  <p>LinkedIn</p>
                </h3>
                <a
                  href="https://www.linkedin.com/in/d-sevillagallardo/"
                  target="_blank"
                  rel="noreferrer"
                >
                  linkedin.com/in/d-sevillagallardo/
                </a>
              </div>
            </div>
            <div className="contact">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35px"
                  height="35px"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M4 18L9 12M20 18L15 12M3 8L10.225 12.8166C10.8665 13.2443 11.1872 13.4582 11.5339 13.5412C11.8403 13.6147 12.1597 13.6147 12.4661 13.5412C12.8128 13.4582 13.1335 13.2443 13.775 12.8166L21 8M6.2 19H17.8C18.9201 19 19.4802 19 19.908 18.782C20.2843 18.5903 20.5903 18.2843 20.782 17.908C21 17.4802 21 16.9201 21 15.8V8.2C21 7.0799 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V15.8C3 16.9201 3 17.4802 3.21799 17.908C3.40973 18.2843 3.71569 18.5903 4.09202 18.782C4.51984 19 5.07989 19 6.2 19Z"
                    stroke="#ffffff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <div className="contact-info">
                <h3>
                  <p>Mail</p>
                </h3>
                <a
                  href="mailto:d.sevillagallardo@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  d.sevillagallardo@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
