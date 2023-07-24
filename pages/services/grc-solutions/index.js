import Head from "next/head";
import React, { useLayoutEffect, useRef } from "react";
import { useTranslations } from "next-intl";

// Images
import InternalBanner from "@/assets/images/GRCBanner.png";
import GRCSubBanner from "../../../assets/images/GRCsubbanner.png";
import GRCsliderBanner from "../../../assets/images/GRCsliderBanner.jpg";
import GRC_subanner from "../../../assets/images/GRC_subanner.png";
import GRCImage2 from "../../../assets/images/GRCImage2.png";
import grc_icon1 from "../../../assets/images/grc_icon1.svg";
import grc_icon2 from "../../../assets/images/grc_icon2.svg";

import grcIcon1 from "../../../assets/images/grcIcon1.svg";
import grcIcon2 from "../../../assets/images/grcIcon2.svg";
import grcIcon3 from "../../../assets/images/grcIcon3.svg";
import grcIcon4 from "../../../assets/images/grcIcon4.svg";
import grcIcon5 from "../../../assets/images/grcIcon5.svg";
import grcIcon6 from "../../../assets/images/grcIcon6.svg";

// Components
import Banner from "@/components/banner/Banner";
import ImageBanner from "@/components/ImageBanner/ImageBanner";
import ServicesSlider from "@/components/shared/ServicesSlider";
import ExpertStrategies from "@/components/ExpertStrategies";
import ContactForm from "@/components/ContactIsForm/ContactForm";
import TalkUsNowSection from "@/components/shared/TalkUsNowSection";
import ServicesChoose from "@/components/ServicesChoose/ServicesChoose";
import PenetrationTesting from "@/components/PenetrationTesting";
import WhyChooseUs from "@/components/WhyChooseUs";

const index = () => {
  const Meta = useTranslations("Meta");
  const t = useTranslations("GRC");
  const t1 = useTranslations("GRCExpertise");
  const TalkUsNowSection4 = useTranslations("TalkUsNowSection4");

  const ImageSilder = [
    {
      image: GRCsliderBanner,
      heading: `${t("Expert Guidance for Every Business Level")}`,
      dec: `${t("dec3")}`,
    },
  ];

  const Data = [
    {
      title: `${t1("GDPR + CCPA")}`,
      dec: `${t1("dec1")}`,
    },
    {
      title: `${t1("HITRUST")}`,
      dec: `${t1("dec2")}`,
    },
    {
      title: `${t1("SSF")}`,
      dec: `${t1("dec3")}`,
    },
    {
      title: `${t1("HIPAA / HITECH")}`,
      dec: `${t1("dec4")}`,
    },

    {
      title: `${t1("OPEN SAMM / OSINT / OWASP")}`,
      dec: `${t1("dec5")}`,
    },
    {
      title: `${t1("NYDFS")}`,
      dec: `${t1("dec6")}`,
    },
    {
      title: `${t1("CFPB")}`,
      dec: `${t1("dec7")}`,
    },
    {
      title: `${t1("ISO SECURITY STANDARDS")}`,
      dec: `${t1("dec8")}`,
    },
    {
      title: `${t1("CMMC")}`,
      dec: `${t1("dec9")}`,
    },
  ];

  const Data1 = [
    {
      icon: grc_icon1,
      title: `${t1("Enhancing Board Governance and Oversight")}`,
      desc: `${t1("dec10")}`,
      link: "",
    },
    {
      icon: grc_icon2,
      title: `${t1("Revamping Enterprise Risk Management")}`,
      desc: `${t1("dec11")}`,
      link: "",
    },
    {
      icon: grc_icon2,
      title: `${t1("Ensuring Corporate Compliance & Regulatory Adherence")}`,
      desc: `${t1("dec12")}`,
      link: "",
    },
  ];

  const Data3 = [
    {
      dec: `${t1("dec14")}`,
      link:"",
      icon:""
    },
    {
      dec: `${t1("dec15")}`,
      link:"",
      icon:""
    },
    {
      dec: `${t1("dec16")}`,
      link:"",
      icon:""
    },
  ];

  const Data4 = [
    {
      icon: grcIcon1,
      title: `${t1("Regulatory Compliance Ecosystem")}`,
      desc: `${t1("dec18")}`,
      link: "",
    },
    {
      icon: grcIcon2,
      title: `${t1("Strengthen Your IT Governance and Risk Processes")}`,
      desc: `${t1("dec19")}`,
      link: "",
    },
    {
      icon: grcIcon3,
      title: `${t1("Audit and Assessment Services")}`,
      desc: `${t1("dec20")}`,
      link: "",
    },
    {
      icon: grcIcon4,
      title: `${t1("Data Privacy Services")}`,
      desc: `${t1("dec21")}`,
      link: "",
    },
    {
      icon: grcIcon5,
      title: `${t1("GRC Implementation and Support Services")}`,
      desc: `${t1("dec22")}`,
      link: "",
    },
    {
      icon: grcIcon6,
      title: `${t1("Compliance Services")}`,
      desc: `${t1("dec23")}`,
      link: "",
    },
  ];

  const refSection = useRef();
  useLayoutEffect(()=>{
    if(window.location.hash === "#grc-services") {
      refSection.current.scrollIntoView({behavior: 'smooth'});
    }
  }, [])

  return (
    <>
      <Head>
        <title>{Meta("GrcTitle")}</title>
        <meta name="description" content={Meta("GrcDesc")} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />

        <meta property="og:title" content={Meta("GrcTitle")} />
        <meta property="og:site_name" content="Fast Digital Technology" />
        <meta property="og:url" content="https://fastdigitaltechnology.com" />
        <meta property="og:description" content={Meta("GrcDesc")} />
        <meta property="og:type" content="website"></meta>
      </Head>
      <Banner title={t("title")} dec={t("dec")} titleWidth={"100%"} bannerImage={InternalBanner} />

      <ImageBanner
        picture={GRCSubBanner}
        title={t("subtitle")}
        dec={t("subdescription")}
        brandLogo={""}
        align={''}
        mode={""}
      />

      <ServicesSlider data={ImageSilder} mode={'dark'} textAlign={"center"} />

      <ExpertStrategies title={t("Tailored GRC Solutions")} desc={t("dec4")} link={""} mode={""} />

      <ServicesChoose
        title={t1("Discover Our Compliance Expertise")}
        subtitle={t1("Expertise")}
        data={Data}
        mode={""}
        brandLogo={""}
      />

      <PenetrationTesting
        title={t1("GRC Services")}
        subtitle={""}
        image={GRCImage2}
        data={Data1}
        desc1={""}
        desc2={""}
        mode="dark"
        refSection={refSection}
      />

      <TalkUsNowSection
        title={TalkUsNowSection4("title")}
        desc={TalkUsNowSection4("desc")}
        link={"/contact-us"}
        linkText={TalkUsNowSection4("linkText")}
        background={""}
      />

      <WhyChooseUs
        title={t1("Benefits")}
        subtitle={t1("GRC")}
        dec={t1("dec13")}
        data={Data3}
        mode=""
        brandLogo={""}
      />

      <PenetrationTesting
        title={t1("Discover How Our GRC Analyst Can Help You")}
        subtitle={t1("GRC")}
        image={GRC_subanner}
        desc1={""}
        desc2={""}
        data={Data4}
        mode="dark"
      />

      <ContactForm Image2 />
    </>
  );
};

export default index;
