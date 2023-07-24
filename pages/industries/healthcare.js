import Head from "next/head";
import React from "react";

// Images
import HealthcareBanner from "@/assets/images/HealthcareBanner.png";
import FinanceAndBankingExpertStrategiesImg1 from "@/assets/images/FinanceAndBankingExpertStrategiesImg1.png";
import FinanceAndBankingExpertStrategiesImg2 from "@/assets/images/FinanceAndBankingExpertStrategiesImg2.png";

// React Intl
import { useTranslations } from "next-intl";

// Components
import Banner from "@/components/banner/Banner";
import ExpertStrategies from "@/components/ExpertStrategies";
import WhyChooseUs from "@/components/WhyChooseUs";
import ServicesChoose from "@/components/ServicesChoose/ServicesChoose";
import TalkUsNowSection from "@/components/shared/TalkUsNowSection";
import ContactForm from "@/components/ContactIsForm/ContactForm";

const FinancAndBanking = () => {
  const Meta = useTranslations("Meta");
  const t = useTranslations("HealthcareBanner");
  const t1 = useTranslations("HealthcareExpertStrategies");
  const t2 = useTranslations("HealthcareWhyChooseUs1");
  const t3 = useTranslations("HealthcareServicesChoose1");
  const t4 = useTranslations("HealthcareWhyChooseUs2");
  const TalkUsNowSection24 = useTranslations("TalkUsNowSection24");

  const HealthcareWhyChooseUs1Cards = [
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
    {
      icon: "",
      link: "",
      title: t2("card5Title"),
      dec: t2("card5Desc"),
    },
    {
      icon: "",
      link: "",
      title: t2("card6Title"),
      dec: t2("card6Desc"),
    },
    {
      icon: "",
      link: "",
      title: t2("card7Title"),
      dec: t2("card7Desc"),
    },
  ];
  const HealthcareWhyChooseUs2Cards = [
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
    {
      icon: "",
      link: "",
      title: t4("card6Title"),
      dec: t4("card6Desc"),
    },
    {
      icon: "",
      link: "",
      title: t4("card7Title"),
      dec: t4("card7Desc"),
    },
    {
      icon: "",
      link: "",
      title: t4("card8Title"),
      dec: t4("card8Desc"),
    },
    {
      icon: "",
      link: "",
      title: t4("card9Title"),
      dec: t4("card9Desc"),
    },
  ];
  const HealthcareServicesChoose1Data = [
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

  return (
    <>
      <Head>
        <title>{Meta("HealthcareTitle")}</title>
        <meta name="description" content={Meta("HealthcareDesc")} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
        
        <meta property="og:title" content={Meta("HealthcareTitle")} />
        <meta property="og:site_name" content="Fast Digital Technology" />
        <meta property="og:url" content="https://fastdigitaltechnology.com" />
        <meta property="og:description" content={Meta("HealthcareDesc")} />
        <meta property="og:type" content="website"></meta>
      </Head>
      <Banner
        title={t("title")}
        dec={t("dec")}
        subdetail={t("subdetail")}
        titleWidth={'70%'}
        bannerImage={HealthcareBanner}
      />
      <ExpertStrategies
        title={t1('title1')}
        desc={t1('desc1')}
        img1={FinanceAndBankingExpertStrategiesImg1.src}
        img2={FinanceAndBankingExpertStrategiesImg2.src}
        link={""}
        mode={""}
      />
      <WhyChooseUs
        title={t2("title")}
        subtitle={""}
        data={HealthcareWhyChooseUs1Cards}
        mode=""
        brandLogo={""}
      />
      <ServicesChoose
        title={t3("title")}
        subtitle={""}
        data={HealthcareServicesChoose1Data}
        mode={"dark"}
        brandLogo={""}
      />
      <ExpertStrategies
        title={t1('title2')}
        desc={t1('desc2')}
        img1={FinanceAndBankingExpertStrategiesImg1.src}
        img2={FinanceAndBankingExpertStrategiesImg2.src}
        link={""}
        mode={"dark"}
      />
      <WhyChooseUs
        title={t4("title")}
        subtitle={""}
        dec={t4('dec')}
        data={HealthcareWhyChooseUs2Cards}
        mode=""
        brandLogo={""}
      />
      <TalkUsNowSection
        title={TalkUsNowSection24("title")}
        desc={TalkUsNowSection24("desc")}
        link={"/contact-us"}
        linkText={TalkUsNowSection24("linkText")}
        background={""}
      />
      <ContactForm Image2 />
    </>
  );
};

export default FinancAndBanking;
