import ReveloLayout from "@/layout/ReveloLayout";
import Link from "next/link";
const page = () => {
  return (
    <ReveloLayout>
      <section className="error-area pt-70 pb-100 rel z-1">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-xl-5 col-lg-6">
              <div
                className="error-content rmb-55"
                data-aos="fade-left"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <h1>OPPS! </h1>
                <div className="section-title mt-15 mb-25">
                  <h2>This Page Can’t be Found</h2>
                </div>
                <p>
                  Best features to include on business landing page are those
                  that quickly convey your value proposition, build trust, and
                  encourage action. Here are six essential features
                </p>
                <form className="newsletter-form mt-40 mb-50" action="#">
                  <input
                    id="news-email"
                    type="text"
                    placeholder="Search keyword"
                    required=""
                  />
                  <button
                    type="submit"
                    className="theme-btn bgc-secondary style-two"
                  >
                    <span data-hover="Search">Search</span>
                    <i className="fal fa-arrow-right" />
                  </button>
                </form>
                <div className="keywords">
                  <Link href="blog">Travel</Link>
                  <Link href="blog">Luxury Hotel</Link>
                  <Link href="blog">Indonesia</Link>
                  <Link href="blog">Sea Beach</Link>
                  <Link href="blog">Camping</Link>
                  <Link href="blog">Hiking</Link>
                  <Link href="blog">Fishing</Link>
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-lg-6">
              <div
                className="error-images"
                data-aos="fade-right"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <img src="assets/images/newsletter/404.png" alt="404 Error" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </ReveloLayout>
  );
};
export default page;
