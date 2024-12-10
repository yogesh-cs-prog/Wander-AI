"use client";

import { sliderProps } from "@/utility/sliderprops";
import Link from "next/link";
import Slider from "react-slick";

const Product = () => {
  return (
    <Slider {...sliderProps.product} className="product-slider">
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
            <Link href="product-details">Waistband and Mesh Fashion</Link>
          </h6>
          <span className="price">$188.00</span>
        </div>
      </div>
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
            <Link href="product-details">Sandals for Casual Techies</Link>
          </h6>
          <span className="price">$188.00</span>
        </div>
      </div>
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
    </Slider>
  );
};
export default Product;
