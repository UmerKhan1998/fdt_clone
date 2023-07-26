import Head from "next/head";
import React from "react";

// Images
import InternalBanner from "@/assets/images/SubIndustryBanner.png";

// React Intl
import { useTranslations } from "next-intl";

// Components
import Banner from "@/components/banner/Banner";
import ServicesChoose from "@/components/ServicesChoose/ServicesChoose";
import WhyChooseUs from "@/components/WhyChooseUs";
import TalkUsNowSection from "@/components/shared/TalkUsNowSection";
import GeoLocationComp from "@/components/GeoLocationComp";

const Technology = () => {
  const Meta = useTranslations("Meta");
  const t = useTranslations("TechnologyBanner");
  const t1 = useTranslations("TechnologyServicesChoose1");
  const t2 = useTranslations("TechnologyServicesChoose2");
  const t3 = useTranslations("TechnologyServicesChoose3");
  const t4 = useTranslations("TechnologyWhyChooseUs1");
  const t5 = useTranslations("TechnologyWhyChooseUs2");
  const TalkUsNowSection27 = useTranslations("TalkUsNowSection27");

  const TechnologyServicesChoose1Data = [
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
  const TechnologyServicesChoose2Data = [
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
  ];
  const TechnologyServicesChoose3Data = [
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
  ];
  const TechnologyWhyChooseUs1Cards = [
    {
      icon: "",
      link: "",
      title: t4("card1Title"),
      dec: t4("card1Desc"),
    },
    {
      icon: "",
      link: "",
      title: t4("card2Title"),
      dec: t4("card2Desc"),
    },
    {
      icon: "",
      link: "",
      title: t4("card3Title"),
      dec: t4("card3Desc"),
    },
    {
      icon: "",
      link: "",
      title: t4("card4Title"),
      dec: t4("card4Desc"),
    },
    {
      icon: "",
      link: "",
      title: t4("card5Title"),
      dec: t4("card5Desc"),
    },
  ];
  const TechnologyWhyChooseUs2Cards = [
    {
      icon: "",
      link: "",
      title: t5("card1Title"),
      dec: t5("card1Desc"),
    },
    {
      icon: "",
      link: "",
      title: t5("card2Title"),
      dec: t5("card2Desc"),
    },
    {
      icon: "",
      link: "",
      title: t5("card3Title"),
      dec: t5("card3Desc"),
    },
    {
      icon: "",
      link: "",
      title: t5("card4Title"),
      dec: t5("card4Desc"),
    },
  ];

  return (
    <>
      <Head>
        <title>{Meta("TechnologyTitle")}</title>
        <meta name="description" content={Meta("TechnologyDesc")} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />

        <meta property="og:title" content={Meta("TechnologyTitle")} />
        <meta property="og:site_name" content="Fast Digital Technology" />
        <meta property="og:url" content="https://fastdigitaltechnology.com" />
        <meta property="og:description" content={Meta("TechnologyDesc")} />
        <meta property="og:type" content="website"></meta>
      </Head>

      <GeoLocationComp />

      <Banner
        title={t("title")}
        dec={t("dec")}
        subdetail={""}
        titleWidth={'100%'}
        bannerImage={InternalBanner}
      />
      <ServicesChoose
        title={t1("title")}
        subtitle={""}
        data={TechnologyServicesChoose1Data}
        mode={""}
        brandLogo={""}
      />
      <ServicesChoose
        title={t2("title")}
        subtitle={""}
        data={TechnologyServicesChoose2Data}
        mode={"dark"}
        brandLogo={""}
      />
      <ServicesChoose
        title={t3("title")}
        subtitle={""}
        data={TechnologyServicesChoose3Data}
        mode={""}
        brandLogo={""}
      />
      <WhyChooseUs
        title={t4("title")}
        subtitle={""}
        dec={""}
        data={TechnologyWhyChooseUs1Cards}
        mode="dark"
        brandLogo={""}
      />
      <WhyChooseUs
        title={t5("title")}
        subtitle={""}
        dec={t5("dec")}
        data={TechnologyWhyChooseUs2Cards}
        mode=""
        brandLogo={""}
      />
      <TalkUsNowSection
        title={TalkUsNowSection27("title")}
        desc={TalkUsNowSection27("desc")}
        link={"/contact-us"}
        linkText={TalkUsNowSection27("linkText")}
        background={""}
      />
    </>
  );
};

export default Technology;
