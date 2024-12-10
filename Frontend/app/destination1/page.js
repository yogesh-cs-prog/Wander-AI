import Banner from "@/components/Banner";
import SectionTitle from "@/components/SectionTitle";
import Subscribe from "@/components/Subscribe";
import ReveloLayout from "@/layout/ReveloLayout";
import Link from "next/link";
const page = () => {
  return (
    <ReveloLayout>
      <Banner pageTitle={"Destination 01"} search={true} />
      <section className="destinations-page-area pt-95 pb-90 rel z-1">
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
          <div className="row gap-10 row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-2 justify-content-center">
            <div className="col">
              <div
                className="destination-item style-two"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="image">
                  <img
                    src="assets/images/destinations/destination-five1.jpg"
                    alt="Destination"
                  />
                </div>
                <div className="content">
                  <h6>
                    <Link href="destination-details">Switzerland's</Link>
                  </h6>
                  <span className="tours">258 tours</span>
                </div>
              </div>
            </div>
            <div className="col">
              <div
                className="destination-item style-two"
                data-aos="fade-up"
                data-aos-delay={50}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="image">
                  <img
                    src="assets/images/destinations/destination-five2.jpg"
                    alt="Destination"
                  />
                </div>
                <div className="content">
                  <h6>
                    <Link href="destination-details">Poland</Link>
                  </h6>
                  <span className="tours">258 tours</span>
                </div>
              </div>
            </div>
            <div className="col">
              <div
                className="destination-item style-two"
                data-aos="fade-up"
                data-aos-delay={100}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="image">
                  <img
                    src="assets/images/destinations/destination-five3.jpg"
                    alt="Destination"
                  />
                </div>
                <div className="content">
                  <h6>
                    <Link href="destination-details">Indonesia</Link>
                  </h6>
                  <span className="tours">258 tours</span>
                </div>
              </div>
            </div>
            <div className="col">
              <div
                className="destination-item style-two"
                data-aos="fade-up"
                data-aos-delay={100}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="image">
                  <img
                    src="assets/images/destinations/destination-five4.jpg"
                    alt="Destination"
                  />
                </div>
                <div className="content">
                  <h6>
                    <Link href="destination-details">Thailand</Link>
                  </h6>
                  <span className="tours">258 tours</span>
                </div>
              </div>
            </div>
            <div className="col">
              <div
                className="destination-item style-two"
                data-aos="fade-up"
                data-aos-delay={150}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="image">
                  <img
                    src="assets/images/destinations/destination-five5.jpg"
                    alt="Destination"
                  />
                </div>
                <div className="content">
                  <h6>
                    <Link href="destination-details">Rome, Italy</Link>
                  </h6>
                  <span className="tours">258 tours</span>
                </div>
              </div>
            </div>
            <div className="col">
              <div
                className="destination-item style-two"
                data-aos="fade-up"
                data-aos-delay={150}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="image">
                  <img
                    src="assets/images/destinations/destination-five6.jpg"
                    alt="Destination"
                  />
                </div>
                <div className="content">
                  <h6>
                    <Link href="destination-details">New York</Link>
                  </h6>
                  <span className="tours">258 tours</span>
                </div>
              </div>
            </div>
            <div className="col">
              <div
                className="destination-item style-two"
                data-aos="fade-up"
                data-aos-delay={150}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="image">
                  <img
                    src="assets/images/destinations/destination-five7.jpg"
                    alt="Destination"
                  />
                </div>
                <div className="content">
                  <h6>
                    <Link href="destination-details">Poland</Link>
                  </h6>
                  <span className="tours">258 tours</span>
                </div>
              </div>
            </div>
            <div className="col">
              <div
                className="destination-item style-two"
                data-aos="fade-up"
                data-aos-delay={150}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="image">
                  <img
                    src="assets/images/destinations/destination-five8.jpg"
                    alt="Destination"
                  />
                </div>
                <div className="content">
                  <h6>
                    <Link href="destination-details">Wroclaw, Poland</Link>
                  </h6>
                  <span className="tours">258 tours</span>
                </div>
              </div>
            </div>
            <div className="col">
              <div
                className="destination-item style-two"
                data-aos="fade-up"
                data-aos-delay={150}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="image">
                  <img
                    src="assets/images/destinations/destination-five9.jpg"
                    alt="Destination"
                  />
                </div>
                <div className="content">
                  <h6>
                    <Link href="destination-details">France, Paris</Link>
                  </h6>
                  <span className="tours">258 tours</span>
                </div>
              </div>
            </div>
            <div className="col">
              <div
                className="destination-item style-two"
                data-aos="fade-up"
                data-aos-delay={150}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="image">
                  <img
                    src="assets/images/destinations/destination-five10.jpg"
                    alt="Destination"
                  />
                </div>
                <div className="content">
                  <h6>
                    <Link href="destination-details">Antalya, Turkey</Link>
                  </h6>
                  <span className="tours">258 tours</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hotel Area start */}
      <section className="hotel-area bgc-black pt-100 pb-70 rel z-1">
        <div className="container">
          <div className="row justify-content-between align-items-center pb-40">
            <div className="col-lg-9">
              <div
                className="section-title text-white counter-text-wrap mb-15"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <SectionTitle title={"Discover the World's Class Top Hotel"} />
              </div>
            </div>
            <div className="col-lg-3 text-xl-end">
              <Link href="tour-list" className="theme-btn style-four mb-15">
                <span data-hover="Explore More Hotel">Explore More Hotel</span>
                <i className="fal fa-arrow-right" />
              </Link>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-xxl-6 col-xl-8 col-lg-10">
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
            </div>
            <div className="col-xxl-6 col-xl-8 col-lg-10">
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
            </div>
            <div className="col-xxl-6 col-xl-8 col-lg-10">
              <div
                className="destination-item style-three"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
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
              </div>
            </div>
            <div className="col-xxl-6 col-xl-8 col-lg-10">
              <div
                className="destination-item style-three"
                data-aos="fade-up"
                data-aos-delay={50}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
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
