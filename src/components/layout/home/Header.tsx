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
import { useGetcategoryQuery } from "@/redux/features/categorySlice";
import { toast } from "sonner";
import { TPlantCategory } from "../plantManage/typex";
interface TCategory extends TPlantCategory {
  _id: string;
} 
const Header = () => {
  const {data:result, isLoading, isError} = useGetcategoryQuery(undefined)
  if(isError){
    toast.error('My cagetory create fail');
  }
  if(isLoading){
   return <div className="flex items-center justify-center">
      <p>Loading.....</p>
    </div>
  }
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
        {result?.data?.map((item: TCategory) => (

          <SwiperSlide>
            <div className="font-barlow flex justify-center items-center gap-2 ">
              <img
                className="w-1/3 rounded-l-md h-[500px]"
                src={item.imageUrl}
                alt=""
              />
              <div className="w-1/3 p-4">
                <h2 className="text-2xl   font-semibold pb-2">{item.name}</h2>
                <p className="text-base font-medium ">
                  {item.description}
                </p>
              </div>
              <img
                className="w-1/3 rounded-r-md h-[500px]"
                src={item.imageUrl}
                alt=""
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </SectionLayout>
  );
};

export default Header;
