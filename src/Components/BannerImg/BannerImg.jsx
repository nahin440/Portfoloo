import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";


import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


import img1 from '../../assets/bannerPics/Picsart_24-11-19_05-08-10-976.jpg'
import img2 from '../../assets/bannerPics/Picsart_24-11-19_05-10-18-512.png'
import img3 from '../../assets/bannerPics/Picsart_24-11-19_05-12-13-478.png'
import img4 from '../../assets/bannerPics/Picsart_24-11-19_05-15-22-985.png'
import { Autoplay,Pagination, Navigation } from "swiper/modules";


const BannerImg = () => {
    const images = [
        img1,img2,img3,img4
      ];
    
      return (
        <div className=" mx-auto">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 1500, disableOnInteraction: false }}
            loop={true}
            className="mySwiper"
          >
            {images.map((img, index) => (
              <SwiperSlide key={index}>
                <img
                  src={img}
                  alt={`Slide ${index}`}
                  className="w-full h-[500px] object-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      );
    };

export default BannerImg;



























