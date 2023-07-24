import React from "react";
import Image from "next/image";
// Css
import styles from "../../styles/banner.module.scss";
import Navbar from "../navbar/Navbar";
// Image
import InternalBanner from "@/assets/images/InternalBanner.png";
// Arabic
import { useRouter } from "next/router";

const Banner = ({ title, subdetail, dec, titleWidth, bannerImage, logo, logoRight }) => {
  const { locale } = useRouter();
  const Arabic = locale?.includes("ar");
  return (
    <>
      <div className={`${styles.banner} ${Arabic ? styles.banner_Arabic : ""}`} style={
        { backgroundImage: `linear-gradient(rgba(10, 10, 10, 0.9), rgba(10, 10, 10, 0.9)), url('${bannerImage ? bannerImage.src : InternalBanner.src}')` }
      }>
        <Navbar />
        <div className={styles.banner_wrapper}>
          <div className={styles.banner_content}>
            {/* {logo_right && <Image className={styles.logo_right} src={logo_right} />} */}
            {logoRight && <Image className={styles.banner_logo_right} width={200} height={200} src={logoRight} />}
            {logo && <Image className={styles.banner_logo} width={300} src={logo} />}
            {title && <h1 style={{ width: titleWidth }}>{title}</h1>}
            {subdetail && <h3>{subdetail}</h3>}
            {dec && <p>{dec}</p>}
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
