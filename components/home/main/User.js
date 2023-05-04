import styles from "./styles.module.scss";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { IoSettingsOutline } from "react-icons/io5";
import { HiOutlineClipboardList } from "react-icons/hi";
import { AiOutlineMessage } from "react-icons/ai";
import { BsHeart } from "react-icons/bs";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-cards";

import { EffectCards, Navigation } from "swiper";
import { userMenuArray } from "@/data/home";

export default function User() {
  const { data: session } = useSession();

  return (
    <div className={styles.user}>
      <div className={styles.user__container}>
        {session ? (
          // <div className={styles.user__infos}>
          //   <img src={session.user?.image} alt="" />
          //   <h4>{session.user.name}</h4>
          // </div>

          ""
        ) : (
          <div className={styles.user__infos}>
            <div className={styles.user__infos_btns}>
              <button>Register</button>
              <button>Login</button>
            </div>
          </div>
        )}

        <ul className={styles.user__links}>
          <li>
            <Link href="/">
              <IoSettingsOutline />
            </Link>
          </li>
          <li>
            <Link href="/">
              <HiOutlineClipboardList />
            </Link>
          </li>
          <li>
            <Link href="/">
              <AiOutlineMessage />
            </Link>
          </li>
          <li>
            <Link href="/">
              <BsHeart />
            </Link>
          </li>
        </ul>

        <div className={styles.user__swiper}>
          <Swiper
            effect={"cards"}
            grabCursor={true}
            navigation={true}
            modules={[EffectCards, Navigation]}
            className="userMenu__swiper"
          >
            {userMenuArray.map((item, i) => (
              <SwiperSlide key={i}>
                <img src={item.image} alt="" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
