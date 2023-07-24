import Head from "next/head";
import React from "react";

// Images
import InternalBanner from "@/assets/images/InternalBanner.png";
import IndustriesTrustPenetrationTestingimg from "@/assets/images/IndustriesTrustPenetrationTestingimg.png";
import IndustriesTrustPenetrationTesting1 from "@/assets/images/IndustriesTrustPenetrationTesting1.svg";
import IndustriesTrustPenetrationTesting2 from "@/assets/images/IndustriesTrustPenetrationTesting2.svg";
import IndustriesTrustPenetrationTesting3 from "@/assets/images/IndustriesTrustPenetrationTesting3.svg";
import IndustriesTrustPenetrationTesting4 from "@/assets/images/IndustriesTrustPenetrationTesting4.svg";
import IndustriesTrustPenetrationTesting5 from "@/assets/images/IndustriesTrustPenetrationTesting5.svg";
import IndustriesTrustPenetrationTesting6 from "@/assets/images/IndustriesTrustPenetrationTesting6.svg";
import IndustriesTrustPenetrationTesting7 from "@/assets/images/IndustriesTrustPenetrationTesting7.svg";
import IndustriesTrustPenetrationTesting8 from "@/assets/images/IndustriesTrustPenetrationTesting8.svg";
import IndustriesExpertStrategiesImg1 from "@/assets/images/IndustriesExpertStrategiesImg1.png";
import IndustriesExpertStrategiesImg2 from "@/assets/images/IndustriesExpertStrategiesImg2.png";

// Components
import Banner from "@/components/banner/Banner";
import IndestrieChoose from "@/components/IndestrieChoose/IndestrieChoose";
import TalkUsNowSection from "@/components/shared/TalkUsNowSection";
import ContactForm from "@/components/ContactIsForm/ContactForm";
import PenetrationTesting from "@/components/PenetrationTesting";
import ExpertStrategies from "@/components/ExpertStrategies";

// React Intl
import { useTranslations } from "next-intl";

const index = () => {
  const Meta = useTranslations("Meta");
  const t = useTranslations("IndustriesBanner");
  const t1 = useTranslations("IndustriesPenetrationTesting");
  const t2 = useTranslations("IndustriesExpertStrategies");
  const TalkUsNowSection22 = useTranslations("TalkUsNowSection22");

  const IndustriesPenetrationTestingData = [
    {
      icon: IndustriesTrustPenetrationTesting1,
      link: "",
      title: t1("card1title"),
      desc: t1("card1desc"),
    },
    {
      icon: IndustriesTrustPenetrationTesting2,
      link: "",
      title: t1("card2title"),
      desc: t1("card2desc"),
    },
    {
      icon: IndustriesTrustPenetrationTesting3,
      link: "",
      title: t1("card3title"),
      desc: t1("card3desc"),
    },
    {
      icon: IndustriesTrustPenetrationTesting4,
      link: "",
      title: t1("card4title"),
      desc: t1("card4desc"),
    },
    {
      icon: IndustriesTrustPenetrationTesting5,
      link: "",
      title: t1("card5title"),
      desc: t1("card5desc"),
    },
    {
      icon: IndustriesTrustPenetrationTesting6,
      link: "",
      title: t1("card6title"),
      desc: t1("card6desc"),
    },
    {
      icon: IndustriesTrustPenetrationTesting7,
      link: "",
      title: t1("card7title"),
      desc: t1("card7desc"),
    },
    {
      icon: IndustriesTrustPenetrationTesting8,
      link: "",
      title: t1("card8title"),
      desc: t1("card8desc"),
    },
  ];

  return (
    <>
      <Head>
        <title>{Meta("IndustryTitle")}</title>
        <meta name="description" content={Meta("IndustryDesc")} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />

        <meta property="og:title" content={Meta("IndustryTitle")} />
        <meta property="og:site_name" content="Fast Digital Technology" />
        <meta property="og:url" content="https://fastdigitaltechnology.com" />
        <meta property="og:description" content={Meta("IndustryDesc")} />
        <meta property="og:type" content="website"></meta>
      </Head>
      <Banner
        title={t("title")}
        dec={''}
        subdetail={''}
        titleWidth={'100%'}
        bannerImage={InternalBanner}
      />
      <IndestrieChoose />
      <PenetrationTesting
        title={t1('title')}
        subtitle={t1('subtitle')}
        image={IndustriesTrustPenetrationTestingimg}
        desc1={t1('desc')}
        desc2={""}
        data={IndustriesPenetrationTestingData}
        mode="dark"
      />
      <TalkUsNowSection
        title={TalkUsNowSection22("title")}
        desc={TalkUsNowSection22("desc")}
        link={"/contact-us"}
        linkText={TalkUsNowSection22("linkText")}
        background={""}
      />
      <ExpertStrategies
        title={t2('title')}
        desc={t2('desc')}
        img1={IndustriesExpertStrategiesImg1.src}
        img2={IndustriesExpertStrategiesImg2.src}
        link={""}
        mode={""}
      />
      {/* <ContactForm Image2 /> */}
    </>
  );
};

export default index;
