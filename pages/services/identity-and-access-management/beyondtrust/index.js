import Head from 'next/head';
import { useTranslations } from 'next-intl';
import React from 'react'

// Images
import InternalBanner from "@/assets/images/BeyondBanner.png";
import BeyondChoseUs1 from "../../../../assets/images/BeyondChoseUs1.svg";
import BeyondChoseUs2 from "../../../../assets/images/BeyondChoseUs2.svg";
import BeyondChoseUs3 from "../../../../assets/images/BeyondChoseUs3.svg";
import BeyondTrustPenetrationTesting1 from "../../../../assets/images/BeyondTrustPenetrationTesting1.svg";
import BeyondTrustPenetrationTesting2 from "../../../../assets/images/BeyondTrustPenetrationTesting2.svg";
import BeyondTrustPenetrationTesting3 from "../../../../assets/images/BeyondTrustPenetrationTesting3.svg";
import BeyondTrustPenetrationTesting4 from "../../../../assets/images/BeyondTrustPenetrationTesting4.svg";
import BeyondTrustPenetrationTestingimg from "../../../../assets/images/BeyondTrustPenetrationTestingimg.png";
import BeyondTrustAssessment1 from "../../../../assets/images/BeyondTrustAssessment1.png";
import BeyondTrustAssessment2 from "../../../../assets/images/BeyondTrustAssessment2.png";
import BeyondTrustLogo from "../../../../assets/images/BeyondTrustLogo.png";
import BeyondTrustLogoBannerRight from "../../../../assets/images/BeyondTrustLogoBannerRight.svg";

// Components
import Banner from '@/components/banner/Banner'
import WhyChooseUs from '@/components/WhyChooseUs';
import ServicesChoose from '@/components/ServicesChoose/ServicesChoose';
import PenetrationTesting from '@/components/PenetrationTesting';
import Faqs from '@/components/Faqs/Faqs';
import NetworkAssessment from '@/components/NetworkAssessment';
import ContactForm from '@/components/ContactIsForm/ContactForm';
import TalkUsNowSection from '@/components/shared/TalkUsNowSection';
import PartnersInner from '@/components/PartnersInner';
import GeoLocationComp from '@/components/GeoLocationComp';

const index = () => {
  const Meta = useTranslations("Meta");
  const t1 = useTranslations("BeyondTrustBanner");
  const BeyondTrustTranslationWhyChooseUs = useTranslations("BeyondTrustTranslationWhyChooseUs");
  const BeyondTrustTranslationServicesChoose = useTranslations("BeyondTrustTranslationServicesChoose");
  const BeyondTrustTranslationPenetrationTesting = useTranslations("BeyondTrustTranslationPenetrationTesting");
  const BeyondTrustTranslationNetworkAssessment = useTranslations("BeyondTrustTranslationNetworkAssessment");
  const TalkUsNowSection6 = useTranslations("TalkUsNowSection6");

  const SliderData = [
    {
      icon: BeyondChoseUs1,
      link: "#",
      title: BeyondTrustTranslationWhyChooseUs("FDT, A Trusted Partner for BeyondTrust"),
      dec: BeyondTrustTranslationWhyChooseUs("card1"),
    },
    {
      icon: BeyondChoseUs2,
      link: "#",
      title: BeyondTrustTranslationWhyChooseUs("Partner of choice:"),
      dec: BeyondTrustTranslationWhyChooseUs("card2"),
    },
    {
      icon: BeyondChoseUs3,
      link: "#",
      title: BeyondTrustTranslationWhyChooseUs("Experienced professionals"),
      dec: BeyondTrustTranslationWhyChooseUs("card3"),
    },
  ];
  const SliderData1 = [
    {
      icon: '',
      link: "",
      title: BeyondTrustTranslationWhyChooseUs("Empower Your Organization with Privilege Access Management"),
      dec: BeyondTrustTranslationWhyChooseUs("card4"),
    },
    {
      icon: '',
      link: "",
      title: BeyondTrustTranslationWhyChooseUs("Implementation and Integration for Enhanced Security"),
      dec: BeyondTrustTranslationWhyChooseUs("card5"),
    },
    {
      icon: '',
      link: "",
      title: BeyondTrustTranslationWhyChooseUs("Strategic Advisory for Tailored Security Solutions"),
      dec: BeyondTrustTranslationWhyChooseUs("card6"),
    },
    {
      icon: '',
      link: "",
      title: BeyondTrustTranslationWhyChooseUs("Comprehensive Assessments and Workshops"),
      dec: BeyondTrustTranslationWhyChooseUs("card7"),
    },
  ];
  const ServicesChooseData = [
    {
      icon: '',
      link: "",
      title: BeyondTrustTranslationServicesChoose("Comprehensive Control with Privilege Remote Access:"),
      dec: BeyondTrustTranslationServicesChoose("card1"),
    },
    {
      icon: '',
      link: "",
      title: BeyondTrustTranslationServicesChoose("Unrivaled Control and Accountability with Password Safe"),
      dec: BeyondTrustTranslationServicesChoose("card2"),
    },
    {
      icon: '',
      link: "",
      title: BeyondTrustTranslationServicesChoose("Advanced PAM Solution with Universal Privilege Management:"),
      dec: BeyondTrustTranslationServicesChoose("card3"),
    },
  ];
  const PenetrationTestingData = [
    {
      icon: BeyondTrustPenetrationTesting1,
      link: "",
      title: BeyondTrustTranslationPenetrationTesting("FDT's Contemporary Approach to Privilege Management"),
      desc: BeyondTrustTranslationPenetrationTesting("card1"),
    },
    {
      icon: BeyondTrustPenetrationTesting2,
      link: "",
      title: BeyondTrustTranslationPenetrationTesting("Secure Access with BeyondTrust Solutions"),
      desc: BeyondTrustTranslationPenetrationTesting("card2"),
    },
    {
      icon: BeyondTrustPenetrationTesting3,
      link: "",
      title: BeyondTrustTranslationPenetrationTesting("Reduce Your Attack Surface with Universal Privilege Management"),
      desc: BeyondTrustTranslationPenetrationTesting("card3"),
    },
    {
      icon: BeyondTrustPenetrationTesting4,
      link: "",
      title: BeyondTrustTranslationPenetrationTesting("Empower Secure Password Management with BeyondTrust Password Safe"),
      desc: BeyondTrustTranslationPenetrationTesting("card4"),
    },
  ];
  const BeyondTrustNetworkAssessmentData = [
    {
      icon: '',
      link: "",
      title: "",
      desc: BeyondTrustTranslationNetworkAssessment("card1"),
    },
    {
      icon: '',
      link: "",
      title: "",
      desc: BeyondTrustTranslationNetworkAssessment("card2"),
    },
    {
      icon: '',
      link: "",
      title: "",
      desc: BeyondTrustTranslationNetworkAssessment("card3"),
    },
    {
      icon: '',
      link: "",
      title: "",
      desc: BeyondTrustTranslationNetworkAssessment("card4"),
    },
    {
      icon: '',
      link: "",
      title: "",
      desc: BeyondTrustTranslationNetworkAssessment("card5"),
    },
    {
      icon: '',
      link: "",
      title: "",
      desc: BeyondTrustTranslationNetworkAssessment("card6"),
    },
    {
      icon: '',
      link: "",
      title: "",
      desc: BeyondTrustTranslationNetworkAssessment("card7"),
    },
    {
      icon: '',
      link: "",
      title: "",
      desc: BeyondTrustTranslationNetworkAssessment("card8"),
    },
  ];

  return (
    <>
      <Head>
        <title>{Meta("beyondtrustTitle")}</title>
        <meta name="description" content={Meta("beyondtrustDesc")} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />

        <meta property="og:title" content={Meta("beyondtrustTitle")} />
        <meta property="og:site_name" content="Fast Digital Technology" />
        <meta property="og:url" content="https://fastdigitaltechnology.com" />
        <meta property="og:description" content={Meta("beyondtrustDesc")} />
        <meta property="og:type" content="website"></meta>
      </Head>

      <GeoLocationComp />

      <Banner
        title={""}
        dec={t1("desc")}
        titleWidth={"100%"}
        logo={BeyondTrustLogo}
        logoRight={BeyondTrustLogoBannerRight}
        bannerImage={InternalBanner}
      />
      <WhyChooseUs
        title={BeyondTrustTranslationWhyChooseUs("Why FDT is the Preferred Choice for BeyondTrust")}
        subtitle={BeyondTrustTranslationWhyChooseUs("Why Choose Us")}
        data={SliderData}
        mode=""
        brandLogo={""}
      />
      <WhyChooseUs
        title={BeyondTrustTranslationWhyChooseUs("FDT's Comprehensive BeyondTrust Solutions")}
        subtitle={BeyondTrustTranslationWhyChooseUs("Enhancing Security")}
        data={SliderData1}
        mode="dark"
        brandLogo={""}
      />
      <ServicesChoose
        title={BeyondTrustTranslationServicesChoose("BeyondTrust Solutions Offered by FDT")}
        subtitle={BeyondTrustTranslationServicesChoose("Secure Access Management")}
        data={ServicesChooseData}
        mode={""}
        brandLogo={""}
      />
      <PenetrationTesting
        title={BeyondTrustTranslationPenetrationTesting('Enhancing security together')}
        subtitle={BeyondTrustTranslationPenetrationTesting('Enhancing')}
        image={BeyondTrustPenetrationTestingimg}
        desc1={BeyondTrustTranslationPenetrationTesting('desc')}
        desc2={""}
        data={PenetrationTestingData}
        mode="dark"
      />
      <TalkUsNowSection
        title={TalkUsNowSection6("title")}
        desc={TalkUsNowSection6("desc")}
        link={'/contact-us'}
        linkText={TalkUsNowSection6("linkText")}
        background={''}
      />
      {/* <Faqs /> */}
      <PartnersInner />
      <NetworkAssessment
        title={BeyondTrustTranslationNetworkAssessment('Interview Questions for Certified Engineer?')}
        desc={BeyondTrustTranslationNetworkAssessment('desc')}
        img1={BeyondTrustAssessment1}
        img2={BeyondTrustAssessment2}
        quot={BeyondTrustTranslationNetworkAssessment('quot')}
        data={BeyondTrustNetworkAssessmentData}
        mode="dark"
      />
      <ContactForm Image2/>
    </>
  )
}

export default index