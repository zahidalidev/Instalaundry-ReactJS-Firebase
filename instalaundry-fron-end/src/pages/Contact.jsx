import Button from "@material-ui/core/Button";
import img1 from "../assets/img/contact.jpg";

export default function Contact() {
  return (
    <>
      <div className="page-header container-fluid bg-secondary pt-2 pt-lg-4 pb-5 mb-5">
        <div className="container py-1" style={{ marginTop: "3rem" }}>
          <div className="row  align-items-center py-4">
            <div className="col-md-6 text-center text-md-left">
              <h1 className="mb-4 mb-md-0 text-white">Contact Us</h1>
            </div>
            <div className="col-md-6 text-center text-md-right">
              <div className="d-inline-flex align-items-center">
                <a className="btn text-white">Home</a>
                <i className="fas fa-angle-right text-white"></i>
                <a className="btn text-white disabled">Contact us</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* -- Contact Start -- */}

      <div className="container-fluid py-5">
        <div className="row d-flex justify-content-center align-items-center">
          <div
            className="col-md-6 d-flex justify-content-center align-items-center"
            style={{ marginTop: "-1rem" }}
          >
            <img src={img1} style={{ width: "23rem" }}></img>
          </div>
          <div className="col-md-6 d-flex flex-column justify-content-center align-items-center">
            <h1
              className="display-4 pt-5 text-center mb-5"
              style={{ fontSize: "2.5rem" }}
            >
              Have a Question?
            </h1>
            Type your question into our virtual assistant who will help you find
            an answer to your question or put you in touch with our friendly
            customer care team.
            <br />
            Don't see the chat button? Make sure your ad blocker is turned off
            in your Browser Settings. If you are still having difficulty
            connecting, please give us a call at:
            <br />
            <a>604-LAUNDRY </a>Alternatively check out our FAQ's for commonly
            asked questions and answers or Email us at:
            <a>support@instalaundry.ca</a>
          </div>
        </div>
      </div>
      <h1
        className="display-4 text-center mb-5"
        style={{ fontSize: "3rem", marginTop: "1rem" }}
      >
        Contact Us
      </h1>
      <div className="container-fluid py-5" style={{ marginBottom: "2rem" }}>
        <div className="container" style={{ maxWidth: "900px" }}>
          <div className="row">
            <div className="col-12">
              <div className="row">
                <div className="col-md-4">
                  <div className="d-flex flex-column align-items-center justify-content-center text-center mb-5">
                    <div
                      className="d-inline-flex align-items-center justify-content-center bg-white border border-light shadow rounded-circle mb-4"
                      style={{
                        width: "100px",
                        height: "100px",
                        borderWidth: "15px !important",
                      }}
                    >
                      <i
                        class="fa fa-map-marker"
                        aria-hidden="true"
                        style={{ fontSize: "2.5rem", color: "#62c7ce" }}
                      ></i>
                    </div>
                    <h5 className="font-weight-medium m-0 mt-2">
                      Lower Mainland Canada
                    </h5>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="d-flex flex-column align-items-center justify-content-center text-center mb-5">
                    <div
                      className="d-inline-flex align-items-center justify-content-center bg-white border border-light shadow rounded-circle mb-4"
                      style={{
                        width: "100px",
                        height: "100px",
                        borderWidth: "15px !important",
                      }}
                    >
                      <i className="fa fa-2x fa-envelope-open text-secondary"></i>
                    </div>
                    <h5 className="font-weight-medium m-0 mt-2">
                      Support@instalaundry.ca
                    </h5>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="d-flex flex-column align-items-center justify-content-center text-center mb-5">
                    <div
                      className="d-inline-flex align-items-center justify-content-center bg-white border border-light shadow rounded-circle mb-4"
                      style={{
                        width: "100px",
                        height: "100px",
                        borderWidth: "15px !important",
                      }}
                    >
                      <i
                        class="fa fa-phone"
                        aria-hidden="true"
                        style={{ fontSize: "2.5rem", color: "#62c7ce" }}
                      ></i>
                    </div>
                    <h5 className="font-weight-medium m-0 mt-2">604-LAUNDRY</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="contact-form">
                <div id="success"></div>
                <form
                  name="sentMessage"
                  id="contactForm"
                  novalidate="novalidate"
                >
                  <div className="form-row">
                    <div className="col-md-6">
                      <div className="control-group">
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          placeholder="Your Name"
                          required="required"
                          data-validation-required-message="Please enter your name"
                          style={{ borderRadius: "0.5rem", height: "2.7rem" }}
                        />
                        <p className="help-block text-danger"></p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="control-group">
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          placeholder="Your Email"
                          required="required"
                          data-validation-required-message="Please enter your email"
                          style={{ borderRadius: "0.5rem" }}
                        />
                        <p className="help-block text-danger"></p>
                      </div>
                    </div>
                  </div>
                  <div className="control-group">
                    <input
                      type="text"
                      className="form-control"
                      id="subject"
                      placeholder="Subject"
                      required="required"
                      data-validation-required-message="Please enter a subject"
                      style={{ borderRadius: "0.5rem", height: "2.7rem" }}
                    />
                    <p className="help-block text-danger"></p>
                  </div>
                  <div className="control-group">
                    <textarea
                      className="form-control"
                      rows="6"
                      id="message"
                      placeholder="Message"
                      required="required"
                      data-validation-required-message="Please enter your message"
                      style={{ borderRadius: "0.5rem", height: "12rem" }}
                    ></textarea>
                    <p className="help-block text-danger"></p>
                  </div>
                  <div>
                    <Button
                      style={{
                        backgroundColor: "#194376",
                        color: "white",

                        borderRadius: "0.5rem",
                      }}
                      className="btn btn-primary py-md-3 px-md-2 mt-2"
                      variant="contained"
                    >
                      Send Message
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* -- Contact End -- */}
    </>
  );
}
