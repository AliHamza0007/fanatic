import { Link } from "react-scroll";
import Logo from "../assets/svg/Logo";
import "../styles/Footer.css";
const Footer = () => {
  return (
    <div className="bgFooter">
      <div className="container fontSmallFooter   py-3 d-flex flex-sm-row flex-column justify-content-center align-items-center text-center">
        <Link
          smooth={true}
          offset={50}
          duration={1000}
          className="navbar-brand "
          to="home"
        >
          <Logo className="me-3" />
          <b className="fw"> fanatic</b>
        </Link>
        <span className="mx-md-auto  my-md-0 my-3">
          &copy; 2023-<span className="bgFooterText">Fanatic </span> ALL Right
          Reserved
        </span>
        <Link
          smooth
          spy
          offset={50}
          duration={2000}
          to="home"
          className="btnFooterHover fontSmallFooter text-light border-0 btn "
        >
          Back to top
        </Link>
      </div>
    </div>
  );
};

export default Footer;
