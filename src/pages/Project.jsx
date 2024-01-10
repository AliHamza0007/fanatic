import "../styles/Project.css";
import { Autoplay, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
const Project = () => {
  const p1 = "https://fanatic-theme.ivkovic.me/static/media/1.a5bccf4d.png";
  const p2 = "https://fanatic-theme.ivkovic.me/static/media/2.0f8a79af.png";
  const p3 = "https://fanatic-theme.ivkovic.me/static/media/3.0455be02.png";
  const p4 = "https://fanatic-theme.ivkovic.me/static/media/4.458728e0.png";
  const p5 = "https://fanatic-theme.ivkovic.me/static/media/5.efb4120c.png";
  const p6 = "https://fanatic-theme.ivkovic.me/static/media/6.c1d5b81c.png";
  const img1 =
    "https://fanatic-theme.ivkovic.me/static/media/header-img.bc6cb80a.png";
  return (
    <>
      <div className="container py-5 mt-md-3 ps-3">
        <h1 className="pt-5 cp">
          <b>Our Awesome Projects</b>
        </h1>
        <p className="pt-3 col-lg-7 col-12">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua.
        </p>

        <div className="row mb-md-5 p-3">
          <Swiper
            className="swiper text-center py-5"
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
            spaceBetween={20}
            pagination={{
              clickable: true,
            }}
          >
            <SwiperSlide>
              <img
                src={p1}
                alt="IMG"
                className="img-fluid swiperSlideImg rounded-5 "
              />
              <h3 className="pt-5">
                <b>Awesome Project</b>
              </h3>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor.
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={p2}
                alt="IMG"
                className="img-fluid swiperSlideImg rounded-5 "
              />
              <h3 className="pt-5">
                <b>Awesome Project</b>
              </h3>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor.
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={p3}
                alt="IMG"
                className="img-fluid swiperSlideImg rounded-5 "
              />
              <h3 className="pt-5">
                <b>Awesome Project</b>
              </h3>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor.
            </SwiperSlide>
          </Swiper>
          <Swiper
            className="swiper text-center py-5"
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
            spaceBetween={20}
            pagination={{
              clickable: true,
            }}
          >
            <SwiperSlide>
              <img
                src={p4}
                alt="IMG"
                className="img-fluid swiperSlideImg rounded-5 "
              />
              <h3 className="pt-5">
                <b>Awesome Project</b>
              </h3>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor.
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={p5}
                alt="IMG"
                className="img-fluid swiperSlideImg rounded-5 "
              />
              <h3 className="pt-5">
                <b>Awesome Project</b>
              </h3>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor.
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={p6}
                alt="IMG"
                className="img-fluid swiperSlideImg rounded-5 "
              />
              <h3 className="pt-5">
                <b>Awesome Project</b>
              </h3>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor.
            </SwiperSlide>
          </Swiper>

          <div className="btn text-center py-4">
            <button className="btn btnGetStarted rounded-4 btn-lg px-5 py-2">
              Learn More
            </button>
          </div>
        </div>
      </div>
      <div className=" bg-light">
        <div className="container py-md-5 ">
          <div className="row py-3  ">
            <div className="col-md-6 col-12   text-center  position-relative mb-4">
              <img
                src={img1}
                alt="Img1"
                className="img-fluid rounded-4 projectImg1 "
              />
            </div>
            <div className="col-md-6 col-12 px-3">
              <h6>A few words about company</h6>
              <h1 className="fw-bold cp">A Study of Creativity</h1>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum.
              <div className="btn-group py-md-5 py-3 ">
                <button className=" border btn-lg px-md-5 py-2 me-2 btnGetStarted btn rounded-4">
                  Get Started
                </button>
                <button className=" ms-2  btnContactUs  btn btn-lg px-md-5 py-2 rounded-4">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
