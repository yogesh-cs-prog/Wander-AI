import Banner from "@/components/Banner";
import SectionTitle from "@/components/SectionTitle";
import Gallery from "@/components/slider/Gallery";
import Subscribe from "@/components/Subscribe";
import ReveloLayout from "@/layout/ReveloLayout";
const page = () => {
  return (
    <ReveloLayout>
      <Banner pageTitle={"Gallery Slider"} />
      {/* Gallery Area start */}
      <section className="gallery-slider-area py-100 rel z-1">
        <div
          className="section-title text-center counter-text-wrap mb-50"
          data-aos="fade-up"
          data-aos-duration={1500}
          data-aos-offset={50}
        >
          <SectionTitle title={"Explore Our Photo Gallery"} />
        </div>
        <Gallery />
      </section>
      {/* Gallery Area end */}
      {/* Newsletter Area start */}
      <Subscribe />
      {/* Newsletter Area end */}
    </ReveloLayout>
  );
};
export default page;
