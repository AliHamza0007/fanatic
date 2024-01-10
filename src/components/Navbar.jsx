import { Link } from "react-scroll";
import Logo from "../assets/svg/Logo";
import "../styles/Navbar.css";
const Navbar = () => {
  return (
    <div className="bgNav mb-5">
      <nav className="navbar  navbar-expand-lg  justify-content-center ">
        <div className="container">
          <Link
            smooth
            spy
            activeClass="active"
            offset={70}
            duration={1000}
            className="navbar-brand "
            to="home"
          >
            <Logo className="me-3" />
            fanatic
          </Link>
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse " id="collapsibleNavId">
            <ul className="navbar-nav mx-auto text-center ">
              <li className="nav-item px-2">
                <Link
                  smooth
                  spy
                  activeClass="active"
                  offset={50}
                  duration={500}
                  className="nav-link "
                  to="home"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item px-2">
                <Link
                  smooth
                  spy
                  activeClass="active"
                  offset={50}
                  duration={500}
                  className="nav-link "
                  to="service"
                  aria-current="page"
                >
                  Service
                </Link>
              </li>
              <li className="nav-item px-2">
                <Link
                  smooth
                  spy
                  activeClass="active"
                  offset={50}
                  duration={500}
                  className="nav-link "
                  to="projects"
                  aria-current="page"
                >
                  Projects
                </Link>
              </li>
              <li className="nav-item px-2">
                <Link
                  smooth
                  spy
                  activeClass="active"
                  offset={50}
                  duration={500}
                  className="nav-link "
                  to="blog"
                  aria-current="page"
                >
                  Blog
                </Link>
              </li>
              <li className="nav-item px-2">
                <Link
                  smooth
                  spy
                  activeClass="active"
                  offset={50}
                  duration={500}
                  className="nav-link "
                  to="pricing"
                  aria-current="page"
                >
                  Pricing
                </Link>
              </li>
              <li className="nav-item px-2 ">
                <Link
                  smooth
                  spy
                  activeClass="active"
                  offset={50}
                  duration={500}
                  className="nav-link "
                  to="contact"
                  aria-current="page"
                >
                  Contact
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav ms-auto text-center ">
              <li className="nav-item  px-2">
                <Link
                  smooth
                  spy
                  activeClass="active"
                  offset={50}
                  duration={500}
                  className="nav-link "
                  to="logIn"
                  aria-current="page"
                >
                  log in
                </Link>
              </li>
              <li className="nav-item  px-2 ">
                <Link
                  smooth
                  spy
                  activeClass="active"
                  offset={50}
                  duration={500}
                  className="nav-link bg-light rounded-pill "
                  to="getStarted"
                  aria-current="page"
                >
                  Get Started
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
