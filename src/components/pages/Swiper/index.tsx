import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import styles from "./index.module.scss";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import { useNavigate } from "react-router-dom";
// import * as bootstrap from "bootstrap";

const Swipe = () => {
  const navigate = useNavigate();
  const handlenavigate = () => {
    navigate("/swiper/swiper2");
  };
  return (
    <div>
      <p onClick={handlenavigate}> Swiper</p>
      <Swiper
        className={styles.swiper}
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={40}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        <SwiperSlide className={styles.slide}>
          <img
            className={styles.slides__image}
            src="/assets/images/u.webp"
            alt=""
          />
          Slide 1
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <img
            className={styles.slides__image}
            src="/assets/images/un.webp"
            alt=""
          />
          Slide 1
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <img className={styles.slides__image} src="/assets/images/uni.webp" />
          Slide 1
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <img
            className={styles.slides__image}
            src="/assets/images/univ.webp"
            alt=""
          />
          Slide 1
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <img
            className={styles.slides__image}
            src="/assets/images/unive.webp"
          />
          Slide 1
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <img
            className={styles.slides__image}
            src="/assets/images/univer.webp"
            alt=""
          />
          Slide 1
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Swipe;
