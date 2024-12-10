import Counter from "@/components/Counter";
import SearchFilter from "@/components/SearchFilter";
import SectionTitle from "@/components/SectionTitle";
import Destination from "@/components/slider/Destination";
import HotDeals from "@/components/slider/HotDeals";
import Subscribe from "@/components/Subscribe";
import ReveloLayout from "@/layout/ReveloLayout";
import Link from "next/link";
const page = () => {
  return (
    <ReveloLayout>
      {/* Hero Area Start */}
      <section
        className="hero-area-three bgs-cover overflow-hidden pt-130 pb-100 br-15 rel z-2"
        style={{ backgroundImage: "url(assets/images/hero/hero-three-bg.jpg)" }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-9 col-lg-10">
              <div
                className="hero-content-three counter-text-wrap text-white text-center mb-125 rmb-65"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <span className="subtitle mb-15">
                  Ravelo Tours &amp; Travel
                </span>
                <h1>Explore and Start yours's Journey With Ravelo</h1>
                <p>
                  One site{" "}
                  <span className="count-text plus">
                    <Counter end={34500} />
                  </span>{" "}
                  most popular experience you’ll remember
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-shapes">
          <div
            className="shape one"
            data-aos="fade-right"
            data-aos-delay={200}
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <img src="assets/images/shapes/hero1.png" alt="Shape" />
          </div>
          <div
            className="shape two"
            data-aos="fade-down"
            data-aos-delay={100}
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <img src="assets/images/shapes/hero2.png" alt="Shape" />
          </div>
          <div
            className="shape three"
            data-aos="fade-down"
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <img src="assets/images/shapes/hero3.png" alt="Shape" />
          </div>
          <div
            className="shape four"
            data-aos="fade-left"
            data-aos-delay={100}
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <img src="assets/images/shapes/hero4.png" alt="Shape" />
          </div>
        </div>
        <SearchFilter />
      </section>
      {/* Hero Area End */}
      {/* Features Area start */}
      <section className="features-area-three pt-10 rel z-1">
        <div className="row justify-content-center">
          <div
            className="col-xxl-3 col-xl-4 col-md-6"
            data-aos="flip-left"
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <div className="feature-item style-three">
              <div className="icon">
                <i className="flaticon-route" />
              </div>
              <div className="content">
                <h3>
                  <Link href="destination-details">500+ Destinations</Link>
                </h3>
                <p>
                  Adventure seekers can embark thrilling journeys through the
                  Amazon Rainforest or scale
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-xxl-3 col-xl-4 col-md-6"
            data-aos="flip-left"
            data-aos-delay={50}
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <div className="feature-item style-three bgc-secondary">
              <div className="icon">
                <i className="flaticon-best-price" />
              </div>
              <div className="content">
                <h3>
                  <Link href="destination-details">Best Price Guarantee</Link>
                </h3>
                <p>
                  Adventure seekers can embark thrilling journeys through the
                  Amazon Rainforest or scale
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-xxl-3 col-xl-4 col-md-6"
            data-aos="flip-left"
            data-aos-delay={100}
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <div className="feature-item style-three bgc-primary">
              <div className="icon">
                <i className="flaticon-travel-1" />
              </div>
              <div className="content">
                <h3>
                  <Link href="destination-details">Diverse Destinations</Link>
                </h3>
                <p>
                  Adventure seekers can embark thrilling journeys through the
                  Amazon Rainforest or scale
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-xxl-3 col-xl-4 col-md-6"
            data-aos="flip-left"
            data-aos-delay={150}
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <div className="feature-item style-three bgc-pink">
              <div className="icon">
                <i className="flaticon-guidepost" />
              </div>
              <div className="content">
                <h3>
                  <Link href="destination-details">Best Travel Guide</Link>
                </h3>
                <p>
                  Adventure seekers can embark thrilling journeys through the
                  Amazon Rainforest or scale
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Features Area end */}
      {/* Destinations Area start */}
      <section className="destinations-area pt-85 pb-100 rel z-1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div
                className="section-title text-center counter-text-wrap mb-50"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <SectionTitle title={"Explore Our Popular Destinations"} />
              </div>
            </div>
          </div>
          <Destination />
        </div>
      </section>
      {/* Destinations Area end */}
      {/* CTA Three Area start */}
      <section className="cta-three-area rel z-1">
        <div className="container">
          <div
            className="cta-three-inner bgc-black overflow-hidden br-10"
            style={{
              backgroundImage:
                "url(assets/images/newsletter/newsletter-bg-lines.png)",
            }}
          >
            <div className="row no-gap">
              <div className="col-lg-6 rel z-1">
                <div
                  className="cta-three-content text-white"
                  data-aos="zoom-in-right"
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <div className="section-title counter-text-wrap mb-45">
                    <SectionTitle
                      title={"Looking For Holiday Tour Package ?"}
                    />
                  </div>
                  <Link
                    href="tour-details"
                    className="theme-btn style-two bgc-secondary"
                  >
                    <span data-hover="Explore Tours">Explore Tours</span>
                    <i className="fal fa-arrow-right" />
                  </Link>
                </div>
                <div className="cta-three-shape">
                  <img src="assets/images/shapes/cta.png" alt="Shape" />
                </div>
              </div>
              <div
                className="col-lg-6"
                data-aos="fade-left"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div
                  className="cta-three-image bgs-cover"
                  style={{
                    backgroundImage:
                      "url(assets/images/newsletter/newsletter-right.jpg)",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Three Area end */}
      {/* Features Tours Area start */}
      <section className="features-tour-area pt-100 rel z-1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div
                className="section-title text-center counter-text-wrap mb-50"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <SectionTitle title={"Explore Features Tours"} />
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div
                className="destination-item style-four no-border"
                data-aos="flip-left"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="image">
                  <span className="badge">10% Off</span>
                  <a href="#" className="heart">
                    <i className="fas fa-heart" />
                  </a>
                  <img src="assets/images/destinations/tour1.jpg" alt="Tour" />
                </div>
                <div className="content">
                  <span className="location">
                    <i className="fal fa-map-marker-alt" /> Bali, Indonesia
                  </span>
                  <h6>
                    <Link href="tour-details">
                      Relinking Beach in Nusa panada island, Bali, Indonesia
                    </Link>
                  </h6>
                </div>
                <div className="destination-footer">
                  <span className="price">
                    <span>$58.00</span>/person
                  </span>
                  <div className="ratting">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star-half-alt" />
                  </div>
                </div>
                <Link
                  href="destination-details"
                  className="theme-btn style-three"
                >
                  <span data-hover="Explore">Explore</span>
                  <i className="fal fa-arrow-right" />
                </Link>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div
                className="destination-item style-four no-border"
                data-aos="flip-left"
                data-aos-delay={50}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="image">
                  <a href="#" className="heart">
                    <i className="fas fa-heart" />
                  </a>
                  <img src="assets/images/destinations/tour2.jpg" alt="Tour" />
                </div>
                <div className="content">
                  <span className="location">
                    <i className="fal fa-map-marker-alt" /> New Zealand
                  </span>
                  <h6>
                    <Link href="tour-details">
                      Relinking Beach in Nusa panada island, Bali, Indonesia
                    </Link>
                  </h6>
                </div>
                <div className="destination-footer">
                  <span className="price">
                    <span>$58.00</span>/person
                  </span>
                  <div className="ratting">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star-half-alt" />
                    <i className="fas fa-star-half-alt" />
                  </div>
                </div>
                <Link
                  href="destination-details"
                  className="theme-btn style-three"
                >
                  <span data-hover="Explore">Explore</span>
                  <i className="fal fa-arrow-right" />
                </Link>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div
                className="destination-item style-four no-border"
                data-aos="flip-left"
                data-aos-delay={100}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="image">
                  <span className="badge bgc-pink">Featured</span>
                  <a href="#" className="heart">
                    <i className="fas fa-heart" />
                  </a>
                  <img src="assets/images/destinations/tour3.jpg" alt="Tour" />
                </div>
                <div className="content">
                  <span className="location">
                    <i className="fal fa-map-marker-alt" /> Bali, Indonesia
                  </span>
                  <h6>
                    <Link href="tour-details">
                      Relinking Beach in Nusa panada island, Bali, Indonesia
                    </Link>
                  </h6>
                </div>
                <div className="destination-footer">
                  <span className="price">
                    <span>$58.00</span>/person
                  </span>
                  <div className="ratting">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                  </div>
                </div>
                <Link
                  href="destination-details"
                  className="theme-btn style-three"
                >
                  <span data-hover="Explore">Explore</span>
                  <i className="fal fa-arrow-right" />
                </Link>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div
                className="destination-item style-four no-border"
                data-aos="flip-left"
                data-aos-delay={150}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="image">
                  <a href="#" className="heart">
                    <i className="fas fa-heart" />
                  </a>
                  <img src="assets/images/destinations/tour4.jpg" alt="Tour" />
                </div>
                <div className="content">
                  <span className="location">
                    <i className="fal fa-map-marker-alt" /> Rome, Italy
                  </span>
                  <h6>
                    <Link href="tour-details">
                      Relinking Beach in Nusa panada island, Bali, Indonesia
                    </Link>
                  </h6>
                </div>
                <div className="destination-footer">
                  <span className="price">
                    <span>$58.00</span>/person
                  </span>
                  <div className="ratting">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star-half-alt" />
                  </div>
                </div>
                <Link
                  href="destination-details"
                  className="theme-btn style-three"
                >
                  <span data-hover="Explore">Explore</span>
                  <i className="fal fa-arrow-right" />
                </Link>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div
                className="destination-item style-four no-border"
                data-aos="flip-left"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="image">
                  <a href="#" className="heart">
                    <i className="fas fa-heart" />
                  </a>
                  <img src="assets/images/destinations/tour5.jpg" alt="Tour" />
                </div>
                <div className="content">
                  <span className="location">
                    <i className="fal fa-map-marker-alt" /> Saudi Arabia
                  </span>
                  <h6>
                    <Link href="tour-details">
                      Relinking Beach in Nusa panada island, Bali, Indonesia
                    </Link>
                  </h6>
                </div>
                <div className="destination-footer">
                  <span className="price">
                    <span>$58.00</span>/person
                  </span>
                  <div className="ratting">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star-half-alt" />
                    <i className="fas fa-star-half-alt" />
                    <i className="fas fa-star-half-alt" />
                  </div>
                </div>
                <Link
                  href="destination-details"
                  className="theme-btn style-three"
                >
                  <span data-hover="Explore">Explore</span>
                  <i className="fal fa-arrow-right" />
                </Link>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div
                className="destination-item style-four no-border"
                data-aos="flip-left"
                data-aos-delay={50}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="image">
                  <span className="badge">15% Off</span>
                  <a href="#" className="heart">
                    <i className="fas fa-heart" />
                  </a>
                  <img src="assets/images/destinations/tour6.jpg" alt="Tour" />
                </div>
                <div className="content">
                  <span className="location">
                    <i className="fal fa-map-marker-alt" /> Rome, Italy
                  </span>
                  <h6>
                    <Link href="tour-details">
                      Relinking Beach in Nusa panada island, Bali, Indonesia
                    </Link>
                  </h6>
                </div>
                <div className="destination-footer">
                  <span className="price">
                    <span>$58.00</span>/person
                  </span>
                  <div className="ratting">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star-half-alt" />
                  </div>
                </div>
                <Link
                  href="destination-details"
                  className="theme-btn style-three"
                >
                  <span data-hover="Explore">Explore</span>
                  <i className="fal fa-arrow-right" />
                </Link>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div
                className="destination-item style-four no-border"
                data-aos="flip-left"
                data-aos-delay={100}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="image">
                  <span className="badge">10% Off</span>
                  <a href="#" className="heart">
                    <i className="fas fa-heart" />
                  </a>
                  <img src="assets/images/destinations/tour7.jpg" alt="Tour" />
                </div>
                <div className="content">
                  <span className="location">
                    <i className="fal fa-map-marker-alt" /> South Africa
                  </span>
                  <h6>
                    <Link href="tour-details">
                      Relinking Beach in Nusa panada island, Bali, Indonesia
                    </Link>
                  </h6>
                </div>
                <div className="destination-footer">
                  <span className="price">
                    <span>$58.00</span>/person
                  </span>
                  <div className="ratting">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                  </div>
                </div>
                <Link
                  href="destination-details"
                  className="theme-btn style-three"
                >
                  <span data-hover="Explore">Explore</span>
                  <i className="fal fa-arrow-right" />
                </Link>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div
                className="destination-item style-four no-border"
                data-aos="flip-left"
                data-aos-delay={150}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="image">
                  <span className="badge bgc-primary">Popular</span>
                  <a href="#" className="heart">
                    <i className="fas fa-heart" />
                  </a>
                  <img src="assets/images/destinations/tour8.jpg" alt="Tour" />
                </div>
                <div className="content">
                  <span className="location">
                    <i className="fal fa-map-marker-alt" /> Bali, Indonesia
                  </span>
                  <h6>
                    <Link href="tour-details">
                      Relinking Beach in Nusa panada island, Bali, Indonesia
                    </Link>
                  </h6>
                </div>
                <div className="destination-footer">
                  <span className="price">
                    <span>$58.00</span>/person
                  </span>
                  <div className="ratting">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                  </div>
                </div>
                <Link
                  href="destination-details"
                  className="theme-btn style-three"
                >
                  <span data-hover="Explore">Explore</span>
                  <i className="fal fa-arrow-right" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Features Tours Area end */}
      {/* CTA Area start */}
      <section className="cta-area pt-50 rel z-1">
        <div className="container-fluid">
          <div className="row">
            <div
              className="col-xl-4 col-md-6"
              data-aos="zoom-in-down"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div
                className="cta-item"
                style={{ backgroundImage: "url(assets/images/cta/cta1.jpg)" }}
              >
                <span className="category">Tent Camping</span>
                <h2>Explore the world best tourism</h2>
                <Link
                  href="tour-details"
                  className="theme-btn style-two bgc-secondary"
                >
                  <span data-hover="Book Now">Explore Tours</span>
                  <i className="fal fa-arrow-right" />
                </Link>
              </div>
            </div>
            <div
              className="col-xl-4 col-md-6"
              data-aos="zoom-in-down"
              data-aos-delay={50}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div
                className="cta-item"
                style={{ backgroundImage: "url(assets/images/cta/cta2.jpg)" }}
              >
                <span className="category">Sea Beach</span>
                <h2>World largest Sea Beach in Thailand</h2>
                <Link href="tour-details" className="theme-btn style-two">
                  <span data-hover="Book Now">Explore Tours</span>
                  <i className="fal fa-arrow-right" />
                </Link>
              </div>
            </div>
            <div
              className="col-xl-4 col-md-6"
              data-aos="zoom-in-down"
              data-aos-delay={100}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div
                className="cta-item"
                style={{ backgroundImage: "url(assets/images/cta/cta3.jpg)" }}
              >
                <span className="category">Water Falls</span>
                <h2>Largest Water falls Bali, Indonesia</h2>
                <Link
                  href="tour-details"
                  className="theme-btn style-two bgc-secondary"
                >
                  <span data-hover="Book Now">Explore Tours</span>
                  <i className="fal fa-arrow-right" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Area end */}
      {/* Hot Deals Area start */}
      <section className="hot-deals-area pt-70 rel z-1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div
                className="section-title text-center counter-text-wrap"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <SectionTitle title={"Discover Hot Deals"} />
              </div>
            </div>
          </div>
          <HotDeals />
        </div>
      </section>
      {/* Hot Deals Area end */}
      {/* Benefit Area start */}
      <section className="benefit-area mt-110 rel z-1">
        <div className="container">
          <div className="benefit-area-inner py-100">
            <div className="row align-items-center justify-content-between">
              <div className="col-xl-4 col-lg-5">
                <div
                  className="benefit-content-part text-white rmb-55"
                  data-aos="fade-up"
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <div className="section-title counter-text-wrap mb-40">
                    <SectionTitle
                      title={"How to Benefit Our Ravelo Tours & Travels"}
                      subtitle2="most popular experience"
                    />
                  </div>
                  <p>
                    We go above and beyond to make your travel dreams trust us
                    to handle the details so you can unforgettable memories.
                    Explore the world with confidence
                  </p>
                  <Link
                    href="about"
                    className="theme-btn style-two bgc-secondary mt-25"
                  >
                    <span data-hover="Learn More Us">Learn More Us</span>
                    <i className="fal fa-arrow-right" />
                  </Link>
                  <div className="happy-customer mt-45">
                    <h6>
                      850K+ Happy
                      <br /> Customer
                    </h6>
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
                      <span>4k+</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="benefit-image-part">
                  <div
                    className="image-one"
                    data-aos="fade-down"
                    data-aos-delay={50}
                    data-aos-duration={1500}
                    data-aos-offset={50}
                  >
                    <img
                      src="assets/images/benefit/benefit1.png"
                      alt="Benefit"
                    />
                  </div>
                  <div
                    className="image-two"
                    data-aos="fade-up"
                    data-aos-delay={50}
                    data-aos-duration={1500}
                    data-aos-offset={50}
                  >
                    <img
                      src="assets/images/benefit/benefit2.png"
                      alt="Benefit"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Benefit Area end */}
      {/* Mobile App Area start */}
      <section className="mobile-app-area pt-100 rel z-1">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-6">
              <div
                className="row no-gap rmb-55"
                data-aos="fade-left"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="col-6 col-small">
                  <div className="counter-item counter-text-wrap style-two">
                    <div className="icon">
                      <i className="flaticon-business-travel" />
                    </div>
                    <span
                      className="count-text k-plus"
                      data-speed={3000}
                      data-stop={28}
                    >
                      <Counter end={28} />
                    </span>
                    <span className="counter-title">Total Clients</span>
                  </div>
                </div>
                <div className="col-6 col-small">
                  <div className="counter-item counter-text-wrap style-two">
                    <div className="icon">
                      <i className="flaticon-plane" />
                    </div>
                    <span
                      className="count-text plus"
                      data-speed={3000}
                      data-stop={486}
                    >
                      <Counter end={486} />
                    </span>
                    <span className="counter-title">Total tours</span>
                  </div>
                </div>
                <div className="col-6 col-small">
                  <div className="counter-item counter-text-wrap style-two">
                    <div className="icon">
                      <i className="flaticon-signpost" />
                    </div>
                    <span
                      className="count-text plus"
                      data-speed={3000}
                      data-stop={200}
                    >
                      <Counter end={200} />
                    </span>
                    <span className="counter-title">Tour Guides</span>
                  </div>
                </div>
                <div className="col-6 col-small">
                  <div className="counter-item counter-text-wrap style-two">
                    <div className="icon">
                      <i className="flaticon-key" />
                    </div>
                    <span
                      className="count-text plus"
                      data-speed={3000}
                      data-stop={258}
                    >
                      <Counter end={258} />
                    </span>
                    <span className="counter-title">Luxury Hotel</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-lg-6">
              <div
                className="mobile-app-content"
                data-aos="fade-right"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="section-title mb-30">
                  <h2>
                    The Ultimate Travel Experience Features That Set Our Agency
                    Apart
                  </h2>
                </div>
                <p>
                  We go above and beyond to make your travel dreams a reality.
                  Trust us to handle the details so you can creating
                  unforgettable memories. Explore the world with confidence
                </p>
                <ul className="list-style-two mt-35 mb-30">
                  <li>Experience Agency</li>
                  <li>Professional Team</li>
                  <li>Low Cost Travel</li>
                  <li>Online Support 24/7</li>
                </ul>
                <Link href="about" className="theme-btn style-two">
                  <span data-hover="Explore Tours">Explore Tours</span>
                  <i className="fal fa-arrow-right" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Mobile App Area end */}
      {/* Blog Area start */}
      <section className="blog-area pt-100 pb-70 rel z-1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div
                className="section-title text-center counter-text-wrap mb-70"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <SectionTitle title={"Read Latest News & Blog"} />
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xxl-4 col-lg-6">
              <div
                className="blog-item style-two"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="image">
                  <img src="assets/images/blog/blog-two1.jpg" alt="Blog" />
                </div>
                <div className="content">
                  <ul className="blog-meta">
                    <li>
                      <i className="far fa-calendar-alt" />{" "}
                      <a href="#">25 Feb 2024</a>
                    </li>
                    <li>
                      <i className="far fa-comments" />{" "}
                      <a href="#">Comments (5)</a>
                    </li>
                  </ul>
                  <h5>
                    <Link href="blog-details">
                      Ultimate Guide to Planning Your Dream Vacation
                    </Link>
                  </h5>
                  <Link href="blog-details" className="read-more">
                    Read More <i className="fal fa-angle-right" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xxl-4 col-lg-6">
              <div
                className="blog-item style-two"
                data-aos="fade-up"
                data-aos-delay={100}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="image">
                  <img src="assets/images/blog/blog-two2.jpg" alt="Blog" />
                </div>
                <div className="content">
                  <ul className="blog-meta">
                    <li>
                      <i className="far fa-calendar-alt" />{" "}
                      <a href="#">25 Feb 2024</a>
                    </li>
                    <li>
                      <i className="far fa-comments" />{" "}
                      <a href="#">Comments (5)</a>
                    </li>
                  </ul>
                  <h5>
                    <Link href="blog-details">
                      Ultimate Guide to Planning Your Dream Vacation
                    </Link>
                  </h5>
                  <Link href="blog-details" className="read-more">
                    Read More <i className="fal fa-angle-right" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xxl-4 col-lg-6">
              <div
                className="blog-item style-two"
                data-aos="fade-up"
                data-aos-delay={200}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="image">
                  <img src="assets/images/blog/blog-two3.jpg" alt="Blog" />
                </div>
                <div className="content">
                  <ul className="blog-meta">
                    <li>
                      <i className="far fa-calendar-alt" />{" "}
                      <a href="#">25 Feb 2024</a>
                    </li>
                    <li>
                      <i className="far fa-comments" />{" "}
                      <a href="#">Comments (5)</a>
                    </li>
                  </ul>
                  <h5>
                    <Link href="blog-details">
                      Ultimate Guide to Planning Your Dream Vacation
                    </Link>
                  </h5>
                  <Link href="blog-details" className="read-more">
                    Read More <i className="fal fa-angle-right" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Blog Area end */}
      {/* Newsletter Area start */}
      <Subscribe />
      {/* Newsletter Area end */}
    </ReveloLayout>
  );
};
export default page;
