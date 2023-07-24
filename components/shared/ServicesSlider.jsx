"use client";
import React, { useRef } from "react";
// Css
import styles from "../../styles/servicesSlider.module.scss";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import Image from "next/image";
import pic from "../../assets/images/servicesSlider3.jpg";

// Images
import arrowDark from "../../assets/images/arrowDark.svg";

// Arabic
import { useRouter } from "next/router";

const ServicesSlider = ({ data, title, subtitle, dec, textAlign, mode }) => {
  const { locale } = useRouter();
  const Arabic = locale?.includes("ar");

  const swiperRef = useRef(null);

  const handleLeftNavigation = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  const handleRightNavigation = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };
  return (
    <>
      <div
        className={`${styles.ServicesSlider} ${Arabic ? styles.ServicesSlider_Arabic : ""
          } ${mode == "dark" ? styles.ServicesSlider_dark : ""}`}
      >
        <div className={styles.ServicesSlider_wrapper}>
          <div className={styles.ServicesSlider_heading} style={{ textAlign: textAlign }}>
            {subtitle && <h6>{subtitle}</h6>}
            {title && <h1>{title}</h1>}
            {dec && <p>{dec}</p>}
          </div>
          <div className={styles.ServicesSlider_box}>
            <Swiper
              ref={swiperRef}
              slidesPerView={1}
              spaceBetween={30}
              modules={[Autoplay]}
              autoplay={{
                delay: 2000,
                pauseOnMouseEnter: true,
                disableOnInteraction: false,
              }}
              loop={true}
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
              className={`${styles.mySlider}  `}
            >
              {data?.map((item, i) => {
                return (
                  <SwiperSlide className={styles.slider} key={i}>
                    <div className={styles.ServicesSlider_box_left}>
                      <h3>{item.heading}</h3>
                      <p>{item.dec}</p>
                    </div>
                    <div className={styles.ServicesSlider_box_right}>
                      <div className={styles.slider_image}>
                        <Image
                          src={item?.image ? item?.image : pic}
                          alt="SilderImage"
                          fill
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
            <div className={styles.swiper_action}>
              <a onClick={handleLeftNavigation}>
                <span>
                  <Image src={arrowDark} width={16} height={16} alt="" />
                </span>
                <svg
                  viewBox="0 0 160 160"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="80"
                    cy="80"
                    r="78"
                    stroke="#191919"
                    strokeWidth="4"
                  ></circle>
                </svg>
              </a>
              <a onClick={handleRightNavigation}>
                <span>
                  <Image src={arrowDark} width={16} height={16} alt="" />
                </span>
                <svg
                  viewBox="0 0 160 160"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="80"
                    cy="80"
                    r="78"
                    stroke="#191919"
                    strokeWidth="4"
                  ></circle>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesSlider;
