import Link from "next/link";
import { Fragment } from "react";
import SearchFilter from "./SearchFilter";

const Banner = ({ pageTitle, pageName, search }) => {
  return (
    <Fragment>
      <section
        className="page-banner-area pt-50 pb-35 rel z-1 bgs-cover"
        style={{ backgroundImage: "url(assets/images/banner/banner.jpg)" }}
      >
        <div className="container">
          <div className={`banner-inner text-white ${search ? "mb-50" : ""}`}>
            <h2
              className="page-title mb-10"
              data-aos="fade-left"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              {pageTitle}
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
                <li className="breadcrumb-item active">
                  {pageName ? pageName : pageTitle}
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </section>
      {search }
    </Fragment>
  );
};
export default Banner;
