import "../styles/Contact.css";

const Contact = () => {
  const img1 =
    "https://fanatic-theme.ivkovic.me/static/media/contact-1.5a2e06c6.png";
  const img2 =
    "https://fanatic-theme.ivkovic.me/static/media/contact-2.63746e52.png";
  const img3 =
    "https://fanatic-theme.ivkovic.me/static/media/contact-3.a6ee4077.png";
  return (
    <div className="bg-light">
      <div className="container py-5">
        <h1>
          <b>Let's get in touch</b>
        </h1>
        <p className="pt-3 col-lg-7 col-12 p-2">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua.
        </p>
      </div>
      <div className="container py-5 mb-5 position-relative overflow-hidden px-2">
        <div className="row ">
          <div className="col-md-6 col-12 px-3">
            <form>
              <label className="input-group ">
                First Name
                <input type="text" className=" inputContact w-100 bg-light" />
              </label>
              <label className="input-group pt-4">
                Email
                <input type="email" className=" inputContact w-100 bg-light" />
              </label>
              <label className="input-group pt-4">
                Subject
                <input type="text" className=" inputContact w-100 bg-light" />
              </label>
              <label className="input-group pt-4">
                Message
                <textarea
                  rows={4}
                  type="text"
                  className=" inputContact w-100 bg-light"
                ></textarea>
              </label>
              <button className="btn rounded-4 mt-5 btnSendMessage ">
                Send Message
              </button>
            </form>
          </div>
          <div className="col-md-6 col-12 mt-5 px-2 ">
            <div className="row ps-md-4 ps-2">
              <div className="col-5">
                <img
                  src={img1}
                  alt="IMG"
                  className="img-fluid  rounded-4 img1Contact"
                />
                <img
                  src={img2}
                  alt="IMG"
                  className="img-fluid mt-4  rounded-4 img2Contact"
                />
              </div>
              <div className="col-7 d-flex align-items-center ">
                <img
                  src={img3}
                  alt="IMG"
                  className="img-fluid rounded-4 img3Contact "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
