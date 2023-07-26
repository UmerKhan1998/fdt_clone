import Head from "next/head";
import React from "react";
import { useTranslations } from "next-intl";

// Images
import InternalBanner from "@/assets/images/ECCBanner.png";
import ECCslider from "../../../../assets/images/ECCslider.png";
import ECCIMG from "../../../../assets/images/ECCIMG.png";
import NCALogo from "../../../../assets/images/NCALogo.png";

import PenetrationTestingIcon1 from "../../../../assets/images/PenetrationTestingIcon1.svg";
import PenetrationTestingIcon2 from "../../../../assets/images/PenetrationTestingIcon2.svg";
import PenetrationTestingIcon3 from "../../../../assets/images/PenetrationTestingIcon3.svg";
import PenetrationTestingIcon4 from "../../../../assets/images/PenetrationTestingIcon4.svg";
import PenetrationTestingIcon5 from "../../../../assets/images/PenetrationTestingIcon5.svg";
import PenetrationTestingIcon6 from "../../../../assets/images/PenetrationTestingIcon6.svg";
import PenetrationTestingIcon7 from "../../../../assets/images/PenetrationTestingIcon7.svg";
import PenetrationTestingIcon8 from "../../../../assets/images/PenetrationTestingIcon8.svg";

// Components
import Banner from "@/components/banner/Banner";
import ServicesSlider from "@/components/shared/ServicesSlider";
import ContactForm from "@/components/ContactIsForm/ContactForm";
import TalkUsNowSection from "@/components/shared/TalkUsNowSection";
import PenetrationTesting from "@/components/PenetrationTesting";
import WhyChooseUs from "@/components/WhyChooseUs";
import LogoSection from "@/components/LogoSection";
import GeoLocationComp from "@/components/GeoLocationComp";

const index = () => {
  const Meta = useTranslations("Meta");
  const t = useTranslations("ECC");
  const TalkUsNowSection12 = useTranslations("TalkUsNowSection12");

  const ImageSilder = [
    {
      image: ECCslider,
      heading: `${t("Cybersecurity Governance")}`,
      dec: `${t("dec3")}`,
    },
    {
      image: ECCslider,
      heading: `${t("Cybersecurity Defense")}`,
      dec: `${t("Silde2dec")}`,
    },
    {
      image: ECCslider,
      heading: `${t("Cybersecurity Resilience:")}`,
      dec: `${t("Silde3dec")}`,
    },
  ];

  const Data1 = [
    {
      icon: PenetrationTestingIcon1,
      title: `${t("Assessment and Gap Analysis")}`,
      desc: `${t("dec10")}`,
      link: "",
    },
    {
      icon: PenetrationTestingIcon2,
      title: `${t("Customized ECC Framework Implementation")}`,
      desc: `${t("dec16")}`,
      link: "",
    },
    {
      icon: PenetrationTestingIcon3,
      title: `${t("Effective Governance")}`,
      desc: `${t("dec17")}`,
      link: "",
    },
    {
      icon: PenetrationTestingIcon4,
      title: `${t("Robust Defense Measures")}`,
      desc: `${t("dec18")}`,
      link: "",
    },

    {
      icon: PenetrationTestingIcon5,
      title: `${t("Resilience and Recovery")}`,
      desc: `${t("dec19")}`,
      link: "",
    },
    {
      icon: PenetrationTestingIcon6,
      title: `${t("Third-Party and Cloud Security")}`,
      desc: `${t("dec20")}`,
      link: "",
    },
    {
      icon: PenetrationTestingIcon7,
      title: `${t("Industrial Control Systems Protection")}`,
      desc: `${t("dec21")}`,
      link: "",
    },
    {
      icon: PenetrationTestingIcon8,
      title: `${t("Continuous Monitoring and Improvement")}`,
      desc: `${t("dec22")}`,
      link: "",
    },
  ];

  const Data3 = [
    {
      title: `${t("Comprehensive Approach")}`,
      dec: `${t("dec12")}`,
      link: "",
      icon: "",
    },
    {
      title: `${t("Risk Mitigation")}`,
      dec: `${t("dec13")}`,
      link: "",
      icon: "",
    },
    {
      title: `${t("Regulatory Compliance")}`,
      dec: `${t("dec14")}`,
      link: "",
      icon: "",
    },
    {
      title: `${t("Proven Effectiveness")}`,
      dec: `${t("dec15")}`,
      link: "",
      icon: "",
    },
  ];

  return (
    <>
      <Head>
        <title>{Meta("ECCTitle")}</title>
        <meta name="description" content={Meta("ECCDesc")} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />

        <meta property="og:title" content={Meta("ECCTitle")} />
        <meta property="og:site_name" content="Fast Digital Technology" />
        <meta property="og:url" content="https://fastdigitaltechnology.com" />
        <meta property="og:description" content={Meta("ECCDesc")} />
        <meta property="og:type" content="website"></meta>
      </Head>

      <GeoLocationComp />

      <Banner title={t("ECC")} dec={t("dec")} titleWidth={"100%"} bannerImage={InternalBanner} />

      <ServicesSlider
        data={ImageSilder}
        title={t("ECC Domains")}
        dec={t("dec2")}
        mode={''}
        textAlign={"center"}
      />

      <LogoSection logo={NCALogo} />

      <PenetrationTesting
        title={t("How FDT Provides ECC Services")}
        subtitle={t("Services")}
        desc1={t("dec4")}
        desc2={""}
        image={ECCIMG}
        data={Data1}
        mode="dark"
      />

      <TalkUsNowSection
        title={TalkUsNowSection12("title")}
        desc={TalkUsNowSection12("desc")}
        link={"/contact-us"}
        linkText={TalkUsNowSection12("linkText")}
        background={""}
      />

      <WhyChooseUs
        title={t("Why is ECC Implementation Important in Cybersecurity?")}
        data={Data3}
        mode=""
        brandLogo={""}
      />

      <ContactForm Image2 />
    </>
  );
};

export default index;
