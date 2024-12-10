import Banner from "@/components/Banner";
import Subscribe from "@/components/Subscribe";
import TourSidebar from "@/components/TourSidebar";
import ReveloLayout from "@/layout/ReveloLayout";
import Link from "next/link";
const page = () => {
  return (
    <ReveloLayout>
      <Banner pageTitle={"Tour List View"} pageName={"Tour List"} search />
      {/* Tour List Area start */}
      <section className="tour-list-page py-100 rel z-1">
        <div className="container">
          <div className="row">
            <TourSidebar />
            <div className="col-lg-9">
              <div className="shop-shorter rel z-3 mb-20">
                <ul className="grid-list mb-15 me-2">
                  <li>
                    <a href="#">
                      <i className="fal fa-border-all" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="far fa-list" />
                    </a>
                  </li>
                </ul>
                <div className="sort-text mb-15 me-4 me-xl-auto">
                  34 Tours found
                </div>
                <div className="sort-text mb-15 me-4">Sort By</div>
                <select>
                  <option value="default" selected="">
                    Short By
                  </option>
                  <option value="new">Newness</option>
                  <option value="old">Oldest</option>
                  <option value="hight-to-low">High To Low</option>
                  <option value="low-to-high">Low To High</option>
                </select>
              </div>
              <div
                className="destination-item style-three bgc-lighter"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="image">
                  <span className="badge bgc-pink">Featured</span>
                  <a href="#" className="heart">
                    <i className="fas fa-heart" />
                  </a>
                  <img
                    src="assets/images/destinations/tour-list1.jpg"
                    alt="Tour List"
                  />
                </div>
                <div className="content">
                  <div className="destination-header">
                    <span className="location">
                      <i className="fal fa-map-marker-alt" /> Bali, Indonesia
                    </span>
                    <div className="ratting">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                    </div>
                  </div>
                  <h5>
                    <Link href="tour-details">
                      Bay Cruise by Boat in Bali, Indonesia
                    </Link>
                  </h5>
                  <p>
                    Bali, Indonesia, is tropical paradise renowned breathtaking
                    beaches, vibrant culture, and lush landscapes
                  </p>
                  <ul className="blog-meta">
                    <li>
                      <i className="far fa-clock" /> 3 days 2 nights
                    </li>
                    <li>
                      <i className="far fa-user" /> 5-8 guest
                    </li>
                  </ul>
                  <div className="destination-footer">
                    <span className="price">
                      <span>$58.00</span>/person
                    </span>
                    <Link
                      href="tour-details"
                      className="theme-btn style-two style-three"
                    >
                      <span data-hover="Book Now">Book Now</span>
                      <i className="fal fa-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
              <div
                className="destination-item style-three bgc-lighter"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="image">
                  <span className="badge">10% Off</span>
                  <a href="#" className="heart">
                    <i className="fas fa-heart" />
                  </a>
                  <img
                    src="assets/images/destinations/tour-list2.jpg"
                    alt="Tour List"
                  />
                </div>
                <div className="content">
                  <div className="destination-header">
                    <span className="location">
                      <i className="fal fa-map-marker-alt" /> Rome, Italy
                    </span>
                    <div className="ratting">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                    </div>
                  </div>
                  <h5>
                    <Link href="tour-details">
                      Buenos Aires, Calafate &amp; Ushuaia
                    </Link>
                  </h5>
                  <p>
                    Bali, Indonesia, is tropical paradise renowned breathtaking
                    beaches, vibrant culture, and lush landscapes
                  </p>
                  <ul className="blog-meta">
                    <li>
                      <i className="far fa-clock" /> 3 days 2 nights
                    </li>
                    <li>
                      <i className="far fa-user" /> 5-8 guest
                    </li>
                  </ul>
                  <div className="destination-footer">
                    <span className="price">
                      <span>$105.00</span>/person
                    </span>
                    <Link
                      href="tour-details"
                      className="theme-btn style-two style-three"
                    >
                      <span data-hover="Book Now">Book Now</span>
                      <i className="fal fa-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
              <div
                className="destination-item style-three bgc-lighter"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="image">
                  <a href="#" className="heart">
                    <i className="fas fa-heart" />
                  </a>
                  <img
                    src="assets/images/destinations/tour-list3.jpg"
                    alt="Tour List"
                  />
                </div>
                <div className="content">
                  <div className="destination-header">
                    <span className="location">
                      <i className="fal fa-map-marker-alt" /> Tamnougalt,
                      Morocco
                    </span>
                    <div className="ratting">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                    </div>
                  </div>
                  <h5>
                    <Link href="tour-details">
                      Camels on desert Morocco, Sahara.
                    </Link>
                  </h5>
                  <p>
                    Bali, Indonesia, is tropical paradise renowned breathtaking
                    beaches, vibrant culture, and lush landscapes
                  </p>
                  <ul className="blog-meta">
                    <li>
                      <i className="far fa-clock" /> 3 days 2 nights
                    </li>
                    <li>
                      <i className="far fa-user" /> 5-8 guest
                    </li>
                  </ul>
                  <div className="destination-footer">
                    <span className="price">
                      <span>$386.00</span>/person
                    </span>
                    <Link
                      href="tour-details"
                      className="theme-btn style-two style-three"
                    >
                      <span data-hover="Book Now">Book Now</span>
                      <i className="fal fa-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
              <div
                className="destination-item style-three bgc-lighter"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="image">
                  <span className="badge bgc-primary">Popular</span>
                  <a href="#" className="heart">
                    <i className="fas fa-heart" />
                  </a>
                  <img
                    src="assets/images/destinations/tour-list4.jpg"
                    alt="Tour List"
                  />
                </div>
                <div className="content">
                  <div className="destination-header">
                    <span className="location">
                      <i className="fal fa-map-marker-alt" /> Switzerland
                    </span>
                    <div className="ratting">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                    </div>
                  </div>
                  <h5>
                    <Link href="tour-details">
                      Hakone, Lake Asha Cruise Day Bus Trip
                    </Link>
                  </h5>
                  <p>
                    Bali, Indonesia, is tropical paradise renowned breathtaking
                    beaches, vibrant culture, and lush landscapes
                  </p>
                  <ul className="blog-meta">
                    <li>
                      <i className="far fa-clock" /> 3 days 2 nights
                    </li>
                    <li>
                      <i className="far fa-user" /> 5-8 guest
                    </li>
                  </ul>
                  <div className="destination-footer">
                    <span className="price">
                      <span>$293.00</span>/person
                    </span>
                    <Link
                      href="tour-details"
                      className="theme-btn style-two style-three"
                    >
                      <span data-hover="Book Now">Book Now</span>
                      <i className="fal fa-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
              <div
                className="destination-item style-three bgc-lighter"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="image">
                  <a href="#" className="heart">
                    <i className="fas fa-heart" />
                  </a>
                  <img
                    src="assets/images/destinations/tour-list5.jpg"
                    alt="Tour List"
                  />
                </div>
                <div className="content">
                  <div className="destination-header">
                    <span className="location">
                      <i className="fal fa-map-marker-alt" /> Tours, France
                    </span>
                    <div className="ratting">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                    </div>
                  </div>
                  <h5>
                    <Link href="tour-details">
                      Concrete Building Basilica St Martin
                    </Link>
                  </h5>
                  <p>
                    Bali, Indonesia, is tropical paradise renowned breathtaking
                    beaches, vibrant culture, and lush landscapes
                  </p>
                  <ul className="blog-meta">
                    <li>
                      <i className="far fa-clock" /> 3 days 2 nights
                    </li>
                    <li>
                      <i className="far fa-user" /> 5-8 guest
                    </li>
                  </ul>
                  <div className="destination-footer">
                    <span className="price">
                      <span>$58.00</span>/person
                    </span>
                    <Link
                      href="tour-details"
                      className="theme-btn style-two style-three"
                    >
                      <span data-hover="Book Now">Book Now</span>
                      <i className="fal fa-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
              <div
                className="destination-item style-three bgc-lighter"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="image">
                  <span className="badge bgc-pink">Featured</span>
                  <a href="#" className="heart">
                    <i className="fas fa-heart" />
                  </a>
                  <img
                    src="assets/images/destinations/tour-list6.jpg"
                    alt="Tour List"
                  />
                </div>
                <div className="content">
                  <div className="destination-header">
                    <span className="location">
                      <i className="fal fa-map-marker-alt" /> Wildest, Italy
                    </span>
                    <div className="ratting">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                    </div>
                  </div>
                  <h5>
                    <Link href="tour-details">
                      Blue lake water view taken Sea Beach
                    </Link>
                  </h5>
                  <p>
                    Bali, Indonesia, is tropical paradise renowned breathtaking
                    beaches, vibrant culture, and lush landscapes
                  </p>
                  <ul className="blog-meta">
                    <li>
                      <i className="far fa-clock" /> 3 days 2 nights
                    </li>
                    <li>
                      <i className="far fa-user" /> 5-8 guest
                    </li>
                  </ul>
                  <div className="destination-footer">
                    <span className="price">
                      <span>$58.00</span>/person
                    </span>
                    <Link
                      href="tour-details"
                      className="theme-btn style-two style-three"
                    >
                      <span data-hover="Book Now">Book Now</span>
                      <i className="fal fa-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
              <div
                className="destination-item style-three bgc-lighter"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="image">
                  <a href="#" className="heart">
                    <i className="fas fa-heart" />
                  </a>
                  <img
                    src="assets/images/destinations/tour-list7.jpg"
                    alt="Tour List"
                  />
                </div>
                <div className="content">
                  <div className="destination-header">
                    <span className="location">
                      <i className="fal fa-map-marker-alt" /> Bali, Indonesia
                    </span>
                    <div className="ratting">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                    </div>
                  </div>
                  <h5>
                    <Link href="tour-details">
                      Bay Cruise by Boat in Bali, Indonesia
                    </Link>
                  </h5>
                  <p>
                    Bali, Indonesia, is tropical paradise renowned breathtaking
                    beaches, vibrant culture, and lush landscapes
                  </p>
                  <ul className="blog-meta">
                    <li>
                      <i className="far fa-clock" /> 3 days 2 nights
                    </li>
                    <li>
                      <i className="far fa-user" /> 5-8 guest
                    </li>
                  </ul>
                  <div className="destination-footer">
                    <span className="price">
                      <span>$58.00</span>/person
                    </span>
                    <Link
                      href="tour-details"
                      className="theme-btn style-two style-three"
                    >
                      <span data-hover="Book Now">Book Now</span>
                      <i className="fal fa-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
              <ul
                className="pagination pt-15 flex-wrap"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <li className="page-item disabled">
                  <span className="page-link">
                    <i className="far fa-chevron-left" />
                  </span>
                </li>
                <li className="page-item active">
                  <span className="page-link">
                    1<span className="sr-only">(current)</span>
                  </span>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    2
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    3
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    ...
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    <i className="far fa-chevron-right" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* Tour List Area end */}
      {/* Newsletter Area start */}
      <Subscribe />
      {/* Newsletter Area end */}
    </ReveloLayout>
  );
};
export default page;
