import React from "react";
import Banner from "@/components/banner/Banner";
// Image
import InternalBanner from "@/assets/images/InternalBanner.png";
// React Intl
import { useTranslations } from "next-intl";
import BlogDetailComp from "@/components/BlogDetailComp/BlogDetailComp";
import GeoLocationComp from "@/components/GeoLocationComp";

const index = () => {
  const t = useTranslations("BlogDetail");

  return (
    <>
      <GeoLocationComp />

      <Banner title={t("Title")} bannerImage={InternalBanner} titleWidth={'90%'} />
      <BlogDetailComp />
    </>
  );
};

export default index;
