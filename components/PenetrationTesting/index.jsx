import React, { useState } from "react";
import Image from "next/image";
import styles from "../../styles/penetration_testing.module.scss";

// Component
import BorderedCard from "../BorderedCard";

// React Intl
import { useRouter } from "next/router";

const PenetrationTesting = ({ title, subtitle, image, desc1, desc2, data, mode, refSection }) => {

  const { locale } = useRouter();
  const Arabic = locale?.includes("ar");

  return (
    <div className={`${styles.penetration_testing} 
      ${mode == "dark" ? styles.penetration_testing_Dark : ""} 
      ${Arabic ? styles.penetration_testing_Arabic : ""}`}
      ref={refSection}
    >
      <div className={styles.penetration_testing_wrapper}>
        <div className={styles.penetration_testing_cols}>
          <div className={styles.penetration_testing_col_left}>
            <div>
              <h5>{subtitle}</h5>
              <h2>
                {title}
              </h2>
              {(desc1 !== '') ? <p>{desc1}</p> : ''}
            </div>
            <div className={styles.penetration_testing_left_img}>
              {(image !== '') ? <Image src={image} alt="penetration testing" /> : ('')}
            </div>
            {(desc2 !== '') ? <p>{desc2}</p> : ''}
          </div>
          <div className={styles.penetration_testing_col_right}>
            <div className={styles.penetration_testing_cards}>
              {data?.map((item, index) => (
                <div className={styles.penetration_testing_card} key={index}>
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
      </div>
    </div>
  );
};

export default PenetrationTesting;
