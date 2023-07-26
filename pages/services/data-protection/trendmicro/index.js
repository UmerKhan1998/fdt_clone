import Head from 'next/head';
import React from 'react'

// Images
import InternalBanner from "@/assets/images/InternalBanner.png";
import TrendmicroLogo from "../../../../assets/images/TrendmicroLogo.png";
import TREPenetrationTestingImage1 from "../../../../assets/images/TREPenetrationTestingImage1.png";
import TREPenetrationTesting1Icon1 from "../../../../assets/images/TREPenetrationTesting1Icon1.svg";
import TREPenetrationTesting1Icon2 from "../../../../assets/images/TREPenetrationTesting1Icon2.svg";
import TREPenetrationTesting1Icon3 from "../../../../assets/images/TREPenetrationTesting1Icon3.svg";
import TREPenetrationTesting1Icon4 from "../../../../assets/images/TREPenetrationTesting1Icon4.svg";

// React Intl
import { useTranslations } from "next-intl";

// Components
import Banner from '@/components/banner/Banner';
import WhyChooseUs from '@/components/WhyChooseUs';
import PenetrationTesting from '@/components/PenetrationTesting';
import TalkUsNowSection from '@/components/shared/TalkUsNowSection';
import ContactForm from '@/components/ContactIsForm/ContactForm';
import GeoLocationComp from '@/components/GeoLocationComp';

const index = () => {
    const Meta = useTranslations("Meta");
    const t = useTranslations("TREBanner");
    const t1 = useTranslations("TREWhyChooseUs1");
    const t2 = useTranslations("TREPenetrationTesting1");
    const t3 = useTranslations("TREWhyChooseUs2");
    const TalkUsNowSection21 = useTranslations("TalkUsNowSection21");

    const TREServiceWhyChooseUs1 = [
        {
          icon: '',
          link: '',
          title: t1("card1Title"),
          dec: t1("card1Desc"),
        },
        {
          icon: '',
          link: '',
          title: t1("card2Title"),
          dec: t1("card2Desc"),
        },
        {
          icon: '',
          link: '',
          title: t1("card3Title"),
          dec: t1("card3Desc"),
        },
        {
          icon: '',
          link: '',
          title: t1("card4Title"),
          dec: t1("card4Desc"),
        },
    ];
    const TREServiceWhyChooseUs2 = [
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
    const TREPenetrationTesting1 = [
        {
          icon: TREPenetrationTesting1Icon1,
          link: "",
          title: t2("card1Title"),
          desc: t2("card1Desc"),
        },
        {
          icon: TREPenetrationTesting1Icon2,
          link: "",
          title: t2("card2Title"),
          desc: t2("card2Desc"),
        },
        {
          icon: TREPenetrationTesting1Icon3,
          link: "",
          title: t2("card3Title"),
          desc: t2("card3Desc"),
        },
        {
          icon: TREPenetrationTesting1Icon4,
          link: "",
          title: t2("card4Title"),
          desc: t2("card4Desc"),
        },
    ];

    return (
        <>
            <Head>
              <title>{Meta("TRETitle")}</title>
              <meta name="description" content={Meta("TREDesc")} />
              <meta name="viewport" content="width=device-width, initial-scale=1" />
              <link rel="icon" href="/favicon.png" />
            </Head>

            <GeoLocationComp />

            <Banner
              title={t("title")}
              subdetail={t("subdetail")}
              dec={t("desc")}
              titleWidth={"100%"}
              bannerImage={InternalBanner}
            />
            <WhyChooseUs
              title={t1("title")}
              subtitle={t1("subtitle")}
              dec={t1("dec")}
              data={TREServiceWhyChooseUs1}
              mode=""
              brandLogo={TrendmicroLogo}
            />
            <PenetrationTesting
              title={t2('title')}
              subtitle={t2("subtitle")}
              image={TREPenetrationTestingImage1}
              desc1={t2('desc')}
              desc2={""}
              data={TREPenetrationTesting1}
              mode="dark"
            />
            <TalkUsNowSection
              title={TalkUsNowSection21("title")}
              desc={TalkUsNowSection21("desc")}
              link={"/contact-us"}
              linkText={TalkUsNowSection21("linkText")}
              background={""}
            />
            <WhyChooseUs
              title={t3("title")}
              subtitle={t3("subtitle")}
              dec={t3("dec")}
              data={TREServiceWhyChooseUs2}
              mode=""
              brandLogo={""}
            />
            <ContactForm Image2 />
        </>
    )
}

export default index