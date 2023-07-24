import Head from "next/head";
import ProvenProcess from "@/components/ProvenProcess";
import IndustrieService from "@/components/SubIndustries/IndustrieService";
import SubIndustriesChoose from "@/components/SubIndustries/SubIndustriesChoose";
import WhyChooseUs from "@/components/WhyChooseUs";
import Banner from "@/components/banner/Banner";
import React from "react";

// React Intl
import { useTranslations } from "next-intl";

// Images
import InternalBanner from "@/assets/images/SubIndustryBanner.png";
import siem from "../../../assets/images/siem.svg";
import ContactForm from "@/components/ContactIsForm/ContactForm";
import TalkUsNowSection from "@/components/shared/TalkUsNowSection";

const index = () => {
  const Meta = useTranslations("Meta");
  const t = useTranslations("SubIndestries");
  const t8 = useTranslations("IAMServiceProvenProcess");
  const SubIndustryWhyChooseUs = useTranslations("SubIndustryWhyChooseUs");
  const t5 = useTranslations("TalkUsNowSection1");

  const SliderData = [
    {
      icon: siem,
      link: "",
      title: SubIndustryWhyChooseUs("card1Title"),
      dec: SubIndustryWhyChooseUs("card1Desc"),
    },
    {
      icon: siem,
      link: "",
      title: SubIndustryWhyChooseUs("card2Title"),
      dec: SubIndustryWhyChooseUs("card2Desc"),
    },
    {
      icon: siem,
      link: "",
      title: SubIndustryWhyChooseUs("card3Title"),
      dec: SubIndustryWhyChooseUs("card3Desc"),
    },
    {
      icon: siem,
      link: "",
      title: SubIndustryWhyChooseUs("card4Title"),
      dec: SubIndustryWhyChooseUs("card4Desc"),
    },
  ];
  const IAMServiceProvenProcessList = [
    {
      title: t8("card1Title"),
      desc: t8("card1Desc")
    },
    {
      title: t8("card2Title"),
      desc: t8("card2Desc")
    },
    {
      title: t8("card3Title"),
      desc: t8("card3Desc")
    },
    {
      title: t8("card4Title"),
      desc: t8("card4Desc")
    },
  ];

  return (
    <>
      <Head>
        <title>{Meta("SubIndustryTitle")}</title>
        <meta name="description" content={Meta("SubIndustryDesc")} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />

        <meta property="og:title" content={Meta("SubIndustryTitle")} />
        <meta property="og:site_name" content="Fast Digital Technology" />
        <meta property="og:url" content="https://fastdigitaltechnology.com" />
        <meta property="og:description" content={Meta("SubIndustryDesc")} />
        <meta property="og:type" content="website"></meta>
      </Head>
      <Banner
        title={t("finance and Banking")}
        dec={
          t("desc")
        }
        bannerImage={InternalBanner}
      />
      <IndustrieService/>
      <SubIndustriesChoose/>
      <TalkUsNowSection
        title={t5("title")}
        desc={t5("desc")}
        link={"/contact-us"}
        linkText={t5("linkText")}
        background={""}
      />
      <WhyChooseUs
        title={SubIndustryWhyChooseUs("Outsource Our Deployment Support Team In Ksa")}
        subtitle={SubIndustryWhyChooseUs("Why Choose Us")}
        data={SliderData}
        mode=""
        brandLogo={""}
      />
      <ProvenProcess
        title={t8('title')}
        subtitle={t8('subtitle')}
        data={IAMServiceProvenProcessList}
      />
      <ContactForm Image2 />
    </>
  );
};

export default index;
