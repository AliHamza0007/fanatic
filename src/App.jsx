import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Blog from "./pages/Blog";
import Clients from "./pages/Clients";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Pricing from "./pages/Pricing";
import Project from "./pages/Project";
import Service from "./pages/Service";
import { Element } from "react-scroll";
import './styles/Animation.css'
function App() {
  return (
    <>
      {" "}
      <Navbar />
      <Element name="home">
        <Home />
      </Element>
      <Clients />
      <Element name="service">
        <Service />
      </Element>
      <Element name="projects">
        <Project />
      </Element>
      <Element name="blog">
        <Blog />
      </Element>
      <Element name="pricing">
        <Pricing />
      </Element>
      <Element name="contact">
        <Contact />
      </Element>
      <Footer />
    </>
  );
}

export default App;
