import React from "react";
// Css
import styles from "../../styles/industriesChoose.module.scss";

// Images
import Icon1 from "../../assets/images/IndustrieChoose1.svg";
import Icon2 from "../../assets/images/IndestrieChoose2.svg";
import Icon3 from "../../assets/images/IndestrieChoose3.svg";
import Icon4 from "../../assets/images/IndestrieChoose4.svg";
import Icon5 from "../../assets/images/IndestrieChoose5.svg";
import Icon6 from "../../assets/images/IndestrieChoose6.svg";
import IndestrieCards from "../IndestrieChoose/IndestrieCards";

// React Intl
import { useTranslations } from "next-intl";

const IndustrieService = () => {
  const t = useTranslations("SubIndestries");
  const Data = [
    {
      icon: Icon1,
      title: t("Custom Software Development"),
      dec: t("Lorem"),
    },
    {
      icon: Icon2,
      title: t("Legacy Software Modernization"),
      dec: t("Lorem"),
    },
    {
      icon: Icon3,
      title: t("Software Quality Assurance"),
      dec: t("Lorem"),
    },
    {
      icon: Icon4,
      title: t("Low-Code App Development"),
      dec: t("Lorem"),
    },
    {
      icon: Icon5,
      title: t("Cybersecurity"),
      dec: t("Lorem"),
    },
    {
      icon: Icon6,
      title: t("Cloud Transformation"),
      dec: t("Lorem"),
    },
  ];
  return (
    <>
      <div className={styles.Industrie}>
        <div className={styles.Industrie_wrapper}>
          <div className={styles.Industrie_title}>
            <h5>{t('Services')}</h5>
            <h2>{t('Our Services for the Financial Sector')}</h2>
          </div>
          <div className={styles.Industrie_boxs}>
            {Data.map((item, i) => {
              return (
                <div key={i}>
                  <IndestrieCards
                    icon={item.icon}
                    title={item.title}
                    dec={item.dec}
                    link="/"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default IndustrieService;
