import Banner from "@/components/Banner";
import SectionTitle from "@/components/SectionTitle";
import Subscribe from "@/components/Subscribe";
import ReveloLayout from "@/layout/ReveloLayout";
import Link from "next/link";
const page = () => {
  return (
    <ReveloLayout>
      <Banner pageTitle={"Destination 02"} search={true} />
      {/* Page Banner End */}
      {/* Popular Destinations Area start */}
      <section className="popular-destinations-area pt-100 pb-90 rel z-1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div
                className="section-title text-center counter-text-wrap mb-40"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <SectionTitle title={"Explore Popular Destinations"} />
                <ul className="destinations-nav mt-30">
                  <li data-filter="*" className="active">
                    Show All
                  </li>
                  <li data-filter=".features">Features</li>
                  <li data-filter=".recent">Recent</li>
                  <li data-filter=".city">City</li>
                  <li data-filter=".rating">Rating</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row gap-10 destinations-active justify-content-center">
              <div className="col-xl-3 col-md-6 item recent rating">
                <div
                  className="destination-item style-two"
                  data-aos="flip-up"
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <div className="image">
                    <a href="#" className="heart">
                      <i className="fas fa-heart" />
                    </a>
                    <img
                      src="assets/images/destinations/destination1.jpg"
                      alt="Destination"
                    />
                  </div>
                  <div className="content">
                    <h6>
                      <Link href="destination-details">Thailand beach</Link>
                    </h6>
                    <span className="time">
                      5352+ tours &amp; 856+ Activity
                    </span>
                    <a href="#" className="more">
                      <i className="fas fa-chevron-right" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-md-6 item features">
                <div
                  className="destination-item style-two"
                  data-aos="flip-up"
                  data-aos-delay={100}
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <div className="image">
                    <a href="#" className="heart">
                      <i className="fas fa-heart" />
                    </a>
                    <img
                      src="assets/images/destinations/destination2.jpg"
                      alt="Destination"
                    />
                  </div>
                  <div className="content">
                    <h6>
                      <Link href="destination-details">Parga, Greece</Link>
                    </h6>
                    <span className="time">
                      5352+ tours &amp; 856+ Activity
                    </span>
                    <a href="#" className="more">
                      <i className="fas fa-chevron-right" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 item recent city rating">
                <div
                  className="destination-item style-two"
                  data-aos="flip-up"
                  data-aos-delay={200}
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <div className="image">
                    <a href="#" className="heart">
                      <i className="fas fa-heart" />
                    </a>
                    <img
                      src="assets/images/destinations/destination3.jpg"
                      alt="Destination"
                    />
                  </div>
                  <div className="content">
                    <h6>
                      <Link href="destination-details">
                        Castellammare del Golfo, Italy
                      </Link>
                    </h6>
                    <span className="time">
                      5352+ tours &amp; 856+ Activity
                    </span>
                    <a href="#" className="more">
                      <i className="fas fa-chevron-right" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 item city features">
                <div
                  className="destination-item style-two"
                  data-aos="flip-up"
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <div className="image">
                    <a href="#" className="heart">
                      <i className="fas fa-heart" />
                    </a>
                    <img
                      src="assets/images/destinations/destination4.jpg"
                      alt="Destination"
                    />
                  </div>
                  <div className="content">
                    <h6>
                      <Link href="destination-details">
                        Reserve of Canada, Canada
                      </Link>
                    </h6>
                    <span className="time">
                      5352+ tours &amp; 856+ Activity
                    </span>
                    <a href="#" className="more">
                      <i className="fas fa-chevron-right" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-md-6 item recent">
                <div
                  className="destination-item style-two"
                  data-aos="flip-up"
                  data-aos-delay={100}
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <div className="image">
                    <a href="#" className="heart">
                      <i className="fas fa-heart" />
                    </a>
                    <img
                      src="assets/images/destinations/destination5.jpg"
                      alt="Destination"
                    />
                  </div>
                  <div className="content">
                    <h6>
                      <Link href="destination-details">
                        Dubai united states
                      </Link>
                    </h6>
                    <span className="time">
                      5352+ tours &amp; 856+ Activity
                    </span>
                    <a href="#" className="more">
                      <i className="fas fa-chevron-right" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-md-6 item features rating">
                <div
                  className="destination-item style-two"
                  data-aos="flip-up"
                  data-aos-delay={200}
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <div className="image">
                    <a href="#" className="heart">
                      <i className="fas fa-heart" />
                    </a>
                    <img
                      src="assets/images/destinations/destination6.jpg"
                      alt="Destination"
                    />
                  </div>
                  <div className="content">
                    <h6>
                      <Link href="destination-details">Milos, Greece</Link>
                    </h6>
                    <span className="time">
                      5352+ tours &amp; 856+ Activity
                    </span>
                    <a href="#" className="more">
                      <i className="fas fa-chevron-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Popular Destinations Area end */}
      {/* Hotel Area start */}
      <section className="hotel-area bgc-black pt-100 pb-70 rel z-1">
        <div className="container">
          <div className="row">
            <div className="col-xl-4">
              <div className="destination-left-content mb-35">
                <div
                  className="section-title text-white counter-text-wrap mb-45"
                  data-aos="fade-up"
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <SectionTitle
                    title={"Discover the World's Class Top Hotel"}
                  />
                </div>
                <Link
                  href="destination1"
                  className="theme-btn style-four mb-15"
                >
                  <span data-hover="Explore More Hotel">
                    Explore More Hotel
                  </span>
                  <i className="fal fa-arrow-right" />
                </Link>
              </div>
            </div>
            <div className="col-xl-8">
              <div
                className="destination-item style-three"
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
                    src="assets/images/destinations/hotel1.jpg"
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
              <div
                className="destination-item style-three"
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
                    src="assets/images/destinations/hotel2.jpg"
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
              <div
                className="destination-item style-three"
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
                    src="assets/images/destinations/hotel3.jpg"
                    alt="Hotel"
                  />
                </div>
                <div className="content">
                  <span className="location">
                    <i className="fal fa-map-marker-alt" /> Ao Nang, Thailand
                  </span>
                  <h5>
                    <Link href="tour-details">
                      Painted house surrounded with trees Hotel
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
              <div
                className="destination-item style-three"
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
                    src="assets/images/destinations/hotel4.jpg"
                    alt="Hotel"
                  />
                </div>
                <div className="content">
                  <span className="location">
                    <i className="fal fa-map-marker-alt" /> Ao Nang, Thailand
                  </span>
                  <h5>
                    <Link href="tour-details">
                      house pool Jungle Pool Indonesia Hotel
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
      {/* Hot Deals Area start */}
      <section className="hot-deals-area pt-70 pb-50 rel z-1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div
                className="section-title text-center counter-text-wrap mb-50"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <SectionTitle title={"Discover Hot Deals"} />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
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
                  <img
                    src="assets/images/destinations/hot-deal1.jpg"
                    alt="Hot Deal"
                  />
                </div>
                <div className="content">
                  <span className="location">
                    <i className="fal fa-map-marker-alt" /> City of Venice,
                    Italy
                  </span>
                  <h5>
                    <Link href="tour-details">
                      Venice Grand Canal, Metropolitan Summer in Venice
                    </Link>
                  </h5>
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
            <div className="col-lg-4 col-md-6">
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
                  <img
                    src="assets/images/destinations/hot-deal2.jpg"
                    alt="Hot Deal"
                  />
                </div>
                <div className="content">
                  <span className="location">
                    <i className="fal fa-map-marker-alt" /> Kyoto, Japan
                  </span>
                  <h5>
                    <Link href="tour-details">
                      Japan, Kyoto, travel, and people in Kyoto, Japan by
                      Sorasak
                    </Link>
                  </h5>
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
            <div className="col-lg-4 col-md-6">
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
                  <img
                    src="assets/images/destinations/hot-deal3.jpg"
                    alt="Hot Deal"
                  />
                </div>
                <div className="content">
                  <span className="location">
                    <i className="fal fa-map-marker-alt" /> Tamnougalt, Morocco
                  </span>
                  <h5>
                    <Link href="tour-details">
                      Camels on desert under blue sky Morocco, Sahara.
                    </Link>
                  </h5>
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
          </div>
        </div>
      </section>
      {/* Hot Deals Area end */}
      {/* Newsletter Area start */}
      <Subscribe />
      {/* Newsletter Area end */}
    </ReveloLayout>
  );
};
export default page;
