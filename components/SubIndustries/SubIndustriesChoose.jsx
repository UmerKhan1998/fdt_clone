import React from "react";

// Css
import styles from "../../styles/subServicesChoose.module.scss";
// Images
import Icon1 from "../../assets/images/servicesIcon1.svg";
import Icon2 from "../../assets/images/servicesIcon2.svg";
import Icon3 from "../../assets/images/servicesIcon3.svg";
import ServicesCard from "../ServicesChoose/ServicesCard";

// React Intl
import { useTranslations } from "next-intl";

const SubIndustriesChoose = () => {
  const t = useTranslations("SubIndustriesChoose");
  const Data = [
    {
      icon: Icon1,
      title: t("card1Title"),
      dec: t("card1Desc"),
    },
    {
      icon: Icon2,
      title: t("card1Title"),
      dec: t("card1Desc"),
    },
    {
      icon: Icon3,
    title: t("card1Title"),
      dec: t("card1Desc"),
    },
  ];
  return (
    <>
      <div className={styles.ServicesChoose} >
        <div className={styles.ServicesChoose_wrapper}>
          <div className={styles.ServicesChoose_title}>
            <h5>{t('Why Choose Us for Your finance and Banking')}</h5>
            <h2>{t('Our Expertise, Process, and Commitment to Security')}</h2>
          </div>
          <div className={styles.ServicesChoose_boxs}>
            {Data.map((item, i) => {
              return (
                <div key={i}>
                  <ServicesCard
                    icon={item.icon}
                    title={item.title}
                    dec={item.dec}
                    mode={'dark'}
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

export default SubIndustriesChoose;
