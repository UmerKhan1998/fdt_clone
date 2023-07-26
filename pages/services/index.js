import Head from "next/head";
import React from "react";

// React Intl
import { useTranslations } from "next-intl";

// Images
import InternalBanner from "@/assets/images/InternalBanner.png";
import vapt from "../../assets/images/vapt.svg";
import grc from "../../assets/images/grc.svg";
import iam from "../../assets/images/iam.svg";
import siem from "../../assets/images/siem.svg";

// Components
import Banner from "@/components/banner/Banner";
import DigitalAssets from "@/components/DigitalAssets";
import WhyChooseUs from "@/components/WhyChooseUs";
import TalkUsNowSection from "@/components/shared/TalkUsNowSection";
import ContactForm from "@/components/ContactIsForm/ContactForm";
import GeoLocationComp from "@/components/GeoLocationComp";

const index = () => {
  const Meta = useTranslations("Meta");
  const t = useTranslations("ServicesMenuBanner");
  const t1 = useTranslations("ServicesDigitalAssets");
  const ServicesWhyChooseUs = useTranslations("ServicesWhyChooseUs");
  const TranslationTalkUsNowSection = useTranslations("TalkUsNowSection1");

  const WhyChooseUsData = [
    {
      icon: "",
      link: "",
      title: ServicesWhyChooseUs("card1Title"),
      dec: ServicesWhyChooseUs("card1Desc"),
    },
    {
      icon: "",
      link: "",
      title: ServicesWhyChooseUs("card2Title"),
      dec: ServicesWhyChooseUs("card2Desc"),
    },
    {
      icon: "",
      link: "",
      title: ServicesWhyChooseUs("card3Title"),
      dec: ServicesWhyChooseUs("card3Desc"),
    },
    {
      icon: "",
      link: "",
      title: ServicesWhyChooseUs("card4Title"),
      dec: ServicesWhyChooseUs("card4Desc"),
    },
  ];
  const DigitalAssetsServices = [
    {
      icon: iam,
      name: `IAM ${t1("Deployment_Services")}`,
      link: "/services/identity-and-access-management",
      title: t1("title1"),
      desc: t1("desc1"),
      tags: [ 
        {
          title: t1("IAM Architecture and Design"),
          link: "/services/identity-and-access-management#iam-services"
        },
        {
          title: t1("IAM Implementation"),
          link: "/services/identity-and-access-management#iam-services"
        },
        {
          title: t1("IAM Training and Support"),
          link: "/services/identity-and-access-management#iam-services"
        },
        {
          title: t1("IAM Auditing and Compliance"),
          link: "/services/identity-and-access-management#iam-services"
        },
        {
          title: t1("IAM Risk Assessment"),
          link: "/services/identity-and-access-management#iam-services"
        },
        {
          title: t1("IAM Policy and Procedure Development"),
          link: "/services/identity-and-access-management#iam-services"
        },
      ]
    },
    {
      icon: grc,
      name: `GRC ${t1("Deployment_Services")}`,
      link: "/services/grc-solutions",
      title: t1("title2"),
      desc: t1("desc2"),
      tags: [
        {
          title: t1("Enhancing Board Governance and Oversight"),
          link: "/services/grc-solutions#grc-services"
        },
        {
          title: t1("Revamping Enterprise Risk Management"),
          link: "/services/grc-solutions#grc-services"
        },
        {
          title: t1("Ensuring Corporate Compliance & Regulatory Adherence"),
          link: "/services/grc-solutions#grc-services"
        },
      ]
    },
    {
      icon: siem,
      name: `VAPT ${t1("Deployment_Services")}`,
      link: "/services/data-protection/siem-solution",
      title: t1("title3"),
      desc: t1("desc3"),
      tags: [
        {
          title: t1("Real-Time Monitoring"),
          link: "/services/data-protection/siem-solution#siem-services"
        },
        {
          title: t1("Log Management"),
          link: "/services/data-protection/siem-solution#siem-services"
        },
        {
          title: t1("Event Correlation"),
          link: "/services/data-protection/siem-solution#siem-services"
        },
        {
          title: t1("Reporting and Analytics"),
          link: "/services/data-protection/siem-solution#siem-services"
        },
      ]
    },
    {
      icon: vapt,
      name: `DP ${t1("Deployment_Services")}`,
      link: "/services/data-protection",
      title: t1("title4"),
      desc: t1("desc4"),
      tags: [
        {
          title: t1("Ensure Cyber Resilience"),
          link: "/services/data-protection#dp-services"
        },
        {
          title: t1("Optimize Cloud-Native Operations"),
          link: "/services/data-protection#dp-services"
        },
        {
          title: t1("Experience Streamlined Efficiency"),
          link: "/services/data-protection#dp-services"
        },
      ]
    },
  ];

  return (
    <>
      <Head>
        <title>{Meta("ServicesTitle")}</title>
        <meta name="description" content={Meta("ServicesDesc")} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />

        <meta property="og:title" content={Meta("ServicesTitle")} />
        <meta property="og:site_name" content="Fast Digital Technology" />
        <meta property="og:url" content="https://fastdigitaltechnology.com" />
        <meta property="og:description" content={Meta("ServicesDesc")} />
        <meta property="og:type" content="website"></meta>
      </Head>

      <GeoLocationComp />

      <Banner
        title={t("Services")}
        dec={
          t('desc')
        }
        bannerImage={InternalBanner}
      />
      <DigitalAssets
        title={t1('heading')}
        data={DigitalAssetsServices}
        Read_More={t1('Read More')}
        center_text={t1('Our Services')}
      />
      <WhyChooseUs
        title={ServicesWhyChooseUs("Outsource Our Deployment Support Team In Ksa")}
        subtitle={ServicesWhyChooseUs("Why Choose Us")}
        data={WhyChooseUsData}
        mode=""
        brandLogo={""}
      />
      <TalkUsNowSection
        title={TranslationTalkUsNowSection("title")}
        desc={TranslationTalkUsNowSection("desc")}
        link={"/contact-us"}
        linkText={TranslationTalkUsNowSection("linkText")}
        background={""}
      />
      <ContactForm Image2 />
    </>
  );
};

export default index;