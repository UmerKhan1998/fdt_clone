import React from "react";
import styles from "../../styles/job-openings.module.scss";

// React Intl
import { useTranslations } from "next-intl";
import { useRouter } from "next/router";

// Compnonent
import JobOpeningCard from "./JobOpeningCard";
import Select from "react-select";

const JobOpenings = () => {
  const { locale } = useRouter();
  const Arabic = locale?.includes("ar");
  const t = useTranslations("JobOpenings");

  const JobOpenings = [
    {
      title: t("JobOpening1Title"),
      address: t("JobOpening1Address"),
      date: "17 July 2023",
      desc: t("JobOpening1Desc"),
      link: "/careers/vapt-manager",
    },
    {
      title: t("JobOpening2Title"),
      address: t("JobOpening2Address"),
      date: "17 July 2023",
      desc: t("JobOpening2Desc"),
      link: "/careers/iam-manager",
    },
    {
      title: t("JobOpening3Title"),
      address: t("JobOpening3Address"),
      date: "17 July 2023",
      desc: t("JobOpening3Desc"),
      link: "/careers/international-sales-executive",
    },
    {
      title: t("JobOpening4Title"),
      address: t("JobOpening4Address"),
      date: "17 July 2023",
      desc: t("JobOpening4Desc"),
      link: "/careers/data-protection-manager",
    },
  ];

  const IntersetedOption = [
    {
      label: "Karachi",
      value: "Karachi",
    },
    {
      label: "Lahore",
      value: "Lahore",
    },
    {
      label: "Faisalabad",
      value: "Faisalabad",
    },
  ];

  return (
    <div className={`${styles.job_openings} ${Arabic ? styles.job_openings_Arabic : ""}`}>
      <div className={styles.job_openings_wrapper}>
        <div className={styles.job_openings_title}>
          <h2>{t("Job openings")}</h2>
        </div>
        {/* <div className={styles.job_openings_filters}>
          <div className={styles.job_openings_filters_select}>
            <Select 
              placeholder={t("Select City")}
              options={IntersetedOption}
              className="DarkBorderSelect"
            />
          </div>
          <div className={styles.job_openings_filters_select}>
            <Select 
              placeholder={t("Select Department")}
              options={IntersetedOption}
              className="DarkBorderSelect"
            />
          </div>
          <div className={styles.job_openings_filters_search}>
            <div className={styles.IconInput}>
              <input placeholder={t("Find your job")} />
              <button>{t("Submit")}</button>
            </div>
          </div>
        </div> */}
        <div className={styles.job_openings_cards}>
          {JobOpenings?.map((item, index) => (
            <div className={styles.job_openings_card} key={index}>
              <JobOpeningCard data={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobOpenings;
