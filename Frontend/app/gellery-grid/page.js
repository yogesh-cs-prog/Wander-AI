import Banner from "@/components/Banner";
import SectionTitle from "@/components/SectionTitle";
import Subscribe from "@/components/Subscribe";
import ReveloLayout from "@/layout/ReveloLayout";
import Link from "next/link";
const page = () => {
  return (
    <ReveloLayout>
      <Banner pageTitle={"Gallery Grid"} />
      {/* Gallery Area start */}
      <section className="gallery-two-area py-100 rel z-1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div
                className="section-title text-center counter-text-wrap mb-50"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <SectionTitle title={"Explore Our Photo Gallery"} />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-sm-6">
              <div
                className="gallery-two-item"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="image">
                  <img src="assets/images/gallery/gallery1.jpg" alt="Gallery" />
                  <Link href="destination-details" className="link">
                    <i className="fal fa-arrow-right" />
                  </Link>
                </div>
                <div className="content">
                  <span className="category">Tour &amp; Travel</span>
                  <h5>
                    <Link href="destination-details">
                      Brown Concrete Building
                    </Link>
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div
                className="gallery-two-item"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
                data-aos-delay={50}
              >
                <div className="image">
                  <img src="assets/images/gallery/gallery2.jpg" alt="Gallery" />
                  <Link href="destination-details" className="link">
                    <i className="fal fa-arrow-right" />
                  </Link>
                </div>
                <div className="content">
                  <span className="category">Tour &amp; Travel</span>
                  <h5>
                    <Link href="destination-details">Swimming near boat</Link>
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div
                className="gallery-two-item"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
                data-aos-delay={100}
              >
                <div className="image">
                  <img src="assets/images/gallery/gallery3.jpg" alt="Gallery" />
                  <Link href="destination-details" className="link">
                    <i className="fal fa-arrow-right" />
                  </Link>
                </div>
                <div className="content">
                  <span className="category">Tour &amp; Travel</span>
                  <h5>
                    <Link href="destination-details">
                      Building in the desert
                    </Link>
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div
                className="gallery-two-item"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="image">
                  <img src="assets/images/gallery/gallery4.jpg" alt="Gallery" />
                  <Link href="destination-details" className="link">
                    <i className="fal fa-arrow-right" />
                  </Link>
                </div>
                <div className="content">
                  <span className="category">Tour &amp; Travel</span>
                  <h5>
                    <Link href="destination-details">
                      Cliff near shore beach
                    </Link>
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div
                className="gallery-two-item"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
                data-aos-delay={50}
              >
                <div className="image">
                  <img src="assets/images/gallery/gallery5.jpg" alt="Gallery" />
                  <Link href="destination-details" className="link">
                    <i className="fal fa-arrow-right" />
                  </Link>
                </div>
                <div className="content">
                  <span className="category">Tour &amp; Travel</span>
                  <h5>
                    <Link href="destination-details">
                      Tent camping in the desert
                    </Link>
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div
                className="gallery-two-item"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
                data-aos-delay={100}
              >
                <div className="image">
                  <img src="assets/images/gallery/gallery6.jpg" alt="Gallery" />
                  <Link href="destination-details" className="link">
                    <i className="fal fa-arrow-right" />
                  </Link>
                </div>
                <div className="content">
                  <span className="category">Tour &amp; Travel</span>
                  <h5>
                    <Link href="destination-details">Machu Picchu, Peru</Link>
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div
                className="gallery-two-item"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="image">
                  <img src="assets/images/gallery/gallery7.jpg" alt="Gallery" />
                  <Link href="destination-details" className="link">
                    <i className="fal fa-arrow-right" />
                  </Link>
                </div>
                <div className="content">
                  <span className="category">Tour &amp; Travel</span>
                  <h5>
                    <Link href="destination-details">
                      Gray and black fish under water
                    </Link>
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div
                className="gallery-two-item"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
                data-aos-delay={50}
              >
                <div className="image">
                  <img src="assets/images/gallery/gallery8.jpg" alt="Gallery" />
                  <Link href="destination-details" className="link">
                    <i className="fal fa-arrow-right" />
                  </Link>
                </div>
                <div className="content">
                  <span className="category">Tour &amp; Travel</span>
                  <h5>
                    <Link href="destination-details">
                      Yacht sailing near island
                    </Link>
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div
                className="gallery-two-item"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
                data-aos-delay={100}
              >
                <div className="image">
                  <img src="assets/images/gallery/gallery9.jpg" alt="Gallery" />
                  <Link href="destination-details" className="link">
                    <i className="fal fa-arrow-right" />
                  </Link>
                </div>
                <div className="content">
                  <span className="category">Tour &amp; Travel</span>
                  <h5>
                    <Link href="destination-details">
                      Ship on dock during daytime
                    </Link>
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-lg-12 text-center">
              <Link
                href="tour-grid"
                className="theme-btn style-two bgc-secondary"
              >
                <span data-hover="View All Gallery">View All Gallery</span>
                <i className="fal fa-arrow-right" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Gallery Area end */}
      {/* Newsletter Area start */}
      <Subscribe />
      {/* Newsletter Area end */}
    </ReveloLayout>
  );
};
export default page;
