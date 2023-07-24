import React from "react";
import Image from "next/image";
import styles from "../../styles/bordered-card1.module.scss";

// Images
import arrow from "../../assets/images/arrow.svg";
import Link from "next/link";

// React Intl
import { useRouter } from "next/router";

const BorderedCard1 = ({ data }) => {
  const { locale } = useRouter();
  const Arabic = locale?.includes("ar");

  return (
    <>
      <div
        className={`${styles.bordered_card} ${
          data?.mode === "dark" && styles.dark
        } ${Arabic ? styles.bordered_card_Arabic : ""}`}
        dir={Arabic ? "rtl" : ""}
        style={{
          backgroundImage: `url('${data?.cardImg && data?.cardImg.src}')`,
        }}
      >
        <div className={styles.bordered_card_icon}>
          <div>
            {data?.icon !== "" ? (
              <Image src={data?.icon} width={50} height={50} alt="" />
            ) : (
              `0${data?.index + 1}`
            )}
          </div>
          {data?.link !== "" ? (
            <Link href={data?.link}>
              <span>{Arabic ? "اقرأ أكثر" : "Read More"}</span>
              <Image src={arrow} width={12} height={12} alt="" />
            </Link>
          ) : (
            ""
          )}
        </div>
        {data?.title ? (
          <>
            <h3>
              <span>{data?.title}</span>
              {data?.subtitle ? (
                <h4>
                  <span>{data?.subtitle}</span>
                </h4>
              ) : (
                ""
              )}
            </h3>
          </>
        ) : (
          ""
        )}
        {data?.desc ? <p>{data?.desc}</p> : ""}
      </div>
    </>
  );
};

export default BorderedCard1;
