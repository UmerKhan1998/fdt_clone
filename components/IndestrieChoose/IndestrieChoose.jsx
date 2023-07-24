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
import Icon7 from "../../assets/images/IndestrieChoose7.svg";
import Icon8 from "../../assets/images/IndestrieChoose8.svg";
import Icon9 from "../../assets/images/IndestrieChoose9.svg";
import IndestrieCards from "./IndestrieCards";

// React Intl
import { useTranslations } from "next-intl";

const IndestrieChoose = () => {
  const t = useTranslations("IndestrieChoose");

  const Data = [
    {
      icon: Icon1,
      title: t("card1Title"),
      dec: t("card1Desc"),
      link: "/industries/finance-and-banking",
    },
    {
      icon: Icon2,
      title: t("card2Title"),
      dec: t("card2Desc"),
      link: "/industries/healthcare",
    },
    {
      icon: Icon3,
      title: t("card3Title"),
      dec: t("card3Desc"),
      link: "/industries/government",
    },
    {
      icon: Icon4,
      title: t("card4Title"),
      dec: t("card4Desc"),
      link: "/industries/retail",
    },
    {
      icon: Icon5,
      title: t("card5Title"),
      dec: t("card5Desc"),
      link: "/industries/manufacturing",
    },
    {
      icon: Icon6,
      title: t("card6Title"),
      dec: t("card6Desc"),
      link: "/industries",
    },
    {
      icon: Icon7,
      title: t("card7Title"),
      dec: t("card7Desc"),
      link: "/industries/technology",
    },
    {
      icon: Icon8,
      title: t("card8Title"),
      dec: t("card8Desc"),
      link: "/industries/energy-and-utilities",
    },
    {
      icon: Icon9,
      title: t("card9Title"),
      dec: t("card9Desc"),
      link: "/industries/legal",
    },
  ];
  return (
    <>
      <div className={styles.Industrie}>
        <div className={styles.Industrie_wrapper}>
          <div className={styles.Industrie_title}>
            <h5>{t("Industries")}</h5>
            <h2>{t("title")}</h2>
            <p className={styles.desc1}>{t("desc1")}</p>
          </div>
          <div className={styles.Industrie_boxs}>
            {Data.map((item, i) => {
              return (
                <div key={i}>
                  <IndestrieCards
                    icon={item.icon}
                    title={item.title}
                    dec={item.dec}
                    link={item.link}
                  />
                </div>
              );
            })}
          </div>
          <p className={styles.desc2}>{t("desc2")}</p>
        </div>
      </div>
    </>
  );
};

export default IndestrieChoose;
