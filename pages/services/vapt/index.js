import Head from "next/head";
import React, { useLayoutEffect, useRef } from "react";

// Images
import InternalBanner from "@/assets/images/VAPTBanner.png";
import partners1 from "../../../assets/images/partners1.png";
import partners2 from "../../../assets/images/partners2.png";
import partners3 from "../../../assets/images/partners3.png";
import partners4 from "../../../assets/images/partners4.png";
import partners5 from "../../../assets/images/partners5.png";
import partners6 from "../../../assets/images/partners6.png";
import partners7 from "../../../assets/images/partners7.png";
import VAPTServicesPenetrationTestingImage from "../../../assets/images/VAPTServicesPenetrationTestingImage.png";
import VAPTServicesPenetrationTestingIcon1 from "../../../assets/images/VAPTServicesPenetrationTestingIcon1.svg";
import VAPTServicesPenetrationTestingIcon2 from "../../../assets/images/VAPTServicesPenetrationTestingIcon2.svg";
import VAPTServicesPenetrationTestingIcon3 from "../../../assets/images/VAPTServicesPenetrationTestingIcon3.svg";
import VAPTServicesPenetrationTestingIcon4 from "../../../assets/images/VAPTServicesPenetrationTestingIcon4.svg";
import VAPTServicesPenetrationTestingIcon5 from "../../../assets/images/VAPTServicesPenetrationTestingIcon5.svg";
import VAPTServicesPenetrationTestingIcon6 from "../../../assets/images/VAPTServicesPenetrationTestingIcon6.svg";
import VAPTServicesPenetrationTestingIcon7 from "../../../assets/images/VAPTServicesPenetrationTestingIcon7.svg";
import VAPTServicesPenetrationTestingIcon8 from "../../../assets/images/VAPTServicesPenetrationTestingIcon8.svg";
import VAPTServicesPenetrationTestingIcon9 from "../../../assets/images/VAPTServicesPenetrationTestingIcon9.svg";
import VAPTServicesPenetrationTestingIcon10 from "../../../assets/images/VAPTServicesPenetrationTestingIcon10.svg";
import VAPTServicesPenetrationTestingIcon11 from "../../../assets/images/VAPTServicesPenetrationTestingIcon11.svg";
import VAPTServicesPenetrationTestingIcon12 from "../../../assets/images/VAPTServicesPenetrationTestingIcon12.svg";
import VAPTServicesPenetrationTestingIcon13 from "../../../assets/images/VAPTServicesPenetrationTestingIcon13.svg";
import VAPTServicesPenetrationTestingIcon14 from "../../../assets/images/VAPTServicesPenetrationTestingIcon14.svg";
import VAPTServiceServicesChooseIcon1 from "../../../assets/images/VAPTServiceServicesChooseIcon1.svg";
import VAPTServiceServicesChooseIcon2 from "../../../assets/images/VAPTServiceServicesChooseIcon2.svg";
import VAPTServiceServicesChooseIcon3 from "../../../assets/images/VAPTServiceServicesChooseIcon3.svg";
import VAPTServiceServicesChooseIcon4 from "../../../assets/images/VAPTServiceServicesChooseIcon4.svg";
import VAPTSWhyChooseUs2Icon1 from "../../../assets/images/VAPTSWhyChooseUs2Icon1.svg";
import VAPTSWhyChooseUs2Icon2 from "../../../assets/images/VAPTSWhyChooseUs2Icon2.svg";
import VAPTSWhyChooseUs2Icon3 from "../../../assets/images/VAPTSWhyChooseUs2Icon3.svg";
// Components
import ServicesChoose from "@/components/ServicesChoose/ServicesChoose";
import PenetrationTesting from "@/components/PenetrationTesting";
import ProvenProcess from "@/components/ProvenProcess";
// React Intl
import { useTranslations } from "next-intl";
// Components
import WhyChooseUs from "@/components/WhyChooseUs";
import ContactForm from "@/components/ContactIsForm/ContactForm";
import Banner from "@/components/banner/Banner";
import Partners from "@/components/Partners";
import TalkUsNowSection from "@/components/shared/TalkUsNowSection";
import GeoLocationComp from "@/components/GeoLocationComp";

const index = () => {
  const Meta = useTranslations("Meta");
  const t = useTranslations("VAPTServiceBanner");
  const t1 = useTranslations("VAPTServiceWhyChooseUs1");
  const t3 = useTranslations("VAPTServicesPenetrationTesting1");
  const t4 = useTranslations("IAMServicePartners");
  const t5 = useTranslations("VAPTServiceServicesChoose1");
  const t6 = useTranslations("VAPTServiceProvenProcess");
  const t8 = useTranslations("VAPTServicesPenetrationTesting2");
  const t9 = useTranslations("VAPTServiceServicesChoose2");
  const t10 = useTranslations("VAPTServiceWhyChooseUs2");
  const TalkUsNowSection3 = useTranslations("TalkUsNowSection3");

  const VAPTServiceProvenProcessList = [
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
  const VAPTSWhyChooseUs1Cards = [
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
    {
      icon: "",
      link: "",
      title: t1("card4Title"),
      dec: t1("card4Desc"),
    },
  ];
  const VAPTSWhyChooseUs2Cards = [
    {
      icon: VAPTSWhyChooseUs2Icon1,
      link: "",
      title: t10("card1Title"),
      dec: t10("card1Desc"),
    },
    {
      icon: VAPTSWhyChooseUs2Icon2,
      link: "",
      title: t10("card2Title"),
      dec: t10("card2Desc"),
    },
    {
      icon: VAPTSWhyChooseUs2Icon3,
      link: "",
      title: t10("card3Title"),
      dec: t10("card3Desc"),
    },
  ];
  const VAPTServicesPenetrationTesting1Cards = [
    {
      icon: VAPTServicesPenetrationTestingIcon1,
      link: "",
      title: t3("card1Title"),
      desc: t3("card1Desc"),
    },
    {
      icon: VAPTServicesPenetrationTestingIcon2,
      link: "",
      title: t3("card2Title"),
      desc: t3("card2Desc"),
    },
    {
      icon: VAPTServicesPenetrationTestingIcon3,
      link: "",
      title: t3("card3Title"),
      desc: t3("card3Desc"),
    },
    {
      icon: VAPTServicesPenetrationTestingIcon4,
      link: "",
      title: t3("card4Title"),
      desc: t3("card4Desc"),
    },
    {
      icon: VAPTServicesPenetrationTestingIcon5,
      link: "",
      title: t3("card5Title"),
      desc: t3("card5Desc"),
    },
  ];
  const VAPTServicesPenetrationTesting2Cards = [
    {
      icon: VAPTServicesPenetrationTestingIcon6,
      link: "",
      title: t8("card1Title"),
      desc: t8("card1Desc"),
    },
    {
      icon: VAPTServicesPenetrationTestingIcon7,
      link: "",
      title: t8("card2Title"),
      desc: t8("card2Desc"),
    },
    {
      icon: VAPTServicesPenetrationTestingIcon8,
      link: "",
      title: t8("card3Title"),
      desc: t8("card3Desc"),
    },
    {
      icon: VAPTServicesPenetrationTestingIcon9,
      link: "",
      title: t8("card4Title"),
      desc: t8("card4Desc"),
    },
    {
      icon: VAPTServicesPenetrationTestingIcon10,
      link: "",
      title: t8("card5Title"),
      desc: t8("card5Desc"),
    },
    {
      icon: VAPTServicesPenetrationTestingIcon11,
      link: "",
      title: t8("card6Title"),
      desc: t8("card6Desc"),
    },
    {
      icon: VAPTServicesPenetrationTestingIcon12,
      link: "",
      title: t8("card7Title"),
      desc: t8("card7Desc"),
    },
    {
      icon: VAPTServicesPenetrationTestingIcon13,
      link: "",
      title: t8("card8Title"),
      desc: t8("card8Desc"),
    },
    {
      icon: VAPTServicesPenetrationTestingIcon14,
      link: "",
      title: t8("card9Title"),
      desc: t8("card9Desc"),
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
  const VAPTServiceServicesChoose1Data = [
    {
      icon: VAPTServiceServicesChooseIcon1,
      link: "",
      title: t5("card1Title"),
      dec: t5("card1Desc"),
    },
    {
      icon: VAPTServiceServicesChooseIcon2,
      link: "",
      title: t5("card2Title"),
      dec: t5("card2Desc"),
    },
    {
      icon: VAPTServiceServicesChooseIcon3,
      link: "",
      title: t5("card3Title"),
      dec: t5("card3Desc"),
    },
  ];
  const VAPTServiceServicesChoose2Data = [
    {
      icon: VAPTServiceServicesChooseIcon4,
      link: "",
      title: t9("card1Title"),
      dec: t9("card1Desc"),
    },
    {
      icon: VAPTServiceServicesChooseIcon4,
      link: "",
      title: t9("card2Title"),
      dec: t9("card2Desc"),
    },
    {
      icon: VAPTServiceServicesChooseIcon4,
      link: "",
      title: t9("card3Title"),
      dec: t9("card3Desc"),
    },
  ];

  const refSection1 = useRef();
  const refSection2 = useRef();
    useLayoutEffect(()=>{
      if(window.location.hash === "#va-services") {
        refSection1.current.scrollIntoView({behavior: 'smooth'});
      }
      if(window.location.hash === "#pt-services") {
        refSection2.current.scrollIntoView({behavior: 'smooth'});
      }
    }, [])

  return (
    <>
      <Head>
        <title>{Meta("VAPTTitle")}</title>
        <meta name="description" content={Meta("VAPTDesc")} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />

        <meta property="og:title" content={Meta("VAPTTitle")} />
        <meta property="og:site_name" content="Fast Digital Technology" />
        <meta property="og:url" content="https://fastdigitaltechnology.com" />
        <meta property="og:description" content={Meta("VAPTDesc")} />
        <meta property="og:type" content="website"></meta>
      </Head>

      <GeoLocationComp />

      <Banner title={t("title")} subdetail={""} dec={t("dec")} bannerImage={InternalBanner} />
      <WhyChooseUs
        title={t1("title")}
        subtitle={t1("subtitle")}
        data={VAPTSWhyChooseUs1Cards}
        mode=""
        brandLogo={""}
      />
      <PenetrationTesting
        title={t3('title')}
        subtitle={t3('subtitle')}
        image={VAPTServicesPenetrationTestingImage}
        desc1={t3('desc')}
        desc2={""}
        data={VAPTServicesPenetrationTesting1Cards}
        mode="dark"
        refSection={refSection1}
      />
      {/* <Partners
        title={t4('title')}
        desc={t4('desc')}
        data={PartnersList}
        fullWidth={false}
      /> */}
      <ServicesChoose
        title={t5("title")}
        subtitle={t5("subtitle")}
        data={VAPTServiceServicesChoose1Data}
        mode={""}
        brandLogo={""}
      />
      <ProvenProcess
        title={t6('title')}
        subtitle={t6('subtitle')}
        data={VAPTServiceProvenProcessList}
      />
      <PenetrationTesting
        title={t8('title')}
        subtitle={t8('subtitle')}
        image={VAPTServicesPenetrationTestingImage}
        desc1={t8('desc')}
        desc2={""}
        data={VAPTServicesPenetrationTesting2Cards}
        mode="dark"
        refSection={refSection2}
      />
      <TalkUsNowSection
        title={TalkUsNowSection3("title")}
        desc={TalkUsNowSection3("desc")}
        link={"/contact-us"}
        linkText={TalkUsNowSection3("linkText")}
        background={""}
      />
      <ServicesChoose
        title={t9("title")}
        subtitle={t9("subtitle")}
        data={VAPTServiceServicesChoose2Data}
        mode={""}
        brandLogo={""}
      />
      <WhyChooseUs
        title={t10("title")}
        subtitle={t10("subtitle")}
        data={VAPTSWhyChooseUs2Cards}
        mode=""
        brandLogo={""}
      />
      <ContactForm Image2 />
    </>
  );
};

export default index;
