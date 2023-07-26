import Head from 'next/head';
import React, { useLayoutEffect, useRef } from 'react'

// Images
import InternalBanner from "@/assets/images/SIEMBanner.png";
import SIEMBrandsImg1 from "../../../../assets/images/SIEMBrandsImg1.png";
import SIEMBrandsImg2 from "../../../../assets/images/SIEMBrandsImg2.png";
import SIEMBrandsImg3 from "../../../../assets/images/SIEMBrandsImg3.png";
import SIEMBrandsImg4 from "../../../../assets/images/SIEMBrandsImg4.png";
import SIEMBrandsImg5 from "../../../../assets/images/SIEMBrandsImg5.png";
import SIEMBrandsImg6 from "../../../../assets/images/SIEMBrandsImg6.png";
import SIEMPenetrationTestingImage1 from "../../../../assets/images/SIEMPenetrationTestingImage1.png";
import SIEMPenetrationTesting1DataIcon1 from "../../../../assets/images/SIEMPenetrationTesting1DataIcon1.svg";
import SIEMPenetrationTesting1DataIcon2 from "../../../../assets/images/SIEMPenetrationTesting1DataIcon2.svg";
import SIEMPenetrationTesting1DataIcon3 from "../../../../assets/images/SIEMPenetrationTesting1DataIcon3.svg";
import SIEMPenetrationTesting1DataIcon4 from "../../../../assets/images/SIEMPenetrationTesting1DataIcon4.svg";

// React Intl
import { useTranslations } from "next-intl";

// Components
import Banner from '@/components/banner/Banner';
import WhyChooseUs from '@/components/WhyChooseUs';
import PenetrationTesting from '@/components/PenetrationTesting';
import TalkUsNowSection from '@/components/shared/TalkUsNowSection';
import BorderedBrands from '@/components/BorderedBrands';
import ServicesChoose from '@/components/ServicesChoose/ServicesChoose';
import ContactForm from '@/components/ContactIsForm/ContactForm';
import GeoLocationComp from '@/components/GeoLocationComp';

const index = () => {
    const Meta = useTranslations("Meta");
    const t = useTranslations("SIEMBanner");
    const t1 = useTranslations("SIEMWhyChooseUs1");
    const t2 = useTranslations("SIEMPenetrationTesting1");
    const t3 = useTranslations("SIEMServicesChoose1");
    const t4 = useTranslations("SIEMServicesChoose2");
    const t5 = useTranslations("SIEMWhyChooseUs2");
    const TalkUsNowSection18 = useTranslations("TalkUsNowSection18");

    const SIEMWhyChooseUs1Data = [
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
    const SIEMWhyChooseUs2Data = [
        {
          icon: "",
          link: "",
          title: t5("card1Title"),
          dec: t5("card1Desc"),
        },
        {
          icon: "",
          link: "",
          title: t5("card2Title"),
          dec: t5("card2Desc"),
        },
        {
          icon: "",
          link: "",
          title: t5("card3Title"),
          dec: t5("card3Desc"),
        },
        {
          icon: "",
          link: "",
          title: t5("card4Title"),
          dec: t5("card4Desc"),
        },
    ];
    const SIEMPenetrationTesting1Data = [
        {
          icon: SIEMPenetrationTesting1DataIcon1,
          link: "",
          title: t2("card1Title"),
          desc: t2("card1Desc"),
        },
        {
          icon: SIEMPenetrationTesting1DataIcon2,
          link: "",
          title: t2("card2Title"),
          desc: t2("card2Desc"),
        },
        {
          icon: SIEMPenetrationTesting1DataIcon3,
          link: "",
          title: t2("card3Title"),
          desc: t2("card3Desc"),
        },
        {
          icon: SIEMPenetrationTesting1DataIcon4,
          link: "",
          title: t2("card4Title"),
          desc: t2("card4Desc"),
        },
    ];
    const SIEMBorderedBrands = [
        {
            image: SIEMBrandsImg1,
            link: '/services/data-protection/ibm-security'
        },
        {
            image: SIEMBrandsImg2,
            link: '/services/data-protection/symantec'
        },
        {
            image: SIEMBrandsImg3,
            link: '/services/data-protection/trendmicro'
        },
        {
            image: SIEMBrandsImg4,
            link: '/services/data-protection/infoblox'
        },
        {
            image: SIEMBrandsImg5,
            link: '/services/data-protection/sophos'
        },
        {
            image: SIEMBrandsImg6,
            link: '/services/data-protection/forcepoint'
        },
    ];
    const SIEMServicesChoose1Data = [
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
    ];
    const SIEMServicesChoose2Data = [
        {
          icon: "",
          link: "",
          title: t4("card1Title"),
          dec: t4("card1Desc"),
        },
        {
          icon: "",
          link: "",
          title: t4("card2Title"),
          dec: t4("card2Desc"),
        },
        {
          icon: "",
          link: "",
          title: t4("card3Title"),
          dec: t4("card3Desc"),
        },
    ];

    const refSection = useRef();
    useLayoutEffect(()=>{
      if(window.location.hash === "#siem-services") {
        refSection.current.scrollIntoView({behavior: 'smooth'});
      }
    }, [])

    return (
        <>
            <Head>
              <title>{Meta("SIEMTitle")}</title>
              <meta name="description" content={Meta("SIEMDesc")} />
              <meta name="viewport" content="width=device-width, initial-scale=1" />
              <link rel="icon" href="/favicon.png" />

              <meta property="og:title" content={Meta("SIEMTitle")} />
              <meta property="og:site_name" content="Fast Digital Technology" />
              <meta property="og:url" content="https://fastdigitaltechnology.com" />
              <meta property="og:description" content={Meta("SIEMDesc")} />
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
            <WhyChooseUs
              title={t1("title")}
              subtitle={t1("subtitle")}
              data={SIEMWhyChooseUs1Data}
              mode=""
              brandLogo={""}
            />
            <PenetrationTesting
              title={t2('title')}
              subtitle={t2("subtitle")}
              image={SIEMPenetrationTestingImage1}
              desc1={t2('desc')}
              desc2={""}
              data={SIEMPenetrationTesting1Data}
              mode="dark"
              refSection={refSection}
            />
            <TalkUsNowSection
              title={TalkUsNowSection18("title")}
              desc={TalkUsNowSection18("desc")}
              link={"/contact-us"}
              linkText={TalkUsNowSection18("linkText")}
              background={""}
            />
            <BorderedBrands data={SIEMBorderedBrands} />
            <ServicesChoose
              title={t3("title")}
              subtitle={t3("subtitle")}
              data={SIEMServicesChoose1Data}
              mode={""}
              brandLogo={""}
            />
            <ServicesChoose
              title={t4("title")}
              subtitle={t4("subtitle")}
              data={SIEMServicesChoose2Data}
              mode={"dark"}
              brandLogo={""}
            />
            <WhyChooseUs
              title={t5("title")}
              subtitle={t5("subtitle")}
              data={SIEMWhyChooseUs2Data}
              mode=""
              brandLogo={""}
            />
            <ContactForm Image2 />
        </>
    )
}

export default index