import { Autoplay, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Checkmark from "../assets/svg/Checkmark";
import "../styles/Pricing.css";
const Pricing = () => {
  return (
    <div className="container py-5 mt-5">
      <h1 className="pt-5">
        <b>Check Our Pricing</b>
      </h1>
      <p className="pt-3 col-lg-7 col-12 p-2">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua.
      </p>
      <div className="row">
        <Swiper
          className="swiper  py-5"
          modules={[EffectFade, Autoplay]}
          effect="slide"
          speed="1000"
          autoplay={{
            delay: 8500,
            disableOnInteraction: false,
          }}
          // slidesPerView={3}
          breakpoints={{
            768: {
              slidesPerView: 3,
            },
            425: {
              slidesPerView: 1,
            },
          }}
          spaceBetween={40}
          pagination={{
            clickable: true,
          }}
        >
          <SwiperSlide>
            <div className="pricingSlide py-4 p-3">
              <div className="d-flex py-4 justify-content-between">
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
                <h2>
                  <b className="fw">$29,99/mo</b>
                </h2>
              </div>
              <span className="ps-2">
                {" "}
                <h2 className="py-2">
                  <b className="fw">Starter</b>
                </h2>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor.
                <div className=" pt-5 d-flex align-items-center">
                  <Checkmark />
                  <h5>
                    <b className=" ps-2 fw">Product Offer</b>
                  </h5>
                </div>
                <div className=" pt-3  d-flex align-items-center">
                  <Checkmark />
                  <h5>
                    <b className=" ps-2 fw"> Offer</b>
                  </h5>
                </div>
                <h5 className="pt-3">
                  <b className="ps-4   fw"> Product Offer #2</b>
                </h5>
                <h5 className="pt-3">
                  <b className="ps-4  fw"> Product </b>
                </h5>
                <h5 className="pt-3">
                  <b className="ps-4   fw"> Product Offer</b>
                </h5>
              </span>
              <div className="text-center pt-5 ">
                {" "}
                <button className="btn btnBuy rounded-4 btn-lg px-5 py-2">Buy</button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="pricingSlide py-4 p-3">
              <div className="d-flex py-4 justify-content-between">
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
                <h2>
                  <b className="fw">$49,99/mo</b>
                </h2>
              </div>
              <span className="ps-2">
                {" "}
                <h2 className="py-2">
                  <b className="fw">Basic</b>
                </h2>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor.
                <div className=" pt-5 d-flex align-items-center">
                  <Checkmark />
                  <h5>
                    <b className=" ps-2 fw">Product Offer</b>
                  </h5>
                </div>
                <div className=" pt-3  d-flex align-items-center">
                  <Checkmark />
                  <h5>
                    <b className=" ps-2 fw"> Offer</b>
                  </h5>
                </div>
                <div className=" pt-3  d-flex align-items-center">
                  <Checkmark />
                  <h5>
                    <b className=" ps-2 fw"> Product Offer #2r</b>
                  </h5>
                </div>
                <div className=" pt-3  d-flex align-items-center">
                  <Checkmark />
                  <h5>
                    <b className=" ps-2 fw"> Product</b>
                  </h5>
                </div>
                <h5 className="pt-3">
                  <b className="ps-4   fw"> Product Offer</b>
                </h5>
              </span>
              <div className="text-center pt-5 ">
                {" "}
                <button className="btn btnBuy rounded-4 btn-lg px-5 py-2">Buy</button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="pricingSlide py-4 p-3">
              <div className="d-flex py-4 justify-content-between">
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
                <h2>
                  <b className="fw">$59,99/mo</b>
                </h2>
              </div>
              <span className="ps-2">
                {" "}
                <h2 className="py-2">
                  <b className="fw">Golden</b>
                </h2>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor.
                <div className=" pt-5 d-flex align-items-center">
                  <Checkmark />
                  <h5>
                    <b className=" ps-2 fw">Product Offer</b>
                  </h5>
                </div>
                <div className=" pt-3  d-flex align-items-center">
                  <Checkmark />
                  <h5>
                    <b className=" ps-2 fw"> Offer</b>
                  </h5>
                </div>
                <div className=" pt-3  d-flex align-items-center">
                  <Checkmark />
                  <h5>
                    <b className=" ps-2 fw"> Product Offer #2r</b>
                  </h5>
                </div>
                <div className=" pt-3  d-flex align-items-center">
                  <Checkmark />
                  <h5>
                    <b className=" ps-2 fw"> Product</b>
                  </h5>
                </div>
                <div className=" pt-3  d-flex align-items-center">
                  <Checkmark />
                  <h5>
                    <b className=" ps-2 fw"> Product Offer</b>
                  </h5>
                </div>
              </span>
              <div className="text-center pt-5 ">
                {" "}
                <button className="btn btnBuy rounded-4 btn-lg px-5 py-2 ">Buy</button>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Pricing;
