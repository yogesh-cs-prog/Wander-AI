import SectionTitle from "@/components/SectionTitle";
import Destination from "@/components/slider/Destination";
import Subscribe from "@/components/Subscribe";
import ReveloLayout from "@/layout/ReveloLayout";
import Link from "next/link";
const page = () => {
  return (
    <ReveloLayout>
      {/* Page Banner Start */}
      <section className="page-banner-two rel z-1">
        <div className="container-fluid">
          <hr className="mt-0" />
          <div className="container">
            <div className="banner-inner pt-15 pb-25">
              <h2
                className="page-title mb-10"
                data-aos="fade-left"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                Bali, Indonesia
              </h2>
              <nav aria-label="breadcrumb">
                <ol
                  className="breadcrumb justify-content-center mb-20"
                  data-aos="fade-right"
                  data-aos-delay={200}
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <li className="breadcrumb-item">
                    <Link href="/">Home</Link>
                  </li>
                  <li className="breadcrumb-item active">
                    Destination Details
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>
      {/* Page Banner End */}
      {/* Destination Gallery start */}
      <div className="destination-gallery">
        <div className="container-fluid">
          <div className="row gap-10 justify-content-center rel">
            <div className="col-lg-4 col-md-6">
              <div className="gallery-item">
                <img
                  src="assets/images/destinations/destination-details1.jpg"
                  alt="Destination"
                />
              </div>
              <div className="gallery-item">
                <img
                  src="assets/images/destinations/destination-details4.jpg"
                  alt="Destination"
                />
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="gallery-item">
                <img
                  src="assets/images/destinations/destination-details2.jpg"
                  alt="Destination"
                />
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="gallery-item">
                <img
                  src="assets/images/destinations/destination-details3.jpg"
                  alt="Destination"
                />
              </div>
              <div className="gallery-item">
                <img
                  src="assets/images/destinations/destination-details5.jpg"
                  alt="Destination"
                />
              </div>
            </div>
            <div className="col-lg-12">
              <div className="gallery-more-btn">
                <Link
                  href="contact"
                  className="theme-btn style-two bgc-secondary"
                >
                  <span data-hover="See All Photos">See All Photos</span>
                  <i className="fal fa-arrow-right" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Destination Gallery End */}
      {/* About Us Area start */}
      <section className="about-us-area pt-90 pb-100 rel z-1">
        <div className="container">
          <div className="row gap-100 align-items-center">
            <div className="col-lg-6">
              <div
                className="destination-details-content rmb-55"
                data-aos="fade-left"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="section-title mb-25">
                  <span className="h2 mb-15">Welcome to </span>
                  <h2>Bali, Indonesia</h2>
                </div>
                <p>
                  Bali, Indonesia, is a tropical paradise renowned for
                  breathtaking beaches, vibrant culture, and lush landscapes.
                  Located at the westernmost end of the Lesser Sunda Islands,
                  Bali boasts a warm, tropical climate that is year-round
                  destination visitors are drawn to its picturesque beaches
                </p>
                <p>
                  The island's rich cultural heritage is evident in numerous
                  temples, including the iconic Tanah Lot and Uluwatu Temple, as
                  well as the cultural
                </p>
                <Link
                  href="destination-details"
                  className="theme-btn mt-25 style-two"
                >
                  <span data-hover="Explore Destinations">
                    Explore Destinations
                  </span>
                  <i className="fal fa-arrow-right" />
                </Link>
              </div>
            </div>
            <div
              className="col-lg-6"
              data-aos="fade-right"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="destination-map">
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
        </div>
      </section>
      {/* About Us Area end */}
      {/* Destinations Area start */}
      <section className="destinations-area bgc-lighter pt-85 pb-100 rel z-1">
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
      {/* Features Tours Area start */}
      <section className="features-tour-area bgc-black text-white pt-100 pb-50 rel z-1">
        <div className="container">
          <div className="row justify-content-between align-items-center pb-25">
            <div className="col-lg-6">
              <div
                className="section-title counter-text-wrap mb-20"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <SectionTitle title={"Discover Tours"} bg={"bgc-primary"} />
              </div>
            </div>
            <div className="col-lg-6 text-lg-end">
              <ul className="destinations-nav style-two mb-20">
                <li data-filter="*" className="active">
                  Show All
                </li>
                <li data-filter=".beach">Beach</li>
                <li data-filter=".museum">Museum</li>
                <li data-filter=".park">Park</li>
                <li data-filter=".city">City</li>
              </ul>
            </div>
          </div>
          <div className="row destinations-active justify-content-center">
            <div className="col-xl-3 col-lg-4 col-md-6 item beach park">
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
                <Link href="tour-details" className="theme-btn style-three">
                  <span data-hover="Explore">Explore</span>
                  <i className="fal fa-arrow-right" />
                </Link>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 item museum park city">
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
                <Link href="tour-details" className="theme-btn style-three">
                  <span data-hover="Explore">Explore</span>
                  <i className="fal fa-arrow-right" />
                </Link>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 item beach city">
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
                <Link href="tour-details" className="theme-btn style-three">
                  <span data-hover="Explore">Explore</span>
                  <i className="fal fa-arrow-right" />
                </Link>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 item beach museum">
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
                <Link href="tour-details" className="theme-btn style-three">
                  <span data-hover="Explore">Explore</span>
                  <i className="fal fa-arrow-right" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Features Tours Area end */}
      {/* Popular Activity Area start */}
      <section className="popular-activity pt-100 pb-70 rel z-1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div
                className="section-title text-center counter-text-wrap mb-45"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <h2>Explore Our Popular Activity</h2>
                <p>
                  One site{" "}
                  <span
                    className="count-text plus"
                    data-speed={3000}
                    data-stop={34500}
                  >
                    0
                  </span>{" "}
                  most popular experience
                </p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div
              className="col-xl-4 col-md-6"
              data-aos="flip-up"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="activity-item">
                <div className="image">
                  <img
                    src="assets/images/activities/activity1.png"
                    alt="Activity"
                  />
                </div>
                <div className="content">
                  <h5>
                    <Link href="tour-details">Mountain Trek</Link>
                  </h5>
                  <span className="time">258 tours</span>
                </div>
                <div className="right-btn">
                  <Link href="tour-details" className="more">
                    <i className="fas fa-chevron-right" />
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-md-6"
              data-aos="flip-up"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="activity-item">
                <div className="image">
                  <img
                    src="assets/images/activities/activity2.png"
                    alt="Activity"
                  />
                </div>
                <div className="content">
                  <h5>
                    <Link href="tour-details">Beach Snorkel</Link>
                  </h5>
                  <span className="time">320 tours</span>
                </div>
                <div className="right-btn">
                  <Link href="tour-details" className="more">
                    <i className="fas fa-chevron-right" />
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-md-6"
              data-aos="flip-up"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="activity-item">
                <div className="image">
                  <img
                    src="assets/images/activities/activity3.png"
                    alt="Activity"
                  />
                </div>
                <div className="content">
                  <h5>
                    <Link href="tour-details">Explore Ruins</Link>
                  </h5>
                  <span className="time">258 tours</span>
                </div>
                <div className="right-btn">
                  <Link href="tour-details" className="more">
                    <i className="fas fa-chevron-right" />
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-md-6"
              data-aos="flip-up"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="activity-item">
                <div className="image">
                  <img
                    src="assets/images/activities/activity4.png"
                    alt="Activity"
                  />
                </div>
                <div className="content">
                  <h5>
                    <Link href="tour-details">Road Trip</Link>
                  </h5>
                  <span className="time">258 tours</span>
                </div>
                <div className="right-btn">
                  <Link href="tour-details" className="more">
                    <i className="fas fa-chevron-right" />
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-md-6"
              data-aos="flip-up"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="activity-item">
                <div className="image">
                  <img
                    src="assets/images/activities/activity5.png"
                    alt="Activity"
                  />
                </div>
                <div className="content">
                  <h5>
                    <Link href="tour-details">City Cycling</Link>
                  </h5>
                  <span className="time">320 tours</span>
                </div>
                <div className="right-btn">
                  <Link href="tour-details" className="more">
                    <i className="fas fa-chevron-right" />
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-md-6"
              data-aos="flip-up"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="activity-item">
                <div className="image">
                  <img
                    src="assets/images/activities/activity6.png"
                    alt="Activity"
                  />
                </div>
                <div className="content">
                  <h5>
                    <Link href="tour-details">River Cruise</Link>
                  </h5>
                  <span className="time">258 tours</span>
                </div>
                <div className="right-btn">
                  <Link href="tour-details" className="more">
                    <i className="fas fa-chevron-right" />
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-md-6"
              data-aos="flip-up"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="activity-item">
                <div className="image">
                  <img
                    src="assets/images/activities/activity7.png"
                    alt="Activity"
                  />
                </div>
                <div className="content">
                  <h5>
                    <Link href="tour-details">Fishing</Link>
                  </h5>
                  <span className="time">258 tours</span>
                </div>
                <div className="right-btn">
                  <Link href="tour-details" className="more">
                    <i className="fas fa-chevron-right" />
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-md-6"
              data-aos="flip-up"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="activity-item">
                <div className="image">
                  <img
                    src="assets/images/activities/activity8.png"
                    alt="Activity"
                  />
                </div>
                <div className="content">
                  <h5>
                    <Link href="tour-details">Spa Treatment</Link>
                  </h5>
                  <span className="time">320 tours</span>
                </div>
                <div className="right-btn">
                  <Link href="tour-details" className="more">
                    <i className="fas fa-chevron-right" />
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-md-6"
              data-aos="flip-up"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="activity-item">
                <div className="image">
                  <img
                    src="assets/images/activities/activity9.png"
                    alt="Activity"
                  />
                </div>
                <div className="content">
                  <h5>
                    <Link href="tour-details">Hiking Trekking</Link>
                  </h5>
                  <span className="time">258 tours</span>
                </div>
                <div className="right-btn">
                  <Link href="tour-details" className="more">
                    <i className="fas fa-chevron-right" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Popular Activity Area end */}
      {/* CTA Area start */}
      <section className="cta-area rel z-1">
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
                  <span data-hover="Explore Tours">Explore Tours</span>
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
                  <span data-hover="Explore Tours">Explore Tours</span>
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
                  <span data-hover="Explore Tours">Explore Tours</span>
                  <i className="fal fa-arrow-right" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Area end */}
      {/* Hotel Area start */}
      <section className="hotel-area py-70 rel z-1">
        <div className="container">
          <div className="row justify-content-between align-items-center pb-40">
            <div className="col-lg-9">
              <div
                className="section-title counter-text-wrap mb-15"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <SectionTitle
                  title={"Discover the World's Class Top Hotel"}
                  bg={"bgc-primary"}
                />
              </div>
            </div>
            <div className="col-lg-3 text-xl-end">
              <Link
                href="tour-list"
                className="theme-btn style-two bgc-secondary mb-15"
              >
                <span data-hover="Explore More Hotel">Explore More Hotel</span>
                <i className="fal fa-arrow-right" />
              </Link>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xxl-6 col-xl-8 col-lg-10">
              <div
                className="destination-item style-three bgc-lighter"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="image">
                  <div className="ratting">
                    <i className="fas fa-star" /> 4.8
                  </div>
                  <a href="#" className="heart">
                    <i className="fas fa-heart" />
                  </a>
                  <img
                    src="assets/images/destinations/hotel5.jpg"
                    alt="Hotel"
                  />
                </div>
                <div className="content">
                  <span className="location">
                    <i className="fal fa-map-marker-alt" /> Ao Nang, Thailand
                  </span>
                  <h5>
                    <Link href="tour-details">
                      The brown bench near swimming pool Hotel
                    </Link>
                  </h5>
                  <ul className="list-style-one">
                    <li>
                      <i className="fal fa-bed-alt" /> 2 Bed room
                    </li>
                    <li>
                      <i className="fal fa-hat-chef" /> 1 kitchen
                    </li>
                    <li>
                      <i className="fal fa-bath" /> 2 Wash room
                    </li>
                    <li>
                      <i className="fal fa-router" /> Internet
                    </li>
                  </ul>
                  <div className="destination-footer">
                    <span className="price">
                      <span>$85.00</span>/per night
                    </span>
                    <Link href="tour-details" className="read-more">
                      Book Now <i className="fal fa-angle-right" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-6 col-xl-8 col-lg-10">
              <div
                className="destination-item style-three bgc-lighter"
                data-aos="fade-up"
                data-aos-delay={50}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="image">
                  <div className="ratting">
                    <i className="fas fa-star" /> 4.8
                  </div>
                  <a href="#" className="heart">
                    <i className="fas fa-heart" />
                  </a>
                  <img
                    src="assets/images/destinations/hotel6.jpg"
                    alt="Hotel"
                  />
                </div>
                <div className="content">
                  <span className="location">
                    <i className="fal fa-map-marker-alt" /> Kigali, Rwanda
                  </span>
                  <h5>
                    <Link href="tour-details">
                      Green trees and body of water Marriott Hotel
                    </Link>
                  </h5>
                  <ul className="list-style-one">
                    <li>
                      <i className="fal fa-bed-alt" /> 2 Bed room
                    </li>
                    <li>
                      <i className="fal fa-hat-chef" /> 1 kitchen
                    </li>
                    <li>
                      <i className="fal fa-bath" /> 2 Wash room
                    </li>
                    <li>
                      <i className="fal fa-router" /> Internet
                    </li>
                  </ul>
                  <div className="destination-footer">
                    <span className="price">
                      <span>$85.00</span>/per night
                    </span>
                    <Link href="tour-details" className="read-more">
                      Book Now <i className="fal fa-angle-right" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-6 col-xl-8 col-lg-10">
              <div
                className="destination-item style-three bgc-lighter"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="image">
                  <div className="ratting">
                    <i className="fas fa-star" /> 4.8
                  </div>
                  <a href="#" className="heart">
                    <i className="fas fa-heart" />
                  </a>
                  <img
                    src="assets/images/destinations/hotel7.jpg"
                    alt="Hotel"
                  />
                </div>
                <div className="content">
                  <span className="location">
                    <i className="fal fa-map-marker-alt" /> Ao Nang, Thailand
                  </span>
                  <h5>
                    <Link href="tour-details">
                      Painted house surround with trees Hotel
                    </Link>
                  </h5>
                  <ul className="list-style-one">
                    <li>
                      <i className="fal fa-bed-alt" /> 2 Bed room
                    </li>
                    <li>
                      <i className="fal fa-hat-chef" /> 1 kitchen
                    </li>
                    <li>
                      <i className="fal fa-bath" /> 2 Wash room
                    </li>
                    <li>
                      <i className="fal fa-router" /> Internet
                    </li>
                  </ul>
                  <div className="destination-footer">
                    <span className="price">
                      <span>$85.00</span>/per night
                    </span>
                    <Link href="tour-details" className="read-more">
                      Book Now <i className="fal fa-angle-right" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-6 col-xl-8 col-lg-10">
              <div
                className="destination-item style-three bgc-lighter"
                data-aos="fade-up"
                data-aos-delay={50}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="image">
                  <div className="ratting">
                    <i className="fas fa-star" /> 4.8
                  </div>
                  <a href="#" className="heart">
                    <i className="fas fa-heart" />
                  </a>
                  <img
                    src="assets/images/destinations/hotel8.jpg"
                    alt="Hotel"
                  />
                </div>
                <div className="content">
                  <span className="location">
                    <i className="fal fa-map-marker-alt" /> Ao Nang, Thailand
                  </span>
                  <h5>
                    <Link href="tour-details">
                      House pool Jungle Pool Indonesia Hotel
                    </Link>
                  </h5>
                  <ul className="list-style-one">
                    <li>
                      <i className="fal fa-bed-alt" /> 2 Bed room
                    </li>
                    <li>
                      <i className="fal fa-hat-chef" /> 1 kitchen
                    </li>
                    <li>
                      <i className="fal fa-bath" /> 2 Wash room
                    </li>
                    <li>
                      <i className="fal fa-router" /> Internet
                    </li>
                  </ul>
                  <div className="destination-footer">
                    <span className="price">
                      <span>$85.00</span>/per night
                    </span>
                    <Link href="tour-details" className="read-more">
                      Book Now <i className="fal fa-angle-right" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Hotel Area end */}
      {/* Newsletter Area start */}
      <Subscribe />
      {/* Newsletter Area end */}
    </ReveloLayout>
  );
};
export default page;
