import Counter from "./Counter";

const Subscribe = () => {
  return (
    <section
      className="newsletter-three bgc-primary py-100 rel z-1"
      style={{
        backgroundImage:
          "url(assets/images/newsletter/newsletter-bg-lines.png)",
      }}
    >
      <div className="container container-1500">
        <div className="row">
          <div className="col-lg-6">
            <div
              className="newsletter-content-part text-white rmb-55"
              data-aos="zoom-in-right"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="section-title counter-text-wrap mb-45">
                <h2>Subscribe Our Newsletter to Get more offer &amp; Tips</h2>
                <p>
                  One site{" "}
                  <span className="count-text plus">
                    <Counter end={34500} />
                  </span>{" "}
                  most popular experience you’ll remember
                </p>
              </div>
              <form className="newsletter-form mb-15" action="#">
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
              <p>No credit card requirement. No commitments</p>
            </div>
            <div
              className="newsletter-bg-image"
              data-aos="zoom-in-up"
              data-aos-delay={100}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <img
                src="assets/images/newsletter/newsletter-bg-image.png"
                alt="Newsletter"
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div
              className="newsletter-image-part bgs-cover"
              style={{
                backgroundImage:
                  "url(assets/images/newsletter/newsletter-two-right.jpg)",
              }}
              data-aos="fade-left"
              data-aos-duration={1500}
              data-aos-offset={50}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Subscribe;
