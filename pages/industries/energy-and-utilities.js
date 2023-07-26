import Head from "next/head";
import React from "react";

// Images
import InternalBanner from "@/assets/images/SubIndustryBanner.png";

// React Intl
import { useTranslations } from "next-intl";

// Components
import Banner from "@/components/banner/Banner";
import TextSection from "@/components/TextSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import TalkUsNowSection from "@/components/shared/TalkUsNowSection";
import GeoLocationComp from "@/components/GeoLocationComp";

const EnergyAndUtilities = () => {
  const Meta = useTranslations("Meta");
  const t = useTranslations("EnergyAndUtilitiesBanner");
  const t1 = useTranslations("EnergyAndUtilitiesTextSection1");
  const t2 = useTranslations("EnergyAndUtilitiesTextSection2");
  const t3 = useTranslations("EnergyAndUtilitiesTextSection3");
  const t4 = useTranslations("EnergyAndUtilitiesTextSection4");
  const t5 = useTranslations("EnergyAndUtilitiesWhyChooseUs1");
  const t6 = useTranslations("EnergyAndUtilitiesWhyChooseUs2");
  const t7 = useTranslations("EnergyAndUtilitiesWhyChooseUs3");
  const t8 = useTranslations("EnergyAndUtilitiesWhyChooseUs4");
  const t9 = useTranslations("EnergyAndUtilitiesTextSection5");
  const t10 = useTranslations("EnergyAndUtilitiesTextSection6");
  const TranslationTalkUsNowSection = useTranslations("TalkUsNowSection1");

  const EnergyAndUtilitiesWhyChooseUs1Cards = [
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
  const EnergyAndUtilitiesWhyChooseUs2Cards = [
    {
      icon: "",
      link: "",
      title: t6("card1Title"),
      dec: t6("card1Desc"),
    },
    {
      icon: "",
      link: "",
      title: t6("card2Title"),
      dec: t6("card2Desc"),
    },
    {
      icon: "",
      link: "",
      title: t6("card3Title"),
      dec: t6("card3Desc"),
    },
    {
      icon: "",
      link: "",
      title: t6("card4Title"),
      dec: t6("card4Desc"),
    },
  ];
  const EnergyAndUtilitiesWhyChooseUs3Cards = [
    {
      icon: "",
      link: "",
      title: t7("card1Title"),
      dec: t7("card1Desc"),
    },
    {
      icon: "",
      link: "",
      title: t7("card2Title"),
      dec: t7("card2Desc"),
    },
    {
      icon: "",
      link: "",
      title: t7("card3Title"),
      dec: t7("card3Desc"),
    },
    {
      icon: "",
      link: "",
      title: t7("card4Title"),
      dec: t7("card4Desc"),
    },
  ];
  const EnergyAndUtilitiesWhyChooseUs4Cards = [
    {
      icon: "",
      link: "",
      title: t8("card1Title"),
      dec: t8("card1Desc"),
    },
    {
      icon: "",
      link: "",
      title: t8("card2Title"),
      dec: t8("card2Desc"),
    },
    {
      icon: "",
      link: "",
      title: t8("card3Title"),
      dec: t8("card3Desc"),
    },
    {
      icon: "",
      link: "",
      title: t8("card4Title"),
      dec: t8("card4Desc"),
    },
  ];

  return (
    <>
      <Head>
        <title>{Meta("EnergyAndUtilitiesTitle")}</title>
        <meta name="description" content={Meta("EnergyAndUtilitiesDesc")} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />

        <meta property="og:title" content={Meta("EnergyAndUtilitiesTitle")} />
        <meta property="og:site_name" content="Fast Digital Technology" />
        <meta property="og:url" content="https://fastdigitaltechnology.com" />
        <meta property="og:description" content={Meta("EnergyAndUtilitiesDesc")} />
        <meta property="og:type" content="website"></meta>
      </Head>

      <GeoLocationComp />

      <Banner
        title={t("title")}
        dec={t("dec")}
        subdetail={''}
        titleWidth={'60%'}
        bannerImage={InternalBanner}
      />
      <TextSection
        title={t1("title")}
        subtitle={""}
        desc={t1("desc")}
        maxWidth={""}
        textAlign={""}
        mode={""}
      />
      <TextSection
        title={t2("title")}
        subtitle={""}
        desc={t2("desc")}
        maxWidth={""}
        textAlign={""}
        mode={"dark"}
      />
      <TextSection
        title={t3("title")}
        subtitle={""}
        desc={t3("desc")}
        maxWidth={""}
        textAlign={""}
        mode={""}
      />
      <TextSection
        title={t4("title")}
        subtitle={""}
        desc={t4("desc")}
        maxWidth={""}
        textAlign={""}
        mode={"dark"}
      />
      <WhyChooseUs
        title={t5("title")}
        subtitle={""}
        dec={t5("dec")}
        data={EnergyAndUtilitiesWhyChooseUs1Cards}
        mode=""
        brandLogo={""}
      />
      <WhyChooseUs
        title={t6("title")}
        subtitle={""}
        dec={t6("dec")}
        data={EnergyAndUtilitiesWhyChooseUs2Cards}
        mode="dark"
        brandLogo={""}
      />
      <WhyChooseUs
        title={t7("title")}
        subtitle={""}
        dec={t7("dec")}
        data={EnergyAndUtilitiesWhyChooseUs3Cards}
        mode=""
        brandLogo={""}
      />
      <WhyChooseUs
        title={t8("title")}
        subtitle={""}
        dec={t8("dec")}
        data={EnergyAndUtilitiesWhyChooseUs4Cards}
        mode="dark"
        brandLogo={""}
      />
      <TextSection
        title={t9("title")}
        subtitle={""}
        desc={t9("desc")}
        maxWidth={""}
        textAlign={""}
        mode={""}
      />
      <TextSection
        title={t10("title")}
        subtitle={""}
        desc={t10("desc")}
        maxWidth={""}
        textAlign={""}
        mode={"dark"}
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

export default EnergyAndUtilities;
