import Banner from "@/components/Banner";
import ReveloLayout from "@/layout/ReveloLayout";
const page = () => {
  return (
    <ReveloLayout insta>
      <Banner pageTitle={"Contact Us"} />
      {/* Contact Info Area start */}
      <section className="contact-info-area pt-100 rel z-1">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4">
              <div
                className="contact-info-content mb-30 rmb-55"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="section-title mb-30">
                  <h2>Let’s Talk Our Expert Travel Guides</h2>
                </div>
                <p>
                  Our dedicated support team is always ready to assist you with
                  any questions or issues, offering prompt and personalized
                  solutions to meet your needs.
                </p>
                <div className="features-team-box mt-40">
                  <h6>85+ Expert Team member</h6>
                  <div className="feature-authors">
                    <img
                      src="assets/images/features/feature-author1.jpg"
                      alt="Author"
                    />
                    <img
                      src="assets/images/features/feature-author2.jpg"
                      alt="Author"
                    />
                    <img
                      src="assets/images/features/feature-author3.jpg"
                      alt="Author"
                    />
                    <img
                      src="assets/images/features/feature-author4.jpg"
                      alt="Author"
                    />
                    <img
                      src="assets/images/features/feature-author5.jpg"
                      alt="Author"
                    />
                    <img
                      src="assets/images/features/feature-author6.jpg"
                      alt="Author"
                    />
                    <img
                      src="assets/images/features/feature-author7.jpg"
                      alt="Author"
                    />
                    <span>+</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="row">
                <div className="col-md-6">
                  <div
                    className="contact-info-item"
                    data-aos="fade-up"
                    data-aos-duration={1500}
                    data-aos-offset={50}
                    data-aos-delay={50}
                  >
                    <div className="icon">
                      <i className="fas fa-envelope" />
                    </div>
                    <div className="content">
                      <h5>Need Help &amp; Support</h5>
                      <div className="text">
                        <i className="far fa-envelope" />{" "}
                        <a href="mailto:support@gmail.com">support@gmail.com</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div
                    className="contact-info-item"
                    data-aos="fade-up"
                    data-aos-duration={1500}
                    data-aos-offset={50}
                    data-aos-delay={100}
                  >
                    <div className="icon">
                      <i className="fas fa-phone" />
                    </div>
                    <div className="content">
                      <h5>Need Any Urgent</h5>
                      <div className="text">
                        <i className="far fa-phone" />{" "}
                        <a href="callto:+0001234588">+000 (123) 45 88</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div
                    className="contact-info-item"
                    data-aos="fade-up"
                    data-aos-duration={1500}
                    data-aos-offset={50}
                    data-aos-delay={50}
                  >
                    <div className="icon">
                      <i className="fas fa-map-marker-alt" />
                    </div>
                    <div className="content">
                      <h5>New York Branch</h5>
                      <div className="text">
                        <i className="fal fa-map-marker-alt" /> 55 East 10th
                        Street, New York, NY 10003, United States
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div
                    className="contact-info-item"
                    data-aos="fade-up"
                    data-aos-duration={1500}
                    data-aos-offset={50}
                    data-aos-delay={100}
                  >
                    <div className="icon">
                      <i className="fas fa-map-marker-alt" />
                    </div>
                    <div className="content">
                      <h5>Main Office Address</h5>
                      <div className="text">
                        <i className="fal fa-map-marker-alt" /> 55 East 10th
                        Street, New York, NY 10003, United States
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Contact Info Area end */}
      {/* Contact Form Area start */}
      <section className="contact-form-area py-70 rel z-1">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <div className="comment-form bgc-lighter z-1 rel mb-30 rmb-55">
                <form
                  id="contactForm"
                  className="contactForm"
                  name="contactForm"
                  action="assets/php/form-process.php"
                  method="post"
                  data-aos="fade-left"
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <div className="section-title">
                    <h2>Get In Touch</h2>
                  </div>
                  <p>
                    Your email address will not be published. Required fields
                    are marked *
                  </p>
                  <div className="row mt-35">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="name">Full Name</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          className="form-control"
                          placeholder="Randy J. Thomas"
                          defaultValue=""
                          required=""
                          data-error="Please enter your Name"
                        />
                        <div className="help-block with-errors" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="phone_number">Phone Number</label>
                        <input
                          type="text"
                          id="phone_number"
                          name="phone_number"
                          className="form-control"
                          placeholder="Phone"
                          defaultValue=""
                          required=""
                          data-error="Please enter your Phone"
                        />
                        <div className="help-block with-errors" />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <label htmlFor="email">Email Address</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          className="form-control"
                          placeholder="enter email"
                          defaultValue=""
                          required=""
                          data-error="Please enter your Email"
                        />
                        <div className="help-block with-errors" />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <label htmlFor="message">Your Message</label>
                        <textarea
                          name="message"
                          id="message"
                          className="form-control"
                          rows={5}
                          placeholder="Message"
                          required=""
                          data-error="Please enter your Message"
                          defaultValue={""}
                        />
                        <div className="help-block with-errors" />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group mb-0">
                        <ul className="radio-filter mb-25">
                          <li>
                            <input
                              className="form-check-input"
                              type="radio"
                              name="terms-condition"
                              id="terms-condition"
                            />
                            <label htmlFor="terms-condition">
                              Save my name, email, and website in this browser
                              for the next time I comment.
                            </label>
                          </li>
                        </ul>
                        <button type="submit" className="theme-btn style-two">
                          <span data-hover="Send Comments">Send Comments</span>
                          <i className="fal fa-arrow-right" />
                        </button>
                        <div id="msgSubmit" className="hidden" />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-5">
              <div
                className="contact-images-part"
                data-aos="fade-right"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="row">
                  <div className="col-12">
                    <img
                      src="assets/images/contact/contact1.jpg"
                      alt="Contact"
                    />
                  </div>
                  <div className="col-6">
                    <img
                      src="assets/images/contact/contact2.jpg"
                      alt="Contact"
                    />
                  </div>
                  <div className="col-6">
                    <img
                      src="assets/images/contact/contact3.jpg"
                      alt="Contact"
                    />
                  </div>
                </div>
                <div className="circle-logo">
                  <img src="assets/images/contact/icon.png" alt="Logo" />
                  <span className="title h2">Ravelo</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Contact Form Area end */}
      {/* Contact Map Start */}
      <div className="contact-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d96777.16150026117!2d-74.00840582560909!3d40.71171357405996!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1706508986625!5m2!1sen!2sbd"
          style={{ border: 0, width: "100%" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      {/* Contact Map End */}
    </ReveloLayout>
  );
};
export default page;
