import React from "react";
import Image from "next/image";
import styles from "../../styles/job-opening-card.module.scss";

// React Intl
import { useTranslations } from "next-intl";
import { useRouter } from "next/router";
import Link from "next/link";

const JobOpeningCard = (data) => {
  const { locale } = useRouter();
  const t = useTranslations("JobOpeningCard");
  const Arabic = locale?.includes("ar");

  return (
    <div
      className={`${styles.job_opening_card} ${Arabic ? styles.job_opening_card_Arabic : ""
        }`}
    >
      <div className={styles.job_opening_card_title}>
        <h2>{data?.data?.title}</h2>
        <p>{data?.data?.address}</p>
        <h5>{data?.data?.date}</h5>
      </div>
      <div className={styles.job_opening_card_desc}>
        <h2>{t("Description")}</h2>
        <p>{data?.data?.desc}</p>
      </div>
      <div className={styles.job_opening_card_btn}>
        <Link href={data?.data?.link}>
          {t("Apply Now")}{" "}
          <span className={styles.job_opening_card_arrow}></span>
        </Link>
      </div>
    </div>
  );
};

export default JobOpeningCard;
