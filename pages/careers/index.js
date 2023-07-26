import Head from "next/head";
import React from "react";

// React Intl
import { useTranslations } from "next-intl";

// Image
import InternalBanner from "@/assets/images/InternalBanner.png";
import CareerImageBannerImg from "@/assets/images/CareerImageBannerImg.png";

// Compnonent
import Banner from "@/components/banner/Banner";
import JobOpenings from "@/components/JobOpenings";
import Process from "@/components/Process";
import JoinFtd from "@/components/JoinFtd";
import ContactForm from "@/components/ContactIsForm/ContactForm";
import ImageBanner from "@/components/ImageBanner/ImageBanner";
import WhyChooseUs from "@/components/WhyChooseUs";
import GeoLocationComp from "@/components/GeoLocationComp";

const index = () => {
  const Meta = useTranslations("Meta");
  const t = useTranslations("CareerBanner");
  const t1 = useTranslations("CareerImageBanner");
  const t2 = useTranslations("CareerWhyChooseUs");

  const WhyChooseUsData = [
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

  return (
    <>
      <Head>
        <title>{Meta("CareerTitle")}</title>
        <meta name="description" content={Meta("CareerDesc")} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />

        <meta property="og:title" content={Meta("CareerTitle")} />
        <meta property="og:site_name" content="Fast Digital Technology" />
        <meta property="og:url" content="https://fastdigitaltechnology.com" />
        <meta property="og:description" content={Meta("CareerDesc")} />
        <meta property="og:type" content="website"></meta>
      </Head>

      <GeoLocationComp />
      
      <Banner title={t("title")} subdetail={''} dec={""} titleWidth={"100%"} bannerImage={InternalBanner} />
      {/* <ImageBanner
        picture={CareerImageBannerImg}
        title={t1("title")}
        subtitle={""}
        dec={t1("desc")}
        brandLogo={""}
        align={''}
        mode={""}
      /> */}
      {/* <WhyChooseUs
        title={t2("title")}
        subtitle={t2("subtitle")}
        dec={t2("dec")}
        data={WhyChooseUsData}
        mode=""
        brandLogo={""}
      /> */}
      {/* <JoinFtd /> */}
      <JobOpenings />
      <Process />
      {/* <ContactForm Image2 /> */}
    </>
  );
};

export default index;
