import React from "react";
// Css
import styles from "../../styles/carees_detail.module.scss";
// Images
import Image from "next/image";
import JobOpeningCard from "../JobOpenings/JobOpeningCard";
// Components

// React Intl
import { useTranslations } from "next-intl";
import { useRouter } from "next/router";

const CareesDetail = ({ Data, JobOpenings }) => {
  const { locale } = useRouter();
  const Arabic = locale?.includes("ar");
  const t = useTranslations("Job_description1");



  return (
    <>

    </>
  );
};

export default CareesDetail;
