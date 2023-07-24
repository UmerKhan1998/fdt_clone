import React from "react";
// Css
import styles from "../../styles/AboutProject.module.scss";
// Images
import Banner from "../../assets/images/aboutUsLeft1.svg";
import Image from "next/image";
// Arabic
import { useTranslations } from "next-intl";
import { useRouter } from "next/router";

const AboutProject = () => {
  const { locale } = useRouter();
  const Arabic = locale?.includes("ar");
  const t = useTranslations("AboutProject");

  return (
    <>
      <div
        className={`${styles.AboutProject} ${Arabic ? styles.AboutProject_Arabic : ""
          }`}
      >
        <div className={styles.AboutProject_title}>
          <div className={styles.AboutProject_title_wrapper}>
            <h5>{t("Know About Us")}</h5>
            <h2>
              {t("Get Your Project Done Right With Our Implementation Experts")}
            </h2>
          </div>
        </div>
        <div className={styles.AboutProject_main}>
          <div className={styles.AboutProject_main_wrapper}>
            <div className={styles.AboutProject_main_left}>
              <div className={styles.AboutProject_main_image}>
                <Image src={Banner} alt="About_Image" fill />
              </div>
              <div className={styles.AboutProject_main_image}>
                <Image src={Banner} alt="About_Image" fill />
              </div>
              <div className={styles.AboutProject_main_image}>
                <Image src={Banner} alt="About_Image" fill />
              </div>
              <div className={styles.AboutProject_main_image}>
                <Image src={Banner} alt="About_Image" fill />
              </div>
              <div className={styles.AboutProject_main_image}>
                <Image src={Banner} alt="About_Image" fill />
              </div>
            </div>
            <div className={styles.AboutProject_main_right}>
              <h1> {t("title")} </h1>
              <p>{t("desc")}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutProject;
