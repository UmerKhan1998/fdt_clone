import React, { useState } from "react";
import Image from "next/image";
import styles from "../../styles/empowering-developers.module.scss";

// Images
import deveplopers1 from "../../assets/images/deveplopers1.png";
import deveplopers2 from "../../assets/images/deveplopers2.png";
import deveplopers3 from "../../assets/images/deveplopers3.png";
import deveplopers4 from "../../assets/images/deveplopers4.png";

// React Intl
import { useTranslations } from "next-intl";
import { useRouter } from "next/router";

const EmpoweringDevelopers = () => {
  const { locale } = useRouter();
  const t = useTranslations("EmpoweringDevelopers");
  const Arabic = locale?.includes("ar");

  const [EmpoweringDevelopersIndex, setEmpoweringDevelopersIndex] = useState(0);
  const EmpoweringDevelopers = [
    {
      name: t("Cybersecurity Experts"),
      cards: [
        {
          img: deveplopers1,
          name: "Ethan Blackwood",
          desecnation: "lorem ipsum",
        },
        {
          img: deveplopers2,
          name: "Marcus Johnson",
          desecnation: "lorem ipsum",
        },
        {
          img: deveplopers3,
          name: "Oliver Stone",
          desecnation: "lorem ipsum",
        },
        {
          img: deveplopers4,
          name: "Noah Ramirez",
          desecnation: "lorem ipsum",
        },
      ],
    },
    {
      name: t("DevOps Engineer"),
      cards: [
        {
          img: deveplopers2,
          name: "Marcus Johnson",
          desecnation: "lorem ipsum",
        },
        {
          img: deveplopers1,
          name: "Ethan Blackwood",
          desecnation: "lorem ipsum",
        },
        {
          img: deveplopers3,
          name: "Oliver Stone",
          desecnation: "lorem ipsum",
        },
        {
          img: deveplopers4,
          name: "Noah Ramirez",
          desecnation: "lorem ipsum",
        },
      ],
    },
    {
      name: t("Cloud Engineers"),
      cards: [
        {
          img: deveplopers1,
          name: "Ethan Blackwood",
          desecnation: "lorem ipsum",
        },
        {
          img: deveplopers3,
          name: "Oliver Stone",
          desecnation: "lorem ipsum",
        },
        {
          img: deveplopers2,
          name: "Marcus Johnson",
          desecnation: "lorem ipsum",
        },
        {
          img: deveplopers4,
          name: "Noah Ramirez",
          desecnation: "lorem ipsum",
        },
      ],
    },
    {
      name: t("AI Experts"),
      cards: [
        {
          img: deveplopers2,
          name: "Marcus Johnson",
          desecnation: "lorem ipsum",
        },
        {
          img: deveplopers1,
          name: "Ethan Blackwood",
          desecnation: "lorem ipsum",
        },
        {
          img: deveplopers3,
          name: "Oliver Stone",
          desecnation: "lorem ipsum",
        },
        {
          img: deveplopers4,
          name: "Noah Ramirez",
          desecnation: "lorem ipsum",
        },
      ],
    },
  ];

  return (
    <div
      className={`${styles.empowering_developers} ${Arabic ? styles.empowering_developers_Arabic : ""
        }`}
    >
      <div className={styles.empowering_developers_wrapper}>
        <div className={styles.empowering_developers_title}>
          <h5>{t("DevOps Engineer")}</h5>
          <h2>
            {t("Empowering Developers with Advanced Technology Services")}
          </h2>
        </div>
        <div className={styles.empowering_developers_tabs}>
          <div className={styles.empowering_developers_tabs_head}>
            <ul>
              {EmpoweringDevelopers?.map((item, index) => (
                (index === EmpoweringDevelopersIndex) ? (
                  <li
                    className={styles.tabs_head_active}
                    onClick={() => setEmpoweringDevelopersIndex(index)}
                    key={index}
                  >
                    {item?.name}
                  </li>
                ) : (
                  <li onClick={() => setEmpoweringDevelopersIndex(index)} key={index}>
                    {item?.name}
                  </li>
                )
              ))}
            </ul>
          </div>
          <div className={styles.empowering_developers_tabs_body}>
            <div className={styles.empowering_developers_tabs_cards}>
              {EmpoweringDevelopers[EmpoweringDevelopersIndex]?.cards?.map(
                (item, index) => (
                  <div
                    className={styles.empowering_developers_tabs_card}
                    key={index}
                  >
                    <Image src={item?.img} alt="" />
                    <div
                      className={styles.empowering_developers_tabs_card_info}
                    >
                      <div>
                        <h2>{item?.name}</h2>
                        <h5>{item?.desecnation}</h5>
                      </div>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmpoweringDevelopers;
