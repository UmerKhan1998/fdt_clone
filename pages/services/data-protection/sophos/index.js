import Head from 'next/head';
import React from 'react'

// Images
import InternalBanner from "@/assets/images/SOPBanner.png";
import Sophos from "../../../../assets/images/Sophos.png";
import SOPImageBanner from "../../../../assets/images/SOPImageBanner.png";
import SOPQuotSectionImg1 from "../../../../assets/images/SOPQuotSectionImg1.png";
import SOPQuotSectionImg2 from "../../../../assets/images/SOPQuotSectionImg2.png";
import SOPExpertStrategies1 from "../../../../assets/images/SOPExpertStrategies1.png";
import SOPExpertStrategies2 from "../../../../assets/images/SOPExpertStrategies2.png";
import SOPServicesSlider1Image1 from "../../../../assets/images/SOPServicesSlider1Image1.png";
import SOPPenetrationTestingImage1 from "../../../../assets/images/SOPPenetrationTestingImage1.png";
import SOPPenetrationTesting1DataIcon1 from "../../../../assets/images/SOPPenetrationTesting1DataIcon1.svg";
import SOPPenetrationTesting1DataIcon2 from "../../../../assets/images/SOPPenetrationTesting1DataIcon2.svg";
import SOPPenetrationTesting1DataIcon3 from "../../../../assets/images/SOPPenetrationTesting1DataIcon3.svg";
import SOPPenetrationTesting1DataIcon4 from "../../../../assets/images/SOPPenetrationTesting1DataIcon4.svg";
import SOPPenetrationTesting1DataIcon5 from "../../../../assets/images/SOPPenetrationTesting1DataIcon5.svg";
import SOPPenetrationTesting1DataIcon6 from "../../../../assets/images/SOPPenetrationTesting1DataIcon6.svg";

// React Intl
import { useTranslations } from "next-intl";

// Components
import Banner from '@/components/banner/Banner';
import ImageBanner from '@/components/ImageBanner/ImageBanner';
import PenetrationTesting from '@/components/PenetrationTesting';
import TalkUsNowSection from '@/components/shared/TalkUsNowSection';
import ExpertStrategies from '@/components/ExpertStrategies';
import ServicesChoose from '@/components/ServicesChoose/ServicesChoose';
import ServicesSlider from '@/components/shared/ServicesSlider';
import ProvenProcess from '@/components/ProvenProcess';
import ContactForm from '@/components/ContactIsForm/ContactForm';
import QuotSection from '@/components/QuotSection';
import GeoLocationComp from '@/components/GeoLocationComp';

const index = () => {
  const Meta = useTranslations("Meta");
  const t = useTranslations("SOPBanner");
  const t1 = useTranslations("SOPImageBanner");
  const t2 = useTranslations("SOPPenetrationTesting");
  const t3 = useTranslations("SOPExpertStrategies");
  const t4 = useTranslations("SOPServicesChoose1");
  const t5 = useTranslations("SOPServicesSlider");
  const t6 = useTranslations("SOPProvenProcess");
  const t7 = useTranslations("SOPQuotSection");
  const TalkUsNowSection19 = useTranslations("TalkUsNowSection19");

  const SOPPenetrationTestingData = [
    {
      icon: SOPPenetrationTesting1DataIcon1,
      link: "",
      title: t2("card1Title"),
      desc: t2("card1Desc"),
    },
    {
      icon: SOPPenetrationTesting1DataIcon2,
      link: "",
      title: t2("card2Title"),
      desc: t2("card2Desc"),
    },
    {
      icon: SOPPenetrationTesting1DataIcon3,
      link: "",
      title: t2("card3Title"),
      desc: t2("card3Desc"),
    },
    {
      icon: SOPPenetrationTesting1DataIcon4,
      link: "",
      title: t2("card4Title"),
      desc: t2("card4Desc"),
    },
    {
      icon: SOPPenetrationTesting1DataIcon5,
      link: "",
      title: t2("card5Title"),
      desc: t2("card5Desc"),
    },
    {
      icon: SOPPenetrationTesting1DataIcon6,
      link: "",
      title: t2("card6Title"),
      desc: t2("card6Desc"),
    },
  ];
  const SOPServicesChoose1Data = [
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
  ];
  const SOPServicesSliderData1 = [
    {
        image: SOPServicesSlider1Image1,
        heading: t2("card1Title"),
        dec: t2("card1Desc")
    },
    {
        image: SOPServicesSlider1Image1,
        heading: t2("card2Title"),
        dec: t2("card2Desc")
    },
    {
        image: SOPServicesSlider1Image1,
        heading: t2("card3Title"),
        dec: t2("card3Desc")
    },
  ];
  const SOPServiceProvenProcessList = [
    {
      title: t6("card1Title"),
      desc: t6("card1Desc")
    },
    {
      title: t6("card2Title"),
      desc: t6("card2Desc")
    },
    {
      title: t6("card3Title"),
      desc: t6("card3Desc")
    },
    {
      title: t6("card4Title"),
      desc: t6("card4Desc")
    },
  ];

  return (
    <>
      <Head>
        <title>{Meta("SOPTitle")}</title>
        <meta name="description" content={Meta("SOPDesc")} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />

        <meta property="og:title" content={Meta("SOPTitle")} />
        <meta property="og:site_name" content="Fast Digital Technology" />
        <meta property="og:url" content="https://fastdigitaltechnology.com" />
        <meta property="og:description" content={Meta("SOPDesc")} />
        <meta property="og:type" content="website"></meta>
      </Head>

      <GeoLocationComp />

      <Banner
        title={t("title")}
        subdetail={t("subdetail")}
        dec={t("desc")}
        titleWidth={"100%"}
        bannerImage={InternalBanner}
      />
      <ImageBanner
        picture={SOPImageBanner}
        title={t1("title")}
        subtitle={""}
        dec={t1("dec")}
        brandLogo={Sophos}
        align={''}
        mode={""}
      />
      <PenetrationTesting
        title={t2('title')}
        subtitle={t2("subtitle")}
        image={SOPPenetrationTestingImage1}
        desc1={t2('desc')}
        desc2={""}
        data={SOPPenetrationTestingData}
        mode="dark"
      />
      <TalkUsNowSection
        title={TalkUsNowSection19("title")}
        desc={TalkUsNowSection19("desc")}
        link={"/contact-us"}
        linkText={TalkUsNowSection19("linkText")}
        background={""}
      />
      <ExpertStrategies
        title={t3('title')}
        desc={t3('desc')}
        img1={SOPExpertStrategies1.src}
        img2={SOPExpertStrategies2.src}
        link={""}
        mode={""}
      />
      <ServicesChoose
        title={t4("title")}
        subtitle={t4("subtitle")}
        dec={t4("dec")}
        data={SOPServicesChoose1Data}
        mode={""}
        brandLogo={""}
      />
      <ServicesSlider
        data={SOPServicesSliderData1}
        title={t5("title")}
        subtitle={t5("subtitle")}
        dec={t5("dec")}
        mode={'dark'}
        textAlign={"center"}
      />
      <ProvenProcess
        title={t6('title')}
        subtitle={t6('subtitle')}
        data={SOPServiceProvenProcessList}
      />
      <QuotSection
        title={t7('title')}
        desc={t7('desc')}
        img1={SOPQuotSectionImg1}
        img2={SOPQuotSectionImg2}
        quot={t7('quot')}
        mode={'dark'}
      />
      <ContactForm Image2 />
    </>
  )
}

export default index