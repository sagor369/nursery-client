import { 
    Card, 
    CardContent,
    CardDescription 
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import SectionLayout from "../SectionLayout";
import "@/components/style/swiperSlider.css"

const Header = () => {
    
  return (
    <SectionLayout >
    <Swiper
        
        modules={[Pagination, Navigation]}
        pagination={{
            type: 'fraction',
          }}
          navigation= { true
          }
         
          className="w-full text-center h-[80vh] "
        
      >
        {Array.from({ length: 6 }).map((_, index) => <SwiperSlide>
         <div className="flex justify-center items-center gap-2">
            <img className="w-1/3 " src={`/src/assets/${index +1}.jpg`} alt="" />
            <h2 className="w-1/3 ">hello</h2>
            <img className="w-1/3 " src={`/src/assets/${index +1}.jpg`} alt="" />
         </div>
         Slide {index +1}</SwiperSlide>)}
        
      </Swiper>
    </SectionLayout>
    
  );
};

export default Header;
