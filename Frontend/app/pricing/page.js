import Banner from "@/components/Banner";
import SectionTitle from "@/components/SectionTitle";
import Client from "@/components/slider/Client";
import Subscribe from "@/components/Subscribe";
import ReveloLayout from "@/layout/ReveloLayout";
import Link from "next/link";
const page = () => {
  return (
    <ReveloLayout>
      <Banner pageTitle={"Pricing Plan"} />
      {/* Pricing Area start */}
      <section className="pricing-area pt-100 pb-70 rel z-1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div
                className="section-title text-center counter-text-wrap mb-50"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <SectionTitle title={"Popular Travel Packages"} />
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-4 col-md-6">
              <div
                className="pricing-plan-item"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="content">
                  <div className="price">
                    <span>$200</span> /per person
                  </div>
                  <h6>Budget Travel Packages</h6>
                </div>
                <div className="images">
                  <img
                    className="three"
                    src="assets/images/pricing/price1-1.jpg"
                    alt="Price"
                  />
                  <img
                    className="one"
                    src="assets/images/pricing/price1-2.jpg"
                    alt="Price"
                  />
                </div>
                <div className="content">
                  <h6>Inclusions:</h6>
                  <ul className="list-style-four">
                    <li>3-4 days accommodation</li>
                    <li>Guided city tour</li>
                    <li>Local transportation</li>
                    <li>Basic travel insurance</li>
                    <li>Meals, additional activities</li>
                    <li>Family-friendly activities</li>
                  </ul>
                  <Link href="contact" className="theme-btn style-three">
                    <span data-hover="Choose Package">Choose Package</span>
                    <i className="fal fa-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div
                className="pricing-plan-item bgc-black text-white"
                style={{
                  backgroundImage: "url(assets/images/pricing/pricing-bg.png)",
                }}
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
                data-aos-delay={50}
              >
                <span className="badge">best package</span>
                <div className="content">
                  <div className="price">
                    <span>$500</span> /per person
                  </div>
                  <h6>Standard Travel Packages</h6>
                </div>
                <div className="images">
                  <img
                    className="one"
                    src="assets/images/pricing/price2-1.jpg"
                    alt="Price"
                  />
                  <img
                    className="two"
                    src="assets/images/pricing/price2-2.jpg"
                    alt="Price"
                  />
                  <img
                    className="one"
                    src="assets/images/pricing/price2-3.jpg"
                    alt="Price"
                  />
                </div>
                <div className="content">
                  <h6>Inclusions:</h6>
                  <ul className="list-style-four">
                    <li>5-7 days accommodation</li>
                    <li>Guided tours to major attractions</li>
                    <li>Private transportation</li>
                    <li>Family-friendly activities</li>
                    <li>Basic travel insurance</li>
                    <li>Breakfast and one local dinner</li>
                  </ul>
                  <Link href="contact" className="theme-btn style-three">
                    <span data-hover="Choose Package">Choose Package</span>
                    <i className="fal fa-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div
                className="pricing-plan-item"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
                data-aos-delay={100}
              >
                <div className="content">
                  <div className="price">
                    <span>$800</span> /per person
                  </div>
                  <h6>Premium Travel Packages</h6>
                </div>
                <div className="images">
                  <img
                    className="one"
                    src="assets/images/pricing/price3-1.jpg"
                    alt="Price"
                  />
                  <img
                    className="one"
                    src="assets/images/pricing/price3-2.jpg"
                    alt="Price"
                  />
                  <img
                    className="one"
                    src="assets/images/pricing/price3-3.jpg"
                    alt="Price"
                  />
                  <img
                    className="one"
                    src="assets/images/pricing/price3-4.jpg"
                    alt="Price"
                  />
                </div>
                <div className="content">
                  <h6>Inclusions:</h6>
                  <ul className="list-style-four">
                    <li>7-10 days accommodation</li>
                    <li>Private guided tours</li>
                    <li>Private transportation</li>
                    <li>Premium travel insurance</li>
                    <li>Spa packages</li>
                    <li>Private tours and activities</li>
                  </ul>
                  <Link href="contact" className="theme-btn style-three">
                    <span data-hover="Choose Package">Choose Package</span>
                    <i className="fal fa-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Pricing Area end */}
      {/* Client Logo Area start */}
      <div className="client-logo-area">
        <div className="container">
          <div className="client-logo-wrap pt-60 pb-55">
            <div
              className="text-center mb-40"
              data-aos="zoom-in"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <h6>We’re recommended by:</h6>
            </div>
            <Client />
          </div>
        </div>
      </div>
      {/* Client Logo Area end */}
      {/* Mobile App Area start */}
      <section className="mobile-app-area py-100 rel z-1">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <div
                className="mobile-app-content rmb-55"
                data-aos="fade-left"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="section-title mb-30">
                  <h2>
                    We Are Available On the Store Get Our Mobile Apps Very
                    Easily
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
                <div className="google-play-app-store">
                  <a href="#">
                    <img
                      src="assets/images/mobile-app/g-play.jpg"
                      alt="Google Play"
                    />
                  </a>
                  <a href="#">
                    <img
                      src="assets/images/mobile-app/a-store.jpg"
                      alt="App Store"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="mobile-app-images">
                <div className="bg">
                  <img src="assets/images/mobile-app/phone-bg.png" alt="BG" />
                </div>
                <div className="images">
                  <img
                    src="assets/images/mobile-app/phone2.png"
                    alt="Phone"
                    data-aos="fade-down-left"
                    data-aos-duration={1500}
                    data-aos-offset={50}
                  />
                  <img src="assets/images/mobile-app/phone.png" alt="Phone" />
                  <img
                    src="assets/images/mobile-app/phone3.png"
                    alt="Phone"
                    data-aos="fade-up-right"
                    data-aos-duration={1500}
                    data-aos-offset={50}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Mobile App Area end */}
      {/* Newsletter Area start */}
      <Subscribe />
      {/* Newsletter Area end */}
    </ReveloLayout>
  );
};
export default page;
