"use client";
import { sliderProps } from "@/utility/sliderprops";
import Slider from "react-slick";

const Testimonial = () => {
  return (
    <Slider {...sliderProps.testimonials} className="testimonials-active">
      <div className="testimonial-item">
        <div className="testi-header">
          <div className="quote">
            <i className="flaticon-double-quotes" />
          </div>
          <h4>Quality Services</h4>
          <div className="ratting">
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
          </div>
        </div>
        <div className="text">
          "Our trip was absolutely a perfect, thanks this travel agency! They
          took care of every detail, from to accommodations, and even suggested
          incredible experiences"
        </div>
        <div className="author">
          <div className="image">
            <img src="assets/images/testimonials/author.jpg" alt="Author" />
          </div>
          <div className="content">
            <h5>Randall V. Vasquez</h5>
            <span>Graphics Designer</span>
          </div>
        </div>
      </div>
      <div className="testimonial-item">
        <div className="testi-header">
          <div className="quote">
            <i className="flaticon-double-quotes" />
          </div>
          <h4>Quality Services</h4>
          <div className="ratting">
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
          </div>
        </div>
        <div className="text">
          "Our trip was absolutely a perfect, thanks this travel agency! They
          took care of every detail, from to accommodations, and even suggested
          incredible experiences"
        </div>
        <div className="author">
          <div className="image">
            <img src="assets/images/testimonials/author.jpg" alt="Author" />
          </div>
          <div className="content">
            <h5>Randall V. Vasquez</h5>
            <span>Graphics Designer</span>
          </div>
        </div>
      </div>
    </Slider>
  );
};
export default Testimonial;
