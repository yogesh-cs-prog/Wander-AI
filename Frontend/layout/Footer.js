import Counter from "@/components/Counter";
import Link from "next/link";

const Footer = ({ footer, insta }) => {
  switch (footer) {
    case 1:
      return <Footer1 />;

    default:
      return <Footer2 insta={insta} />;
  }
};
export default Footer;

const FooterInstagram = () => {
  return (
    <div className="container">
      <div className="footer-instagram pt-100 mb-70">
        <div className="row row-cols-xxl-6 row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-2">
          <div
            className="col"
            data-aos="zoom-in-up"
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <a
              className="instagram-item"
              href="assets/images/instagram/instagram1.jpg"
            >
              <img
                src="assets/images/instagram/instagram1.jpg"
                alt="Instagram"
              />
            </a>
          </div>
          <div
            className="col"
            data-aos="zoom-in-down"
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <a
              className="instagram-item"
              href="assets/images/instagram/instagram2.jpg"
            >
              <img
                src="assets/images/instagram/instagram2.jpg"
                alt="Instagram"
              />
            </a>
          </div>
          <div
            className="col"
            data-aos="zoom-in-up"
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <a
              className="instagram-item"
              href="assets/images/instagram/instagram3.jpg"
            >
              <img
                src="assets/images/instagram/instagram3.jpg"
                alt="Instagram"
              />
            </a>
          </div>
          <div
            className="col"
            data-aos="zoom-in-down"
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <a
              className="instagram-item"
              href="assets/images/instagram/instagram4.jpg"
            >
              <img
                src="assets/images/instagram/instagram4.jpg"
                alt="Instagram"
              />
            </a>
          </div>
          <div
            className="col"
            data-aos="zoom-in-up"
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <a
              className="instagram-item"
              href="assets/images/instagram/instagram5.jpg"
            >
              <img
                src="assets/images/instagram/instagram5.jpg"
                alt="Instagram"
              />
            </a>
          </div>
          <div
            className="col"
            data-aos="zoom-in-down"
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <a
              className="instagram-item"
              href="assets/images/instagram/instagram6.jpg"
            >
              <img
                src="assets/images/instagram/instagram6.jpg"
                alt="Instagram"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const Footer1 = () => {
  return (
    <footer
      className="main-footer bgs-cover overlay rel z-1 pb-25"
      style={{
        backgroundImage: "url(assets/images/backgrounds/footer.jpg)",
      }}
    >
      <div className="container">
        <div className="footer-top pt-100 pb-30">
          <div className="row justify-content-between">
            <div
              className="col-xl-5 col-lg-6"
              data-aos="fade-up"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="footer-widget footer-text">
                <div className="footer-logo mb-25">
                  <Link href="/">
                    <img src="assets/images/logos/logo.png" alt="Logo" />
                  </Link>
                </div>
                <p>
                  We curate bespoke itineraries tailored to your preferences,
                  ensuring every trip is seamless and enriching hidden gems
                  beaten
                </p>
                <div className="social-style-one mt-15">
                  <Link href="contact">
                    <i className="fab fa-facebook-f" />
                  </Link>
                  <Link href="contact">
                    <i className="fab fa-youtube" />
                  </Link>
                  <Link href="contact">
                    <i className="fab fa-pinterest" />
                  </Link>
                  <Link href="contact">
                    <i className="fab fa-twitter" />
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-xl-5 col-lg-6"
              data-aos="fade-up"
              data-aos-delay={50}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="section-title counter-text-wrap mb-35">
                <h2>Subscribe Newsletter</h2>
                <p>
                  One site{" "}
                  <span className="count-text plus">
                    <Counter end={34500} />
                  </span>{" "}
                  most popular experience you’ll remember
                </p>
              </div>
              <form className="newsletter-form mb-50" action="#">
                <input
                  id="news-email"
                  type="email"
                  placeholder="Email Address"
                  required=""
                />
                <button
                  type="submit"
                  className="theme-btn bgc-secondary style-two"
                >
                  <span data-hover="Subscribe">Subscribe</span>
                  <i className="fal fa-arrow-right" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="widget-area pt-95 pb-45">
        <div className="container">
          <div className="row row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-2">
            <div
              className="col col-small"
              data-aos="fade-up"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="footer-widget footer-links">
                <div className="footer-title">
                  <h5>Services</h5>
                </div>
                <ul className="list-style-three">
                  <li>
                    <Link href="destination-details">Best Tour Guide</Link>
                  </li>
                  <li>
                    <Link href="destination-details">Tour Booking</Link>
                  </li>
                  <li>
                    <Link href="destination-details">Hotel Booking</Link>
                  </li>
                  <li>
                    <Link href="destination-details">Ticket Booking</Link>
                  </li>
                  <li>
                    <Link href="destination-details">Rental Services</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="col col-small"
              data-aos="fade-up"
              data-aos-delay={50}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="footer-widget footer-links">
                <div className="footer-title">
                  <h5>Company</h5>
                </div>
                <ul className="list-style-three">
                  <li>
                    <Link href="about">About Company</Link>
                  </li>
                  <li>
                    <Link href="blog">Community Blog</Link>
                  </li>
                  <li>
                    <Link href="contact">Jobs and Careers</Link>
                  </li>
                  <li>
                    <Link href="blog">latest News Blog</Link>
                  </li>
                  <li>
                    <Link href="contact">Contact Us</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="col col-small"
              data-aos="fade-up"
              data-aos-delay={100}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="footer-widget footer-links">
                <div className="footer-title">
                  <h5>Destinations</h5>
                </div>
                <ul className="list-style-three">
                  <li>
                    <Link href="destination-details">African Safaris</Link>
                  </li>
                  <li>
                    <Link href="destination-details">Alaska &amp; Canada</Link>
                  </li>
                  <li>
                    <Link href="destination-details">South America</Link>
                  </li>
                  <li>
                    <Link href="destination-details">Middle East</Link>
                  </li>
                  <li>
                    <Link href="destination-details">South America</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="col col-small"
              data-aos="fade-up"
              data-aos-delay={150}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="footer-widget footer-links">
                <div className="footer-title">
                  <h5>Categories</h5>
                </div>
                <ul className="list-style-three">
                  <li>
                    <Link href="contact">Adventure</Link>
                  </li>
                  <li>
                    <Link href="contact">Hiking &amp; Trekking</Link>
                  </li>
                  <li>
                    <Link href="contact">Cycling Tours</Link>
                  </li>
                  <li>
                    <Link href="contact">Family Tours</Link>
                  </li>
                  <li>
                    <Link href="contact">Wildlife Tours</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="col col-md-6 col-10 col-small"
              data-aos="fade-up"
              data-aos-delay={200}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="footer-widget footer-contact">
                <div className="footer-title">
                  <h5>Get In Touch</h5>
                </div>
                <ul className="list-style-one">
                  <li>
                    <i className="fal fa-map-marked-alt" /> 578 Level, D-block
                    45 Street Melbourne, Australia
                  </li>
                  <li>
                    <i className="fal fa-envelope" />{" "}
                    <a href="mailto:supportrevelo@gmail.com">
                      supportrevelo@gmail.com
                    </a>
                  </li>
                  <li>
                    <i className="fal fa-clock" /> Mon - Fri, 08am - 05pm
                  </li>
                  <li>
                    <i className="fal fa-phone-volume" />{" "}
                    <a href="callto:+88012334588">+880 (123) 345 88</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom pt-20 pb-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="copyright-text text-center text-lg-start">
                <p>
                  @Linkopy 202/4 <a href="">Ravelo</a>, All rights reserved
                </p>
              </div>
            </div>
            <div className="col-lg-7 text-center text-lg-end">
              <ul className="footer-bottom-nav">
                <li>
                  <Link href="about">Terms</Link>
                </li>
                <li>
                  <Link href="about">Privacy Policy</Link>
                </li>
                <li>
                  <Link href="about">Legal notice</Link>
                </li>
                <li>
                  <Link href="about">Accessibility</Link>
                </li>
              </ul>
            </div>
          </div>
          {/* Scroll Top Button */}
          <button className="scroll-top scroll-to-target" data-target="html">
            <img src="assets/images/icons/scroll-up.png" alt="Scroll  Up" />
          </button>
        </div>
      </div>
    </footer>
  );
};

const Footer2 = ({ insta }) => {
  return (
    <footer
      className={`main-footer footer-two bgp-bottom bgc-black rel z-15 ${
        insta ? "" : "pt-100 pb-115"
      }`}
      style={{
        backgroundImage: "url(assets/images/backgrounds/footer-two.png)",
      }}
    >
      {insta && <FooterInstagram />}
      <div className="widget-area">
        <div className="container">
          <div className="row row-cols-xxl-5 row-cols-xl-4 row-cols-md-3 row-cols-2">
            <div
              className="col col-small"
              data-aos="fade-up"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="footer-widget footer-text">
                <div className="footer-logo mb-40">
                  <Link href="/">
                    <img src="assets/images/logos/logo.png" alt="Logo" />
                  </Link>
                </div>
                <div className="footer-map">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d96777.16150026117!2d-74.00840582560909!3d40.71171357405996!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1706508986625!5m2!1sen!2sbd"
                    style={{ border: 0, width: "100%" }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>
            <div
              className="col col-small"
              data-aos="fade-up"
              data-aos-delay={50}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="footer-widget footer-links ms-sm-5">
                <div className="footer-title">
                  <h5>Services</h5>
                </div>
                <ul className="list-style-three">
                  <li>
                    <Link href="destination-details">Best Tour Guide</Link>
                  </li>
                  <li>
                    <Link href="destination-details">Tour Booking</Link>
                  </li>
                  <li>
                    <Link href="destination-details">Hotel Booking</Link>
                  </li>
                  <li>
                    <Link href="destination-details">Ticket Booking</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="col col-small"
              data-aos="fade-up"
              data-aos-delay={100}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="footer-widget footer-links ms-md-4">
                <div className="footer-title">
                  <h5>Company</h5>
                </div>
                <ul className="list-style-three">
                  <li>
                    <Link href="about">About Company</Link>
                  </li>
                  <li>
                    <Link href="blog">Community Blog</Link>
                  </li>
                  <li>
                    <Link href="contact">Jobs and Careers</Link>
                  </li>
                  <li>
                    <Link href="blog">latest News Blog</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="col col-small"
              data-aos="fade-up"
              data-aos-delay={150}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="footer-widget footer-links ms-lg-4">
                <div className="footer-title">
                  <h5>Destinations</h5>
                </div>
                <ul className="list-style-three">
                  <li>
                    <Link href="destination-details">African Safaris</Link>
                  </li>
                  <li>
                    <Link href="destination-details">Alaska &amp; Canada</Link>
                  </li>
                  <li>
                    <Link href="destination-details">South America</Link>
                  </li>
                  <li>
                    <Link href="destination-details">Middle East</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="col col-md-6 col-10 col-small"
              data-aos="fade-up"
              data-aos-delay={200}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="footer-widget footer-contact">
                <div className="footer-title">
                  <h5>Get In Touch</h5>
                </div>
                <ul className="list-style-one">
                  <li>
                    <i className="fal fa-map-marked-alt" /> 578 Level, D-block
                    45 Street Melbourne, Australia
                  </li>
                  <li>
                    <i className="fal fa-envelope" />{" "}
                    <a href="mailto:supportrevelo@gmail.com">
                      supportrevelo @gmail.com
                    </a>
                  </li>
                  <li>
                    <i className="fal fa-phone-volume" />{" "}
                    <a href="callto:+88012334588">+880 (123) 345 88</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom bg-transparent pt-20 pb-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="copyright-text text-center text-lg-start">
                <p>
                  @Linkopy 202/4 <a href="">Ravelo</a>, All rights reserved
                </p>
              </div>
            </div>
            <div className="col-lg-7 text-center text-lg-end">
              <ul className="footer-bottom-nav">
                <li>
                  <Link href="about">Terms</Link>
                </li>
                <li>
                  <Link href="about">Privacy Policy</Link>
                </li>
                <li>
                  <Link href="about">Legal notice</Link>
                </li>
                <li>
                  <Link href="about">Accessibility</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
