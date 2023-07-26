import Head from 'next/head';
import React from 'react'

// Images
import InternalBanner from "@/assets/images/InternalBanner.png";
import SIEMBrandsImg1 from "../../../../assets/images/SIEMBrandsImg1.png";
import SIEMBrandsImg2 from "../../../../assets/images/SIEMBrandsImg2.png";
import SIEMBrandsImg3 from "../../../../assets/images/SIEMBrandsImg3.png";
import SIEMBrandsImg4 from "../../../../assets/images/SIEMBrandsImg4.png";
import SIEMBrandsImg5 from "../../../../assets/images/SIEMBrandsImg5.png";
import SIEMBrandsImg6 from "../../../../assets/images/SIEMBrandsImg6.png";
import EPPServicesSlider1Image1 from "../../../../assets/images/EPPServicesSlider1Image1.png";
import EPPWhyChooseUsData2Icon1 from "../../../../assets/images/EPPWhyChooseUsData2Icon1.svg";

// React Intl
import { useTranslations } from "next-intl";

// Components
import Banner from '@/components/banner/Banner';
import ServicesSlider from '@/components/shared/ServicesSlider';
import WhyChooseUs from '@/components/WhyChooseUs';
import TalkUsNowSection from '@/components/shared/TalkUsNowSection';
import BorderedBrands from '@/components/BorderedBrands';
import Faqs from '@/components/Faqs/Faqs';
import ContactForm from '@/components/ContactIsForm/ContactForm';
import GeoLocationComp from '@/components/GeoLocationComp';

const index = () => {
    const Meta = useTranslations("Meta");
    const t = useTranslations("EPPBanner");
    const t1 = useTranslations("EPPServicesSlider1");
    const t2 = useTranslations("EPPWhyChooseUs1");
    const t3 = useTranslations("EPPWhyChooseUs2");
    const TalkUsNowSection15 = useTranslations("TalkUsNowSection15");

    const EPPServicesSliderData1 = [
        {
            image: EPPServicesSlider1Image1,
            heading: t1("card1Title"),
            dec: t1("card1Desc")
        },
        {
            image: EPPServicesSlider1Image1,
            heading: t1("card2Title"),
            dec: t1("card2Desc")
        },
        {
            image: EPPServicesSlider1Image1,
            heading: t1("card3Title"),
            dec: t1("card3Desc")
        },
    ];
    const EPPWhyChooseUsData1 = [
        {
          icon: "",
          link: "",
          title: "",
          dec: t2("card1Desc"),
        },
        {
          icon: "",
          link: "",
          title: "",
          dec: t2("card2Desc"),
        },
        {
          icon: "",
          link: "",
          title: "",
          dec: t2("card3Desc"),
        },
        {
          icon: "",
          link: "",
          title: "",
          dec: t2("card4Desc"),
        },
        {
          icon: "",
          link: "",
          title: "",
          dec: t2("card5Desc"),
        },
    ];
    const EPPWhyChooseUsData2 = [
        {
          icon: EPPWhyChooseUsData2Icon1,
          link: "",
          title: t3("card1Title"),
          dec: t3("card1Desc"),
        },
        {
          icon: EPPWhyChooseUsData2Icon1,
          link: "",
          title: t3("card2Title"),
          dec: t3("card2Desc"),
        },
        {
          icon: EPPWhyChooseUsData2Icon1,
          link: "",
          title: t3("card3Title"),
          dec: t3("card3Desc"),
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

    return (
        <>
            <Head>
                <title>{Meta("EPPTitle")}</title>
                <meta name="description" content={Meta("EPPDesc")} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.png" />

                <meta property="og:title" content={Meta("EPPTitle")} />
                <meta property="og:site_name" content="Fast Digital Technology" />
                <meta property="og:url" content="https://fastdigitaltechnology.com" />
                <meta property="og:description" content={Meta("EPPDesc")} />
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
            <ServicesSlider
                data={EPPServicesSliderData1}
                title={t1("title")}
                subtitle={t1("subtitle")}
                mode={''}
                textAlign={"center"}
            />
            <WhyChooseUs
                title={t2("title")}
                subtitle={t2("subtitle")}
                dec={""}
                data={EPPWhyChooseUsData1}
                mode="dark"
                brandLogo={""}
            />
            <TalkUsNowSection
                title={TalkUsNowSection15("title")}
                desc={TalkUsNowSection15("desc")}
                link={"/contact-us"}
                linkText={TalkUsNowSection15("linkText")}
                background={""}
            />
            <WhyChooseUs
                title={t3("title")}
                subtitle={t3("subtitle")}
                dec={""}
                data={EPPWhyChooseUsData2}
                mode=""
                brandLogo={""}
            />
            <BorderedBrands data={SIEMBorderedBrands} />
            {/* <Faqs /> */}
            <ContactForm Image2 />
        </>
    )
}

export default index