import React from "react";

// Images
import GovernmentBanner from "@/assets/images/GovernmentBanner.png";
import FinanceAndBankingExpertStrategiesImg1 from "@/assets/images/FinanceAndBankingExpertStrategiesImg1.png";
import FinanceAndBankingExpertStrategiesImg2 from "@/assets/images/FinanceAndBankingExpertStrategiesImg2.png";

// React Intl
import { useTranslations } from "next-intl";

// Components
import Banner from "@/components/banner/Banner";
import Head from "next/head";
import ExpertStrategies from "@/components/ExpertStrategies";
import WhyChooseUs from "@/components/WhyChooseUs";
import TalkUsNowSection from "@/components/shared/TalkUsNowSection";
import ContactForm from "@/components/ContactIsForm/ContactForm";
import GeoLocationComp from "@/components/GeoLocationComp";

const Government = () => {
  const Meta = useTranslations("Meta");
  const t = useTranslations("GovernmentBanner");
  const t1 = useTranslations("GovernmentExpertStrategies");
  const t3 = useTranslations("GovernmentWhyChooseUs1");
  const t4 = useTranslations("GovernmentWhyChooseUs2");
  const t5 = useTranslations("GovernmentWhyChooseUs3");
  const t6 = useTranslations("GovernmentWhyChooseUs4");
  const TalkUsNowSection25 = useTranslations("TalkUsNowSection25");

  const GovernmentWhyChooseUs1Cards = [
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
  const GovernmentWhyChooseUs2Cards = [
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
  ];
  const GovernmentWhyChooseUs3Cards = [
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
    {
      icon: "",
      link: "",
      title: t5("card5Title"),
      dec: t5("card5Desc"),
    },
    {
      icon: "",
      link: "",
      title: t5("card6Title"),
      dec: t5("card6Desc"),
    },
  ];
  const GovernmentWhyChooseUs4Cards = [
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
    {
      icon: "",
      link: "",
      title: t6("card5Title"),
      dec: t6("card5Desc"),
    },
  ];

  return (
    <>
      <Head>
        <title>{Meta("GovernmentTitle")}</title>
        <meta name="description" content={Meta("GovernmentDesc")} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />

        <meta property="og:title" content={Meta("GovernmentTitle")} />
        <meta property="og:site_name" content="Fast Digital Technology" />
        <meta property="og:url" content="https://fastdigitaltechnology.com" />
        <meta property="og:description" content={Meta("GovernmentDesc")} />
        <meta property="og:type" content="website"></meta>
      </Head>

      <GeoLocationComp />

      <Banner
        title={t("title")}
        dec={t("dec")}
        subdetail={t("subdetail")}
        titleWidth={'100%'}
        bannerImage={GovernmentBanner}
      />
      <ExpertStrategies
        title={t1('title')}
        desc={t1('desc')}
        img1={FinanceAndBankingExpertStrategiesImg1.src}
        img2={FinanceAndBankingExpertStrategiesImg2.src}
        link={""}
        mode={""}
      />
      <WhyChooseUs
        title={t3("title")}
        subtitle={""}
        dec={t3("dec")}
        data={GovernmentWhyChooseUs1Cards}
        mode=""
        brandLogo={""}
      />
      <WhyChooseUs
        title={t4("title")}
        subtitle={""}
        dec={t4("dec")}
        data={GovernmentWhyChooseUs2Cards}
        mode="dark"
        brandLogo={""}
      />
      <TalkUsNowSection
        title={TalkUsNowSection25("title")}
        desc={TalkUsNowSection25("desc")}
        link={"/contact-us"}
        linkText={TalkUsNowSection25("linkText")}
        background={""}
      />
      <WhyChooseUs
        title={t5("title")}
        subtitle={""}
        dec={t5("dec")}
        data={GovernmentWhyChooseUs3Cards}
        mode=""
        brandLogo={""}
      />
      <WhyChooseUs
        title={t6("title")}
        subtitle={""}
        dec={t6("dec")}
        data={GovernmentWhyChooseUs4Cards}
        mode="dark"
        brandLogo={""}
      />
      <ContactForm Image2 />
    </>
  );
};

export default Government;
