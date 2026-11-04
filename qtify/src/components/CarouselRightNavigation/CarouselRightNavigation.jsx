import React, { useEffect, useState } from "react";
import { useSwiper } from "swiper/react";
import RightArrow from "../../assests/rightArrow.png"; // Adjust file extension (.svg/.png) as needed
import styles from "../Carousel/Carousel.module.css";

export default function CarouselRightNavigation() {
  const swiper = useSwiper();
  const [isEnd, setIsEnd] = useState(swiper.isEnd);

  useEffect(() => {
    swiper.on("slideChange", () => {
      setIsEnd(swiper.isEnd);
    });
  }, [swiper]);

  return (
    <div className={styles.rightNavigation}>
      {!isEnd && <img src={RightArrow} alt="right arrow" onClick={() => swiper.slideNext()} />}
    </div>
  );
}