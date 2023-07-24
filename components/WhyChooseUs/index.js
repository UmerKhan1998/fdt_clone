"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "../../styles/why-choose-us.module.scss";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// Images
import arrowDark from "../../assets/images/arrowDark.svg";

// Components
import BorderedCard from "../BorderedCard";
// React Intl
import { useRouter } from "next/router";
import BorderedCard1 from "../BorderedCard/BorderedCard1";

const WhyChooseUs = ({
  data,
  brandLogo,
  mode,
  title,
  subtitle,
  dec,
  variant,
}) => {
  const swiperRef = useRef(null);
  const [isSlider, setIsSlider] = useState(3);
  const { locale } = useRouter();
  const Arabic = locale?.includes("ar");

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

  const ChangeSlider = () => {
    if (window.innerWidth < 900) {
      if (window.innerWidth < 600) {
        if (window.innerWidth < 600) {
          setIsSlider(1);
        } else {
          setIsSlider(1);
        }
      } else {
        setIsSlider(2);
      }
    } else {
      setIsSlider(3);
    }
  };
  useEffect(() => {
    window.addEventListener("resize", ChangeSlider);
    ChangeSlider();
  }, [isSlider]);

  return (
    <>
      <div
        className={`${styles.why_choose_us} ${
          mode == "dark" ? styles.why_choose_us_dark : ""
        } ${Arabic ? styles.why_choose_us_Arabic : ""}`}
      >
        <div className={styles.why_choose_us_wrapper}>
          <div className={styles.why_choose_us_heading}>
            <div className={styles.heading_text}>
              {brandLogo ? <Image src={brandLogo} width={150} /> : ""}
              {subtitle ? <span>{subtitle}</span> : ""}
              {title ? <h2>{title}</h2> : ""}
              {dec && (
                <div className={styles.desc}>
                  <p>{dec}</p>
                </div>
              )}
            </div>
            <div className={styles.why_choose_us_slider_arrow}>
              {data.length > 3 && (
                <>
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
                </>
              )}
            </div>
          </div>
        </div>
        <div className={styles.why_choose_us_slider}>
          <div>
            <Swiper
              ref={swiperRef}
              slidesPerView={isSlider}
              spaceBetween={20}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              modules={[Autoplay]}
              grabCursor
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
              className={`${styles.mySlider}`}
            >
              {data.map((item, i) => {
                return (
                  <SwiperSlide key={i} className={styles.slider}>
                    {variant == "1" ? (
                      <BorderedCard1
                        data={{
                          index: i,
                          icon: item?.icon,
                          cardImg: item?.cardImg,
                          link: item?.link,
                          title: item?.title,
                          subtitle: item?.subtitle,
                          desc: item?.dec,
                          mode: mode,
                        }}
                      />
                    ) : (
                      <BorderedCard
                        data={{
                          index: i,
                          icon: item?.icon,
                          link: item?.link,
                          title: item?.title,
                          subtitle: item?.subtitle,
                          desc: item?.dec,
                          mode: mode,
                        }}
                      />
                    )}
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyChooseUs;
