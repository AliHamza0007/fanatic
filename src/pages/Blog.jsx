import "../styles/Blog.css";
import { Autoplay, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Quotes from "../assets/svg/Quotes";

const Blog = () => {
  return (
    <>
      {" "}
      <div className="container py-5 mt-5">
        <h1 className="mt-lg-5 cp">
          <b>Our Blog Stories</b>
        </h1>
        <p className="pt-3 col-lg-7 col-12 p-2">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua.
        </p>
        <div className="row mb-5 p-3">
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
            spaceBetween={40}
            pagination={{
              clickable: true,
            }}
          >
            <SwiperSlide>
              <div className="card border-0  officeCardHover p-2 rounded-4 py-3 text-start">
                <h5 className="py-4">
                  <b>New Office!</b>
                </h5>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor.
                <b className="py-3">Luke Skywalker, 2 days ago</b>
                <button
                  className="btn
btnCompany d-inline me-auto px-3 rounded-4"
                >
                  <b> company</b>{" "}
                </button>{" "}
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card border-0  officeCardHover p-2 rounded-4 py-3 text-start">
                <h5 className="py-4">
                  <b>New Office!</b>
                </h5>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor.
                <b className="py-3">Luke Skywalker, 2 days ago</b>
                <button
                  className="btn
btnCompany d-inline me-auto px-3 rounded-4"
                >
                  <b> company</b>{" "}
                </button>{" "}
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card border-0  officeCardHover p-2 rounded-4 py-3 text-start">
                <h5 className="py-4">
                  <b>New Office!</b>
                </h5>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor.
                <b className="py-3">Luke Skywalker, 2 days ago</b>
                <button
                  className="btn
btnCompany d-inline me-auto px-3 rounded-4"
                >
                  <b> company</b>{" "}
                </button>{" "}
              </div>
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
            spaceBetween={40}
            pagination={{
              clickable: true,
            }}
          >
            <SwiperSlide>
              <div className="card border-0  officeCardHover p-2 rounded-4 py-3 text-start">
                <h5 className="py-4">
                  <b>New Office!</b>
                </h5>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor.
                <b className="py-3">Luke Skywalker, 2 days ago</b>
                <button
                  className="btn
btnCompany d-inline me-auto px-3 rounded-4"
                >
                  <b> company</b>{" "}
                </button>{" "}
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card border-0  officeCardHover p-2 rounded-4 py-3 text-start">
                <h5 className="py-4">
                  <b>New Office!</b>
                </h5>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor.
                <b className="py-3">Luke Skywalker, 2 days ago</b>
                <button
                  className="btn
btnCompany d-inline me-auto px-3 rounded-4"
                >
                  <b> company</b>{" "}
                </button>{" "}
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card border-0  officeCardHover p-2 rounded-4 py-3 text-start">
                <h5 className="py-4">
                  <b>New Office!</b>
                </h5>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor.
                <b className="py-3">Luke Skywalker, 2 days ago</b>
                <button
                  className="btn
btnCompany d-inline me-auto px-3 rounded-4"
                >
                  <b> company</b>{" "}
                </button>{" "}
              </div>
            </SwiperSlide>
          </Swiper>
          <div className="btn text-center py-4">
            <button className="btn btnGetStarted rounded-4 btn-lg px-5 py-2">
              Learn More
            </button>
          </div>
        </div>
      </div>
      <div className="bg-light position-relative">
        <div className="container  py-3">
          <h1>
            <b>What They Say?</b>
          </h1>
          <p className="pt-3 col-lg-7 col-12 p-2">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua.
          </p>

          <Swiper
            className="swiper  py-5"
            modules={[EffectFade, Autoplay]}
            effect="slide"
            speed="1500"
            autoplay={{
              delay: 2500,
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
            <SwiperSlide className="position-relative ">
              <div className="cardQuotesBlog  text-start  p-4 rounded-4 text-light">
                <p className="pt-2">
                  Friend such as we desire,are dreams and fables. Friendship
                  demands the ability to do without it.
                </p>
                <p className="text-end colorWarning">Ralph Waldo Emerson</p>
                <Quotes className="QuotesBlog" />
              </div>
            </SwiperSlide>
            <SwiperSlide className="position-relative ">
              <div className="cardQuotesBlog  text-start  p-4 rounded-4 text-light">
                <p className="pt-2">
                  Friend such as we desire,are dreams and fables. Friendship
                  demands the ability to do without it.
                </p>
                <p className="text-end colorWarning">Ralph Waldo Emerson</p>
                <Quotes className="QuotesBlog" />
              </div>
            </SwiperSlide>
            <SwiperSlide className="position-relative ">
              <div className="cardQuotesBlog  text-start  p-4 rounded-4 text-light">
                <p className="pt-2">
                  Friend such as we desire,are dreams and fables. Friendship
                  demands the ability to do without it.
                </p>
                <p className="text-end colorWarning">Ralph Waldo Emerson</p>
                <Quotes className="QuotesBlog" />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Blog;
