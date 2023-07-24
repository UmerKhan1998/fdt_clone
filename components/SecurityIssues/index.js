import React, { useState } from "react";
import Image from "next/image";
import styles from "../../styles/security-issues.module.scss";

// React Intl
import { useTranslations } from "next-intl";
import { useRouter } from "next/router";

// Images
import arrow from "../../assets/images/arrow.svg";

const SecurityIssues = () => {
  const { locale } = useRouter();
  const t = useTranslations("SecurityIssues");
  const Arabic = locale?.includes("ar");

  const SecurityIssues = [
    {
      name: t("Identity theft"),
      link: "#",
    },
    {
      name: t("Unauthorized access"),
      link: "#",
    },
    {
      name: t("Data breaches - Insider threats"),
      link: "#",
    },
    {
      name: t("Compliance violations"),
      link: "#",
    },
    {
      name: t("Security incidents"),
      link: "#",
    },
    {
      name: t("Misconfigurations & Missetup"),
      link: "#",
    },
    {
      name: t("Weak passwords"),
      link: "#",
    },
    {
      name: t("insider threats"),
      link: "#",
    },
  ];

  return (
    <>
      <div
        className={`${styles.security_issues} ${
          Arabic ? styles.security_issues_Arabic : ""
        }`}
      >
        <div className={styles.security_issues_wrapper}>
          <div className={styles.security_issues_cols}>
            <div className={styles.security_issues_col_left}>
              <span>{t("Security Issues")}</span>
              <h2>
                {t("Issues Under The Umbrella Of IAM, PAM, GRC, DLP And SIEM")}
              </h2>
            </div>
            <div className={styles.security_issues_col_right}>
              <div className={styles.security_issues_col_right_list}>
                <div className={styles.security_issues_col_right_list_col}>
                  <ul>
                    {SecurityIssues?.map((item, index) => (
                      <li key={index}>
                        <a href={item?.link}>
                          <div>{String(index + 1).padStart(2, "0")}</div>
                          <div>
                            <span>{item?.name}</span>{" "}
                            <span>
                              <Image
                                src={arrow}
                                width={12}
                                height={12}
                                alt=""
                              />
                            </span>
                          </div>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SecurityIssues;
