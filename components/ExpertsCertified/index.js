import React, { useState } from "react";
import Image from "next/image";
import styles from "../../styles/experts_certified.module.scss";

// Image
import ExpertsCertified1 from "../../assets/images/ExpertsCertified1.png";
import ExpertsCertified2 from "../../assets/images/ExpertsCertified2.png";
import ExpertsCertified3 from "../../assets/images/ExpertsCertified3.png";

// React Intl
import { useTranslations } from "next-intl";
import { useRouter } from "next/router";

const ExpertsCertified = () => {
  const { locale } = useRouter();
  const t = useTranslations("ExpertsCertified");
  const Arabic = locale?.includes("ar");

  const [ExpertsCertifiedListIndex, setExpertsCertifiedIndex] = useState(0);
  const ExpertsCertifiedList = [
    {
      image: ExpertsCertified1,
      tab: "GDPR",
      content: t("tab1content"),
    },
    {
      image: ExpertsCertified2,
      tab: "CIS",
      content: t("tab2content"),
    },
    {
      image: ExpertsCertified3,
      tab: "ISMS",
      content: t("tab3content"),
    },
  ];

  return (
    <>
      <div
        className={`${styles.experts_certified} ${
          Arabic ? styles.experts_certified_Arabic : ""
        }`}
      >
        <div className={styles.experts_certified_wrapper}>
          <div className={styles.experts_certified_title}>
            <span>{""}</span>
            <h2>{t("We have experts for cybersecurity frameworks")}</h2>
          </div>
          <div className={styles.experts_certified_cols}>
            <div>
              <Image
                src={ExpertsCertifiedList[ExpertsCertifiedListIndex]?.image}
                alt=""
              />
            </div>
            <div>
              <ul className={styles.experts_certified_list_tabs}>
                {ExpertsCertifiedList?.map((item, index) =>
                  ExpertsCertifiedListIndex === index ? (
                    <li
                      className={styles.experts_certified_list_tabs_active}
                      onClick={(e) => {
                        e.preventDefault();
                        setExpertsCertifiedIndex(index);
                      }}
                      key={index}
                    >
                      {item?.tab}
                    </li>
                  ) : (
                    <li
                      onClick={(e) => {
                        e.preventDefault();
                        setExpertsCertifiedIndex(index);
                      }}
                      key={index}
                    >
                      {item?.tab}
                    </li>
                  )
                )}
              </ul>
            </div>
            <div>
              <p>{ExpertsCertifiedList[ExpertsCertifiedListIndex]?.content}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExpertsCertified;
