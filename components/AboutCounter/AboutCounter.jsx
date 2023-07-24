import React from "react";
// Css
import styles from "../../styles/aboutCounter.module.scss";
// Arabic
import { useRouter } from "next/router";
import { useTranslations } from "next-intl";

const AboutCounter = () => {
  const { locale } = useRouter();
  const Arabic = locale?.includes("ar");
  const t = useTranslations("AboutCounter");

  const Data = [
    {
      num: "10+",
      detail: `${t("Year of Experience")}`,
    },
    {
      num: "150+",
      detail: `${t("Client Surved")}`,
    },
    {
      num: "96+",
      detail: `${t("Experts")}`,
    },
    {
      num: "75+",
      detail: `${t("Providing Services")}`,
    },
  ];
  return (
    <>
      <div
        className={`${styles.AboutCounter} ${Arabic ? styles.AboutCounter_Arabic : ""
          }`}
      >
        <div className={styles.AboutCounter_wrapper}>
          <div className={styles.AboutCounter_boxs}>
            {Data.map((item, i) => {
              return (
                <div className={styles.AboutCounter_box} key={i}>
                  <div className={styles.AboutCounter_box_child}>
                    <h1>{item.num}</h1>
                    <h5>{item.detail}</h5>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutCounter;
