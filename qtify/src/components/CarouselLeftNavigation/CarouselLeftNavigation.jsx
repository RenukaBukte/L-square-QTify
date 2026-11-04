import React, { useEffect, useState } from "react";
import { useSwiper } from "swiper/react";
import  LeftArrow  from "../../assests/leftArrow.png"; // Adjust file extension (.svg/.png) as needed
import styles from "../Carousel/Carousel.module.css";

export default function CarouselLeftNavigation() {
  const swiper = useSwiper();
  const [isBeginning, setIsBeginning] = useState(swiper.isBeginning);

  useEffect(() => {
    swiper.on("slideChange", () => {
      setIsBeginning(swiper.isBeginning);
    });
  }, [swiper]);

  return (
    <div className={styles.leftNavigation}>
      {!isBeginning && <img src={LeftArrow} alt="left arrow" onClick={() => swiper.slidePrev()} />}
    </div>
  );
}
