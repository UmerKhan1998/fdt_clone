import React from "react";
import Banner from "@/components/banner/Banner";
// Image
import InternalBanner from "@/assets/images/InternalBanner.png";
// React Intl
import { useTranslations } from "next-intl";
import BlogDetailComp from "@/components/BlogDetailComp/BlogDetailComp";

const index = () => {
  const t = useTranslations("BlogDetail");

  return (
    <>
      <Banner title={t("Title")} bannerImage={InternalBanner} titleWidth={'90%'} />
      <BlogDetailComp />
    </>
  );
};

export default index;
