import Head from "next/head";
import React from "react";

// Images
import InternalBanner from "@/assets/images/InternalBanner.png";

// Arabic
import { useTranslations } from "next-intl";
import Banner from "@/components/banner/Banner";
import CareesDetail from "@/components/CareerDetail/CareesDetail";
import ContactForm from "@/components/ContactIsForm/ContactForm";
import GeoLocationComp from "@/components/GeoLocationComp";
const index = () => {
  const t = useTranslations("Career_detail");

  return (
    <>
      <GeoLocationComp />

      <Head>
        <title>{t("Software/Engineer developer")}</title>
        <meta name="description" content={t("Software/Engineer developer")} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />

        <meta property="og:title" content={t("Software/Engineer developer")} />
        <meta property="og:site_name" content="Fast Digital Technology" />
        <meta property="og:url" content="https://fastdigitaltechnology.com" />
        <meta property="og:description" content={t("Software/Engineer developer")} />
        <meta property="og:type" content="website"></meta>
      </Head>
      <Banner title={t("Software/Engineer developer")} titleWidth={"100%"} dec={""} bannerImage={InternalBanner} />
      {/* <CareesDetail /> */}
      <ContactForm />
    </>
  );
};

export default index;
