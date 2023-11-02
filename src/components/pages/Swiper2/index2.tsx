import React from "react";
import styles from "./index.module.scss";
import { Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "../Swiper";

const Swiper2 = () => {
  return (
    <div>
      <p className={styles.aaaaa}>asaassssssssssssssssssssssssssssssssasas</p>

      <div className={styles.swiper}>
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          // pagination={{ clickable: true }}
          // scrollbar={{ draggable: true }}
          navigation
          modules={[Pagination, Navigation, Scrollbar, A11y]}
        >
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
        </Swiper>
      </div>

      <div className="">
        <table className="table-fixed hover:table-fixed table">
          <thead>
            <tr className="bg-orange-950">
              <th>№ Заявки</th>
              <th>Сфера</th>
              <th>Руководитель</th>
              <th>Дата поступления</th>
              <th>Сумма</th>
              <th>Срочно</th>
              <th>Статус (Мусажон)</th>
              <th>Статус (Руководитель)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>№100091</td>
              <td>Фабрика</td>
              <td>Гафуржанов Шахзод</td>
              <td>01.10.2023</td>
              <td>14 000 000 сум</td>
              <td>Да</td>
              <td>Ожидает согласования</td>
              <td>Ожидает согласования</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Swiper2;
