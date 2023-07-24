import Head from "next/head";
import { useTranslations } from "next-intl";
import React from "react";

// Images
import partners1 from "@/assets/images/partners/partner1.png";
import partners2 from "@/assets/images/partners/partner2.png";
import partners3 from "@/assets/images/partners/partner3.png";
import partners4 from "@/assets/images/partners/partner4.png";
import partners5 from "@/assets/images/partners/partner5.png";
import partners6 from "@/assets/images/partners/partner6.png";
import partners7 from "@/assets/images/partners/partner7.png";
import partners8 from "@/assets/images/partners/partner8.png";
import partners9 from "@/assets/images/partners/partner9.png";
import partners10 from "@/assets/images/partners/partner10.png";
import partners11 from "@/assets/images/partners/partner11.png";
import partners12 from "@/assets/images/partners/partner12.png";
import partners13 from "@/assets/images/partners/partner13.png";
import partners14 from "@/assets/images/partners/partner14.png";
import partners15 from "@/assets/images/partners/partner15.png";
import partners16 from "@/assets/images/partners/partner16.png";
import partners17 from "@/assets/images/partners/partner17.png";
import partners19 from "@/assets/images/partners/partner19.png";
import partners20 from "@/assets/images/partners/partner20.png";
import partners21 from "@/assets/images/partners/partner21.png";
import partners22 from "@/assets/images/partners/partner22.png";
import partners23 from "@/assets/images/partners/partner23.png";
import partners25 from "@/assets/images/partners/partner25.png";
import partners27 from "@/assets/images/partners/partner27.png";
import partners28 from "@/assets/images/partners/partner28.png";
import partners29 from "@/assets/images/partners/partner29.png";
import partners30 from "@/assets/images/partners/partner30.png";

// Component
import Banner from "@/components/banner/Banner";
import ExpertsCertified from "@/components/ExpertsCertified";
import AboutProject from "@/components/AboutProject/AboutProject";
import AboutCounter from "@/components/AboutCounter/AboutCounter";
import WhyChooseUs from "@/components/WhyChooseUs";
import TextSection from "@/components/TextSection";
import TalkUsNowSection from "@/components/shared/TalkUsNowSection";
import PartnersFull from "@/components/PartnersFull";

const index = () => {
  const Meta = useTranslations("Meta");
  const t = useTranslations("AboutBanner");
  const t1 = useTranslations("AboutWhyChooseUs1");
  const t2 = useTranslations("AboutWhyChooseUs2");
  const t3 = useTranslations("AboutWhyChooseUs3");
  const t4 = useTranslations("IAMServicePartners");
  const t5 = useTranslations("TranslationTalkUsNowSection");
  const t6 = useTranslations("AboutWhyChooseUs6");
  const t7 = useTranslations("AboutTextSection1");
  const t8 = useTranslations("AboutTextSection2");
  const t9 = useTranslations("AboutTextSection3");
  const t10 = useTranslations("AboutTextSection4");
  const t11 = useTranslations("AboutTextSection5");
  const t12 = useTranslations("AboutTextSection6");
  const t13 = useTranslations("AboutTextSection7");
  const t14 = useTranslations("AboutTextSection8");

  const PartnersList = [
    {image: partners1},
    {image: partners2},
    {image: partners3},
    {image: partners4},
    {image: partners5},
    {image: partners6},
    {image: partners7},
    {image: partners8},
    {image: partners9},
    {image: partners10},
    {image: partners11},
    {image: partners12},
    {image: partners13},
    {image: partners14},
    {image: partners15},
    {image: partners16},
    {image: partners17},
    {image: partners19},
    {image: partners20},
    {image: partners21},
    {image: partners22},
    {image: partners23},
    {image: partners25},
    {image: partners27},
    {image: partners28},
    {image: partners29},
    {image: partners30},
  ];

  const AboutWhyChooseUs1Cards = [
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
    {
      icon: "",
      link: "",
      title: t1("card5Title"),
      dec: t1("card5Desc"),
    },
    {
      icon: "",
      link: "",
      title: t1("card6Title"),
      dec: t1("card6Desc"),
    },
  ];
  const AboutWhyChooseUs2Cards = [
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
    {
      icon: "",
      link: "",
      title: t2("card5Title"),
      dec: t2("card5Desc"),
    },
    {
      icon: "",
      link: "",
      title: t2("card6Title"),
      dec: t2("card6Desc"),
    },
  ];
  const AboutWhyChooseUs3Cards = [
    {
      icon: "",
      link: "",
      title: t3("card1Title"),
      dec: t3("card1Desc"),
    },
    {
      icon: "",
      link: "",
      title: t3("card2Title"),
      dec: t3("card2Desc"),
    },
    {
      icon: "",
      link: "",
      title: t3("card3Title"),
      dec: t3("card3Desc"),
    },
    {
      icon: "",
      link: "",
      title: t3("card4Title"),
      dec: t3("card4Desc"),
    },
    {
      icon: "",
      link: "",
      title: t3("card5Title"),
      dec: t3("card5Desc"),
    },
    {
      icon: "",
      link: "",
      title: t3("card6Title"),
      dec: t3("card6Desc"),
    },
  ];
  const AboutWhyChooseUs6Cards = [
    {
      icon: "",
      link: "",
      title: t6("card1Title"),
      dec: t6("card1Desc"),
    },
    {
      icon: "",
      link: "",
      title: t6("card2Title"),
      dec: t6("card2Desc"),
    },
    {
      icon: "",
      link: "",
      title: t6("card3Title"),
      dec: t6("card3Desc"),
    },
    {
      icon: "",
      link: "",
      title: t6("card4Title"),
      dec: t6("card4Desc"),
    },
    {
      icon: "",
      link: "",
      title: t6("card5Title"),
      dec: t6("card5Desc"),
    },
    {
      icon: "",
      link: "",
      title: t6("card6Title"),
      dec: t6("card6Desc"),
    },
  ];

  return (
    <>
      <Head>
        <title>{Meta("AboutTitle")}</title>
        <meta name="description" content={Meta("AboutDesc")} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />

        <meta property="og:title" content={Meta("AboutTitle")} />
        <meta property="og:site_name" content="Fast Digital Technology" />
        <meta property="og:url" content="https://fastdigitaltechnology.com" />
        <meta property="og:description" content={Meta("AboutDesc")} />
        <meta property="og:type" content="website"></meta>
      </Head>
      <Banner title={t("About Us")} dec={""} titleWidth={"100%"} />
      {/* <WhyChooseUs
        title={t1("title")}
        subtitle={""}
        dec={t1("dec")}
        data={AboutWhyChooseUs1Cards}
        mode=""
        brandLogo={""}
      /> */}
      <WhyChooseUs
        title={t2("title")}
        subtitle={t2("subtitle")}
        dec={t2("dec")}
        data={AboutWhyChooseUs2Cards}
        mode=""
        brandLogo={""}
      />
      <AboutCounter />
      {/* <WhyChooseUs
        title={t3("title")}
        subtitle={""}
        dec={t3("dec")}
        data={AboutWhyChooseUs3Cards}
        mode=""
        brandLogo={""}
      /> */}
      {/* <WhyChooseUs
        title={t6("title")}
        subtitle={""}
        dec={t6("dec")}
        data={AboutWhyChooseUs6Cards}
        mode="dark"
        brandLogo={""}
      /> */}
      {/* <TextSection
        title={t7("title")}
        subtitle={t7("subtitle")}
        desc={t7("desc")}
        maxWidth={""}
        textAlign={""}
        mode={""}
      /> */}
      {/* <TextSection
        title={t8("title")}
        subtitle={""}
        desc={t8("desc")}
        maxWidth={""}
        textAlign={""}
        mode={"dark"}
      /> */}
      {/* <TextSection
        title={t9("title")}
        subtitle={""}
        desc={t9("desc")}
        maxWidth={""}
        textAlign={""}
        mode={""}
      /> */}
      {/* <TextSection
        title={t10("title")}
        subtitle={""}
        desc={t10("desc")}
        maxWidth={""}
        textAlign={""}
        mode={"dark"}
      /> */}
      {/* <TextSection
        title={t11("title")}
        subtitle={""}
        desc={t11("desc")}
        maxWidth={""}
        textAlign={""}
        mode={""}
      /> */}
      {/* <TextSection
        title={t12("title")}
        subtitle={""}
        desc={t12("desc")}
        maxWidth={""}
        textAlign={""}
        mode={"dark"}
      /> */}
      {/* <TextSection
        title={t13("title")}
        subtitle={""}
        desc={t13("desc")}
        maxWidth={""}
        textAlign={""}
        mode={""}
      /> */}
      {/* <TextSection
        title={t14("title")}
        subtitle={""}
        desc={t14("desc")}
        maxWidth={""}
        textAlign={""}
        mode={"dark"}
      /> */}
      <AboutProject />
      {/* <PartnersFull
        title={t4('title')}
        desc={""}
        data={PartnersList}
      /> */}
      {/* <TalkUsNowSection
        title={t5("title")}
        desc={t5("desc")}
        link={"/contact-us"}
        linkText={t5("linkText")}
        background={""}
      /> */}
      {/* <ExpertsCertified /> */}
    </>
  );
};

export default index;
