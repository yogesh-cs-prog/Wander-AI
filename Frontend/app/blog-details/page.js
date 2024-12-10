import Banner from "@/components/Banner";
import ReveloLayout from "@/layout/ReveloLayout";
import Link from "next/link";
const page = () => {
  return (
    <ReveloLayout insta>
      <Banner
        pageTitle={"Ultimate Guide to Planning Your Dream Vacation"}
        pageName={"Blog Details"}
      />
      <section className="blog-detaisl-page py-100 rel z-1">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div
                className="blog-details-content"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <Link href="blog" className="category">
                  Travel
                </Link>
                <ul className="blog-meta mb-30">
                  <li>
                    <img src="assets/images/blog/admin.jpg" alt="Admin" />{" "}
                    <a href="#">Reed A. Johnson</a>
                  </li>
                  <li>
                    <i className="far fa-calendar-alt" />{" "}
                    <a href="#">25 Feb 2024</a>
                  </li>
                  <li>
                    <i className="far fa-comments" />{" "}
                    <a href="#">Comments (5)</a>
                  </li>
                </ul>
                <p>
                  Tour and travel agency is a business that assists travelers
                  with the planning, booking, and execution of their travel
                  experiences. This can include everything from transportation
                  and accommodation to guided tours, activities, to more. It
                  sounds like you're looking for a comprehensive guide or
                  overview related to a tour and travel agency.
                </p>
                <div
                  className="image mt-40 mb-30"
                  data-aos="fade-up"
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <img
                    src="assets/images/blog/blog-details.jpg"
                    alt="Blog Details"
                  />
                </div>
                <h5>Services Offered by a Tour and Travel Agency</h5>
                <p>
                  Agency plays a pivotal role in crafting memorable experiences
                  for travelers by offering wide range services tailored to
                  individual preferences. Whether it's a family vacation, an
                  adventure trip, or luxury getaway well-established travel
                  agency can handle everything from flight bookings and
                  accommodation to guided tours .
                </p>
                <ul
                  className="list-style-two mt-30 mb-45"
                  data-aos="fade-up"
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <li>
                    Assisting customers in booking domestic and international
                    flights.
                  </li>
                  <li>
                    Organizing adventure activities such as trekking, diving,
                    safaris, or extreme sports.
                  </li>
                  <li>
                    Tailoring travel plans to meet the specific needs and
                    preferences of the customer.
                  </li>
                  <li>
                    Providing professional guides for city tours, cultural
                    experiences, adventure activities, etc.
                  </li>
                  <li>
                    Arranging local transportation such as car rentals, airport
                    transfers, or bus tours.
                  </li>
                  <li>
                    Helping customers navigate the visa application process for
                    international travel.
                  </li>
                </ul>
                <div className="row mb-10">
                  <div className="col-sm-6">
                    <div
                      className="image mb-30"
                      data-aos="fade-up"
                      data-aos-duration={1500}
                      data-aos-offset={50}
                    >
                      <img
                        src="assets/images/blog/blog-middle1.jpg"
                        alt="Blog"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div
                      className="image mb-30"
                      data-aos="fade-up"
                      data-aos-duration={1500}
                      data-aos-offset={50}
                      data-aos-delay={50}
                    >
                      <img
                        src="assets/images/blog/blog-middle2.jpg"
                        alt="Blog"
                      />
                    </div>
                  </div>
                </div>
                <h5>How to Start a Tour and Travel Agency</h5>
                <p>
                  Agency plays a pivotal role in crafting memorable experiences
                  for travelers by offering wide range services tailored to
                  individual preferences. Whether it's a family vacation, an
                  adventure trip, or luxury getaway well-established travel
                  agency can handle everything from flight bookings and
                  accommodation to guided tours .
                </p>
                <blockquote
                  className="mt-30 mb-35"
                  data-aos="fade-up"
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <i className="flaticon-quote" />
                  <div className="text">
                    "In the world of tours and travel, every journey is an
                    invitation to explore the unknown, connect with cultures,
                    and create memories that last lifetime It's not just about
                    the destination,extraordinary adventures."
                  </div>
                  <div className="blockquote-footer">Kevin F. Glasscock</div>
                </blockquote>
                <ul
                  className="list-style-two mb-45"
                  data-aos="fade-up"
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <li>
                    Understand the demand in your area, competition, and
                    potential customers.
                  </li>
                  <li>
                    Register your business, obtain necessary licenses, and
                    ensure compliance with local regulations.
                  </li>
                  <li>
                    Build relationships with hotels, airlines, transport
                    companies, and other service providers.
                  </li>
                </ul>
              </div>
              <hr className="mb-45" />
              <div className="tag-share mb-50">
                <div
                  className="item"
                  data-aos="fade-left"
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <h6>Tags </h6>
                  <div className="tag-coulds">
                    <Link href="blog">Travel</Link>
                    <Link href="blog">Hotel</Link>
                    <Link href="blog">Tour</Link>
                  </div>
                </div>
                <div
                  className="item"
                  data-aos="fade-right"
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <h6>Share </h6>
                  <div className="social-style-one">
                    <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                    <a href="#">
                      <i className="fab fa-linkedin-in" />
                    </a>
                    <a href="#">
                      <i className="fab fa-instagram" />
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="admin-comment bgc-lighter"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="comment-body">
                  <div className="author-thumb">
                    <img
                      src="assets/images/blog/admin-comment.jpg"
                      alt="Author"
                    />
                  </div>
                  <div className="content">
                    <h4>Richard M. Fudge</h4>
                    <p>
                      The world is a book, and those who do not travel read only
                      one page. Every journey we undertake is a chapter filled
                      with lessons, experiences, and stories.
                    </p>
                    <div className="social-icons">
                      <Link href="contact">
                        <i className="fab fa-facebook-f" />
                      </Link>
                      <Link href="contact">
                        <i className="fab fa-twitter" />
                      </Link>
                      <Link href="contact">
                        <i className="fab fa-linkedin-in" />
                      </Link>
                      <Link href="contact">
                        <i className="fab fa-instagram" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="next-prev-blog pt-70 pb-15">
                <div
                  className="item"
                  data-aos="fade-left"
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <div className="image">
                    <img src="assets/images/blog/prev-post.jpg" alt="News" />
                  </div>
                  <div className="content">
                    <h6>
                      <Link href="blog-details">
                        Unique Destinations an tolded Stories ways
                      </Link>
                    </h6>
                    <span className="date">
                      <i className="far fa-calendar-alt" /> 25 Feb 2024
                    </span>
                  </div>
                </div>
                <div
                  className="item"
                  data-aos="fade-right"
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <div className="image">
                    <img src="assets/images/blog/next-post.jpg" alt="News" />
                  </div>
                  <div className="content">
                    <h6>
                      <Link href="blog-details">
                        Immersive Experiences from Around Globe
                      </Link>
                    </h6>
                    <span className="date">
                      <i className="far fa-calendar-alt" /> 25 Feb 2024
                    </span>
                  </div>
                </div>
              </div>
              <form
                id="comment-form"
                className="comment-form bgc-lighter z-1 rel mt-25"
                name="review-form"
                action="#"
                method="post"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <h5>Leave A Comments</h5>
                <p>
                  Your email address will not be published. Required fields are
                  marked *
                </p>
                <div className="row gap-20 mt-30">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        id="full-name"
                        name="full-name"
                        className="form-control"
                        placeholder="Name"
                        defaultValue=""
                        required=""
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="email"
                        id="email-address"
                        name="email"
                        className="form-control"
                        placeholder="Email"
                        defaultValue=""
                        required=""
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <textarea
                        name="message"
                        id="message"
                        className="form-control"
                        rows={5}
                        placeholder="Message"
                        required=""
                        defaultValue={""}
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group mb-0">
                      <ul className="radio-filter mb-25">
                        <li>
                          <input
                            className="form-check-input"
                            type="radio"
                            name="terms-condition"
                            id="terms-condition"
                          />
                          <label htmlFor="terms-condition">
                            Save my name, email, and website in this browser for
                            the next time I comment.
                          </label>
                        </li>
                      </ul>
                      <button type="submit" className="theme-btn style-two">
                        <span data-hover="Send Comments">Send Comments</span>
                        <i className="fal fa-arrow-right" />
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-lg-4 col-md-8 col-sm-10 rmt-75">
              <div className="blog-sidebar">
                <div
                  className="widget widget-search"
                  data-aos="fade-up"
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <form action="#" className="default-search-form">
                    <input type="text" placeholder="Search" required="" />
                    <button
                      type="submit"
                      className="searchbutton far fa-search"
                    />
                  </form>
                </div>
                <div
                  className="widget widget-category"
                  data-aos="fade-up"
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <h5 className="widget-title">Category</h5>
                  <ul className="list-style-three">
                    <li>
                      <Link href="blog">Adventure</Link>
                    </li>
                    <li>
                      <Link href="blog">Hiking &amp; Trekking</Link>
                    </li>
                    <li>
                      <Link href="blog">Cycling Tours</Link>
                    </li>
                    <li>
                      <Link href="blog">Family Tours</Link>
                    </li>
                    <li>
                      <Link href="blog">Mountain Hiking</Link>
                    </li>
                    <li>
                      <Link href="blog">Rafting Excursion</Link>
                    </li>
                    <li>
                      <Link href="blog">Coastal Paragliding</Link>
                    </li>
                  </ul>
                </div>
                <div
                  className="widget widget-news"
                  data-aos="fade-up"
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <h5 className="widget-title">Recent News</h5>
                  <ul>
                    <li>
                      <div className="image">
                        <img src="assets/images/widgets/news1.jpg" alt="News" />
                      </div>
                      <div className="content">
                        <h6>
                          <Link href="blog-details">
                            Unique Destinations an tolded Stories ways
                          </Link>
                        </h6>
                        <span className="date">
                          <i className="far fa-calendar-alt" /> 25 Feb 2024
                        </span>
                      </div>
                    </li>
                    <li>
                      <div className="image">
                        <img src="assets/images/widgets/news2.jpg" alt="News" />
                      </div>
                      <div className="content">
                        <h6>
                          <Link href="blog-details">
                            Immersive Experiences from Around Globe
                          </Link>
                        </h6>
                        <span className="date">
                          <i className="far fa-calendar-alt" /> 25 Feb 2024
                        </span>
                      </div>
                    </li>
                    <li>
                      <div className="image">
                        <img src="assets/images/widgets/news3.jpg" alt="News" />
                      </div>
                      <div className="content">
                        <h6>
                          <Link href="blog-details">
                            Journey to Inspire Your Next Adventure
                          </Link>
                        </h6>
                        <span className="date">
                          <i className="far fa-calendar-alt" /> 25 Feb 2024
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>
                <div
                  className="widget widget-gallery"
                  data-aos="fade-up"
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <h5 className="widget-title">Gallery</h5>
                  <div className="gallery">
                    <a href="assets/images/widgets/gallery1.jpg">
                      <img
                        src="assets/images/widgets/gallery1.jpg"
                        alt="Gallery"
                      />
                    </a>
                    <a href="assets/images/widgets/gallery2.jpg">
                      <img
                        src="assets/images/widgets/gallery2.jpg"
                        alt="Gallery"
                      />
                    </a>
                    <a href="assets/images/widgets/gallery3.jpg">
                      <img
                        src="assets/images/widgets/gallery3.jpg"
                        alt="Gallery"
                      />
                    </a>
                    <a href="assets/images/widgets/gallery4.jpg">
                      <img
                        src="assets/images/widgets/gallery4.jpg"
                        alt="Gallery"
                      />
                    </a>
                    <a href="assets/images/widgets/gallery5.jpg">
                      <img
                        src="assets/images/widgets/gallery5.jpg"
                        alt="Gallery"
                      />
                    </a>
                    <a href="assets/images/widgets/gallery6.jpg">
                      <img
                        src="assets/images/widgets/gallery6.jpg"
                        alt="Gallery"
                      />
                    </a>
                    <a href="assets/images/widgets/gallery7.jpg">
                      <img
                        src="assets/images/widgets/gallery7.jpg"
                        alt="Gallery"
                      />
                    </a>
                    <a href="assets/images/widgets/gallery8.jpg">
                      <img
                        src="assets/images/widgets/gallery8.jpg"
                        alt="Gallery"
                      />
                    </a>
                    <a href="assets/images/widgets/gallery9.jpg">
                      <img
                        src="assets/images/widgets/gallery9.jpg"
                        alt="Gallery"
                      />
                    </a>
                  </div>
                </div>
                <div
                  className="widget widget-cta"
                  data-aos="fade-up"
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <div className="content text-white">
                    <span className="h6">Explore The World</span>
                    <h3>Best Tourist Place</h3>
                    <Link
                      href="tour-grid"
                      className="theme-btn style-two bgc-secondary"
                    >
                      <span data-hover="Explore Now">Explore Now</span>
                      <i className="fal fa-arrow-right" />
                    </Link>
                  </div>
                  <div className="image">
                    <img src="assets/images/widgets/cta-widget.png" alt="CTA" />
                  </div>
                  <div className="cta-shape">
                    <img
                      src="assets/images/widgets/cta-shape.png"
                      alt="Shape"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ReveloLayout>
  );
};
export default page;
