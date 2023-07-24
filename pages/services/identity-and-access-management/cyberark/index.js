import Head from "next/head";
import React from "react";
import { useTranslations } from "next-intl";

// images
import InternalBanner from "@/assets/images/CyberArkBanner.png";
import pic from "../../../../assets/images/servicesSlider3.jpg";
import pic2 from "../../../../assets/images/servicesSlider2.jpg";
import CyberAttack from "../../../../assets/images/CyberAttack.png";
import CyberArkLogo from "../../../../assets/images/CyberArkLogo.png";
import CyberArkLogoBannerRight from "../../../../assets/images/CyberArkLogoBannerRight.png";
import CyberArkPenetrationTesting1 from "../../../../assets/images/CyberArkPenetrationTesting1.svg";
import CyberArkPenetrationTesting2 from "../../../../assets/images/CyberArkPenetrationTesting2.svg";
import CyberArkPenetrationTesting3 from "../../../../assets/images/CyberArkPenetrationTesting3.svg";
import CyberArkPenetrationTesting4 from "../../../../assets/images/CyberArkPenetrationTesting4.svg";
import CyberArkPenetrationTesting5 from "../../../../assets/images/CyberArkPenetrationTesting5.svg";
import CyberArkPenetrationTesting6 from "../../../../assets/images/CyberArkPenetrationTesting6.svg";

// Compoents
import Banner from "@/components/banner/Banner";
import ContactForm from "@/components/ContactIsForm/ContactForm";
import ServicesSlider from "@/components/shared/ServicesSlider";
import WhyChooseUs from "@/components/WhyChooseUs";
import PenetrationTesting from "@/components/PenetrationTesting";
import TalkUsNowSection from "@/components/shared/TalkUsNowSection";
import PartnersInner from "@/components/PartnersInner";

const index = () => {
  const Meta = useTranslations("Meta");
  const t = useTranslations("CyberArk");
  const t2 = useTranslations("CyberArkWhyChooseUs1");
  const t4 = useTranslations("CyberArk_Cards");
  const t5 = useTranslations("CyberAttack");
  const t6 = useTranslations("SecuringSlider");
  const TalkUsNowSection7 = useTranslations("TalkUsNowSection7");

  const SilderData = [
    {
      image: pic2,
      heading: t6("heading"),
      dec: t6("dec"),
    },
  ];
  const CyberArkWhyChooseUs1Data = [
    {
      icon: "",
      title: t2("card1Title"),
      dec: t2("card1Desc"),
      link: ""
    },
    {
      icon: "",
      title: t2("card2Title"),
      dec: t2("card2Desc"),
      link: ""
    },
    {
      icon: "",
      title: t2("card3Title"),
      dec: t2("card3Desc"),
      link: ""
    },
    {
      icon: "",
      title: t2("card4Title"),
      dec: t2("card4Desc"),
      link: ""
    },
  ];

  const SliderData = [
    {
      icon: "",
      link: "",
      title: t4("Privileged Access Management"),
      dec: t4("dec1"),
    },
    {
      icon: "",
      link: "",
      title: t4("Endpoint Privilege Management"),
      dec: t4("dec2"),
    },
    {
      icon: "",
      link: "",
      title: t4("Identity and Access Management"),
      dec: t4("dec3"),
    },
    { 
      icon: "", 
      link: "", 
      title: t4("Secrets Management"), 
      dec: t4("dec4") 
    },
  ];

  const CyberAttackData = [
    {
      icon: CyberArkPenetrationTesting1,
      link: "",
      title: t5("Expert Guidance and Advisory"),
      desc: t5("boxDec1"),
    },
    {
      icon: CyberArkPenetrationTesting2,
      link: "",
      title: t5("Seamless Implementation and Integration"),
      desc: t5("boxDec2"),
    },
    {
      icon: CyberArkPenetrationTesting3,
      link: "",
      title: t5("Operational Excellence"),
      desc: t5("boxDec3"),
    },
    {
      icon: CyberArkPenetrationTesting4,
      link: "",
      title: t5("Comprehensive Identity Management Assessments"),
      desc: t5("boxDec4"),
    },
    {
      icon: CyberArkPenetrationTesting5,
      link: "",
      title: t5("Enhanced Security and Risk Mitigation"),
      desc: t5("boxDec5"),
    },
    {
      icon: CyberArkPenetrationTesting6,
      link: "",
      title: t5("Future-Proof Solutions"),
      desc: t5("boxDec6"),
    },
  ];

  return (
    <>
      <Head>
        <title>{Meta("CyberarkTitle")}</title>
        <meta name="description" content={Meta("CyberarkDesc")} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />

        <meta property="og:title" content={Meta("CyberarkTitle")} />
        <meta property="og:site_name" content="Fast Digital Technology" />
        <meta property="og:url" content="https://fastdigitaltechnology.com" />
        <meta property="og:description" content={Meta("CyberarkDesc")} />
        <meta property="og:type" content="website"></meta>
      </Head>
      <Banner 
        title={""} 
        subdetail={t("subdetail")} 
        dec={t("desc")} 
        titleWidth={"100%"} 
        logo={CyberArkLogo}
        logoRight={CyberArkLogoBannerRight}
        bannerImage={InternalBanner} />
      <WhyChooseUs
        title={t2("title")}
        subtitle={t2("subtitle")}
        data={CyberArkWhyChooseUs1Data}
        brandLogo={""}
      />
      <ServicesSlider
        data={SilderData}
        title={t6("Securing Privileged Accounts")}
        subtitle={t6("Securing")}
        mode={'dark'}
        textAlign={"center"}
      />
      <TalkUsNowSection
        title={TalkUsNowSection7("title")}
        desc={TalkUsNowSection7("desc")}
        link={"/contact-us"}
        linkText={TalkUsNowSection7("linkText")}
        background={""}
      />
      <WhyChooseUs
        title={t4("CyberArk Solutions Offered by FDT")}
        subtitle={t4("CyberArk")}
        data={SliderData}
        brandLogo={""}
      />
      <PartnersInner />
      <PenetrationTesting
        title={t5("Benefits of FDTs IAM Services")}
        subtitle={t5("benefits")}
        image={CyberAttack}
        desc1={t5("desc")}
        desc2={""}
        data={CyberAttackData}
        mode="dark"
      />
      {/* <Faqs /> */}
      <ContactForm Image2 />
    </>
  );
};

export default index;
