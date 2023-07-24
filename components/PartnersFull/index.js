import React from "react";
import Image from "next/image";
import styles from "../../styles/partners_full.module.scss";

import Marquee from "react-fast-marquee";

// React Intl
import { useRouter } from "next/router";

const PartnersFull = ({ title, data }) => {
  const { locale } = useRouter();
  const Arabic = locale?.includes("ar");

  return (
    <>
      <div
        className={`${styles.partners} ${Arabic ? styles.partners_Arabic : ""}`}
      >
        <div className={styles.partners_wrapper}>
          <div className={styles.partners_cols}>
            <div className={styles.partners_title}>
              {title ? <h2>{title}</h2> : ""}
            </div>
            <div className={styles.partners_images}>
              <Marquee speed="60" className={styles.partners_images_inner}>
                {data?.map(
                  (item, index) =>
                    index + 1 <= Math.floor(data.length / 2) && (
                      <div className={styles.partners_image} key={index}>
                        <Image src={item?.image} alt="Patner_image" />
                      </div>
                    )
                )}
              </Marquee>
              <Marquee
                speed="60"
                direction="right"
                className={styles.partners_images_inner}
              >
                {data?.map(
                  (item, index) =>
                    index + 1 > Math.floor(data.length / 2) &&
                    index + 1 <= data.length && (
                      <div className={styles.partners_image} key={index}>
                        <Image src={item?.image} alt="Patner_image" />
                      </div>
                    )
                )}
              </Marquee>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PartnersFull;
