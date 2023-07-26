import Head from "next/head";
import React from "react";

// Image
import InternalBanner from "@/assets/images/InternalBanner.png";

// Components
import Banner from "@/components/banner/Banner";
import { useTranslations } from "next-intl";
import ContactForm from "@/components/ContactIsForm/ContactForm";
import GeoLocationComp from "@/components/GeoLocationComp";

const index = () => {
  const Meta = useTranslations("Meta");
  const t = useTranslations("Contactus");
  
  return (
    <>
      <Head>
        <title>{Meta("ContactUsTitle")}</title>
        <meta name="description" content={Meta("ContactUsDesc")} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />

        <meta property="og:title" content={Meta("ContactUsTitle")} />
        <meta property="og:site_name" content="Fast Digital Technology" />
        <meta property="og:url" content="https://fastdigitaltechnology.com" />
        <meta property="og:description" content={Meta("ContactUsDesc")} />
        <meta property="og:type" content="website"></meta>
      </Head>

      <GeoLocationComp />

      <Banner title={t("Contact us")} dec={t("desc")} bannerImage={InternalBanner} />
      <ContactForm />
    </>
  );
};

export default index;
