import Head from 'next/head';
import React from 'react'

// Images
import InternalBanner from "@/assets/images/FORBanner.png";
import ForcepointLogo from "../../../../assets/images/ForcepointLogo.png";
import FORWhyChooseUsData1Icon1 from "../../../../assets/images/FORWhyChooseUsData1Icon1.svg";
import FORWhyChooseUsData1Icon2 from "../../../../assets/images/FORWhyChooseUsData1Icon2.svg";
import FORWhyChooseUsData1Icon3 from "../../../../assets/images/FORWhyChooseUsData1Icon3.svg";
import FORQuotSectionImg1 from "../../../../assets/images/FORQuotSectionImg1.png";
import FORQuotSectionImg2 from "../../../../assets/images/FORQuotSectionImg2.png";
import FORPenetrationTestingImage1 from "../../../../assets/images/FORPenetrationTestingImage1.png";
import FORPenetrationTesting1DataIcon1 from "../../../../assets/images/FORPenetrationTesting1DataIcon1.svg";
import FORPenetrationTesting1DataIcon2 from "../../../../assets/images/FORPenetrationTesting1DataIcon2.svg";
import FORPenetrationTesting1DataIcon3 from "../../../../assets/images/FORPenetrationTesting1DataIcon3.svg";
import FORPenetrationTesting1DataIcon4 from "../../../../assets/images/FORPenetrationTesting1DataIcon4.svg";
import FORPenetrationTesting1DataIcon5 from "../../../../assets/images/FORPenetrationTesting1DataIcon5.svg";
import FORPenetrationTesting1DataIcon6 from "../../../../assets/images/FORPenetrationTesting1DataIcon6.svg";
import FORPenetrationTesting1DataIcon7 from "../../../../assets/images/FORPenetrationTesting1DataIcon7.svg";
import FORPenetrationTesting1DataIcon8 from "../../../../assets/images/FORPenetrationTesting1DataIcon8.svg";
import FORPenetrationTesting1DataIcon9 from "../../../../assets/images/FORPenetrationTesting1DataIcon9.svg";
import FORPenetrationTesting1DataIcon10 from "../../../../assets/images/FORPenetrationTesting1DataIcon10.svg";

// React Intl
import { useTranslations } from "next-intl";

// Components
import Banner from '@/components/banner/Banner';
import ServicesChoose from '@/components/ServicesChoose/ServicesChoose';
import PenetrationTesting from '@/components/PenetrationTesting';
import TalkUsNowSection from '@/components/shared/TalkUsNowSection';
import WhyChooseUs from '@/components/WhyChooseUs';
import ContactForm from '@/components/ContactIsForm/ContactForm';
import QuotSection from '@/components/QuotSection';

const index = () => {
    const Meta = useTranslations("Meta");
    const t = useTranslations("FORBanner");
    const t1 = useTranslations("FORServicesChoose1");
    const t2 = useTranslations("FORPenetrationTesting");
    const t3 = useTranslations("FORWhyChooseUs");
    const t4 = useTranslations("FORQuotSection");
    const TalkUsNowSection16 = useTranslations("TalkUsNowSection16");

    const FORServicesChoose1Data = [
        {
          icon: "",
          link: "",
          title: t1("card1Title"),
          dec: t1("card1Desc"),
        },
        {
          icon: "",
          link: "",
          title: t1("card2Title"),
          dec: t1("card2Desc"),
        },
        {
          icon: "",
          link: "",
          title: t1("card3Title"),
          dec: t1("card3Desc"),
        },
    ];
    const FROPenetrationTestingData = [
      {
        icon: FORPenetrationTesting1DataIcon1,
        link: "",
        title: t2("card1Title"),
        desc: t2("card1Desc"),
      },
      {
        icon: FORPenetrationTesting1DataIcon2,
        link: "",
        title: t2("card2Title"),
        desc: t2("card2Desc"),
      },
      {
        icon: FORPenetrationTesting1DataIcon3,
        link: "",
        title: t2("card3Title"),
        desc: t2("card3Desc"),
      },
      {
        icon: FORPenetrationTesting1DataIcon4,
        link: "",
        title: t2("card4Title"),
        desc: t2("card4Desc"),
      },
      {
        icon: FORPenetrationTesting1DataIcon5,
        link: "",
        title: t2("card5Title"),
        desc: t2("card5Desc"),
      },
      {
        icon: FORPenetrationTesting1DataIcon6,
        link: "",
        title: t2("card6Title"),
        desc: t2("card6Desc"),
      },
      {
        icon: FORPenetrationTesting1DataIcon7,
        link: "",
        title: t2("card7Title"),
        desc: t2("card7Desc"),
      },
      {
        icon: FORPenetrationTesting1DataIcon8,
        link: "",
        title: t2("card8Title"),
        desc: t2("card8Desc"),
      },
      {
        icon: FORPenetrationTesting1DataIcon9,
        link: "",
        title: t2("card9Title"),
        desc: t2("card9Desc"),
      },
      {
        icon: FORPenetrationTesting1DataIcon10,
        link: "",
        title: t2("card10Title"),
        desc: t2("card10Desc"),
      },
    ];
    const FORWhyChooseUsData1 = [
      {
        icon: FORWhyChooseUsData1Icon1,
        link: "",
        title: t3("card1Title"),
        dec: t3("card1Desc"),
      },
      {
        icon: FORWhyChooseUsData1Icon2,
        link: "",
        title: t3("card2Title"),
        dec: t3("card2Desc"),
      },
      {
        icon: FORWhyChooseUsData1Icon3,
        link: "",
        title: t3("card3Title"),
        dec: t3("card3Desc"),
      },
  ];

    return (
      <>
        <Head>
          <title>{Meta("FORTitle")}</title>
          <meta name="description" content={Meta("FORDesc")} />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.png" />

          <meta property="og:title" content={Meta("FORTitle")} />
          <meta property="og:site_name" content="Fast Digital Technology" />
          <meta property="og:url" content="https://fastdigitaltechnology.com" />
          <meta property="og:description" content={Meta("FORDesc")} />
          <meta property="og:type" content="website"></meta>
        </Head>
        <Banner
          title={t("title")}
          subdetail={t("subdetail")}
          dec={t("desc")}
          titleWidth={"100%"}
          bannerImage={InternalBanner}
        />
        <ServicesChoose
          title={t1("title")}
          subtitle={t1("subtitle")}
          dec={t1("dec")}
          data={FORServicesChoose1Data}
          mode={""}
          brandLogo={ForcepointLogo}
        />
        <PenetrationTesting
          title={t2('title')}
          subtitle={t2("subtitle")}
          image={FORPenetrationTestingImage1}
          desc1={""}
          desc2={""}
          data={FROPenetrationTestingData}
          mode="dark"
        />
        <TalkUsNowSection
          title={TalkUsNowSection16("title")}
          desc={TalkUsNowSection16("desc")}
          link={"/contact-us"}
          linkText={TalkUsNowSection16("linkText")}
          background={""}
        />
        <WhyChooseUs
          title={t3("title")}
          subtitle={t3("subtitle")}
          data={FORWhyChooseUsData1}
          mode=""
          brandLogo={""}
        />
        <QuotSection
          title={t4('title')}
          desc={t4('desc')}
          img1={FORQuotSectionImg1}
          img2={FORQuotSectionImg2}
          quot={t4('quot')}
          mode={'dark'}
        />
        <ContactForm Image2 />
      </>
    )
}

export default index