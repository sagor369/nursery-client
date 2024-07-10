// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Navigation, Autoplay} from "swiper/modules";
import SectionLayout from "../SectionLayout";
import { Link } from "react-router-dom";
import SectionTitle from "../share/SectionTitle";
import { FaAngleRight , FaAngleLeft} from "react-icons/fa";

const PlantsType = () => {
  return (
    <div>
      <SectionLayout >
        <div className="bg-white rounded-md">
            <div className="bg-green-800 rounded-md mb-3 py-2 text-white flex justify-between items-center pr-4">
                <SectionTitle title={"Shop By Plants Category"}></SectionTitle>
                <div className="flex gap-4">
                <FaAngleLeft className="size-6 slider-pre rounded-sm bg-white text-green-800"/>
                <FaAngleRight className="size-6 slider-next rounded-sm bg-white text-green-800"/>
                </div>
            </div>

        <Swiper
          autoplay={{
            delay: 6000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Navigation]}
          navigation={{
            nextEl: '.slider-next',
            prevEl: '.slider-pre',
          }}
          spaceBetween={20}
          slidesPerView={4}
          breakpoints={{
            320: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
          className="bg-green-800 rounded-md"
        >
          {Array.from({ length: 6 }).map((_, index) => (
            <SwiperSlide>
              <Link to={"/#"}>
                <div className="bg-white rounded-md">
                  <img
                    className="h-56 w-full rounded-t-md"
                    src={`/src/assets/${index + 1}.jpg`}
                    alt=""
                  />
                  <h2 className="text-xl font-semibold px-4 py-2 text-green-950">
                    Rose flower
                  </h2>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
        </div>
      </SectionLayout>
    </div>
  );
};

export default PlantsType;
