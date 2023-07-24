import React from "react";
import Image from "next/image";
import styles from "../../styles/our-experts.module.scss";

// Images
import ourExperts from "../../assets/images/ourExperts.svg";
import arrow from "../../assets/images/arrow.svg";

// React Intl
import { useTranslations } from "next-intl";
import { useRouter } from "next/router";
// Framer Motion
import Link from "next/link";

const OurExperts = () => {
  const { locale } = useRouter();
  const t = useTranslations("OurExperts");
  const Arabic = locale?.includes("ar");

  const OurExperts = [
    {
      name: t("Cybersecurity Experts"),
      link: "/our-experts#cybersecurity-experts",
    },
    {
      name: t("DevOps Engineer"),
      link: "/our-experts#DevOps-engineer",
    },
    {
      name: t("Cloud Engineers"),
      link: "/our-experts#cloud-engineers",
    },
    {
      name: t("AI Experts"),
      link: "/our-experts#ai-experts",
    },
  ];

  return (
    <>
      <div
        className={`${styles.our_experts} ${
          Arabic ? styles.our_experts_Arabic : ""
        }`}
      >
        <div className={styles.our_experts_wrapper}>
          <div className={styles.our_experts_title}>
            <span>{t("Our Experts")}</span>
            <h2>{t("Discover Our Skilled and Talented Specialists")}</h2>
          </div>
          <div className={styles.our_experts_cols}>
            <div>
              <ul className={styles.our_experts_list}>
                {OurExperts?.map((item, index) => (
                  <li key={index}>
                    <Link href={item?.link}>
                      <span className={styles.our_experts_list_count}>
                        <span>{String(index + 1).padStart(2, "0")}</span>
                      </span>
                      <span className={styles.our_experts_list_text}>
                        {item?.name}
                      </span>
                      <span className={styles.our_experts_list_icon}>
                        <Image src={arrow} width={12} height={12} alt="" />
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
              <Link href={"/our-experts"} className={styles.our_experts_link}>
                {t("Get Started")}
              </Link>
            </div>
            <div>
              <Image src={ourExperts} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurExperts;
