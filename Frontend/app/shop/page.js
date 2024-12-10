import Banner from "@/components/Banner";
import SectionTitle from "@/components/SectionTitle";
import ReveloLayout from "@/layout/ReveloLayout";
import Link from "next/link";
const page = () => {
  return (
    <ReveloLayout insta>
      <Banner pageTitle={"Shop"} />
      {/* Popular Activity Area start */}
      <section className="popular-activity pt-100 rel z-1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div
                className="section-title text-center counter-text-wrap mb-45"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <SectionTitle
                  title={"Explore Our Popular Activity"}
                  bg={"bgc-primary"}
                />
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
      {/* Shop  Area start */}
      <section className="shop-page pt-70 pb-100 rel z-1">
        <div className="container">
          <div className="shop-shorter style-two justify-content-between rel z-3 mb-10">
            <div className="sort-text mb-15 me-4">Showing all 12 results</div>
            <select>
              <option value="default" selected="">
                Default sorting
              </option>
              <option value="new">Newness</option>
              <option value="old">Oldest</option>
              <option value="hight-to-low">High To Low</option>
              <option value="low-to-high">Low To High</option>
            </select>
          </div>
          <hr className="mt-0 mb-50" />
          <div className="row">
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div
                className="product-item"
                data-aos="flip-left"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="image">
                  <img src="assets/images/shop/product1.png" alt="Product" />
                </div>
                <div className="content">
                  <div className="ratting">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star-half-alt" />
                  </div>
                  <h6>
                    <Link href="product-details">Airport Travel Suitcases</Link>
                  </h6>
                  <span className="price">$188.00</span>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div
                className="product-item"
                data-aos="flip-left"
                data-aos-duration={1500}
                data-aos-offset={50}
                data-aos-delay={50}
              >
                <div className="image">
                  <img src="assets/images/shop/product2.png" alt="Product" />
                </div>
                <div className="content">
                  <div className="ratting">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star-half-alt" />
                  </div>
                  <h6>
                    <Link href="product-details">Travel Great blue hat</Link>
                  </h6>
                  <span className="price">$188.00</span>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div
                className="product-item"
                data-aos="flip-left"
                data-aos-duration={1500}
                data-aos-offset={50}
                data-aos-delay={100}
              >
                <div className="image">
                  <img src="assets/images/shop/product3.png" alt="Product" />
                </div>
                <div className="content">
                  <div className="ratting">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star-half-alt" />
                  </div>
                  <h6>
                    <Link href="product-details">
                      Waistband and Mesh Fashion
                    </Link>
                  </h6>
                  <span className="price">$188.00</span>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div
                className="product-item"
                data-aos="flip-left"
                data-aos-duration={1500}
                data-aos-offset={50}
                data-aos-delay={150}
              >
                <div className="image">
                  <img src="assets/images/shop/product4.png" alt="Product" />
                </div>
                <div className="content">
                  <div className="ratting">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star-half-alt" />
                  </div>
                  <h6>
                    <Link href="product-details">
                      Sandals for Casual Techies
                    </Link>
                  </h6>
                  <span className="price">$188.00</span>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div
                className="product-item"
                data-aos="flip-left"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="image">
                  <img src="assets/images/shop/product5.png" alt="Product" />
                </div>
                <div className="content">
                  <div className="ratting">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star-half-alt" />
                  </div>
                  <h6>
                    <Link href="product-details">Children With Jute Soles</Link>
                  </h6>
                  <span className="price">$188.00</span>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div
                className="product-item"
                data-aos="flip-left"
                data-aos-duration={1500}
                data-aos-offset={50}
                data-aos-delay={50}
              >
                <div className="image">
                  <img src="assets/images/shop/product6.png" alt="Product" />
                </div>
                <div className="content">
                  <div className="ratting">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star-half-alt" />
                  </div>
                  <h6>
                    <Link href="product-details">Bermuda Shorts Kawaii</Link>
                  </h6>
                  <span className="price">$188.00</span>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div
                className="product-item"
                data-aos="flip-left"
                data-aos-duration={1500}
                data-aos-offset={50}
                data-aos-delay={100}
              >
                <div className="image">
                  <img src="assets/images/shop/product7.png" alt="Product" />
                </div>
                <div className="content">
                  <div className="ratting">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star-half-alt" />
                  </div>
                  <h6>
                    <Link href="product-details">Airport Travel Suitcases</Link>
                  </h6>
                  <span className="price">$188.00</span>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div
                className="product-item"
                data-aos="flip-left"
                data-aos-duration={1500}
                data-aos-offset={50}
                data-aos-delay={150}
              >
                <div className="image">
                  <img src="assets/images/shop/product8.png" alt="Product" />
                </div>
                <div className="content">
                  <div className="ratting">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star-half-alt" />
                  </div>
                  <h6>
                    <Link href="product-details">Straw hat for man</Link>
                  </h6>
                  <span className="price">$188.00</span>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div
                className="product-item"
                data-aos="flip-left"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="image">
                  <img src="assets/images/shop/product9.png" alt="Product" />
                </div>
                <div className="content">
                  <div className="ratting">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star-half-alt" />
                  </div>
                  <h6>
                    <Link href="product-details">
                      Red cap protection clothes
                    </Link>
                  </h6>
                  <span className="price">$188.00</span>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div
                className="product-item"
                data-aos="flip-left"
                data-aos-duration={1500}
                data-aos-offset={50}
                data-aos-delay={50}
              >
                <div className="image">
                  <img src="assets/images/shop/product10.png" alt="Product" />
                </div>
                <div className="content">
                  <div className="ratting">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star-half-alt" />
                  </div>
                  <h6>
                    <Link href="product-details">Airport Travel Suitcases</Link>
                  </h6>
                  <span className="price">$188.00</span>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div
                className="product-item"
                data-aos="flip-left"
                data-aos-duration={1500}
                data-aos-offset={50}
                data-aos-delay={100}
              >
                <div className="image">
                  <img src="assets/images/shop/product11.png" alt="Product" />
                </div>
                <div className="content">
                  <div className="ratting">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star-half-alt" />
                  </div>
                  <h6>
                    <Link href="product-details">
                      Travel textile protection
                    </Link>
                  </h6>
                  <span className="price">$188.00</span>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div
                className="product-item"
                data-aos="flip-left"
                data-aos-duration={1500}
                data-aos-offset={50}
                data-aos-delay={150}
              >
                <div className="image">
                  <img src="assets/images/shop/product12.png" alt="Product" />
                </div>
                <div className="content">
                  <div className="ratting">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star-half-alt" />
                  </div>
                  <h6>
                    <Link href="product-details">Beach Sandals</Link>
                  </h6>
                  <span className="price">$188.00</span>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <ul
                className="pagination justify-content-center pt-15 flex-wrap"
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
      {/* Shop  Area end */}
    </ReveloLayout>
  );
};
export default page;
