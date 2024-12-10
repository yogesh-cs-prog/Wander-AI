import Counter from "@/components/Counter";
import SectionTitle from "@/components/SectionTitle";
import ReveloLayout from "@/layout/ReveloLayout";
import Link from "next/link";
const page = () => {
  return (
    <ReveloLayout header={2} sideBar={true} insta>
      {/* Hero Area Start */}
      <section
        className="hero-area-two pt-160 rpt-100 rel z-2"
        style={{
          backgroundImage: "url(assets/images/backgrounds/hero-bg-lines.png)",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              <div
                className="hero-content-two"
                data-aos="fade-left"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <span className="subtitle mb-15">Best Tours &amp; Travels</span>
                <h1>Cityscape Adventures Tours &amp; Travel</h1>
                <p>
                  We specialize in crafting unforgettable city experiences for
                  travelers seeking to discover the heart and soul
                </p>
                <Link
                  href="tour-details"
                  className="theme-btn style-two bgc-secondary mt-25"
                >
                  <span data-hover="Explore Tours">Explore Tours</span>
                  <i className="fal fa-arrow-right" />
                </Link>
              </div>
            </div>
            <div className="col-xl-6">
              <div
                className="hero-image-two bgs-cover"
                style={{
                  backgroundImage: "url(assets/images/hero/hero-two.jpg)",
                }}
                data-aos="fade-right"
                data-aos-duration={1500}
                data-aos-offset={50}
              />
            </div>
          </div>
        </div>
      </section>
      {/* Hero Area End */}
      {/* Banner and Search Area Start */}
      <section className="banner-and-search pt-10 rel z-2">
        <div className="row">
          <div className="col-xxl-4 col-md-6">
            <div
              className="search-banner"
              style={{
                backgroundImage: "url(assets/images/banner/search-banner1.jpg)",
              }}
              data-aos="zoom-in-up"
              data-aos-duration={1500}
              data-aos-offset={50}
            />
          </div>
          <div className="col-xxl-4 col-md-6">
            <div
              className="search-banner"
              style={{
                backgroundImage: "url(assets/images/banner/search-banner2.jpg)",
              }}
              data-aos="zoom-in-up"
              data-aos-delay={50}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div
                className="content"
                style={{
                  backgroundImage:
                    "url(assets/images/banner/search-banner-shape.png)",
                }}
              >
                <div className="left">
                  Explore your <i className="far fa-long-arrow-alt-right" />{" "}
                  <b>favorite destination</b> with our{" "}
                  <span>
                    <b>Ravelo</b>
                  </span>
                </div>
                <div
                  className="right"
                  style={{
                    backgroundImage:
                      "url(assets/images/banner/search-banner-off-bg.png)",
                  }}
                >
                  <span className="number">
                    <span>25</span>%
                  </span>
                  <span className="text">OFF</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-4 col-md-6">
            <div
              className="search-filter-inner style-two text-white mb-10"
              data-aos="zoom-in-up"
              data-aos-delay={100}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="section-title counter-text-wrap mb-10">
                <h4>Looking for Tours Or Destination</h4>
                <p>
                  One site{" "}
                  <span className="count-text plus">
                    <Counter end={34500} />
                  </span>{" "}
                  most popular experience
                </p>
              </div>
              <div className="filter-item clearfix">
                <div className="icon">
                  <i className="fal fa-map-marker-alt" />
                </div>
                <span className="title">Destinations</span>
                <select name="city" id="city">
                  <option value="value1">City or Region</option>
                  <option value="value2">City</option>
                  <option value="value2">Region</option>
                </select>
              </div>
              <div className="filter-item clearfix">
                <div className="icon">
                  <i className="fal fa-flag" />
                </div>
                <span className="title">All Activity</span>
                <select name="activity" id="activity">
                  <option value="value1">Choose Activity</option>
                  <option value="value2">Daily</option>
                  <option value="value2">Monthly</option>
                </select>
              </div>
              <div className="filter-item clearfix">
                <div className="icon">
                  <i className="fal fa-calendar-alt" />
                </div>
                <span className="title">Departure Date</span>
                <select name="date" id="date">
                  <option value="value1">Date from</option>
                  <option value="value2">10</option>
                  <option value="value2">20</option>
                </select>
              </div>
              <div className="filter-item clearfix">
                <div className="icon">
                  <i className="fal fa-users" />
                </div>
                <span className="title">Guests</span>
                <select name="cuests" id="cuests">
                  <option value="value1">0</option>
                  <option value="value2">1</option>
                  <option value="value2">2</option>
                </select>
              </div>
              <div className="search-button w-100 mt-10">
                <button className="theme-btn bgc-secondary w-100">
                  <span data-hover="Search">Search</span>
                  <i className="far fa-search" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Banner and Search Area End */}
      {/* About Area start */}
      <section className="about-area-two pt-90 rel z-1">
        <div className="container">
          <div className="row justify-content-end">
            <div
              className="col-xxl-4 col-xl-3"
              data-aos="fade-right"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <span className="subtitle mb-35">About Company</span>
            </div>
            <div className="col-xxl-7 col-xl-9">
              <div
                className="about-two-content"
                data-aos="fade-left"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="row">
                  <div className="col-lg-9">
                    <div className="section-title mb-25">
                      <h2>
                        Experience and Professional Tours &amp; Travel Agency in
                        the World
                      </h2>
                    </div>
                  </div>
                  <div className="col-md-5">
                    <div className="experience-years rmb-20">
                      <span className="title">Years Of Experience</span>
                      <span className="text">We have</span>
                      <span className="years">28+</span>
                    </div>
                  </div>
                  <div className="col-md-7">
                    <p>
                      We specialize in crafting unforgettable city experiences
                      for travelers seeking to discover the heart and soul of
                      urban landscapes. Our expertly guided tours take you on
                      journey through the vibrant streets, historic landmarks,
                      and hidden gems of each city we explore.
                    </p>
                    <Link href="about" className="theme-btn style-three mt-25">
                      <span data-hover="Read More">Read More</span>
                      <i className="fal fa-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About Area end */}
      {/* Popular Visiting Place start */}
      <section className="popular-visiting-place pt-100 pb-70 rel z-1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xxl-3 col-xl-4 col-sm-6">
              <div
                className="destination-item style-two bgc-lighter"
                data-aos="flip-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="image">
                  <img
                    src="assets/images/destinations/destination7.jpg"
                    alt="Destination"
                  />
                  <span className="location">
                    <i className="far fa-map-marker-alt" /> South Africa
                  </span>
                </div>
                <div className="content">
                  <h6>
                    <Link href="tour-details">Mountain Hiking</Link>
                  </h6>
                  <span className="time">5352+ tours &amp; 856+ Activity</span>
                </div>
              </div>
            </div>
            <div className="col-xxl-3 col-xl-4 col-sm-6">
              <div
                className="destination-item style-two bgc-lighter"
                data-aos="flip-up"
                data-aos-delay={50}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="image">
                  <img
                    src="assets/images/destinations/destination8.jpg"
                    alt="Destination"
                  />
                  <span className="location">
                    <i className="far fa-map-marker-alt" /> Maya Bay, Thailand
                  </span>
                </div>
                <div className="content">
                  <h6>
                    <Link href="tour-details">Green Water Sea Beach</Link>
                  </h6>
                  <span className="time">5352+ tours &amp; 856+ Activity</span>
                </div>
              </div>
            </div>
            <div className="col-xxl-3 col-xl-4 col-sm-6">
              <div
                className="destination-item style-two bgc-lighter"
                data-aos="flip-up"
                data-aos-delay={100}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="image">
                  <img
                    src="assets/images/destinations/destination9.jpg"
                    alt="Destination"
                  />
                  <span className="location">
                    <i className="far fa-map-marker-alt" /> Venice, Italy
                  </span>
                </div>
                <div className="content">
                  <h6>
                    <Link href="tour-details">Venice Grand Canal</Link>
                  </h6>
                  <span className="time">5352+ tours &amp; 856+ Activity</span>
                </div>
              </div>
            </div>
            <div className="col-xxl-3 col-xl-4 col-sm-6">
              <div
                className="destination-item style-two bgc-lighter"
                data-aos="flip-up"
                data-aos-delay={50}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="image">
                  <img
                    src="assets/images/destinations/destination10.jpg"
                    alt="Destination"
                  />
                  <span className="location">
                    <i className="far fa-map-marker-alt" /> Switzerland
                  </span>
                </div>
                <div className="content">
                  <h6>
                    <Link href="tour-details">Snow covered mountain</Link>
                  </h6>
                  <span className="time">5352+ tours &amp; 856+ Activity</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Popular Visiting Place end */}
      {/* Popular Activity Area start */}
      <section className="popular-activity-area bgc-lighter br-10 pt-100 pb-70 rel z-1">
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
                  <a href="#" className="more">
                    <i className="fas fa-chevron-right" />
                  </a>
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
                  <a href="#" className="more">
                    <i className="fas fa-chevron-right" />
                  </a>
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
                  <a href="#" className="more">
                    <i className="fas fa-chevron-right" />
                  </a>
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
                  <a href="#" className="more">
                    <i className="fas fa-chevron-right" />
                  </a>
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
                  <a href="#" className="more">
                    <i className="fas fa-chevron-right" />
                  </a>
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
                  <a href="#" className="more">
                    <i className="fas fa-chevron-right" />
                  </a>
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
                  <a href="#" className="more">
                    <i className="fas fa-chevron-right" />
                  </a>
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
                  <a href="#" className="more">
                    <i className="fas fa-chevron-right" />
                  </a>
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
                  <a href="#" className="more">
                    <i className="fas fa-chevron-right" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Popular Activity Area end */}
      {/* Destinations Area start */}
      <section className="destinations-area pt-100 pb-70 rel z-1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div
                className="section-title text-center counter-text-wrap mb-70"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <SectionTitle
                  title={"Discover the World's Treasures with Ravelo"}
                  bg={"bgc-primary"}
                />
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xxl-4 col-md-6">
              <div
                className="destination-item style-four"
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
                    src="assets/images/destinations/visiting-place5.jpg"
                    alt="Destination"
                  />
                </div>
                <div className="content">
                  <span className="location">
                    <i className="fal fa-map-marker-alt" /> Tours, France
                  </span>
                  <h5>
                    <Link href="destination-details">
                      Brown Concrete Building Basilica St Martin
                    </Link>
                  </h5>
                  <span className="time">3 days 2 nights - Couple</span>
                </div>
                <div className="destination-footer">
                  <span className="price">
                    <span>$58.00</span>/per person
                  </span>
                  <a href="#" className="read-more">
                    Book Now <i className="fal fa-angle-right" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xxl-4 col-md-6">
              <div
                className="destination-item style-four"
                data-aos="fade-up"
                data-aos-delay={100}
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
                    src="assets/images/destinations/visiting-place6.jpg"
                    alt="Destination"
                  />
                </div>
                <div className="content">
                  <span className="location">
                    <i className="fal fa-map-marker-alt" /> Wildest, Italy
                  </span>
                  <h5>
                    <Link href="destination-details">
                      Blue lake water view taken travel with daytime
                    </Link>
                  </h5>
                  <span className="time">3 days 2 nights - Couple</span>
                </div>
                <div className="destination-footer">
                  <span className="price">
                    <span>$63.00</span>/per person
                  </span>
                  <a href="#" className="read-more">
                    Book Now <i className="fal fa-angle-right" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xxl-4 col-md-6">
              <div
                className="destination-item style-four"
                data-aos="fade-up"
                data-aos-delay={200}
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
                    src="assets/images/destinations/visiting-place7.jpg"
                    alt="Destination"
                  />
                </div>
                <div className="content">
                  <span className="location">
                    <i className="fal fa-map-marker-alt" /> Rome, Italy
                  </span>
                  <h5>
                    <Link href="destination-details">
                      Woman standing near Colosseum, Rome
                    </Link>
                  </h5>
                  <span className="time">3 days 2 nights - Couple</span>
                </div>
                <div className="destination-footer">
                  <span className="price">
                    <span>$42</span>/per person
                  </span>
                  <a href="#" className="read-more">
                    Book Now <i className="fal fa-angle-right" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Destinations Area end */}
      {/* CTA Area start */}
      <section
        className="cta-area-two overlay rel z-1"
        style={{
          backgroundImage: "url(assets/images/backgrounds/cta-two.jpg)",
        }}
      >
        <div className="container">
          <div className="row">
            <div
              className="col-lg-6 align-self-center"
              data-aos="fade-left"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="cta-content-part text-white py-50 rpt-100 rpb-15">
                <div className="section-title mb-25">
                  <h2>
                    Adventures and <span>50%</span> Discount
                  </h2>
                </div>
                <p>
                  Save 15% or more when you book and stay before 20 July 2024
                </p>
                <Link
                  href="shop"
                  className="theme-btn style-two bgc-secondary mt-20"
                >
                  <span data-hover="Find Early And Booking">
                    Find Early And Booking
                  </span>
                  <i className="fal fa-arrow-right" />
                </Link>
              </div>
            </div>
            <div
              className="col-lg-6 align-self-end"
              data-aos="zoom-in-up"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="cta-image-part mt-40">
                <img src="assets/images/cta/cta-two.png" alt="CTA" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Area end */}
      {/* Features Area start */}
      <section className="features-area-two pt-100 pb-45 rel z-1">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div
                className="features-two-content mb-25 z-2 rel"
                data-aos="fade-left"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="section-title counter-text-wrap mb-50">
                  <SectionTitle
                    title={"How to Benefit Our Ravelo Tours & Travels"}
                    bg={"bgc-primary"}
                    subtitle2="most popular experience"
                  />
                </div>
                <div className="features-wrap-two">
                  <div className="row">
                    <div className="col-xxl-4 col-xl-5 col-md-6">
                      <div className="feature-item style-two">
                        <div className="icon">
                          <i className="flaticon-save-money" />
                        </div>
                        <div className="content">
                          <h5>
                            <Link href="destination-details">
                              Best Rate Guarantee
                            </Link>
                          </h5>
                          <p>
                            Tent camping is wonderful way to connect with nature
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-xxl-4 col-xl-5 col-md-6">
                      <div className="feature-item style-two">
                        <div className="icon">
                          <i className="flaticon-travel-1" />
                        </div>
                        <div className="content">
                          <h5>
                            <Link href="destination-details">
                              Diverse Destinations
                            </Link>
                          </h5>
                          <p>
                            Mountain biking is exhilarating sport that physical
                            fitness
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-xxl-4 col-xl-5 col-md-6">
                      <div className="feature-item style-two">
                        <div className="icon">
                          <i className="flaticon-booking" />
                        </div>
                        <div className="content">
                          <h5>
                            <Link href="destination-details">Fast Booking</Link>
                          </h5>
                          <p>
                            Kayaking is a thrilling outdoor activity that
                            adventure
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-xxl-4 col-xl-5 col-md-6">
                      <div className="feature-item style-two">
                        <div className="icon">
                          <i className="flaticon-guidepost" />
                        </div>
                        <div className="content">
                          <h5>
                            <Link href="destination-details">
                              Best Travel Guide
                            </Link>
                          </h5>
                          <p>
                            Fishing and boat quintessential activities that
                            bring joy
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-xxl-4 col-xl-5 col-md-6">
                      <div className="feature-item style-two">
                        <div className="icon">
                          <i className="flaticon-climbing" />
                        </div>
                        <div className="content">
                          <h5>
                            <Link href="destination-details">
                              Best Adventures
                            </Link>
                          </h5>
                          <p>
                            Fishing and boat quintessential activities that
                            bring joy
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-xxl-4 col-xl-5 col-md-6">
                      <div className="feature-item style-two">
                        <div className="icon">
                          <i className="flaticon-online-chat" />
                        </div>
                        <div className="content">
                          <h5>
                            <Link href="destination-details">
                              Fast Support 24/7
                            </Link>
                          </h5>
                          <p>
                            Fishing and boat quintessential activities that
                            bring joy
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-6"
              data-aos="fade-right"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="features-image-two text-lg-end mb-55">
                <img
                  src="assets/images/features/features-two.jpg"
                  alt="Features"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Features Area end */}
      {/* Team Area start */}
      <section
        className="team-area overflow-hidden br-10 bgc-black bgp-bottom pt-100 pb-70 rel z-1"
        style={{ backgroundImage: "url(assets/images/backgrounds/guides.png)" }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div
                className="section-title text-white text-center counter-text-wrap mb-70"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <SectionTitle title={"Meet Our Experience Travel Guides"} />
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xxl-3 col-xl-4 col-sm-6">
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
            <div className="col-xxl-3 col-xl-4 col-sm-6">
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
            <div className="col-xxl-3 col-xl-4 col-sm-6">
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
            <div className="col-xxl-3 col-xl-4 col-sm-6">
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
          </div>
        </div>
        <div className="guide-shapes">
          <div className="shape one">
            <img src="assets/images/shapes/guide1.png" alt="Shape" />
          </div>
          <div className="shape two">
            <img src="assets/images/shapes/guide2.png" alt="Shape" />
          </div>
        </div>
      </section>
      {/* Team Area end */}
      {/* City Tours Area start */}
      <section className="city-tours-area pt-100 pb-70 rel z-1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div
                className="section-title text-center counter-text-wrap mb-70"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <SectionTitle
                  title={"Explore Features City Tours"}
                  bg={"bgc-primary"}
                />
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xxl-6 col-xl-9 col-lg-10">
              <div
                className="destination-item style-four image-left"
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
                    src="assets/images/destinations/city-tour1.jpg"
                    alt="City Tour"
                  />
                </div>
                <div className="content">
                  <span className="location">
                    <i className="fal fa-map-marker-alt" /> Bali, Indonesia
                  </span>
                  <h5>
                    <Link href="tour-details">Karangasem, Beach</Link>
                  </h5>
                  <p className="text">
                    We specialize crafting city traveler seeking to discover the
                    heart
                  </p>
                  <span className="price">
                    <span>$58.00</span>/per night
                  </span>
                  <Link href="blog-details" className="theme-btn style-three">
                    <span data-hover="Book Now">Book Now</span>
                    <i className="fal fa-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xxl-6 col-xl-9 col-lg-10">
              <div
                className="destination-item style-four image-left"
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
                    src="assets/images/destinations/city-tour2.jpg"
                    alt="City Tour"
                  />
                </div>
                <div className="content">
                  <span className="location">
                    <i className="fal fa-map-marker-alt" /> Bali, Indonesia
                  </span>
                  <h5>
                    <Link href="tour-details">Jalan Taman Ujung</Link>
                  </h5>
                  <p className="text">
                    We specialize crafting city traveler seeking to discover the
                    heart
                  </p>
                  <span className="price">
                    <span>$58.00</span>/per night
                  </span>
                  <Link href="blog-details" className="theme-btn style-three">
                    <span data-hover="Book Now">Book Now</span>
                    <i className="fal fa-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xxl-6 col-xl-9 col-lg-10">
              <div
                className="destination-item style-four image-left"
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
                    src="assets/images/destinations/city-tour3.jpg"
                    alt="City Tour"
                  />
                </div>
                <div className="content">
                  <span className="location">
                    <i className="fal fa-map-marker-alt" /> Lake Louise, Canada
                  </span>
                  <h5>
                    <Link href="tour-details">Mountains Lake Riding</Link>
                  </h5>
                  <p className="text">
                    We specialize crafting city traveler seeking to discover the
                    heart
                  </p>
                  <span className="price">
                    <span>$58.00</span>/per night
                  </span>
                  <Link href="blog-details" className="theme-btn style-three">
                    <span data-hover="Book Now">Book Now</span>
                    <i className="fal fa-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xxl-6 col-xl-9 col-lg-10">
              <div
                className="destination-item style-four image-left"
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
                    src="assets/images/destinations/city-tour4.jpg"
                    alt="City Tour"
                  />
                </div>
                <div className="content">
                  <span className="location">
                    <i className="fal fa-map-marker-alt" /> Rome, Italy
                  </span>
                  <h5>
                    <Link href="tour-details">Colosseum Park Italy</Link>
                  </h5>
                  <p className="text">
                    We specialize crafting city traveler seeking to discover the
                    heart
                  </p>
                  <span className="price">
                    <span>$58.00</span>/per night
                  </span>
                  <Link href="blog-details" className="theme-btn style-three">
                    <span data-hover="Book Now">Book Now</span>
                    <i className="fal fa-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* City Tours Area end */}
      {/* Newsletter Area start */}
      <section
        className="newsletter-two bgc-primary overflow-hidden br-10 py-100 rel z-1"
        style={{
          backgroundImage:
            "url(assets/images/newsletter/newsletter-bg-lines.png)",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div
                className="newsletter-content-part text-white rmb-55"
                data-aos="zoom-in-right"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="section-title counter-text-wrap mb-45">
                  <SectionTitle
                    title={"Subscribe Our Newsletter to Get more offer & Tips"}
                  />
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
                    "url(assets/images/newsletter/newsletter-right.jpg)",
                }}
              />
            </div>
          </div>
        </div>
      </section>
      {/* Newsletter Area end */}
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
                <SectionTitle
                  title={"Read Latest News & Blog"}
                  bg={"bgc-primary"}
                />
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
    </ReveloLayout>
  );
};
export default page;
