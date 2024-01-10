import "../styles/Home.css";
import Dots from "../assets/svg/Dots";
import Quotes from "../assets/svg/Quotes";
import Zoom from "react-reveal/Zoom";

const Home = () => {
  const imgHome =
    "https://fanatic-theme.ivkovic.me/static/media/header-img.bc6cb80a.png";
  return (
    <div className=" overflow-hidden ">
      <div className="container   py-5 ">
        <div className="row mt-5  ">
          <div className="col-lg-6 col-12 m-auto text-lg-start text-center">
            <div className="container pe-xl-5">
              <Zoom>
                <h1 className="display-3 fw-bolder cp">We Are Digital Agency</h1>

                <h6 className="pb-4 pt-3 pe-xl-5 me-xl-5 ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  ut fringilla augue. Nunc condimentum convallis odio, at
                  convallis Nunc condimentum convallis odio, at convallis dolor
                  congue eu.
                </h6>
                <button className="btnGetStarted btn-lg px-5 py-2 rounded-4">
                  Get Started
                </button>
              </Zoom>{" "}
            </div>
          </div>
          <div className="col-lg-6 position-relative  col-12 text-lg-end text-center mt-4">
            <div className="dotDiv">
              <Dots className="Dots" />
            </div>
            <div className="pt-5">
              <img
                className="img-fluid  rounded-4 pe-4"
                src={imgHome}
                alt="IMGHome"
              />{" "}
            </div>
            <div className="QuotesDiv container  rounded-4 text-light">
              <p className=" text-start">
                Friend such as we desire,are dreams and fables. Friendship
                demands the ability to do without it.
              </p>
              <p className="text-end colorWarning">Ralph Waldo Emerson</p>
              <Quotes className="Quotes" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
