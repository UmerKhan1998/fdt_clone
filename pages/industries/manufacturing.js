import Head from "next/head";
import React from "react";

// Images
import ManufacturingBanner from "@/assets/images/ManufacturingBanner.png";

// React Intl
import { useTranslations } from "next-intl";

// Components
import Banner from "@/components/banner/Banner";
import ServicesChoose from "@/components/ServicesChoose/ServicesChoose";
import WhyChooseUs from "@/components/WhyChooseUs";
import TalkUsNowSection from "@/components/shared/TalkUsNowSection";
import GeoLocationComp from "@/components/GeoLocationComp";

const Manufacturing = () => {
  const Meta = useTranslations("Meta");
  const t = useTranslations("ManufacturingBanner");
  const t1 = useTranslations("ManufacturingServicesChoose1");
  const t2 = useTranslations("ManufacturingWhyChooseUs1");
  const t3 = useTranslations("ManufacturingWhyChooseUs2");
  const TalkUsNowSection28 = useTranslations("TalkUsNowSection28");

  const ManufacturingServicesChoose1Data = [
    {
      icon: "",
      link: "",
      title: t1("card1Title"),
      dec: t1("card1Desc"),
    },
    {
      icon: "",
      link: "",
      title: t1("card2Title"),
      dec: t1("card2Desc"),
    },
    {
      icon: "",
      link: "",
      title: t1("card3Title"),
      dec: t1("card3Desc"),
    },
  ];
  const ManufacturingWhyChooseUs1Cards = [
    {
      icon: "",
      link: "",
      title: t2("card1Title"),
      dec: t2("card1Desc"),
    },
    {
      icon: "",
      link: "",
      title: t2("card2Title"),
      dec: t2("card2Desc"),
    },
    {
      icon: "",
      link: "",
      title: t2("card3Title"),
      dec: t2("card3Desc"),
    },
    {
      icon: "",
      link: "",
      title: t2("card4Title"),
      dec: t2("card4Desc"),
    },
  ];
  const ManufacturingWhyChooseUs2Cards = [
    {
      icon: "",
      link: "",
      title: t3("card1Title"),
      dec: t3("card1Desc"),
    },
    {
      icon: "",
      link: "",
      title: t3("card2Title"),
      dec: t3("card2Desc"),
    },
    {
      icon: "",
      link: "",
      title: t3("card3Title"),
      dec: t3("card3Desc"),
    },
    {
      icon: "",
      link: "",
      title: t3("card4Title"),
      dec: t3("card4Desc"),
    },
  ];

  return (
    <>
      <Head>
        <title>{Meta("ManufacturingTitle")}</title>
        <meta name="description" content={Meta("ManufacturingDesc")} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />

        <meta property="og:title" content={Meta("ManufacturingTitle")} />
        <meta property="og:site_name" content="Fast Digital Technology" />
        <meta property="og:url" content="https://fastdigitaltechnology.com" />
        <meta property="og:description" content={Meta("ManufacturingDesc")} />
        <meta property="og:type" content="website"></meta>
      </Head>

      <GeoLocationComp />

      <Banner
        title={t("title")}
        dec={t("dec")}
        subdetail={""}
        titleWidth={'100%'}
        bannerImage={ManufacturingBanner}
      />
      <WhyChooseUs
        title={t2("title")}
        subtitle={""}
        dec={t2("dec")}
        data={ManufacturingWhyChooseUs1Cards}
        mode=""
        brandLogo={""}
      />
      <ServicesChoose
        title={t1("title")}
        subtitle={""}
        dec={t1("dec")}
        data={ManufacturingServicesChoose1Data}
        mode={"dark"}
        brandLogo={""}
      />
      <WhyChooseUs
        title={t3("title")}
        subtitle={""}
        dec={t3("dec")}
        data={ManufacturingWhyChooseUs2Cards}
        mode=""
        brandLogo={""}
      />
      <TalkUsNowSection
        title={TalkUsNowSection28("title")}
        desc={TalkUsNowSection28("desc")}
        link={"/contact-us"}
        linkText={TalkUsNowSection28("linkText")}
        background={""}
      />
    </>
  );
};

export default Manufacturing;
