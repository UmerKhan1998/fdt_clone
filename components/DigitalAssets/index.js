import React, { useState } from "react";
import Image from "next/image";
import styles from "../../styles/digital-assets.module.scss";

// Images
import arrow from "../../assets/images/arrow.svg";
// React Intl
import { useRouter } from "next/router";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

const DigitalAssets = ({ data, title, Read_More, center_text }) => {
  const { locale } = useRouter();
  const Arabic = locale?.includes("ar");

  const [DigitalAssetsServicesIndex, setDigitalAssetsServicesIndex] =
    useState(0);

  return (
    <>
      <div
        className={`${styles.digital_assets} ${
          Arabic ? styles.digital_assets_Arabic : ""
        }`}
      >
        <div className={styles.digital_assets_wrapper}>
          <h2 className={styles.digital_assets_heading}>{title}</h2>
          <div className={styles.digital_assets_col}>
            <div className={styles.digital_assets_col_left}>
              <div className={styles.digital_assets_services}>
                <div className={styles.digital_assets_services_cols}>
                  {data?.map((item, index) => (
                    <div key={index}>
                      {index == DigitalAssetsServicesIndex ? (
                        <div
                          className={`${styles.activeDiv} ${styles.digital_assets_services_active}`}
                          onClick={() => {
                            setDigitalAssetsServicesIndex(index);
                          }}
                        >
                          <div>
                            <div
                              className={
                                styles.digital_assets_services_col_icon
                              }
                            >
                              <Image
                                src={item?.icon}
                                width={45}
                                height={45}
                                alt=""
                              />
                            </div>
                            <h4>{item?.name}</h4>
                          </div>
                          <Link
                            href={item?.link}
                            className={styles.digital_assets_services_col_arrow}
                          >
                            <Image src={arrow} width={14} height={14} alt="" />
                          </Link>
                        </div>
                      ) : (
                        <div
                          className={styles.activeDiv}
                          onClick={() => {
                            setDigitalAssetsServicesIndex(index);
                          }}
                        >
                          <div>
                            <div
                              className={
                                styles.digital_assets_services_col_icon
                              }
                            >
                              <Image
                                src={item?.icon}
                                width={45}
                                height={45}
                                alt=""
                              />
                            </div>
                            <h4>{item?.name}</h4>
                          </div>
                          <Link
                            href={item?.link}
                            className={styles.digital_assets_services_col_arrow}
                          >
                            <Image src={arrow} width={14} height={14} alt="" />
                          </Link>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                <div className={styles.digital_assets_services_center}>
                  <div>
                    <span>{center_text}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.digital_assets_col_right}>
              <h3>{data[DigitalAssetsServicesIndex]?.title}</h3>
              <div className={styles.digital_assets_col_right_scroll}>
                <p>{data[DigitalAssetsServicesIndex]?.desc}</p>
              </div>
              <div className={styles.digital_assets_col_right_tags}>
                {data[DigitalAssetsServicesIndex]?.tags?.map((item, index) => (
                  <Link href={item?.link} key={index}>
                    {item?.title} <BsArrowRight />
                  </Link>
                ))}
              </div>
              <Link href={data[DigitalAssetsServicesIndex]?.link}>
                {Read_More}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DigitalAssets;
