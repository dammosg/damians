import "./Navbar.css";
import toggle_func from "./Toggle";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <a href="#hero">
          <h2>Dammo.dev</h2>
        </a>
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
            <a href="#contact">Contacts</a>
          </li>
        </ul>
        <span
          onClick={() => {
            const toggle = toggle_func();
            //const toggle = body?.querySelector(".sidebar");
            toggle?.classList.replace("closed", "open");
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="34"
            height="34"
            fill="currentColor"
            className="bi bi-list"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
            />
          </svg>
        </span>
      </nav>
    </>
  );
};

//const body = document.querySelector("body");

export default Navbar;
