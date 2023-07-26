import Head from "next/head";
import React, { useLayoutEffect, useRef } from "react";
// Components
import Banner from "@/components/banner/Banner";

// Images
import InternalBanner from "@/assets/images/iamBanner.png";
import brand1 from "../../../assets/images/brand1.svg";
import brand2 from "../../../assets/images/brand2.svg";
import brand3 from "../../../assets/images/brand3.svg";
import brand4 from "../../../assets/images/brand4.svg";
import partners1 from "../../../assets/images/partners1.png";
import partners2 from "../../../assets/images/partners2.png";
import partners3 from "../../../assets/images/partners3.png";
import partners4 from "../../../assets/images/partners4.png";
import partners5 from "../../../assets/images/partners5.png";
import partners6 from "../../../assets/images/partners6.png";
import partners7 from "../../../assets/images/partners7.png";
import strategies1 from "../../../assets/images/strategies1.png";
import strategies2 from "../../../assets/images/strategies2.png";
import IAMServicesImageBanner from "../../../assets/images/IAMServicesImageBanner.png";
import IAMPenetrationTesting1 from "../../../assets/images/IAMPenetrationTesting1.png";
import IAMPenetrationTestingIcon1 from "../../../assets/images/IAMPenetrationTestingIcon1.svg";
import IAMPenetrationTestingIcon2 from "../../../assets/images/IAMPenetrationTestingIcon2.svg";
import IAMPenetrationTestingIcon3 from "../../../assets/images/IAMPenetrationTestingIcon3.svg";
import IAMPenetrationTestingIcon4 from "../../../assets/images/IAMPenetrationTestingIcon4.svg";
import IAMPenetrationTestingIcon5 from "../../../assets/images/IAMPenetrationTestingIcon5.svg";
import IAMPenetrationTestingIcon6 from "../../../assets/images/IAMPenetrationTestingIcon6.svg";
import IAMPenetrationTestingIcon7 from "../../../assets/images/IAMPenetrationTestingIcon7.svg";
import IAMServiceWhyChooseUs1Icon1 from "../../../assets/images/IAMServiceWhyChooseUs1Icon1.svg";
import IAMServiceWhyChooseUs1Icon2 from "../../../assets/images/IAMServiceWhyChooseUs1Icon2.svg";
import IAMServiceWhyChooseUs1Icon3 from "../../../assets/images/IAMServiceWhyChooseUs1Icon3.svg";
import IAMServiceWhyChooseUs1Icon4 from "../../../assets/images/IAMServiceWhyChooseUs1Icon4.svg";

// Component
import ImageBanner from "@/components/ImageBanner/ImageBanner";

// React Intl
import { useTranslations } from "next-intl";
import WhyChooseUs from "@/components/WhyChooseUs";
import PenetrationTesting from "@/components/PenetrationTesting";
import Partners from "@/components/Partners";
import ContactForm from "@/components/ContactIsForm/ContactForm";
import Faqs from "@/components/Faqs/Faqs";
import TalkUsNowSection from "@/components/shared/TalkUsNowSection";
import BorderedBrands from "@/components/BorderedBrands";
import ProvenProcess from "@/components/ProvenProcess";
import ExpertStrategies from "@/components/ExpertStrategies";
import GeoLocationComp from "@/components/GeoLocationComp";

const index = () => {
  const Meta = useTranslations("Meta");
  const t = useTranslations("IAMServiceBanner");
  const t1 = useTranslations("IAMServiceImageBanner");
  const t2 = useTranslations("IAMServicePenetrationTesting");
  const t3 = useTranslations("IAMServiceWhyChooseUs1");
  const t4 = useTranslations("IAMServicePartners");
  const t5 = useTranslations("IAMServiceWhyChooseUs2");
  const t6 = useTranslations("IAMServiceWhyChooseUs3");
  const t7 = useTranslations("IAMServiceExpertStrategies");
  const t8 = useTranslations("IAMServiceProvenProcess");
  const TalkUsNowSection2 = useTranslations("TalkUsNowSection2");

  const IAMServiceWhyChooseUs1 = [
    {
      icon: IAMServiceWhyChooseUs1Icon1,
      link: '',
      title: t3("card1Title"),
      dec: t3("card1Desc"),
    },
    {
      icon: IAMServiceWhyChooseUs1Icon2,
      link: '',
      title: t3("card2Title"),
      dec: t3("card2Desc"),
    },
    {
      icon: IAMServiceWhyChooseUs1Icon3,
      link: '',
      title: t3("card3Title"),
      dec: t3("card3Desc"),
    },
    {
      icon: IAMServiceWhyChooseUs1Icon4,
      link: '',
      title: t3("card4Title"),
      dec: t3("card4Desc"),
    },
  ];
  const PenetrationTestingData = [
    {
      icon: IAMPenetrationTestingIcon1,
      link: "",
      title: t2("card1Title"),
      desc: t2("card1Desc"),
    },
    {
      icon: IAMPenetrationTestingIcon2,
      link: "",
      title: t2("card2Title"),
      desc: t2("card2Desc"),
    },
    {
      icon: IAMPenetrationTestingIcon3,
      link: "",
      title: t2("card3Title"),
      desc: t2("card3Desc"),
    },
    {
      icon: IAMPenetrationTestingIcon4,
      link: "",
      title: t2("card4Title"),
      desc: t2("card4Desc"),
    },
    {
      icon: IAMPenetrationTestingIcon5,
      link: "",
      title: t2("card5Title"),
      desc: t2("card5Desc"),
    },
    {
      icon: IAMPenetrationTestingIcon6,
      link: "",
      title: t2("card6Title"),
      desc: t2("card6Desc"),
    },
    {
      icon: IAMPenetrationTestingIcon7,
      link: "",
      title: t2("card7Title"),
      desc: t2("card7Desc"),
    },
  ];
  const BorderedBrandsData = [
    {
      image: brand1,
      link: '/services/identity-and-access-management/beyondtrust'
    },
    {
      image: brand2,
      link: '/services/identity-and-access-management/cyberark'
    },
    {
      image: brand3,
      link: '/services/identity-and-access-management/sailpoint'
    },
    {
      image: brand4,
      link: '/services/identity-and-access-management/netscout'
    },
  ];
  const PartnersList = [
    {
      image: partners1
    },
    {
      image: partners2
    },
    {
      image: partners3
    },
    {
      image: partners4
    },
    {
      image: partners5
    },
    {
      image: partners6
    },
    {
      image: partners7
    },
    {
      image: partners1
    },
    {
      image: partners2
    },
    {
      image: partners3
    },
    {
      image: partners4
    },
    {
      image: partners5
    },
    {
      image: partners6
    },
    {
      image: partners7
    },
    {
      image: partners1
    },
    {
      image: partners2
    },
    {
      image: partners3
    },
    {
      image: partners4
    },
    {
      image: partners5
    },
    {
      image: partners6
    },
    {
      image: partners7
    },
    {
      image: partners1
    },
    {
      image: partners2
    },
    {
      image: partners3
    },
    {
      image: partners4
    },
    {
      image: partners5
    },
    {
      image: partners6
    },
    {
      image: partners7
    },
  ];
  const IAMServiceWhyChooseUs2 = [
    {
      icon: '',
      link: '',
      title: t5("card1Title"),
      dec: t5("card1Desc"),
    },
    {
      icon: '',
      link: '',
      title: t5("card2Title"),
      dec: t5("card2Desc"),
    },
    {
      icon: '',
      link: '',
      title: t5("card3Title"),
      dec: t5("card3Desc"),
    },
  ];
  const IAMServiceWhyChooseUs3 = [
    {
      icon: '',
      link: '',
      title: t6("card1Title"),
      dec: t6("card1Desc"),
    },
    {
      icon: '',
      link: '',
      title: t6("card2Title"),
      dec: t6("card2Desc"),
    },
    {
      icon: '',
      link: '',
      title: t6("card3Title"),
      dec: t6("card3Desc"),
    },
  ];
  const IAMServiceProvenProcessList = [
    {
      title: t8("card1Title"),
      desc: t8("card1Desc")
    },
    {
      title: t8("card2Title"),
      desc: t8("card2Desc")
    },
    {
      title: t8("card3Title"),
      desc: t8("card3Desc")
    },
    {
      title: t8("card4Title"),
      desc: t8("card4Desc")
    },
  ];
  
  const refSection = useRef();
  useLayoutEffect(()=>{
    if(window.location.hash === "#iam-services") {
      refSection.current.scrollIntoView({behavior: 'smooth'});
    }
  }, [])

  return (
    <>
      <Head>
        <title>{Meta("IAMTitle")}</title>
        <meta name="description" content={Meta("IAMDesc")} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />

        <meta property="og:title" content={Meta("IAMTitle")} />
        <meta property="og:site_name" content="Fast Digital Technology" />
        <meta property="og:url" content="https://fastdigitaltechnology.com" />
        <meta property="og:description" content={Meta("IAMDesc")} />
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
        picture={IAMServicesImageBanner}
        title={t1("title")}
        subtitle={t1("subtitle")}
        brandLogo={""}
        dec={t1("dec")}
        align={''}
        mode={""}
      />
      <PenetrationTesting
        title={t2('title')}
        subtitle={t2('subtitle')}
        image={IAMPenetrationTesting1}
        desc1={t2('desc')}
        desc2={""}
        data={PenetrationTestingData}
        mode="dark"
        refSection={refSection}
      />
      <TalkUsNowSection
        title={TalkUsNowSection2("title")}
        desc={TalkUsNowSection2("desc")}
        link={"/contact-us"}
        linkText={TalkUsNowSection2("linkText")}
        background={""}
      />
      <BorderedBrands
        data={BorderedBrandsData}
      />
      <WhyChooseUs
        title={t3("title")}
        subtitle={t3("subtitle")}
        data={IAMServiceWhyChooseUs1}
        mode=""
        brandLogo={""}
      />
      {/* <Partners
        title={t4('title')}
        desc={t4('desc')}
        data={PartnersList}
        fullWidth={false}
      /> */}
      <WhyChooseUs
        title={t5("title")}
        subtitle={t5("subtitle")}
        data={IAMServiceWhyChooseUs2}
        mode="dark"
        brandLogo={""}
      />
      <ProvenProcess
        title={t8('title')}
        subtitle={t8('subtitle')}
        data={IAMServiceProvenProcessList}
      />
      <WhyChooseUs
        title={t6("title")}
        subtitle={t6("subtitle")}
        data={IAMServiceWhyChooseUs3}
        mode="dark"
        brandLogo={""}
      />
      <ExpertStrategies
        title={t7('title')}
        desc={t7('desc')}
        img1={strategies1.src}
        img2={strategies2.src}
        link={""}
        mode={""}
      />
      {/* <Faqs /> */}
      <ContactForm Image2 />
    </>
  );
};

export default index;
