import React, { useState } from "react";
import Image from "next/image";
import styles from "../../styles/industry.module.scss";

// Image
import financeAndBanking from "../../assets/images/financeAndBanking.svg";
import Healthcare from "../../assets/images/Healthcare.svg";
import Government from "../../assets/images/Government.svg";
import Retail from "../../assets/images/Retail.svg";
import Manufacturing from "../../assets/images/Manufacturing.svg";
import Education from "../../assets/images/Education.svg";

// Components
import BorderedCard from "../BorderedCard";

// React Intl
import { useTranslations } from "next-intl";
import { useRouter } from "next/router";

const Industry = ({ mode }) => {
  const { locale } = useRouter();
  const t = useTranslations("Industry");
  const Arabic = locale?.includes("ar");

  const Industry = [
    {
      icon: financeAndBanking,
      link: "",
      title: t("card1Title"),
      desc: t("card1Desc"),
    },
    {
      icon: Healthcare,
      link: "",
      title: t("card2Title"),
      desc: t("card2Desc"),
    },
    {
      icon: Government,
      link: "",
      title: t("card3Title"),
      desc: t("card3Desc"),
    },
    {
      icon: Retail,
      link: "",
      title: t("card4Title"),
      desc: t("card4Desc"),
    },
    {
      icon: Manufacturing,
      link: "",
      title: t("card5Title"),
      desc: t("card5Desc"),
    },
    {
      icon: Education,
      link: "",
      title: t("card6Title"),
      desc: t("card6Desc"),
    },
    {
      icon: Retail,
      link: "",
      title: t("card7Title"),
      desc: t("card7Desc"),
    },
    {
      icon: Manufacturing,
      link: "",
      title: t("card8Title"),
      desc: t("card8Desc"),
    },
  ];

  return (
    <>
      <div
        className={`${styles.industry} ${Arabic ? styles.industry_Arabic : ""}`}
      >
        <div className={styles.industry_wrapper}>
          <div className={styles.industry_title}>
            <span>{t("Protection At It's Best")}</span>
            <h2>{t("We specialize in Cyber Security day in and day out")}</h2>
          </div>
          <div className={styles.industry_cols}>
            {Industry?.map((item, index) => (
              <div key={index}>
                <BorderedCard
                  data={{
                    index: index,
                    icon: item?.icon,
                    link: item?.link,
                    title: item?.title,
                    subtitle: item?.subtitle,
                    desc: item?.desc,
                    mode: mode,
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Industry;
