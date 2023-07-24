"use client";
import React, { useEffect, useRef, useState } from "react";
// Css
import styles from "../../styles/dashboard.module.scss";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Components
import Navbar from "../navbar/Navbar";

// Images
import banner1 from "../../assets/images/banner1.jpg";
import banner2 from "../../assets/images/banner2.jpg";
import banner_responsive1 from "../../assets/images/banner_responsive1.jpg";
import banner_responsive2 from "../../assets/images/banner_responsive2.jpg";

// React icons
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import Image from "next/image";
import { Autoplay } from "swiper";

// Arabic
import { useRouter } from "next/router";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

const Dashboard = () => {
  const swiperRef = useRef(null);
  const [isBanner, setIsBanner] = useState('');
  // Arbi
  const { locale, locales } = useRouter();
  const Arabic = locale?.includes("ar");
  const t = useTranslations("Dashboard");

  console.log("uygfjfduftfao8dya", locales, locale, useTranslations("abc"));

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

  const ChangeImage = () => {
    if (window.innerWidth <= 650) {
      setIsBanner(true);
    } else {
      setIsBanner(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", ChangeImage);
    ChangeImage();
  }, []);

  const sliderData = [
    {
      title: t("slide1title"),
      // subtitle: t("slide1subtitle"),
      subtitle: "",
      desc: t("slide1desc"),
      banner: banner1,
      bannerResponsive: banner_responsive1,
      btnText: t("btn1"),
      link: "/contact-us"
    },
    {
      title: t("slide2title"),
      // subtitle: t("slide2subtitle"),
      subtitle: "",
      desc: t("slide2desc"),
      banner: banner2,
      bannerResponsive: banner_responsive2,
      btnText: t("btn2"),
      link: "/contact-us"
    },
  ];
  return (
    <>
      <div
        className={`${styles.dashoard} ${Arabic ? styles.dashoard_Arabic : ""}`}
      >
        <Navbar />
        <div className={styles.dashoard_wrapper}>
          <Swiper
            ref={swiperRef}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            className={`${styles.mySlider}`}
          >
            {sliderData.map((item, i) => {
              return (
                <SwiperSlide className={styles.slider} key={i}>
                  <div className={styles.slider_wrapper}>
                    {item.title && (
                      <div className={styles.slider_title}>
                        <h1>{item.title}</h1>
                      </div>
                    )}
                    {item.subtitle && (
                      <div className={styles.subtitle}>
                        <p>{item.subtitle}</p>
                      </div>
                    )}
                    {item.desc && (
                      <div className={styles.slider_dec}>
                        <p>{item.desc}</p>
                      </div>
                    )}
                    <div className={styles.slider_action}>
                      <Link href={"/contact-us"}>
                        <button>{item?.btnText} <BsArrowRight /></button>
                      </Link>
                    </div>
                  </div>
                  <Image
                    src={isBanner ? item?.bannerResponsive : item?.banner}
                    alt="Banner_image"
                    loading="eager"
                    className={styles.banner_image}
                  />
                </SwiperSlide>
              );
            })}
            <div className={styles.swiper_action}>
              <div className={styles.swiper_left} onClick={handleLeftNavigation}>
                <MdKeyboardArrowLeft />
              </div>
              <div
                className={styles.swiper_right}
                onClick={handleRightNavigation}
              >
                <MdKeyboardArrowRight />
              </div>
            </div>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
