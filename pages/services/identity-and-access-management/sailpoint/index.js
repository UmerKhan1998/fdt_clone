import Head from "next/head";
import React from "react";
import { useTranslations } from "next-intl";

// Images
import InternalBanner from "@/assets/images/SailPointBanner.png";
import pic1 from "../../../../assets/images/servicesSlider1.jpg";
import pic from "../../../../assets/images/servicesSlider3.jpg";
import SailpointLogoBannerRight from "@/assets/images/SailpointLogoBannerRight.png";
import SailpointServicesChoose3Icon1 from "../../../../assets/images/SailpointServicesChoose3Icon1.svg";
import SailpointServicesChoose3Icon2 from "../../../../assets/images/SailpointServicesChoose3Icon2.svg";
import SailpointServicesChoose3Icon3 from "../../../../assets/images/SailpointServicesChoose3Icon3.svg";
import SailpointPenetrationTestingImage from "../../../../assets/images/SailpointPenetrationTestingImage.png";
import SailpointPenetrationTestingIcon1 from "../../../../assets/images/SailpointPenetrationTestingIcon1.svg";
import SailpointPenetrationTestingIcon2 from "../../../../assets/images/SailpointPenetrationTestingIcon2.svg";
import SailpointPenetrationTestingIcon3 from "../../../../assets/images/SailpointPenetrationTestingIcon3.svg";
import SailpointPenetrationTestingIcon4 from "../../../../assets/images/SailpointPenetrationTestingIcon4.svg";
import SailpointPenetrationTestingIcon5 from "../../../../assets/images/SailpointPenetrationTestingIcon5.svg";
import SailpointPenetrationTestingIcon6 from "../../../../assets/images/SailpointPenetrationTestingIcon6.svg";
import SailpointLogo from "../../../../assets/images/SailpointLogo.png";
import strategies1 from "../../../../assets/images/strategies1.png";
import strategies2 from "../../../../assets/images/strategies2.png";

// Compoennts
import Banner from "@/components/banner/Banner";
import ServicesChoose from "@/components/ServicesChoose/ServicesChoose";
import ServicesSlider from "@/components/shared/ServicesSlider";
import TalkUsNowSection from "@/components/shared/TalkUsNowSection";
import ContactForm from "@/components/ContactIsForm/ContactForm";
import PenetrationTesting from "@/components/PenetrationTesting";
import PartnersInner from "@/components/PartnersInner";
import ExpertStrategies from "@/components/ExpertStrategies";
import GeoLocationComp from "@/components/GeoLocationComp";

const index = () => {
  const Meta = useTranslations("Meta");
  const t = useTranslations("SailpointBanner");
  const t1 = useTranslations("SailpointChoose");
  const t2 = useTranslations("SailpoinSlider");
  const TalkUsNowSection9 = useTranslations("TalkUsNowSection9");
  const t4 = useTranslations("sailPointAdvantages");
  const t5 = useTranslations("SailpointServices");
  const t6 = useTranslations("SailpointExpertStrategies");

  const ServicesChooseData = [
    {
      title: t1("SailPoint's IdentityIQ"),
      dec: t1("boxdec1"),
    },
    {
      title: t1("SailPoint's AccessIQ"),
      dec: t1("boxdec2"),
    },
  ];

  const SliderData = [
    {
      image: pic1,
      heading: `${t2("Streamlined Identity Provisioning")}`,
      dec: `${t2("decs")}`,
    },
    {
      image: pic,
      heading: `${t2("Streamlined Identity Provisioning")}`,
      dec: `${t2("decs")}`,
    },
    {
      image: pic1,
      heading: `${t2("Streamlined Identity Provisioning")}`,
      dec: `${t2("decs")}`,
    },
    {
      image: pic,
      heading: `${t2("Streamlined Identity Provisioning")}`,
      dec: `${t2("decs")}`,
    },
  ];

  const ServicesChooseData1 = [
    {
      title: t4("End-to-End IAM Services"),
      dec: t4("dec1"),
    },
    {
      title: t4("Technical Expertise"),
      dec: t4("dec2"),
    },
    {
      title: t4("Tailored Solutions"),
      dec: t4("dec3"),
    },
  ];

  const ServicesChooseData2 = [
    {
      title: t4("IAM Architects and Consultants"),
      dec: t4("dec4"),
    },
    {
      title: t4("Strategic Collaboration"),
      dec: t4("dec5"),
    },
    {
      title: t4("Client Success Stories"),
      dec: t4("dec6"),
    },
  ];

  const ServicesChooseData3 = [
    {
      icon: SailpointServicesChoose3Icon1,
      dec: t4("dec7"),
    },
    {
      icon: SailpointServicesChoose3Icon2,
      dec: t4("dec8"),
    },
    {
      icon: SailpointServicesChoose3Icon3,
      dec: t4("dec9"),
    },
  ];

  const SailpointData = [
    {
      icon: SailpointPenetrationTestingIcon1,
      link: "",
      title: t5("Navigating the Complexities of IAM"),
      desc: t5("boxDec1"),
    },
    {
      icon: SailpointPenetrationTestingIcon2,
      link: "",
      title: t5("Amplify Your IAM Capabilities"),
      desc: t5("boxDec2"),
    },
    {
      icon: SailpointPenetrationTestingIcon3,
      link: "",
      title: t5("Seamless SailPoint Deployments"),
      desc: t5("boxDec3"),
    },
    {
      icon: SailpointPenetrationTestingIcon4,
      link: "",
      title: t5("Support and Optimization"),
      desc: t5("boxDec4"),
    },
    {
      icon: SailpointPenetrationTestingIcon5,
      link: "",
      title: t5("Access Top SailPoint Consultants"),
      desc: t5("boxDec5"),
    },
    {
      icon: SailpointPenetrationTestingIcon6,
      link: "",
      title: t5("Assisting Your Identity IQ"),
      desc: t5("boxDec6"),
    },
  ];

  return (
    <>
      <Head>
        <title>{Meta("SailpointTitle")}</title>
        <meta name="description" content={Meta("SailpointDesc")} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
        
        <meta property="og:title" content={Meta("SailpointTitle")} />
        <meta property="og:site_name" content="Fast Digital Technology" />
        <meta property="og:url" content="https://fastdigitaltechnology.com" />
        <meta property="og:description" content={Meta("SailpointDesc")} />
        <meta property="og:type" content="website"></meta>
      </Head>

      <GeoLocationComp />

      <Banner 
        title={""} 
        subdetail={t("subdetail")} 
        dec={t("desc")} 
        titleWidth={"100%"}
        logo={SailpointLogo}
        logoRight={SailpointLogoBannerRight}
        bannerImage={InternalBanner} />
      <ServicesChoose
        title={t1("FDT Maximizing Identity Governance with SailPoint IAM Solutions")}
        subtitle={t1(
          "Sailpoint"
        )}
        data={ServicesChooseData}
        mode={""}
        brandLogo={""}
      />
      <ServicesSlider
        data={SliderData}
        title={t2("FDT Empowers Secure Identity and Data Access Governance")}
        subtitle={t2("Access")}
        dec={t2("dec")}
        mode={'dark'}
        textAlign={"center"}
      />
      <TalkUsNowSection
        title={TalkUsNowSection9("title")}
        desc={TalkUsNowSection9("desc")}
        link={"/contact-us"}
        linkText={TalkUsNowSection9("linkText")}
        background={""}
      />
      <ServicesChoose
        title={t4("Advantages of Choosing FDT for SailPoint IAM Solutions")}
        data={ServicesChooseData1}
        mode={""}
        brandLogo={""}
      />

      <ServicesChoose
        title={t4("FDT's Expertise in SailPoint IAM Solutions")}
        subtitle={t4("Sailpoint")}
        data={ServicesChooseData2}
        mode={"dark"}
        brandLogo={""}
      />

      <ServicesChoose
        title={t4("Why did you choose FDT for SailPoint IAM solutions?")}
        subtitle={t4("Why Choose Us")}
        data={ServicesChooseData3}
        mode={""}
        brandLogo={""}
      />
      <PartnersInner />
      <PenetrationTesting
        title={t5("Our Remarkable SailPoint services")}
        subtitle={t5("Services")}
        image={SailpointPenetrationTestingImage}
        desc1={t5("dec")}
        desc2={""}
        data={SailpointData}
        mode="dark"
      />
      <ExpertStrategies
        title={t6('title')}
        desc={t6('desc')}
        img1={strategies1.src}
        img2={strategies2.src}
        link={""}
        mode={""}
      />
      <ContactForm Image2 />
    </>
  );
};

export default index;
