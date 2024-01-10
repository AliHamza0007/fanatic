import { Autoplay, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "../styles/Clients.css";
import { Rotate } from "react-reveal";
const img1 =
  "https://fanatic-theme.ivkovic.me/static/media/logo01.f0f3765f.svg";
const img2 =
  "https://fanatic-theme.ivkovic.me/static/media/logo02.ef3dc476.svg";
const img3 =
  "https://fanatic-theme.ivkovic.me/static/media/logo03.ed39a486.svg";
const img4 =
  "https://fanatic-theme.ivkovic.me/static/media/logo04.d4601325.svg";
const img5 =
  "https://fanatic-theme.ivkovic.me/static/media/logo05.e583f97d.svg";
const img6 =
  "https://fanatic-theme.ivkovic.me/static/media/logo06.7fcfefca.svg";
const Clients = () => {
  return (
    <Rotate>
      <div className="bg-light">
        <div className="container clients py-5">
          <Swiper
            className="Swiper "
            modules={[EffectFade, Autoplay]}
            effect="slide"
            speed="1000"
            autoplay={{
              delay: 4500,
              disableOnInteraction: false,
            }}
            spaceBetween={20}
            breakpoints={{
              1024: {
                slidesPerView: 6,
              },
              768: {
                slidesPerView: 4,
              },
              425: {
                slidesPerView: 3,
              },
            }}
          >
            <SwiperSlide>
              <img className="img-fluid swiperImg" src={img1} alt="Clients" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="img-fluid swiperImg" src={img2} alt="Clients" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="img-fluid swiperImg" src={img3} alt="Clients" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="img-fluid swiperImg" src={img4} alt="Clients" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="img-fluid swiperImg" src={img5} alt="Clients" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="img-fluid swiperImg" src={img6} alt="Clients" />
            </SwiperSlide>{" "}
            <SwiperSlide>
              <img className="img-fluid swiperImg" src={img1} alt="Clients" />
            </SwiperSlide>
          </Swiper>{" "}
        </div>
      </div>
    </Rotate>
  );
};

export default Clients;
