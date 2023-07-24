import React, { useState } from "react";
import Image from "next/image";
import styles from "../../styles/about_us_section.module.scss";

// Image
import aboutUsLeft1 from "../../assets/images/aboutUsLeft1.svg";
import quot1 from "../../assets/images/quot1.svg";
import quot2 from "../../assets/images/quot2.svg";
import aboutUsLeft2 from "../../assets/images/aboutUsLeft2.svg";

// React Intl
import { useTranslations } from "next-intl";
import { useRouter } from "next/router";
import Link from "next/link";

const AboutUsSection = () => {
  const { locale } = useRouter();
  const t = useTranslations("AboutUsSection");
  const Arabic = locale?.includes("ar");

  return (
    <>
      <div
        className={`${styles.about_us_section} ${
          Arabic ? styles.about_us_section_Arabic : ""
        }`}
      >
        <div className={styles.about_us_section_wrapper}>
          <div className={styles.about_us_section_title}>
            <h5>{t("Consultation")}</h5>
            <h2> {t("Request a free consultation")} </h2>
            <h3>
              {t(
                "Our consultation is 100% free - no obligations, no strings attached"
              )}
            </h3>
            <p>{""}</p>
          </div>
        </div>
        <div className={styles.about_us_section_cols}>
          <div>
            <div className={styles.about_us_section_left_col}>
              <div className={styles.about_us_section_left_col_row1}>
                <div>
                  <Image src={aboutUsLeft1} alt="" />
                </div>
                <div>
                  <div className={styles.experience}>
                    <h3>10+</h3>
                    <p>{t("Years of Experience")}</p>
                  </div>
                </div>
              </div>
              <div className={styles.about_us_section_left_col_row2}>
                <div>
                  <div className={styles.about_us_quot}>
                    <p>
                      <Image src={quot1} alt="" />
                      <ele>{t("quat")}</ele>
                      <Image src={quot2} alt="" />
                    </p>
                  </div>
                </div>
                <div>
                  <div>
                    <h3>150+</h3>
                    <p>{t("Client Served")}</p>
                  </div>
                </div>
              </div>
              <div className={styles.about_us_section_left_col_row3}>
                <div>
                  <div className={styles.experience}>
                    <h3>96+</h3>
                    <p>{t("Experts")}</p>
                  </div>
                </div>
                <div>
                  <Image src={aboutUsLeft2} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div>
            <div>
              <h2>{t("Key Benefits of consultation with our experts")}</h2>
              <p>
                {t(
                  "With our experts consultation in installation services, you can"
                )}
              </p>
              <ul>
                <li>{t("Reduce deployment time and costs")}</li>
                <li>{t("Improve system reliability and performance")}</li>
                <li>
                  {t(
                    "Reduce the amount of downtime and disruption to your operations"
                  )}
                </li>
                <li>
                  {t("Guarantee a smooth transition to novel technology")}
                </li>
                <li>{t("Increase productivity and efficiency")}</li>
              </ul>
              <Link href={"/contact-us"} className={styles.our_experts_link}>
                {t("Book your meeting")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUsSection;
