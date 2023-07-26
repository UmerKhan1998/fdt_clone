import Head from 'next/head';
import React from 'react'

// Images
import InternalBanner from "@/assets/images/IBMBanner.png";
import IBMImageBanner from "../../../../assets/images/IBMImageBanner.png";
import IBMSecurityLogo from "../../../../assets/images/IBMSecurityLogo.png";
import IBMExpertStrategies1 from "../../../../assets/images/IBMExpertStrategies1.png";
import IBMExpertStrategies2 from "../../../../assets/images/IBMExpertStrategies2.png";
import IBMExpertStrategies3 from "../../../../assets/images/IBMExpertStrategies3.png";
import IBMExpertStrategies4 from "../../../../assets/images/IBMExpertStrategies4.png";

// React Intl
import { useTranslations } from "next-intl";

// Components
import Banner from '@/components/banner/Banner';
import ImageBanner from '@/components/ImageBanner/ImageBanner';
import ExpertStrategies from '@/components/ExpertStrategies';
import WhyChooseUs from '@/components/WhyChooseUs';
import ContactForm from '@/components/ContactIsForm/ContactForm';
import GeoLocationComp from '@/components/GeoLocationComp';

const index = () => {
  const Meta = useTranslations("Meta");
  const t = useTranslations("IBMBanner");
  const t1 = useTranslations("IBMImageBanner");
  const t2 = useTranslations("IBMExpertStrategies1");
  const t3 = useTranslations("IBMWhyChooseUs1");
  const t4 = useTranslations("IBMWhyChooseUs2");
  const t5 = useTranslations("IBMExpertStrategies2");

  const IBMServiceWhyChooseUs1 = [
    {
      icon: '',
      link: '',
      title: t3("card1Title"),
      dec: t3("card1Desc"),
    },
    {
      icon: '',
      link: '',
      title: t3("card2Title"),
      dec: t3("card2Desc"),
    },
    {
      icon: '',
      link: '',
      title: t3("card3Title"),
      dec: t3("card3Desc"),
    },
    {
      icon: '',
      link: '',
      title: t3("card4Title"),
      dec: t3("card4Desc"),
    },
  ];
  const IBMServiceWhyChooseUs2 = [
    {
      icon: '',
      link: '',
      title: t4("card1Title"),
      dec: t4("card1Desc"),
    },
    {
      icon: '',
      link: '',
      title: t4("card2Title"),
      dec: t4("card2Desc"),
    },
    {
      icon: '',
      link: '',
      title: t4("card3Title"),
      dec: t4("card3Desc"),
    },
    {
      icon: '',
      link: '',
      title: t4("card4Title"),
      dec: t4("card4Desc"),
    },
  ];

  return (
    <>
      <Head>
        <title>{Meta("IBMTitle")}</title>
        <meta name="description" content={Meta("IBMDesc")} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />

        <meta property="og:title" content={Meta("IBMTitle")} />
        <meta property="og:site_name" content="Fast Digital Technology" />
        <meta property="og:url" content="https://fastdigitaltechnology.com" />
        <meta property="og:description" content={Meta("IBMDesc")} />
        <meta property="og:type" content="website"></meta>
      </Head>

      <GeoLocationComp />

      <Banner
        title={t("title")}
        subdetail={""}
        dec={t("desc")}
        titleWidth={"100%"}
        bannerImage={InternalBanner}
      />
      <ImageBanner
        picture={IBMImageBanner}
        title={t1("title")}
        subtitle={""}
        dec={t1("dec")}
        brandLogo={IBMSecurityLogo}
        align={''}
        mode={""}
      />
      <ExpertStrategies
        title={t2('title')}
        desc={t2('desc')}
        img1={IBMExpertStrategies1.src}
        img2={IBMExpertStrategies2.src}
        link={""}
        mode={""}
      />
      <WhyChooseUs
        title={t3("title")}
        subtitle={t3("subtitle")}
        dec={t3("dec")}
        data={IBMServiceWhyChooseUs1}
        mode="dark"
        brandLogo={""}
      />
      <WhyChooseUs
        title={t4("title")}
        subtitle={t4("subtitle")}
        dec={t4("dec")}
        data={IBMServiceWhyChooseUs2}
        mode=""
        brandLogo={""}
      />
      <ExpertStrategies
        title={t5('title')}
        desc={t5('desc')}
        img1={IBMExpertStrategies3.src}
        img2={IBMExpertStrategies4.src}
        link={""}
        mode={"dark"}
      />
      <ContactForm Image2 />
    </>
  )
}

export default index