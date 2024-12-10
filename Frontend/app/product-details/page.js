"use client";
import Banner from "@/components/Banner";
import Product from "@/components/slider/Product";
import ReveloLayout from "@/layout/ReveloLayout";
import { Nav, Tab } from "react-bootstrap";
const page = () => {
  return (
    <ReveloLayout insta>
      <Banner pageTitle={"Single Product"} />
      {/* Product Details Start */}
      <section className="product-details pt-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div
                className="product-details-images rmb-55"
                data-aos="fade-left"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <Tab.Container defaultActiveKey={"preview1"}>
                  <Tab.Content className="tab-content preview-images">
                    <Tab.Pane
                      className="tab-pane fade preview-item "
                      eventKey="preview1"
                    >
                      <img
                        src="assets/images/shop/preview1.png"
                        alt="Perview"
                      />
                    </Tab.Pane>
                    <Tab.Pane
                      className="tab-pane fade preview-item"
                      eventKey="preview2"
                    >
                      <img
                        src="assets/images/shop/preview1.png"
                        alt="Perview"
                      />
                    </Tab.Pane>
                    <Tab.Pane
                      className="tab-pane fade preview-item"
                      eventKey="preview3"
                    >
                      <img
                        src="assets/images/shop/preview1.png"
                        alt="Perview"
                      />
                    </Tab.Pane>
                  </Tab.Content>
                  <Nav as={"ul"} className="nav thumb-images rmb-20">
                    <Nav.Link
                      as={"a"}
                      eventKey="preview1"
                      href="#preview1"
                      className="thumb-item"
                    >
                      <img src="assets/images/shop/thumb1.png" alt="Thumb" />
                    </Nav.Link>
                    <Nav.Link
                      as={"a"}
                      eventKey="preview2"
                      className="thumb-item"
                    >
                      <img src="assets/images/shop/thumb2.png" alt="Thumb" />
                    </Nav.Link>
                    <Nav.Link
                      as={"a"}
                      eventKey="preview3"
                      className="thumb-item"
                    >
                      <img src="assets/images/shop/thumb3.png" alt="Thumb" />
                    </Nav.Link>
                  </Nav>
                </Tab.Container>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="product-details-content"
                data-aos="fade-right"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="section-title">
                  <h2>Black &amp; Gray Travel Cap</h2>
                </div>
                <div className="ratting mb-15">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star-half-alt" />
                  <span>(5.8k+ reviews)</span>
                </div>
                <span className="price mb-25">$188.00</span>
                <p>
                  Our Cap is designed elevate your business operations with
                  cutting-edge technology and user-centric features. Crafted
                  with precision, it offers seamless integration with existing
                  systems, ensuring a smooth transition and immediate impact has
                  been meticulously
                </p>
                <hr className="mt-40" />
                <form action="#" className="add-to-cart pt-15 pb-30">
                  <h6>Quantity</h6>
                  <input
                    type="number"
                    defaultValue={1}
                    min={1}
                    max={20}
                    onchange="if(parseInt(this.value,10)<10)this.value='0'+this.value;"
                    required=""
                  />
                  <button
                    type="submit"
                    className="theme-btn style-two bgc-secondary"
                  >
                    <span data-hover="Add to Cart">Add to Cart</span>
                    <i className="far fa-arrow-right" />
                  </button>
                </form>
                <hr className="mb-45" />
                <a href="#" className="wishlist">
                  <i className="far fa-heart" /> Add to Wishlist
                </a>
                <ul className="category-tags mt-15">
                  <li>
                    <b>SKU: </b>
                    <span>TXYZ-12350</span>
                  </li>
                  <li>
                    <b>Category: </b>
                    <a href="#">Simple Products</a>
                  </li>
                  <li>
                    <b>Tags: </b>
                    <div className="tags">
                      <a href="#">Cap</a>
                      <a href="#">Sports</a>
                      <a href="#">Travel</a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <Tab.Container defaultActiveKey={"details"}>
            <Nav
              as={"ul"}
              className="nav nav product-tab mt-70 mb-30"
              data-aos="fade-up"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <Nav.Item as={"li"}>
                <Nav.Link as={"a"} eventKey={"details"} href="#details">
                  Descrptions <i className="far fa-arrow-right" />
                </Nav.Link>
              </Nav.Item>
              <Nav.Item as={"li"}>
                <Nav.Link as={"a"} eventKey={"information"} href="#information">
                  Additional Information's <i className="far fa-arrow-right" />
                </Nav.Link>
              </Nav.Item>
              <Nav.Item as={"li"}>
                <Nav.Link as={"a"} eventKey={"reviews"} href="#reviews">
                  {" "}
                  Reviews <i className="far fa-arrow-right" />
                </Nav.Link>
              </Nav.Item>
            </Nav>
            <Tab.Content
              className="tab-content"
              data-aos="fade-up"
              data-aos-delay={50}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <Tab.Pane className="tab-pane fade" eventKey="details">
                <p>
                  Cap combines innovation and functionality to meet the demands
                  of modern businesses. Engineered with the latest technology,
                  it offers robust features that streamline processes, enhance
                  efficiency, and deliver measurable results. Whether you're
                  looking to boost productivity, improve customer experiences,
                  or gain deeper insights into your operations, [Product Name]
                  is designed to provide the solutions you need. With
                  user-friendly interfaces and customizable options, it adapts
                  to your unique requirements, making it an essential tool for
                  achieving your business goals. Discover the power of [Product
                  Name] and transform the way you work.
                </p>
                <p>
                  Our is designed to elevate your business operations with
                  cutting-edge technology and user-centric features. Crafted
                  with precision, it offers seamless integration with your
                  existing systems, ensuring a smooth transition and immediate
                  impact. Each aspect of [Product Name] has been meticulously
                  developed to address your specific needs, from enhancing
                  productivity to optimizing workflows. With a focus on
                  reliability and performance, this product delivers consistent
                  results that drive your business forward.
                </p>
                <div className="row gap-50 pt-25 pb-20 align-items-center">
                  <div className="col-lg-7 pt-15">
                    <h5>Benefit For buy our product</h5>
                    <p>
                      Whether you're looking to boost productivity, improve
                      customer experiences, or gain deeper insights into your
                      operations, [Product Name] is designed to provide the
                      solutions you need. With user-friendly interfaces and
                      customizable options, it adapts to your unique
                      requirements
                    </p>
                    <ul className="list-style-two mt-25">
                      <li>
                        Assisting customers in booking domestic and
                        international flights.
                      </li>
                      <li>
                        Organizing adventure activities such as trekking,
                        diving, safaris, or extreme sports.
                      </li>
                      <li>
                        Tailoring travel plans to meet the specific needs and
                        preferences of the customer.
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-5">
                    <div className="image rmt-45">
                      <img
                        src="assets/images/shop/product-details.jpg"
                        alt="Product Details"
                      />
                    </div>
                  </div>
                </div>
              </Tab.Pane>
              <Tab.Pane className="tab-pane fade" eventKey="information">
                <p>
                  Circumstances occur in which toil and pain can procure him
                  some great pleasure. To take a trivial example, which of us
                  ever undertakes laborious physical exercise, except to obtain
                  some advantage from it? But who has any right to find fault
                  with a man who chooses
                </p>
                <ul className="list-style-two my-35">
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
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Consectetur quasi, atque! Repellat nihil vero ipsam, ipsa
                  tempore sint deleniti amet inventore tenetur iure, quia eum.
                  Facere nostrum veritatis nesciunt laudantium.
                </p>
              </Tab.Pane>
              <Tab.Pane className="tab-pane fade mb-20" eventKey="reviews">
                <h5>2 Reviews</h5>
                <div className="comments my-30">
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
                <h5>Add A Reviews</h5>
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
                  <div className="row gap-20">
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
                          placeholder="Comments"
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
                          <span data-hover="Submit reviews">Submit review</span>
                          <i className="fal fa-arrow-right" />
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </div>
      </section>
      {/* Product Details End */}
      {/* Shop Details  Area start */}
      <section className="shop-details-page pt-80 pb-100 rel z-1">
        <div className="container">
          <div className="section-title text-center mb-40">
            <h2>Related Product</h2>
          </div>
          <Product />
        </div>
      </section>
      {/* Shop Details  Area end */}
    </ReveloLayout>
  );
};
export default page;
