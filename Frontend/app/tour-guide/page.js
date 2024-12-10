import Banner from "@/components/Banner";
import SectionTitle from "@/components/SectionTitle";
import Testimonial from "@/components/slider/Testimonial";
import Subscribe from "@/components/Subscribe";
import ReveloLayout from "@/layout/ReveloLayout";
import Link from "next/link";
const page = () => {
  return (
    <ReveloLayout>
      <Banner pageTitle={"Tour Guide"} />
      {/* Benefit Area start */}
      <section className="benefit-area mt-100 rel z-1">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-xl-5 col-lg-6">
              <div
                className="mobile-app-content rmb-55"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="section-title counter-text-wrap mb-40">
                  <h2>
                    Ultimate Explorer's Handbook Your Complete Guide to Journeys
                  </h2>
                </div>
                <p>
                  We work closely with our clients to understand challenges and
                  objectives, providing customized solutions to enhance
                  efficiency boost profitability, and foster sustainable growth.
                </p>
                <div className="skillbar mt-80" data-percent={93}>
                  <span className="skillbar-title">Clients Satisfactions</span>
                  <div
                    className="progress-bar-striped skillbar-bar progress-bar-animated"
                    role="progressbar"
                    aria-valuenow={93}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                  <span className="skill-bar-percent" />
                </div>
                <ul className="list-style-two mt-35 mb-30">
                  <li>Experience Agency</li>
                  <li>Professional Team</li>
                </ul>
                <Link href="about" className="theme-btn style-two">
                  <span data-hover="Explore Guides">Explore Guides</span>
                  <i className="fal fa-arrow-right" />
                </Link>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="benefit-image-part style-two">
                <div
                  className="image-one"
                  data-aos="fade-down"
                  data-aos-delay={50}
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <img src="assets/images/benefit/benefit1.png" alt="Benefit" />
                </div>
                <div
                  className="image-two"
                  data-aos="fade-up"
                  data-aos-delay={50}
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <img src="assets/images/benefit/benefit2.png" alt="Benefit" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Benefit Area end */}
      {/* Team Area start */}
      <section className="about-team-area pt-100 rel z-1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div
                className="section-title text-center counter-text-wrap mb-50"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <SectionTitle title={"Meet Our Experience Travel Guides"} />
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div
                className="team-item hover-content"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <img src="assets/images/team/guide1.jpg" alt="Guide" />
                <div className="content">
                  <h6>John L. Simmons</h6>
                  <span className="designation">Co-founder</span>
                  <div className="social-style-one inner-content">
                    <Link href="contact">
                      <i className="fab fa-twitter" />
                    </Link>
                    <Link href="contact">
                      <i className="fab fa-facebook-f" />
                    </Link>
                    <Link href="contact">
                      <i className="fab fa-instagram" />
                    </Link>
                    <a href="#">
                      <i className="fab fa-pinterest-p" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div
                className="team-item hover-content"
                data-aos="fade-up"
                data-aos-delay={50}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <img src="assets/images/team/guide2.jpg" alt="Guide" />
                <div className="content">
                  <h6>Andrew K. Manley</h6>
                  <span className="designation">Senior Guide</span>
                  <div className="social-style-one inner-content">
                    <Link href="contact">
                      <i className="fab fa-twitter" />
                    </Link>
                    <Link href="contact">
                      <i className="fab fa-facebook-f" />
                    </Link>
                    <Link href="contact">
                      <i className="fab fa-instagram" />
                    </Link>
                    <a href="#">
                      <i className="fab fa-pinterest-p" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div
                className="team-item hover-content"
                data-aos="fade-up"
                data-aos-delay={100}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <img src="assets/images/team/guide3.jpg" alt="Guide" />
                <div className="content">
                  <h6>Drew J. Bridges</h6>
                  <span className="designation">Travel Guide</span>
                  <div className="social-style-one inner-content">
                    <Link href="contact">
                      <i className="fab fa-twitter" />
                    </Link>
                    <Link href="contact">
                      <i className="fab fa-facebook-f" />
                    </Link>
                    <Link href="contact">
                      <i className="fab fa-instagram" />
                    </Link>
                    <a href="#">
                      <i className="fab fa-pinterest-p" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div
                className="team-item hover-content"
                data-aos="fade-up"
                data-aos-delay={150}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <img src="assets/images/team/guide4.jpg" alt="Guide" />
                <div className="content">
                  <h6>Byron F. Simpson</h6>
                  <span className="designation">Travel Guide</span>
                  <div className="social-style-one inner-content">
                    <Link href="contact">
                      <i className="fab fa-twitter" />
                    </Link>
                    <Link href="contact">
                      <i className="fab fa-facebook-f" />
                    </Link>
                    <Link href="contact">
                      <i className="fab fa-instagram" />
                    </Link>
                    <a href="#">
                      <i className="fab fa-pinterest-p" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div
                className="team-item hover-content"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <img src="assets/images/team/guide5.jpg" alt="Guide" />
                <div className="content">
                  <h6>John L. Simmons</h6>
                  <span className="designation">Co-founder</span>
                  <div className="social-style-one inner-content">
                    <Link href="contact">
                      <i className="fab fa-twitter" />
                    </Link>
                    <Link href="contact">
                      <i className="fab fa-facebook-f" />
                    </Link>
                    <Link href="contact">
                      <i className="fab fa-instagram" />
                    </Link>
                    <a href="#">
                      <i className="fab fa-pinterest-p" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div
                className="team-item hover-content"
                data-aos="fade-up"
                data-aos-delay={50}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <img src="assets/images/team/guide6.jpg" alt="Guide" />
                <div className="content">
                  <h6>Andrew K. Manley</h6>
                  <span className="designation">Senior Guide</span>
                  <div className="social-style-one inner-content">
                    <Link href="contact">
                      <i className="fab fa-twitter" />
                    </Link>
                    <Link href="contact">
                      <i className="fab fa-facebook-f" />
                    </Link>
                    <Link href="contact">
                      <i className="fab fa-instagram" />
                    </Link>
                    <a href="#">
                      <i className="fab fa-pinterest-p" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div
                className="team-item hover-content"
                data-aos="fade-up"
                data-aos-delay={100}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <img src="assets/images/team/guide7.jpg" alt="Guide" />
                <div className="content">
                  <h6>Drew J. Bridges</h6>
                  <span className="designation">Travel Guide</span>
                  <div className="social-style-one inner-content">
                    <Link href="contact">
                      <i className="fab fa-twitter" />
                    </Link>
                    <Link href="contact">
                      <i className="fab fa-facebook-f" />
                    </Link>
                    <Link href="contact">
                      <i className="fab fa-instagram" />
                    </Link>
                    <a href="#">
                      <i className="fab fa-pinterest-p" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div
                className="team-item hover-content"
                data-aos="fade-up"
                data-aos-delay={150}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <img src="assets/images/team/guide8.jpg" alt="Guide" />
                <div className="content">
                  <h6>Byron F. Simpson</h6>
                  <span className="designation">Travel Guide</span>
                  <div className="social-style-one inner-content">
                    <Link href="contact">
                      <i className="fab fa-twitter" />
                    </Link>
                    <Link href="contact">
                      <i className="fab fa-facebook-f" />
                    </Link>
                    <Link href="contact">
                      <i className="fab fa-instagram" />
                    </Link>
                    <a href="#">
                      <i className="fab fa-pinterest-p" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-12 text-center mt-20">
              <Link href="about" className="theme-btn style-three">
                <span data-hover="View All Guides">View All Guides</span>
                <i className="fal fa-arrow-right" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Team Area end */}
      {/* Testimonials Area start */}
      <section className="testimonials-area py-100 rel z-1">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div
                className="testimonial-left-content rmb-50"
                data-aos="fade-right"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <img
                  src="assets/images/testimonials/testimonial-left2.png"
                  alt="Testimonial"
                />
                <div className="happy-customer text-white bgc-black">
                  <h6>850K+ Happy Customer</h6>
                  <div className="feature-authors mb-15">
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
                    <span>4k+</span>
                  </div>
                  <hr />
                  <p>Positive Reviews</p>
                  <div className="testi-header">
                    <div className="ratting">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="testimonial-right-content"
                data-aos="fade-left"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="section-title mb-55">
                  <h2>
                    <span>5280</span> Global Clients Say About Us Services
                  </h2>
                </div>
                <Testimonial />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Testimonials Area end */}
      {/* Newsletter Area start */}
      <Subscribe />
      {/* Newsletter Area end */}
    </ReveloLayout>
  );
};
export default page;
