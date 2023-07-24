import ImageBanner from "@/components/ImageBanner/ImageBanner";
import Banner from "@/components/banner/Banner";
import React from "react";
// Image
import img from "../../assets/images/servicesImage.svg";
import ExpertsCertified from "@/components/ExpertsCertified";
import EmpoweringDevelopers from "@/components/EmpoweringDevelopers";

// React Intl
import { useTranslations } from "next-intl";
import { useRouter } from "next/router";

const index = () => {
  const { locale } = useRouter();
  const t = useTranslations("ExpertBanner");
  const t1 = useTranslations("ExpertImageBanner");
  const Arabic = locale?.includes("ar");

  return (
    <>
      <Banner title={t("title")} dec={t("desc")} />
      <ImageBanner
        picture={img}
        title={t1("Digital Technology Experts Offer Strategies for Success")}
        subtitle={t1("Proven Strategies for Excelling in the Digital World")}
        dec={t1("desc")}
        brandLogo={""}
        align={""}
        mode={""}
      />
      <EmpoweringDevelopers />
      <ExpertsCertified />
    </>
  );
};

export default index;
