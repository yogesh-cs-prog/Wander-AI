"use client";
import Banner from "@/components/Banner";
import RaveloAccordion from "@/components/RaveloAccordion";
import SectionTitle from "@/components/SectionTitle";
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
    {
      id: 6,
      title: "6. What payment methods do you accept?",
    },
    {
      id: 7,
      title: "7. Is a deposit required when booking a tour?",
    },
    {
      id: 8,
      title:
        " 8. Can I make changes to my booking after it has been confirmed?",
    },
    {
      id: 9,
      title: "9. What is your cancellation policy?",
    },
    {
      id: 10,
      title: " 10. How do I know if my booking is confirmed?",
    },
  ];
  const [active, setActive] = useState("collapse0");
  return (
    <ReveloLayout>
      <Banner pageTitle={"FAQs"} />
      {/* FAQ Page About Area start */}
      <section className="faq-page-about pt-100 rel z-1">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-6">
              <div
                className="faq-page-about-content mb-30 rmb-55"
                data-aos="fade-left"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="section-title mb-30">
                  <h2>
                    Destination Dreams The Insider’s Guide to Exceptional Travel
                    Experiences
                  </h2>
                </div>
                <p>
                  Tours and travels play a crucial role in enriching lives by
                  offering unique experiences, cultural exchanges, and the joy
                  of exploration.
                </p>
                <ul className="list-style-two mt-35 mb-20">
                  <li>Experience Agency</li>
                  <li>Professional Team</li>
                  <li>Low Cost Travel</li>
                  <li>Online Support 24/7</li>
                </ul>
                <Link href="contact" className="theme-btn style-two">
                  <span data-hover="Book Now">Book Now</span>
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
              <div className="row">
                <div className="col-sm-6">
                  <div className="image mb-30">
                    <img
                      className="br-10 w-100"
                      src="assets/images/destinations/faq1.jpg"
                      alt="FAQ"
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="image mb-30">
                    <img
                      className="br-10 w-100"
                      src="assets/images/destinations/faq2.jpg"
                      alt="FAQ"
                    />
                  </div>
                  <div className="image mb-30">
                    <img
                      className="br-10 w-100"
                      src="assets/images/destinations/faq3.jpg"
                      alt="FAQ"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* FAQ Page About Area end */}
      {/* FAQs Area start */}
      <section className="faq-page-area pt-70 pb-85 rel z-1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-10">
              <div
                className="section-title text-center counter-text-wrap mb-50"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <SectionTitle title={"Frequently Asked Questions"} />
              </div>
              <Accordion className="accordion-one" defaultActiveKey={active}>
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
            </div>
          </div>
        </div>
      </section>
      {/* FAQs Area end */}
      {/* Features Area start */}
      <section className="faq-page-featuers pb-70 rel z-1">
        <div className="container">
          <div className="row justify-content-center">
            <div
              className="col-xxl-3 col-xl-4 col-md-6"
              data-aos="flip-left"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="feature-item style-three">
                <div className="icon">
                  <i className="flaticon-route" />
                </div>
                <div className="content">
                  <h6>
                    <Link href="destination-details">500+ Destinations</Link>
                  </h6>
                  <p>
                    Adventure seekers can embark thrilling journeys through the
                    Amazon Rainforest or scale
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-xxl-3 col-xl-4 col-md-6"
              data-aos="flip-left"
              data-aos-delay={50}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="feature-item style-three bgc-secondary">
                <div className="icon">
                  <i className="flaticon-best-price" />
                </div>
                <div className="content">
                  <h6>
                    <Link href="destination-details">Best Price Guarantee</Link>
                  </h6>
                  <p>
                    Adventure seekers can embark thrilling journeys through the
                    Amazon Rainforest or scale
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-xxl-3 col-xl-4 col-md-6"
              data-aos="flip-left"
              data-aos-delay={100}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="feature-item style-three bgc-primary">
                <div className="icon">
                  <i className="flaticon-travel-1" />
                </div>
                <div className="content">
                  <h6>
                    <Link href="destination-details">Diverse Destinations</Link>
                  </h6>
                  <p>
                    Adventure seekers can embark thrilling journeys through the
                    Amazon Rainforest or scale
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-xxl-3 col-xl-4 col-md-6"
              data-aos="flip-left"
              data-aos-delay={150}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="feature-item style-three bgc-pink">
                <div className="icon">
                  <i className="flaticon-guidepost" />
                </div>
                <div className="content">
                  <h6>
                    <Link href="destination-details">Best Travel Guide</Link>
                  </h6>
                  <p>
                    Adventure seekers can embark thrilling journeys through the
                    Amazon Rainforest or scale
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Features Area end */}
      {/* Newsletter Area start */}
      <Subscribe />
      {/* Newsletter Area end */}
    </ReveloLayout>
  );
};
export default page;
