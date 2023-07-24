import Head from "next/head";
import React from "react";

// Images
import EducationBanner from "@/assets/images/EducationBanner.png";

// React Intl
import { useTranslations } from "next-intl";

// Components
import Banner from "@/components/banner/Banner";
import WhyChooseUs from "@/components/WhyChooseUs";
import TalkUsNowSection from "@/components/shared/TalkUsNowSection";

const Education = () => {
  const Meta = useTranslations("Meta");
  const t = useTranslations("EducationBanner");
  const t1 = useTranslations("EducationWhyChooseUs1");
  const t2 = useTranslations("EducationWhyChooseUs2");
  const TalkUsNowSection26 = useTranslations("TalkUsNowSection26");

  const EducationWhyChooseUs1Cards = [
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
    {
      icon: "",
      link: "",
      title: t1("card4Title"),
      dec: t1("card4Desc"),
    },
    {
      icon: "",
      link: "",
      title: t1("card5Title"),
      dec: t1("card5Desc"),
    },
    {
      icon: "",
      link: "",
      title: t1("card6Title"),
      dec: t1("card6Desc"),
    },
    {
      icon: "",
      link: "",
      title: t1("card7Title"),
      dec: t1("card7Desc"),
    },
  ];
  const EducationWhyChooseUs2Cards = [
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

  return (
    <>
      <Head>
        <title>{Meta("EducationTitle")}</title>
        <meta name="description" content={Meta("EducationDesc")} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />

        <meta property="og:title" content={Meta("EducationTitle")} />
        <meta property="og:site_name" content="Fast Digital Technology" />
        <meta property="og:url" content="https://fastdigitaltechnology.com" />
        <meta property="og:description" content={Meta("EducationDesc")} />
        <meta property="og:type" content="website"></meta>
      </Head>
      <Banner
        title={t("title")}
        dec={t("dec")}
        subdetail={''}
        titleWidth={'60%'}
        bannerImage={EducationBanner}
      />
      <WhyChooseUs
        title={t1("title")}
        subtitle={""}
        dec={t1("dec")}
        data={EducationWhyChooseUs1Cards}
        mode=""
        brandLogo={""}
      />
      <WhyChooseUs
        title={t2("title")}
        subtitle={""}
        dec={t2("dec")}
        data={EducationWhyChooseUs2Cards}
        mode="dark"
        brandLogo={""}
      />
      <TalkUsNowSection
        title={TalkUsNowSection26("title")}
        desc={TalkUsNowSection26("desc")}
        link={"/contact-us"}
        linkText={TalkUsNowSection26("linkText")}
        background={""}
      />
    </>
  );
};

export default Education;