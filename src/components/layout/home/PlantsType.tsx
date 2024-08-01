// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Navigation, Autoplay } from "swiper/modules";

import SectionLayout from "../SectionLayout";
import { Link } from "react-router-dom";
import SectionTitle from "../share/SectionTitle";

// react icons
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import { useGetcategoryQuery } from "@/redux/features/categorySlice";
import { toast } from "sonner";
import { TPlantCategory } from "../plantManage/typex";

interface TCategory extends TPlantCategory {
    _id: string;
  } 

const PlantsType = () => {
  const {data:result, isLoading, isError} = useGetcategoryQuery(undefined)
  if(isError){
    toast.error(' cagetory fetching fail');
  }
  if(isLoading){
   return <div className="flex items-center justify-center">
      <p>Loading.....</p>
    </div>
  }
  return (
    <div>
      <SectionLayout>
        <div className="bg-white rounded-md">

            {/* page title and heading  */}
          <div className="bg-green-800 rounded-md mb-3 py-2 text-white flex justify-between items-center pr-4">
            <SectionTitle title={"Shop By Plants Category"}></SectionTitle>
            <div className="flex gap-4">
              <FaAngleLeft className="size-6 slider-pre rounded-sm bg-white text-green-800" />
              <FaAngleRight className="size-6 slider-next rounded-sm bg-white text-green-800" />
            </div>
          </div>

            {/* swiper components  */}
            <div className="bg-green-800 rounded-md py-2">

          <Swiper
            autoplay={{
              delay: 6000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, Navigation]}
            navigation={{
              nextEl: ".slider-next",
              prevEl: ".slider-pre",
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
            
          >
            {result?.data?.map((item:TCategory) => (
              
              <SwiperSlide key={item._id}>
                <Link to={`/product?&categoryId=${item._id}`}>
                  <div className="bg-white rounded-md">
                    <img
                      className="h-56 w-full rounded-t-md"
                      src={item?.imageUrl}
                      alt=""
                    />
                    <h2 className="text-xl font-semibold px-4 py-2 text-green-950">
                      {item.name}
                    </h2>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
            </div>
        </div>
      </SectionLayout>
    </div>
  );
};

export default PlantsType;
