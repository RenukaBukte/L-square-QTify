import React, { useEffect } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation } from "swiper/modules";
import CarouselLeftNavigation from "../CarouselLeftNavigation/CarouselLeftNavigation";
import CarouselRightNavigation from "../CarouselRightNavigation/CarouselRightNavigation";
import "swiper/css";
import styles from "./Carousel.module.css";

// Helper internal component to force update Swiper when new data loads
const Controls = ({ data }) => {
  const swiper = useSwiper();
  useEffect(() => {
    swiper.slideTo(0, null);
  }, [data, swiper]);
  return null;
};

export default function Carousel({ data, renderComponent }) {
  return (
    <div className={styles.wrapper}>
      <Swiper
        style={{ padding: "0px 20px" }}
        initialSlide={0}
        modules={[Navigation]}
        slidesPerView={"auto"}
        breakpoints={{
          // Responsive configuration mapping viewport width to layouts
          320: { slidesPerView: 1, spaceBetween: 10 },
          600: { slidesPerView: 2, spaceBetween: 15 },
          900: { slidesPerView: 4, spaceBetween: 20 },
          1200: { slidesPerView: 7, spaceBetween: 25 },
        }}
        allowTouchMove
      >
        <Controls data={data} />
        <CarouselLeftNavigation />
        <CarouselRightNavigation />
        
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            {renderComponent(item)}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
