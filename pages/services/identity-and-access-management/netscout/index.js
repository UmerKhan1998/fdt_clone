import Head from 'next/head';
import React from 'react'

// React Intl
import { useTranslations } from 'next-intl';

// Components
import Banner from '@/components/banner/Banner';
import ImageBanner from '@/components/ImageBanner/ImageBanner';
import PenetrationTesting from '@/components/PenetrationTesting';
import TalkUsNowSection from '@/components/shared/TalkUsNowSection';

// Images
import InternalBanner from "@/assets/images/NetscoutBanner.png";
import NetscoutLeft from "../../../../assets/images/NetscoutLeft.png";
import NetscoutLogo from "../../../../assets/images/NetscoutLogo.png";
import NetscoutLogoBannerRight from "../../../../assets/images/NetscoutLogoBannerRight.png";
import NetscoutPenetrationTestingIcon1 from "../../../../assets/images/NetscoutPenetrationTestingIcon1.svg";
import NetscoutPenetrationTestingIcon2 from "../../../../assets/images/NetscoutPenetrationTestingIcon2.svg";
import NetscoutPenetrationTestingIcon3 from "../../../../assets/images/NetscoutPenetrationTestingIcon3.svg";
import NetscoutPenetrationTestingIcon4 from "../../../../assets/images/NetscoutPenetrationTestingIcon4.svg";
import NetscoutPenetrationTestingIcon5 from "../../../../assets/images/NetscoutPenetrationTestingIcon5.svg";
import NetscoutPenetrationTestingIcon6 from "../../../../assets/images/NetscoutPenetrationTestingIcon6.svg";
import NetscoutPenetrationTestingIcon7 from "../../../../assets/images/NetscoutPenetrationTestingIcon7.svg";
import NetscoutPenetrationTesting from "../../../../assets/images/NetscoutPenetrationTesting.png";
import WhyChooseUs from '@/components/WhyChooseUs';
import ContactForm from '@/components/ContactIsForm/ContactForm';
import PartnersInner from '@/components/PartnersInner';

const index = () => {
  const Meta = useTranslations("Meta");
  const t = useTranslations("NetscoutBanner");
  const t1 = useTranslations("NetscoutImageBanner");
  const t3 = useTranslations("NetscoutPenetrationTesting");
  const t4 = useTranslations("NetscoutWhyChooseUs");
  const t5 = useTranslations("NetscoutWhyChooseUs1");
  const t6 = useTranslations("NetscoutWhyChooseUs2");
  const TalkUsNowSection8 = useTranslations("TalkUsNowSection8");
  const PenetrationTestingData = [
    {
      icon: NetscoutPenetrationTestingIcon1,
      link: "",
      title: t3("Arbor Networks APS(Arbor Peakflow Service)"),
      desc: t3("card1"),
    },
    {
      icon: NetscoutPenetrationTestingIcon2,
      link: "",
      title: t3("Arbor Cloud"),
      desc: t3("card2"),
    },
    {
      icon: NetscoutPenetrationTestingIcon3,
      link: "",
      title: t3("Arbor TMS (Threat Management System)"),
      desc: t3("card3"),
    },
    {
      icon: NetscoutPenetrationTestingIcon4,
      link: "",
      title: t3("ATLAS Intelligence Feed"),
      desc: t3("card4"),
    },
    {
      icon: NetscoutPenetrationTestingIcon5,
      link: "",
      title: t3("ASERT (Arbor Security Engineering & Response Team)"),
      desc: t3("card5"),
    },
    {
      icon: NetscoutPenetrationTestingIcon6,
      link: "",
      title: t3("Arbor Networks SP (Service Provider)"),
      desc: t3("card6"),
    },
    {
      icon: NetscoutPenetrationTestingIcon7,
      link: "",
      title: t3("Arbor Networks SP Insight"),
      desc: t3("card7"),
    },
  ];
  const SliderData = [
    {
      icon: '',
      link: "",
      title: t4("Improved Network Visibility"),
      dec: t4("card1"),
    },
    {
      icon: '',
      link: "",
      title: t4("Enhanced Threat Detection and Response"),
      dec: t4("card2"),
    },
    {
      icon: '',
      link: "",
      title: t4("Minimized Downtime"),
      dec: t4("card3"),
    },
    {
      icon: '',
      link: "",
      title: t4("Strengthened Security Posture:"),
      dec: t4("card4"),
    },
  ];
  const SliderData1 = [
    {
      icon: '',
      link: "",
      title: t5("Empower Your Organization with Privilege Access Management"),
      dec: t5("card1"),
    },
    {
      icon: '',
      link: "",
      title: t5("Real-time Visibility"),
      dec: t5("card2"),
    },
    {
      icon: '',
      link: "",
      title: t5("Scalability and Performance"),
      dec: t5("card3"),
    },
    {
      icon: '',
      link: "",
      title: t5("Proven Expertise"),
      dec: t5("card4"),
    },
  ];
  const SliderData2 = [
    {
      icon: '',
      link: "",
      title: t6("Unparalleled Expertise"),
      dec: t6("card1"),
    },
    {
      icon: '',
      link: "",
      title: t6("Seamless Integration:"),
      dec: t6("card2"),
    },
    {
      icon: '',
      link: "",
      title: t6("Proactive Threat Hunting:"),
      dec: t6("card3"),
    },
    {
      icon: '',
      link: "",
      title: t6("Ongoing Support and Maintenancet"),
      dec: t6("card4"),
    },
  ];
  return (
    <>
      <Head>
        <title>{Meta("NetscoutTitle")}</title>
        <meta name="description" content={Meta("NetscoutDesc")} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />

        <meta property="og:title" content={Meta("NetscoutTitle")} />
        <meta property="og:site_name" content="Fast Digital Technology" />
        <meta property="og:url" content="https://fastdigitaltechnology.com" />
        <meta property="og:description" content={Meta("NetscoutDesc")} />
        <meta property="og:type" content="website"></meta>
      </Head>
      <Banner
        title={""}
        dec={t(
          "desc"
        )}
        titleWidth={"100%"}
        logo={NetscoutLogo}
        logoRight={NetscoutLogoBannerRight}
        bannerImage={InternalBanner}
      />
      <ImageBanner
        picture={NetscoutLeft}
        title={t1("title")}
        subtitle={""}
        dec={t1("desc")}
        brandLogo={""}
        align={''}
        mode={""}
      />
      <PenetrationTesting
        title={t3('title')}
        subtitle={t3('subtitle')}
        image={NetscoutPenetrationTesting}
        desc1={t3('desc')}
        desc2={""}
        data={PenetrationTestingData}
        mode="dark"
      />
      <TalkUsNowSection
        title={TalkUsNowSection8("title")}
        desc={TalkUsNowSection8("desc")}
        link={'/contact-us'}
        linkText={TalkUsNowSection8("linkText")}
        background={''}
      />
      <WhyChooseUs
        title={t4("Key Benefits of NETSCOUT Products:")}
        subtitle={'Products'}
        data={SliderData}
        mode=""
        brandLogo={""}
      />
      <PartnersInner />
      <WhyChooseUs
        title={t5("title")}
        subtitle={t5("subtitle")}
        data={SliderData1}
        mode="dark"
        brandLogo={""}
      />
      <WhyChooseUs
        title={t6("title")}
        subtitle={t6("subtitle")}
        data={SliderData2}
        mode=""
        brandLogo={""}
      />
      <ContactForm Image2 />
    </>
  )
}

export default index