"use client";
import RaveloAccordion from "@/components/RaveloAccordion";
import Subscribe from "@/components/Subscribe";
import ReveloLayout from "@/layout/ReveloLayout";
import Link from "next/link";
import { useState } from "react";
import { Accordion } from "react-bootstrap";
const page = () => {
  const faqItem = [
    {
      id: 1,
      title: "1. What services does your tour and travel agency offer?",
    },
    {
      id: 2,
      title: " 2. How do I book a tour or travel package?",
    },
    {
      id: 3,
      title: " 3. What types of tours do you offer?",
    },
    {
      id: 4,
      title: " 4. Can I customize my travel package?",
    },
    {
      id: 5,
      title: " 5. Are your tours suitable for families with children?",
    },
  ];
  const [active, setActive] = useState("collapse0");

  const faqItem2 = [
    {
      id: 1,
      title: "01_What services does your tour and travel agency offer?",
    },
    {
      id: 2,
      title: " 02_How do I book a tour or travel package?",
    },
    {
      id: 3,
      title: " 03_What types of tours do you offer?",
    },
    {
      id: 4,
      title: " 04_Can I customize my travel package?",
    },
    {
      id: 5,
      title: " 05_Are your tours suitable for families with children?",
    },
  ];
  const [active2, setActive2] = useState("collapse0");
  return (
    <ReveloLayout>
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
                  <li className="breadcrumb-item active">Tour Details</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>
      {/* Page Banner End */}
      {/* Tour Gallery start */}
      <div className="tour-gallery">
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
      {/* Tour Gallery End */}
      {/* Tour Header Area start */}
      <section className="tour-header-area pt-70 rel z-1">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-xl-6 col-lg-7">
              <div
                className="tour-header-content mb-15"
                data-aos="fade-left"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <span className="location d-inline-block mb-10">
                  <i className="fal fa-map-marker-alt" /> Bali, Indonesia
                </span>
                <div className="section-title pb-5">
                  <h2>
                    Relinking Beach in Nusa panada island, Bali, Indonesia
                  </h2>
                </div>
                <div className="ratting">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star-half-alt" />
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-5 text-lg-end"
              data-aos="fade-right"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="tour-header-social mb-10">
                <a href="#">
                  <i className="far fa-share-alt" />
                  Share tours
                </a>
                <a href="#">
                  <i className="fas fa-heart bgc-secondary" />
                  Wish list
                </a>
              </div>
            </div>
          </div>
          <hr className="mt-50 mb-70" />
        </div>
      </section>
      {/* Tour Header Area end */}
      {/* Tour Details Area start */}
      <section className="tour-details-page pb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="tour-details-content">
                <h3>Explore Tours</h3>
                <p>
                  Bali, Indonesia, is a tropical paradise renowned for its
                  breathtaking beaches, vibrant culture, and lush landscapes.
                  Located at the westernmost end of the Lesser Sunda Islands,
                  Bali boasts a warm, tropical climate that makes it a
                  year-round destination. Visitors are drawn to its picturesque
                  beaches like Kuta, Seminyak, and Nusa Dua, ideal for surfing,
                  sunbathing, and diving. The island's rich cultural heritage is
                  evident in its numerous temples, including the iconic Tanah
                  Lot and Uluwatu Temple, as well as in Ubud, the cultural heart
                  of Bali, known for its traditional dance performances and art
                  markets. Nature enthusiasts can explore the terraced rice
                  paddies in Tegallalang, hike up Mount Batur, or visit the
                  stunning waterfalls of Tegenungan and Gitgit.{" "}
                </p>
                <div className="row pb-55">
                  <div className="col-md-6">
                    <div className="tour-include-exclude mt-30">
                      <h5>Included and Excluded</h5>
                      <ul className="list-style-one check mt-25">
                        <li>
                          <i className="far fa-check" /> Pick and Drop Services
                        </li>
                        <li>
                          <i className="far fa-check" /> 1 Meal Per Day
                        </li>
                        <li>
                          <i className="far fa-check" /> Cruise Dinner &amp;
                          Music Event
                        </li>
                        <li>
                          <i className="far fa-check" /> Visit 7 Best Places in
                          the City
                        </li>
                        <li>
                          <i className="far fa-check" /> Bottled Water on Buses
                        </li>
                        <li>
                          <i className="far fa-check" /> Transportation Luxury
                          Tour Bus
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="tour-include-exclude mt-30">
                      <h5>Excluded</h5>
                      <ul className="list-style-one mt-25">
                        <li>
                          <i className="far fa-times" /> Gratuities
                        </li>
                        <li>
                          <i className="far fa-times" /> Hotel pickup and
                          drop-off
                        </li>
                        <li>
                          <i className="far fa-times" /> Lunch, Food &amp;
                          Drinks
                        </li>
                        <li>
                          <i className="far fa-times" /> Optional upgrade to a
                          glass
                        </li>
                        <li>
                          <i className="far fa-times" /> Additional Services
                        </li>
                        <li>
                          <i className="far fa-times" /> Insurance
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <h3>Activities</h3>
              <div className="tour-activities mt-30 mb-45">
                <div className="tour-activity-item">
                  <i className="flaticon-hiking" />
                  <b>Hiking</b>
                </div>
                <div className="tour-activity-item">
                  <i className="flaticon-fishing" />
                  <b>Fishing</b>
                </div>
                <div className="tour-activity-item">
                  <i className="flaticon-man" />
                  <b>Kayak shooting</b>
                </div>
                <div className="tour-activity-item">
                  <i className="flaticon-kayak-1" />
                  <b>Kayak</b>
                </div>
                <div className="tour-activity-item">
                  <i className="flaticon-bonfire" />
                  <b>Campfire</b>
                </div>
                <div className="tour-activity-item">
                  <i className="flaticon-flashlight" />
                  <b>Night Exploring</b>
                </div>
                <div className="tour-activity-item">
                  <i className="flaticon-cycling" />
                  <b>Biking</b>
                </div>
                <div className="tour-activity-item">
                  <i className="flaticon-meditation" />
                  <b>Yoga</b>
                </div>
              </div>
              <h3>Itinerary</h3>
              <Accordion
                className="accordion-two mt-25 mb-60"
                defaultActiveKey={active}
              >
                {faqItem.map((data, i) => (
                  <RaveloAccordion
                    title={data.title}
                    key={data.id}
                    event={`collapse${i}`}
                    onClick={() =>
                      setActive(active == `collapse${i}` ? "" : `collapse${i}`)
                    }
                    active={active}
                  />
                ))}
              </Accordion>
              <h3>Frequently Asked Questions</h3>
              <Accordion
                className="accordion-one mt-25 mb-60"
                defaultActiveKey={active2}
              >
                {faqItem2.map((data, i) => (
                  <RaveloAccordion
                    title={data.title}
                    key={data.id}
                    event={`collapse${i}`}
                    onClick={() =>
                      setActive(active2 == `collapse${i}` ? "" : `collapse${i}`)
                    }
                    active={active2}
                  />
                ))}
              </Accordion>
              <h3>Maps</h3>
              <div className="tour-map mt-30 mb-50">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d96777.16150026117!2d-74.00840582560909!3d40.71171357405996!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1706508986625!5m2!1sen!2sbd"
                  style={{ border: 0, width: "100%" }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <h3>Clients Reviews</h3>
              <div className="clients-reviews bgc-black mt-30 mb-60">
                <div className="left">
                  <b>4.8</b>
                  <span>(586 reviews)</span>
                  <div className="ratting">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star-half-alt" />
                  </div>
                </div>
                <div className="right">
                  <div className="ratting-item">
                    <span className="title">Services</span>
                    <span className="line">
                      <span style={{ width: "80%" }} />
                    </span>
                    <div className="ratting">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star-half-alt" />
                    </div>
                  </div>
                  <div className="ratting-item">
                    <span className="title">Guides</span>
                    <span className="line">
                      <span style={{ width: "70%" }} />
                    </span>
                    <div className="ratting">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star-half-alt" />
                    </div>
                  </div>
                  <div className="ratting-item">
                    <span className="title">Price</span>
                    <span className="line">
                      <span style={{ width: "80%" }} />
                    </span>
                    <div className="ratting">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star-half-alt" />
                    </div>
                  </div>
                  <div className="ratting-item">
                    <span className="title">Safety</span>
                    <span className="line">
                      <span style={{ width: "80%" }} />
                    </span>
                    <div className="ratting">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star-half-alt" />
                    </div>
                  </div>
                  <div className="ratting-item">
                    <span className="title">Foods</span>
                    <span className="line">
                      <span style={{ width: "80%" }} />
                    </span>
                    <div className="ratting">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star-half-alt" />
                    </div>
                  </div>
                  <div className="ratting-item">
                    <span className="title">Hotels</span>
                    <span className="line">
                      <span style={{ width: "80%" }} />
                    </span>
                    <div className="ratting">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star-half-alt" />
                    </div>
                  </div>
                </div>
              </div>
              <h3>Clients Comments</h3>
              <div className="comments mt-30 mb-60">
                <div
                  className="comment-body"
                  data-aos="fade-up"
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <div className="author-thumb">
                    <img
                      src="assets/images/blog/comment-author1.jpg"
                      alt="Author"
                    />
                  </div>
                  <div className="content">
                    <h6>Lonnie B. Horwitz</h6>
                    <div className="ratting">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star-half-alt" />
                    </div>
                    <span className="time">
                      Venice, Rome and Milan – 9 Days 8 Nights
                    </span>
                    <p>
                      Tours and travels play a crucial role in enriching lives
                      by offering unique experiences, cultural exchanges, and
                      the joy of exploration.
                    </p>
                    <a className="read-more" href="#">
                      Reply <i className="far fa-angle-right" />
                    </a>
                  </div>
                </div>
                <div
                  className="comment-body comment-child"
                  data-aos="fade-up"
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <div className="author-thumb">
                    <img
                      src="assets/images/blog/comment-author2.jpg"
                      alt="Author"
                    />
                  </div>
                  <div className="content">
                    <h6>William G. Edwards</h6>
                    <div className="ratting">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star-half-alt" />
                    </div>
                    <span className="time">
                      Venice, Rome and Milan – 9 Days 8 Nights
                    </span>
                    <p>
                      Tours and travels play a crucial role in enriching lives
                      by offering unique experiences, cultural exchanges, and
                      the joy of exploration.
                    </p>
                    <a className="read-more" href="#">
                      Reply <i className="far fa-angle-right" />
                    </a>
                  </div>
                </div>
                <div
                  className="comment-body"
                  data-aos="fade-up"
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <div className="author-thumb">
                    <img
                      src="assets/images/blog/comment-author3.jpg"
                      alt="Author"
                    />
                  </div>
                  <div className="content">
                    <h6>Jaime B. Wilson</h6>
                    <div className="ratting">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star-half-alt" />
                    </div>
                    <span className="time">
                      Venice, Rome and Milan – 9 Days 8 Nights
                    </span>
                    <p>
                      Tours and travels play a crucial role in enriching lives
                      by offering unique experiences, cultural exchanges, and
                      the joy of exploration.
                    </p>
                    <a className="read-more" href="#">
                      Reply <i className="far fa-angle-right" />
                    </a>
                  </div>
                </div>
              </div>
              <h3>Add Reviews</h3>
              <form
                id="comment-form"
                className="comment-form bgc-lighter z-1 rel mt-30"
                name="review-form"
                action="#"
                method="post"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="comment-review-wrap">
                  <div className="comment-ratting-item">
                    <span className="title">Services</span>
                    <div className="ratting">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star-half-alt" />
                    </div>
                  </div>
                  <div className="comment-ratting-item">
                    <span className="title">Guides</span>
                    <div className="ratting">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star-half-alt" />
                    </div>
                  </div>
                  <div className="comment-ratting-item">
                    <span className="title">Price</span>
                    <div className="ratting">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star-half-alt" />
                    </div>
                  </div>
                  <div className="comment-ratting-item">
                    <span className="title">Safety</span>
                    <div className="ratting">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star-half-alt" />
                    </div>
                  </div>
                  <div className="comment-ratting-item">
                    <span className="title">Foods</span>
                    <div className="ratting">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star-half-alt" />
                    </div>
                  </div>
                  <div className="comment-ratting-item">
                    <span className="title">Hotels</span>
                    <div className="ratting">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star-half-alt" />
                    </div>
                  </div>
                </div>
                <hr className="mt-30 mb-40" />
                <h5>Leave Feedback</h5>
                <div className="row gap-20 mt-20">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="full-name">Name</label>
                      <input
                        type="text"
                        id="full-name"
                        name="full-name"
                        className="form-control"
                        defaultValue=""
                        required=""
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="phone">Phone</label>
                      <input
                        type="text"
                        id="phone"
                        name="phone"
                        className="form-control"
                        defaultValue=""
                        required=""
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <label htmlFor="email-address">Email</label>
                      <input
                        type="email"
                        id="email-address"
                        name="email"
                        className="form-control"
                        defaultValue=""
                        required=""
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <label htmlFor="message">Comments</label>
                      <textarea
                        name="message"
                        id="message"
                        className="form-control"
                        rows={5}
                        required=""
                        defaultValue={""}
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group mb-0">
                      <button
                        type="submit"
                        className="theme-btn bgc-secondary style-two"
                      >
                        <span data-hover="Submit reviews">Submit reviews</span>
                        <i className="fal fa-arrow-right" />
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-lg-4 col-md-8 col-sm-10 rmt-75">
              <div className="blog-sidebar tour-sidebar">
                <div
                  className="widget widget-booking"
                  data-aos="fade-up"
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <h5 className="widget-title">Tour Booking</h5>
                  <form action="#">
                    <div className="date mb-25">
                      <b>From Date</b>
                      <input type="date" />
                    </div>
                    <hr />
                    <div className="time py-5">
                      <b>Time :</b>
                      <ul className="radio-filter">
                        <li>
                          <input
                            className="form-check-input"
                            defaultChecked=""
                            type="radio"
                            name="time"
                            id="time1"
                          />
                          <label htmlFor="time1">12:00</label>
                        </li>
                        <li>
                          <input
                            className="form-check-input"
                            type="radio"
                            name="time"
                            id="time2"
                          />
                          <label htmlFor="time2">08:00</label>
                        </li>
                      </ul>
                    </div>
                    <hr className="mb-25" />
                    <h6>Tickets:</h6>
                    <ul className="tickets clearfix">
                      <li>
                        Adult (18- years) <span className="price">$28.50</span>
                        <select name="18-" id="18-">
                          <option value="value1">01</option>
                          <option value="value1">02</option>
                          <option value="value1" selected="">
                            03
                          </option>
                        </select>
                      </li>
                      <li>
                        Adult (18+ years) <span className="price">$50.40</span>
                        <select name="18+" id="18+">
                          <option value="value1">01</option>
                          <option value="value1">02</option>
                          <option value="value1">03</option>
                        </select>
                      </li>
                    </ul>
                    <hr className="mb-25" />
                    <h6>Add Extra:</h6>
                    <ul className="radio-filter pt-5">
                      <li>
                        <input
                          className="form-check-input"
                          defaultChecked=""
                          type="radio"
                          name="AddExtra"
                          id="add-extra1"
                        />
                        <label htmlFor="add-extra1">
                          Add service per booking <span>$50</span>
                        </label>
                      </li>
                      <li>
                        <input
                          className="form-check-input"
                          type="radio"
                          name="AddExtra"
                          id="add-extra2"
                        />
                        <label htmlFor="add-extra2">
                          Add service per personal <span>$24</span>
                        </label>
                      </li>
                    </ul>
                    <hr />
                    <h6>
                      Total: <span className="price">$74</span>
                    </h6>
                    <button
                      type="submit"
                      className="theme-btn style-two w-100 mt-15 mb-5"
                    >
                      <span data-hover="Book Now">Book Now</span>
                      <i className="fal fa-arrow-right" />
                    </button>
                    <div className="text-center">
                      <Link href="contact">Need some help?</Link>
                    </div>
                  </form>
                </div>
                <div
                  className="widget widget-contact"
                  data-aos="fade-up"
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <h5 className="widget-title">Need Help?</h5>
                  <ul className="list-style-one">
                    <li>
                      <i className="far fa-envelope" />{" "}
                      <a href="emilto:helpxample@gmail.com">
                        helpxample@gmail.com
                      </a>
                    </li>
                    <li>
                      <i className="far fa-phone-volume" />{" "}
                      <a href="callto:+000(123)45688">+000 (123) 456 88</a>
                    </li>
                  </ul>
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
                      src="assets/images/widgets/cta-shape3.png"
                      alt="Shape"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Tour Details Area end */}
      {/* Newsletter Area start */}
      <Subscribe />
      {/* Newsletter Area end */}
    </ReveloLayout>
  );
};
export default page;
