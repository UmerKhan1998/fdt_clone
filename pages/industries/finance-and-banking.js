import Head from "next/head";
import React from "react";

// Images
import FinanceAndBankingBanner from "@/assets/images/FinanceAndBankingBanner.png";
import FinanceAndBankingExpertStrategiesImg1 from "@/assets/images/FinanceAndBankingExpertStrategiesImg1.png";
import FinanceAndBankingExpertStrategiesImg2 from "@/assets/images/FinanceAndBankingExpertStrategiesImg2.png";
import FinanceAndBankingPenetrationTestingImage from "@/assets/images/FinanceAndBankingPenetrationTestingImage.png";
import FinanceAndBankingPenetrationTestingIcon1 from "@/assets/images/FinanceAndBankingPenetrationTestingIcon1.svg";
import FinanceAndBankingPenetrationTestingIcon2 from "@/assets/images/FinanceAndBankingPenetrationTestingIcon2.svg";
import FinanceAndBankingPenetrationTestingIcon3 from "@/assets/images/FinanceAndBankingPenetrationTestingIcon3.svg";
import FinanceAndBankingPenetrationTestingIcon4 from "@/assets/images/FinanceAndBankingPenetrationTestingIcon4.svg";
import FinanceAndBankingPenetrationTestingIcon5 from "@/assets/images/FinanceAndBankingPenetrationTestingIcon5.svg";

// React Intl
import { useTranslations } from "next-intl";

// Components
import Banner from "@/components/banner/Banner";
import ExpertStrategies from "@/components/ExpertStrategies";
import WhyChooseUs from "@/components/WhyChooseUs";
import ServicesChoose from "@/components/ServicesChoose/ServicesChoose";
import TalkUsNowSection from "@/components/shared/TalkUsNowSection";
import PenetrationTesting from "@/components/PenetrationTesting";
import ContactForm from "@/components/ContactIsForm/ContactForm";

const FinancAndBanking = () => {
  const Meta = useTranslations("Meta");
  const t = useTranslations("FinanceAndBankingBanner");
  const t1 = useTranslations("FinanceAndBankingExpertStrategies");
  const t2 = useTranslations("FinanceAndBankingWhyChooseUs1");
  const t3 = useTranslations("FinanceAndBankingServicesChoose1");
  const t4 = useTranslations("FinanceAndBankingWhyChooseUs2");
  const t5 = useTranslations("FinanceAndBankingServicesChoose2");
  const t6 = useTranslations("FinanceAndBankingPenetrationTesting");
  const t7 = useTranslations("FinanceAndBankingWhyChooseUs3");
  const TalkUsNowSection23 = useTranslations("TalkUsNowSection23");

  const FinanceAndBankingWhyChooseUs1Cards = [
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
  const FinanceAndBankingWhyChooseUs2Cards = [
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
  const FinanceAndBankingWhyChooseUs3Cards = [
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
      title: t7("card5Title"),
      dec: t7("card5Desc"),
    },
    {
      icon: "",
      link: "",
      title: t7("card4Title"),
      dec: t7("card4Desc"),
    },
  ];
  const FinanceAndBankingServicesChoose1Data = [
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
  const FinanceAndBankingServicesChoose2Data = [
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
  ];
  const FinanceAndBankingPenetrationTesting2Cards = [
    {
      icon: FinanceAndBankingPenetrationTestingIcon1,
      link: "",
      title: t6("card1Title"),
      desc: t6("card1Desc"),
    },
    {
      icon: FinanceAndBankingPenetrationTestingIcon2,
      link: "",
      title: t6("card2Title"),
      desc: t6("card2Desc"),
    },
    {
      icon: FinanceAndBankingPenetrationTestingIcon3,
      link: "",
      title: t6("card3Title"),
      desc: t6("card3Desc"),
    },
    {
      icon: FinanceAndBankingPenetrationTestingIcon4,
      link: "",
      title: t6("card4Title"),
      desc: t6("card4Desc"),
    },
    {
      icon: FinanceAndBankingPenetrationTestingIcon5,
      link: "",
      title: t6("card5Title"),
      desc: t6("card5Desc"),
    },
  ];

  return (
    <>
      <Head>
        <title>{Meta("FinanceAndBankingTitle")}</title>
        <meta name="description" content={Meta("FinanceAndBankingDesc")} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />

        <meta property="og:title" content={Meta("FinanceAndBankingTitle")} />
        <meta property="og:site_name" content="Fast Digital Technology" />
        <meta property="og:url" content="https://fastdigitaltechnology.com" />
        <meta property="og:description" content={Meta("FinanceAndBankingDesc")} />
        <meta property="og:type" content="website"></meta>
      </Head>
      <Banner
        title={t("title")}
        dec={t("dec")}
        subdetail={''}
        titleWidth={'60%'}
        bannerImage={FinanceAndBankingBanner}
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
        title={t2("title")}
        subtitle={""}
        data={FinanceAndBankingWhyChooseUs1Cards}
        mode=""
        brandLogo={""}
      />
      <ServicesChoose
        title={t3("title")}
        subtitle={""}
        data={FinanceAndBankingServicesChoose1Data}
        mode={"dark"}
        brandLogo={""}
      />
      <WhyChooseUs
        title={t4("title")}
        subtitle={""}
        data={FinanceAndBankingWhyChooseUs2Cards}
        mode=""
        brandLogo={""}
      />
      <ServicesChoose
        title={t5("title")}
        subtitle={""}
        data={FinanceAndBankingServicesChoose2Data}
        mode={"dark"}
        brandLogo={""}
      />
      <TalkUsNowSection
        title={TalkUsNowSection23("title")}
        desc={TalkUsNowSection23("desc")}
        link={"/contact-us"}
        linkText={TalkUsNowSection23("linkText")}
        background={""}
      />
      <PenetrationTesting
        title={t6('title')}
        subtitle={t6('subtitle')}
        image={FinanceAndBankingPenetrationTestingImage}
        desc1={t6('desc1')}
        desc2={t6('desc2')}
        data={FinanceAndBankingPenetrationTesting2Cards}
        mode="dark"
      />
      <WhyChooseUs
        title={t7("title")}
        subtitle={""}
        data={FinanceAndBankingWhyChooseUs3Cards}
        mode=""
        brandLogo={""}
      />
      <ContactForm Image2 />
    </>
  );
};

export default FinancAndBanking;
