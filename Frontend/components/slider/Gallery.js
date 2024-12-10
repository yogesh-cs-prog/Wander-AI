"use client";

import { sliderProps } from "@/utility/sliderprops";
import Link from "next/link";
import Slider from "react-slick";

const Gallery = () => {
  return (
    <Slider {...sliderProps.gallery} className="gallery-slider-active">
      <div
        className="gallery-three-item"
        data-aos="fade-up"
        data-aos-duration={1500}
        data-aos-offset={50}
      >
        <div className="image">
          <img src="assets/images/gallery/gallery-slider1.jpg" alt="Gallery" />
        </div>
        <div className="content">
          <span className="category">Tour &amp; Travel</span>
          <h5>
            <Link href="destination-details">Brown Concrete Building</Link>
          </h5>
        </div>
      </div>
      <div
        className="gallery-three-item"
        data-aos="fade-up"
        data-aos-duration={1500}
        data-aos-offset={50}
      >
        <div className="image">
          <img src="assets/images/gallery/gallery-slider2.jpg" alt="Gallery" />
        </div>
        <div className="content">
          <span className="category">Tour &amp; Travel</span>
          <h5>
            <Link href="destination-details">Brown Concrete Building</Link>
          </h5>
        </div>
      </div>
      <div
        className="gallery-three-item"
        data-aos="fade-up"
        data-aos-duration={1500}
        data-aos-offset={50}
      >
        <div className="image">
          <img src="assets/images/gallery/gallery-slider3.jpg" alt="Gallery" />
        </div>
        <div className="content">
          <span className="category">Tour &amp; Travel</span>
          <h5>
            <Link href="destination-details">Brown Concrete Building</Link>
          </h5>
        </div>
      </div>
      <div
        className="gallery-three-item"
        data-aos="fade-up"
        data-aos-duration={1500}
        data-aos-offset={50}
      >
        <div className="image">
          <img src="assets/images/gallery/gallery-slider4.jpg" alt="Gallery" />
        </div>
        <div className="content">
          <span className="category">Tour &amp; Travel</span>
          <h5>
            <Link href="destination-details">Brown Concrete Building</Link>
          </h5>
        </div>
      </div>
      <div
        className="gallery-three-item"
        data-aos="fade-up"
        data-aos-duration={1500}
        data-aos-offset={50}
      >
        <div className="image">
          <img src="assets/images/gallery/gallery-slider5.jpg" alt="Gallery" />
        </div>
        <div className="content">
          <span className="category">Tour &amp; Travel</span>
          <h5>
            <Link href="destination-details">Brown Concrete Building</Link>
          </h5>
        </div>
      </div>
    </Slider>
  );
};
export default Gallery;
