import React from "react";
// Css
import styles from "../../styles/ImageBanner.module.scss";
// Image
import Image from "next/image";
import Banner from "../../assets/images/banner.svg";
// Arabic
import { useRouter } from "next/router";

const ImageBanner = ({ picture, brandLogo, title, subtitle, dec, align, mode }) => {
  const { locale } = useRouter();
  const Arabic = locale?.includes("ar");
  return (
    <>
      <div
        className={`${styles.ImageBanner} ${mode == "dark" ? styles.ImageBannerDark : ""} ${Arabic ? styles.ImageBannerArabic : ""}`}
      >
        <div className={styles.ImageBanner_wrapper}>
          {align == "right" ? (<>
            <div className={styles.ImageBanner_right}>
              {brandLogo ? <Image src={brandLogo} width={150} /> : ""}
              {title ? <h1>{title}</h1> : ""}
              {subtitle ? <h5>{subtitle}</h5> : ""}
              {dec ? <p>{dec}</p> : ""}
            </div>
            <div className={styles.ImageBanner_left}>
              <Image src={picture ? picture : Banner} alt="Image" fill />
            </div>
          </>) : (<>
            <div className={styles.ImageBanner_left}>
              <Image src={picture ? picture : Banner} alt="Image" fill />
            </div>
            <div className={styles.ImageBanner_right}>
              {brandLogo ? <Image src={brandLogo} width={150} /> : ""}
              {title ? <h1>{title}</h1> : ""}
              {subtitle ? <h5>{subtitle}</h5> : ""}
              {dec ? <p>{dec}</p> : ""}
            </div>
          </>)}
        </div>
      </div>
    </>
  );
};

export default ImageBanner;
