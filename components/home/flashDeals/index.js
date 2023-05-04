import { MdFlashOn } from "react-icons/md";
import styles from "./styles.module.scss";
import Countdown from "@/components/countdown";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Navigation } from "swiper";
import { flashDealsArray } from "@/data/home";
import FlashCard from "./FlashCard";

export default function FlashDeals() {
  return (
    <div className={styles.flashDeals}>
      <div className={styles.flashDeals__header}>
        <h1>
          FLASH SALE
          <MdFlashOn />
        </h1>

        <Countdown date={new Date(2023, 4, 3, 24)} />
      </div>

      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        navigation={true}
        modules={[Navigation]}
        breakpoints={{
          605: {
            slidesPerView: 2,
          },
          900: {
            slidesPerView: 3,
          },
          1205: {
            slidesPerView: 4,
          },
        }}
        className="flashDeals__swiper"
      >
        <div className={styles.flashDeals__list}>
          {flashDealsArray.map((product, i) => (
            <SwiperSlide>
              <FlashCard product={product} key={i} />
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
}
