import Head from "next/head";
import React from "react";

// Images
import RetailBanner from "@/assets/images/RetailBanner.png";
import RetailPenetrationTestingImage from "@/assets/images/FinanceAndBankingPenetrationTestingImage.png";

// React Intl
import { useTranslations } from "next-intl";

// Components
import Banner from "@/components/banner/Banner";
import WhyChooseUs from "@/components/WhyChooseUs";
import PenetrationTesting from "@/components/PenetrationTesting";
import TalkUsNowSection from "@/components/shared/TalkUsNowSection";
import GeoLocationComp from "@/components/GeoLocationComp";

const Retail = () => {
  const Meta = useTranslations("Meta");
  const t = useTranslations("RetailBanner");
  const t1 = useTranslations("RetailWhyChooseUs1");
  const t2 = useTranslations("RetailWhyChooseUs2");
  const t3 = useTranslations("RetailPenetrationTesting");
  const TranslationTalkUsNowSection = useTranslations("TalkUsNowSection1");

  const RetailWhyChooseUs1Cards = [
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
  const RetailWhyChooseUs2Cards = [
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
  const RetailPenetrationTesting1Cards = [
    {
      icon: "",
      link: "",
      title: t3("card1Title"),
      desc: t3("card1Desc"),
    },
    {
      icon: "",
      link: "",
      title: t3("card2Title"),
      desc: t3("card2Desc"),
    },
    {
      icon: "",
      link: "",
      title: t3("card3Title"),
      desc: t3("card3Desc"),
    },
    {
      icon: "",
      link: "",
      title: t3("card4Title"),
      desc: t3("card4Desc"),
    },
    {
      icon: "",
      link: "",
      title: t3("card5Title"),
      desc: t3("card5Desc"),
    },
  ];

  return (
    <>
      <Head>
        <title>{Meta("RetailTitle")}</title>
        <meta name="description" content={Meta("RetailDesc")} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />

        <meta property="og:title" content={Meta("RetailTitle")} />
        <meta property="og:site_name" content="Fast Digital Technology" />
        <meta property="og:url" content="https://fastdigitaltechnology.com" />
        <meta property="og:description" content={Meta("RetailDesc")} />
        <meta property="og:type" content="website"></meta>
      </Head>

      <GeoLocationComp />

      <Banner
        title={t("title")}
        dec={t("dec")}
        subdetail={t("subdetail")}
        titleWidth={'100%'}
        bannerImage={RetailBanner}
      />
      <WhyChooseUs
        title={t1("title")}
        subtitle={""}
        dec={""}
        data={RetailWhyChooseUs1Cards}
        mode=""
        brandLogo={""}
      />
      <WhyChooseUs
        title={t2("title")}
        subtitle={""}
        dec={""}
        data={RetailWhyChooseUs2Cards}
        mode="dark"
        brandLogo={""}
      />
      <PenetrationTesting
        title={t3('title')}
        subtitle={t3('subtitle')}
        image={RetailPenetrationTestingImage}
        desc1={""}
        desc2={""}
        data={RetailPenetrationTesting1Cards}
        mode=""
      />
      <TalkUsNowSection
        title={TranslationTalkUsNowSection("title")}
        desc={TranslationTalkUsNowSection("desc")}
        link={"/contact-us"}
        linkText={TranslationTalkUsNowSection("linkText")}
        background={""}
      />
    </>
  );
};

export default Retail;
