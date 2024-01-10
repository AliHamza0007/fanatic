import "../styles/Service.css";
import { Autoplay, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Service = () => {
  const img1 = "https://fanatic-theme.ivkovic.me/static/media/1.ff5a8a0f.png";
  const img2 = "https://fanatic-theme.ivkovic.me/static/media/2.bf428a23.png";
  const img3 = "https://fanatic-theme.ivkovic.me/static/media/3.0fb8f7f8.png";
  const img4 = "https://fanatic-theme.ivkovic.me/static/media/4.bff77eac.png";

  const boxes = document.querySelectorAll(".animateSlide");
  window.addEventListener("scroll", checkBoxes);
  checkBoxes();
  function checkBoxes() {
    const triggerBottom = (window.innerHeight / 5) * 4;
    boxes.forEach((box) => {
      const boxTop = box.getBoundingClientRect().top;
      if (boxTop < triggerBottom) {
        box.classList.add("show");
      } else {
        box.classList.remove("show");
      }
    });
  }
  return (
    <>
      <div className={`container py-5 mb-5 px-3 overflow-x-hidden`}>
        <h1 className="animateSlide cp">
          <b>Our Awesome Services</b>
        </h1>
        <p className="animateSlide pt-3 col-lg-7 col-12 p-2">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua.
        </p>

        {/*  Card or boxes  */}
        <div className="row py-lg-5">
          <Swiper
            className="swiper px-3 text-md-start text-center"
            modules={[EffectFade, Autoplay]}
            effect="slide"
            speed="1000"
            autoplay={{
              delay: 8500,
              disableOnInteraction: false,
            }}
            // slidesPerView={3}
            breakpoints={{
              1024: {
                slidesPerView: 4,
              },
              768: {
                slidesPerView: 2,
              },
              425: {
                slidesPerView: 1,
              },
            }}
            spaceBetween={20}
            pagination={{
              clickable: true,
            }}
          >
            <SwiperSlide>
              <div className="box">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35.459"
                  height="43.42"
                  viewBox="0 0 35.459 43.42"
                >
                  <g data-name="Group 70">
                    <path
                      data-name="Path 121"
                      d="M24.571 12.115H4.778a3.425 3.425 0 01-3.412-3.411V4.78a3.425 3.425 0 013.411-3.415h19.792a3.427 3.427 0 013.413 3.412v3.924a3.424 3.424 0 01-3.408 3.414z"
                      fill="#f2b300"
                    ></path>
                    <path
                      data-name="Path 122"
                      d="M30.981 4.552h-1.647a4.782 4.782 0 00-4.765-4.55H4.779A4.787 4.787 0 00.001 4.781v3.922a4.787 4.787 0 004.778 4.778h19.79a4.785 4.785 0 004.776-4.778V7.282h1.636a1.836 1.836 0 011.748 1.876 4.152 4.152 0 01-2.31 3.309l-13.158 5.54a6.889 6.889 0 00-3.98 5.995v1.5a4.784 4.784 0 00-3.555 4.612v8.531a4.782 4.782 0 004.778 4.775h.339a4.784 4.784 0 004.776-4.776v-8.531a4.782 4.782 0 00-3.611-4.626V24a4.292 4.292 0 012.311-3.478l13.16-5.542a6.75 6.75 0 003.98-5.824 4.553 4.553 0 00-4.478-4.604zm-4.364 4.15a2.069 2.069 0 01-2.048 2.047H4.779a2.069 2.069 0 01-2.048-2.047V4.78a2.07 2.07 0 012.048-2.049h19.79a2.07 2.07 0 012.048 2.049v3.922zM16.89 30.114v8.531a2.067 2.067 0 01-2.047 2.046h-.339a2.07 2.07 0 01-2.05-2.046v-8.531a2.071 2.071 0 012.05-2.048h.339a2.066 2.066 0 012.047 2.047z"
                      fill="#0b093b"
                    ></path>
                  </g>
                </svg>
                <h3 className="py-lg-4">Graphic Design</h3>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore.
                </p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="box">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="43.336"
                  height="32.531"
                  viewBox="0 0 43.336 32.531"
                >
                  <g data-name="Group 71">
                    <path
                      data-name="Path 123"
                      d="M38.562 24.112H4.778a3.428 3.428 0 01-3.414-3.406V4.776a3.424 3.424 0 013.409-3.412h33.784a3.425 3.425 0 013.41 3.41V20.7a3.425 3.425 0 01-3.407 3.412z"
                      fill="#f40051"
                    ></path>
                    <path
                      data-name="Path 124"
                      d="M38.559 0H4.778A4.785 4.785 0 000 4.776v15.922a4.786 4.786 0 004.778 4.778h13.507v4.322h-3.926a.684.684 0 00-.681.683v1.366a.684.684 0 00.681.683h14.619a.685.685 0 00.682-.683v-1.366a.685.685 0 00-.682-.683h-3.926v-4.322H38.56a4.786 4.786 0 004.776-4.778V4.776A4.785 4.785 0 0038.559 0zM22.321 29.8h-1.308v-4.322h1.308zm18.283-9.1a2.068 2.068 0 01-2.045 2.048H4.778a2.07 2.07 0 01-2.05-2.048V4.778a2.069 2.069 0 012.048-2.047h33.782a2.069 2.069 0 012.045 2.047z"
                      fill="#0b093b"
                    ></path>
                  </g>
                </svg>
                <h3 className="py-lg-4">Web Design</h3>{" "}
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="box">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="39.581"
                  height="39.58"
                  viewBox="0 0 39.581 39.58"
                >
                  <g data-name="Group 72">
                    <path
                      data-name="Path 127"
                      d="M34.807 38.214H4.778a3.424 3.424 0 01-3.412-3.41V14.548a3.426 3.426 0 013.408-3.4h30.029a3.423 3.423 0 013.41 3.411v20.246a3.423 3.423 0 01-3.408 3.413z"
                      fill="#4cd5c5"
                    ></path>
                    <g data-name="Group 69" fill="#0b093b">
                      <path
                        data-name="Path 128"
                        d="M34.803 0H4.777A4.785 4.785 0 000 4.777v30.025a4.787 4.787 0 004.777 4.778h30.026a4.785 4.785 0 004.776-4.778V4.777A4.785 4.785 0 0034.803 0zm2.046 34.8a2.068 2.068 0 01-2.046 2.048H4.777A2.07 2.07 0 012.729 34.8V14.547a2.07 2.07 0 012.048-2.04h30.026a2.069 2.069 0 012.046 2.05zm0-24.552a4.775 4.775 0 00-2.046-.47H4.777a4.783 4.783 0 00-2.048.47V4.774a2.069 2.069 0 012.047-2.047h30.026a2.068 2.068 0 012.046 2.047z"
                      ></path>
                      <path
                        data-name="Path 129"
                        d="M25.905 3.182a3.072 3.072 0 103.071 3.072 3.075 3.075 0 00-3.071-3.072zm0 4.378a1.307 1.307 0 111.307-1.305 1.314 1.314 0 01-1.305 1.306z"
                      ></path>
                      <path
                        data-name="Path 130"
                        d="M32.673 3.182a3.072 3.072 0 103.07 3.072 3.073 3.073 0 00-3.07-3.072zm0 4.378a1.307 1.307 0 111.307-1.305 1.315 1.315 0 01-1.305 1.306z"
                      ></path>
                    </g>
                  </g>
                </svg>
                <h3 className="py-lg-4">Development</h3>{" "}
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="box">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="39.581"
                  height="39.58"
                  viewBox="0 0 39.581 39.58"
                >
                  <g data-name="Group 73">
                    <path
                      data-name="Path 125"
                      d="M34.806 34.007h-2.5v-1.362a3.43 3.43 0 00-3.414-3.414H10.696a3.434 3.434 0 00-3.413 3.416v1.362h-2.5A3.429 3.429 0 011.369 30.6V20.417a3.428 3.428 0 013.411-3.412h30.028a3.428 3.428 0 013.414 3.409v10.181a3.429 3.429 0 01-3.411 3.414z"
                      fill="#7620ff"
                    ></path>
                    <path
                      data-name="Path 126"
                      d="M34.804 15.64h-3.525V4.777A4.784 4.784 0 0026.504 0H13.081a4.785 4.785 0 00-4.775 4.777v10.862H4.781a4.784 4.784 0 00-4.778 4.777v10.177a4.785 4.785 0 004.778 4.776h1.175a4.782 4.782 0 004.74 4.208h18.2a4.785 4.785 0 004.738-4.209h1.175a4.786 4.786 0 004.778-4.776V20.417a4.784 4.784 0 00-4.783-4.777zM11.034 4.778A2.069 2.069 0 0113.08 2.73h13.423a2.068 2.068 0 012.046 2.048V15.64H11.034zm17.857 32.073h-18.2a2.066 2.066 0 01-1.955-1.479 1.944 1.944 0 01-.094-.568v-2.159a2.07 2.07 0 012.049-2.046h18.2a2.068 2.068 0 012.047 2.046v2.159a1.943 1.943 0 01-.093.568 2.068 2.068 0 01-1.954 1.479zm7.962-6.256a2.072 2.072 0 01-2.049 2.048h-1.137a4.787 4.787 0 00-4.776-4.776h-18.2a4.788 4.788 0 00-4.778 4.778H4.776a2.073 2.073 0 01-2.049-2.048v-10.18a2.072 2.072 0 012.049-2.049h30.025a2.071 2.071 0 012.049 2.049z"
                      fill="#0b093b"
                    ></path>
                  </g>
                </svg>
                <h3 className="py-lg-4">Print</h3>{" "}
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore.
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className=" bg-light position-relative  px-3">
        <div className="container py-lg-5">
          <div className="row py-md-5  serviceRow">
            {" "}
            <div className="col-md-6 col-12 p-2">
              <h6>A few words about company</h6>
              <h1 className="cp">
                <b>A Study of Creativity</b>
              </h1>
              <p>
                {" "}
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum.
              </p>
              <div className="btn-group py-md-5 py-3">
                <button className="btn-lg px-md-5 btn py-2 border me-2 btnGetStarted  rounded-4">
                  Get Started
                </button>
                <button className="btn-lg px-md-5 btn py-2 ms-2  btnContactUs   rounded-4">
                  Contact Us
                </button>
              </div>
            </div>
            <div className="col-md-6 imagesColumn col-12 ps-md-5 p-2">
              <div className="row imagesColumn ps-md-5 p-2">
                <div className="col-6 pe-4 ">
                  <img
                    src={img1}
                    alt="Img1"
                    className="img-fluid rounded-4 mb-5 img1"
                  />
                  <img
                    src={img3}
                    alt="Img1"
                    className="img-fluid rounded-4   img3 float-right"
                  />
                </div>
                <div className="col-6 ps-2  mt-5 ">
                  {" "}
                  <img
                    src={img2}
                    alt="Img1"
                    className="img-fluid rounded-4  img2"
                  />{" "}
                  <img
                    src={img4}
                    alt="Img1"
                    className="img-fluid rounded-4 mt-5 img4"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
