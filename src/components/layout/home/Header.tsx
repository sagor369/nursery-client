// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import SectionLayout from "../SectionLayout";
import "@/components/style/swiperSlider.css";

const Header = () => {
  return (
    <SectionLayout >
      <Swiper
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Navigation, Pagination]}
        navigation={true}
        className="w-full text-center h-[80vh] bg-green-800 text-white rounded-md"
      >
        {Array.from({ length: 6 }).map((_, index) => (
          <SwiperSlide>
            <div className="font-barlow flex justify-center items-center gap-2">
              <img
                className="w-1/3 rounded-l-md"
                src={`/src/assets/${index + 1}.jpg`}
                alt=""
              />
              <div className="w-1/3 p-4">
                <h2 className="text-2xl   font-semibold pb-2">Sun Flower</h2>
                <p className="text-base font-medium ">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point
                </p>
              </div>
              <img
                className="w-1/3 rounded-r-md"
                src={`/src/assets/${index + 1}.jpg`}
                alt=""
              />
            </div>
            Slide {index + 1}
          </SwiperSlide>
        ))}
      </Swiper>
    </SectionLayout>
  );
};

export default Header;
